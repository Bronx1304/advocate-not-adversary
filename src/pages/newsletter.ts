import { layout } from '../layout';
import type { Env } from '../index';

export function newsletterPage(env: Env): string {
  return layout(
    `<p class="page-label">Newsletter</p>
<h1 class="page-title">The Quiet Fight</h1>
<p class="hero-tagline" style="color:var(--text-muted);margin-bottom:2rem">An Autism Journeyman's Notebook</p>

<div class="section">
  <p style="font-size:0.88rem;color:var(--text-muted);line-height:1.72">I'm Chris — a father who had to learn that my autistic son didn't need me to fix him. He needed me to understand him.</p>
</div>

<div class="section">
  <h2 class="section-title">Subscribe</h2>
  <form id="newsletter-form" style="max-width:400px">
    <div class="form-group">
      <label class="form-label" for="nl-email">Email address</label>
      <input type="email" id="nl-email" class="form-input" placeholder="you@example.com" required>
    </div>
    <label class="form-checkbox" style="margin-bottom:0.5rem">
      <input type="checkbox" required> I confirm I am 18 years of age or older
    </label>
    <label class="form-checkbox" style="margin-bottom:1rem">
      <input type="checkbox" required> I consent to receiving email from Beehiiv on behalf of this newsletter
    </label>
    <button type="submit" class="btn btn-primary" style="width:100%">Subscribe</button>
    <p id="nl-status" style="font-size:0.8rem;color:var(--text-muted);margin-top:0.75rem;min-height:1.2rem"></p>
  </form>
</div>

<div class="section" style="margin-top:3rem">
  <h2 class="section-title">Published</h2>
  <div class="info-card">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem">
      <h3>Your child is not giving you a hard time</h3>
      <span style="font-size:0.75rem;color:var(--text-faint);white-space:nowrap">September 7, 2026 · 3 min</span>
    </div>
    <p style="margin-top:0.5rem">The first entry in The Quiet Fight. On the shift from "what's wrong with my kid" to "what does my kid need from me."</p>
  </div>
</div>

<script>
document.getElementById('newsletter-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const status = document.getElementById('nl-status');
  const email = document.getElementById('nl-email').value;
  status.textContent = 'Subscribing...';
  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      status.textContent = 'You\\'re subscribed. Check your email to confirm.';
      status.style.color = 'var(--accent)';
    } else {
      status.textContent = 'Something went wrong. Please try again.';
      status.style.color = '#E8A0A0';
    }
  } catch {
    status.textContent = 'Unable to subscribe right now. Please try again later.';
    status.style.color = '#E8A0A0';
  }
});
</script>`,
    { title: 'Newsletter', activePath: '/newsletter', description: 'The Quiet Fight — an autism journeyman\'s notebook by Chris.' }
  );
}
