import type { Env } from '../index';
import { checkCrisis } from './crisis';
import { routeByTopic } from './routing';
import { selectEvidence, formatEvidenceForPrompt, formatSourceFooter } from './evidence';
import { SYSTEM_PROMPT } from './prompt';
import { screenOutput } from './screen';

const MAX_MESSAGE_LENGTH = 2000;
const FALLBACK_TEXT = `I'm having trouble connecting to my knowledge base right now. Please try again in a moment. If you need immediate help, the resources on the AI Safety page are always available.`;

interface ChatRequest {
  message: string;
}

interface ProviderConfig {
  name: string;
  url: string;
  model: string;
  keyEnvVar: 'GROQ_API_KEY' | 'NVIDIA_API_KEY';
}

const PROVIDERS: ProviderConfig[] = [
  { name: 'Groq', url: 'https://api.groq.com/openai/v1/chat/completions', model: 'openai/gpt-oss-20b', keyEnvVar: 'GROQ_API_KEY' },
  { name: 'Groq', url: 'https://api.groq.com/openai/v1/chat/completions', model: 'openai/gpt-oss-120b', keyEnvVar: 'GROQ_API_KEY' },
  { name: 'NVIDIA', url: 'https://integrate.api.nvidia.com/v1/chat/completions', model: 'nvidia/nemotron-3-super-120b-a12b', keyEnvVar: 'NVIDIA_API_KEY' },
  { name: 'NVIDIA', url: 'https://integrate.api.nvidia.com/v1/chat/completions', model: 'nvidia/nemotron-3.5-lightning-30b-a3b', keyEnvVar: 'NVIDIA_API_KEY' },
];

function sseMessage(text: string): string {
  return `data: ${JSON.stringify({ text })}\n\n`;
}

function sseEnd(): string {
  return 'data: [DONE]\n\n';
}

function fixedResponse(text: string): Response {
  const encoder = new TextEncoder();
  const body = encoder.encode(sseMessage(text) + sseEnd());
  return new Response(body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}

async function callProvider(
  provider: ProviderConfig,
  systemPrompt: string,
  userMessage: string,
  apiKey: string,
): Promise<string | null> {
  try {
    const res = await fetch(provider.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: provider.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 1024,
        temperature: 0.7,
        stream: false,
      }),
    });

    if (!res.ok) return null;

    const data = await res.json() as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}

export async function handleChat(request: Request, env: Env): Promise<Response> {
  // Layer 1: Bounded input
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const origin = request.headers.get('Origin') ?? '';
  const host = request.headers.get('Host') ?? '';
  if (origin && !origin.includes(host)) {
    return new Response('Forbidden', { status: 403 });
  }

  let body: ChatRequest;
  try {
    body = await request.json() as ChatRequest;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (!body.message || typeof body.message !== 'string') {
    return new Response('Missing message', { status: 400 });
  }

  const message = body.message.slice(0, MAX_MESSAGE_LENGTH).trim();
  if (!message) {
    return new Response('Empty message', { status: 400 });
  }

  // Layer 2a: Crisis detection (before any model call)
  const crisisCheck = checkCrisis(message);
  if (crisisCheck.isCrisis) {
    // Increment safety counter
    try {
      const id = env.SITE_STATE.idFromName('global');
      const stub = env.SITE_STATE.get(id);
      await stub.fetch(new Request(`http://internal/safety/increment?type=${crisisCheck.type}`));
    } catch {}
    return fixedResponse(crisisCheck.response!);
  }

  // Layer 2b: Deterministic topic routing
  const routing = routeByTopic(message);
  if (routing.isRouted) {
    return fixedResponse(routing.response!);
  }

  // Layer 4: Select evidence cards
  const evidence = selectEvidence(message);
  const evidencePrompt = formatEvidenceForPrompt(evidence);
  const fullSystemPrompt = SYSTEM_PROMPT + evidencePrompt;

  // Layer 3 + 4: Call providers with non-editable prompt + evidence
  let aiResponse: string | null = null;

  // 2 retry cycles across all providers
  for (let cycle = 0; cycle < 2 && !aiResponse; cycle++) {
    for (const provider of PROVIDERS) {
      const apiKey = env[provider.keyEnvVar];
      if (!apiKey) continue;

      aiResponse = await callProvider(provider, fullSystemPrompt, message, apiKey);
      if (aiResponse) break;
    }
  }

  // All providers failed
  if (!aiResponse) {
    return fixedResponse(FALLBACK_TEXT);
  }

  // Layer 5: Output screen
  const screened = screenOutput(aiResponse);

  // Layer 6: Deterministic source footer (added by Worker, not model)
  const sourceFooter = formatSourceFooter(evidence);
  const finalResponse = screened.text + sourceFooter;

  return fixedResponse(finalResponse);
}
