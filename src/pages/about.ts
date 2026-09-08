import { layout } from '../layout';
import type { Env } from '../index';

export function aboutPage(env: Env): string {
  return layout(
    `<p class="page-label">About</p>
<h1 class="page-title">About This Site</h1>

<div class="section">
  <p class="page-intro">Advocate Not Adversary is an autism education and parent support site created by Christopher M. Caballero — a father, advocate, and Puerto Rican from the Bronx who is still learning alongside his autistic son Jared.</p>
</div>

<div class="section">
  <h2 class="section-title">Scope Statement</h2>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem"><em>Reviewed September 2026</em></p>
  <div class="info-card" style="margin-bottom:1rem">
    <h3>Christopher M. Caballero — Founder and CEO</h3>
    <p>Sole website owner. Full authority over all site content, features, policies, and operations.</p>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Three Contact Experiences</h2>
  <div class="card-grid">
    <div class="info-card">
      <h3>💬 Chris AI — Automated Educational Chat</h3>
      <p>An AI assistant trained on reviewed autism sources. Not Chris. Not a professional. Adult-only, general education. Available 24/7.</p>
    </div>
    <div class="info-card">
      <h3>✉ Owner Services — Human Support</h3>
      <p>A ticket-based channel to reach Christopher directly. Asynchronous — not a hotline, not a professional relationship.</p>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Commercial Links</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">This site links to external commercial properties. These are disclosed here for transparency:</p>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:1.8">
    <li><strong>Etsy</strong> — SteadyRootsShop (external store, separate from this site)</li>
    <li><strong>Beehiiv</strong> — Newsletter provider for "The Quiet Fight"</li>
    <li><strong>TikTok</strong> — @advocatenotadvers (external platform)</li>
    <li><strong>Stripe</strong> — Payment processing for on-site purchases</li>
  </ul>
</div>

<div class="section">
  <h2 class="section-title">Protected Content</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">The existing homepage source text is treated as protected content. All original writing on this site belongs to Christopher M. Caballero.</p>
</div>`,
    { title: 'About', activePath: '/about', description: 'About Advocate Not Adversary and Christopher M. Caballero.' }
  );
}
