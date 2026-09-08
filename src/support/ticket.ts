import type { Env } from '../index';

interface TicketRequest {
  name?: string;
  email: string;
  category: string;
  message: string;
}

const VALID_CATEGORIES = [
  'general',
  'accessibility',
  'privacy',
  'safety',
  'store',
  'account',
  'feedback',
];

export async function handleSupport(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body: TicketRequest;
  try {
    body = await request.json() as TicketRequest;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (!body.email || !body.message || !body.category) {
    return new Response('Missing required fields', { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response('Invalid email', { status: 400 });
  }

  if (!VALID_CATEGORIES.includes(body.category)) {
    return new Response('Invalid category', { status: 400 });
  }

  if (body.message.length > 5000) {
    return new Response('Message too long', { status: 400 });
  }

  // Store ticket in Durable Object
  const id = env.SITE_STATE.idFromName('global');
  const stub = env.SITE_STATE.get(id);

  const ticket = {
    id: crypto.randomUUID(),
    name: body.name?.slice(0, 100) ?? 'Anonymous',
    email,
    category: body.category,
    message: body.message.slice(0, 5000),
    created: new Date().toISOString(),
    status: 'open',
  };

  await stub.fetch(new Request('http://internal/ticket/create', {
    method: 'POST',
    body: JSON.stringify(ticket),
  }));

  return new Response(JSON.stringify({ ok: true, ticketId: ticket.id }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
