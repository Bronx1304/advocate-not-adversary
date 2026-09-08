import type { Env } from '../index';

export async function handleNewsletter(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body: { email?: string };
  try {
    body = await request.json() as { email?: string };
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  if (!body.email || typeof body.email !== 'string') {
    return new Response('Missing email', { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response('Invalid email', { status: 400 });
  }

  // Forward to Beehiiv
  // When Chris creates his Beehiiv account, replace this URL with his publication's subscribe endpoint
  try {
    const beehiivRes = await fetch('https://thequietfight.beehiiv.com/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!beehiivRes.ok) {
      return new Response('Newsletter signup failed', { status: 502 });
    }
  } catch {
    return new Response('Newsletter service unavailable', { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
