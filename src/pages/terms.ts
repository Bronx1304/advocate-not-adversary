import { layout } from '../layout';
import type { Env } from '../index';

export function termsPage(env: Env): string {
  return layout(
    `<p class="page-label">Terms</p>
<h1 class="page-title">Terms of Use</h1>
<p class="page-intro">Version 2.5 — Effective September 2026. By using this site, you agree to these terms.</p>

<div class="section">
  <h2 class="section-title">Eligibility</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Chris AI and marketing email are available to adults aged 18 and older only. Free educational content on the site is available to all visitors.</p>
</div>

<div class="section">
  <h2 class="section-title">What This Site Is</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">General educational material about autism parenting and caregiving. Created by a parent sharing what he's learned, not by a licensed professional.</p>
</div>

<div class="section">
  <h2 class="section-title">What This Site Is Not</h2>
  <div class="alert alert-danger">
    <ul style="margin:0;padding-left:1.25rem;line-height:2">
      <li>Not medical, therapeutic, or diagnostic advice</li>
      <li>Not legal advice</li>
      <li>Not a crisis or emergency service</li>
      <li>Not a monitored service — no one is watching in real time</li>
      <li>Human support channels are asynchronous tickets, not professional relationships</li>
    </ul>
  </div>
</div>

<div class="section">
  <h2 class="section-title">AI Disclaimers</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Chris AI is a language model that generates text based on reviewed autism sources. It is not Chris. It is not a professional. It can be wrong. Always verify important information with qualified professionals.</p>
</div>

<div class="section">
  <h2 class="section-title">Purchases</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">One-time purchases and membership billing are processed through Stripe's hosted checkout. This site does not store payment card data. See the refund and cancellation policy in the <a href="/policies">Policy Center</a>.</p>
</div>

<div class="section">
  <h2 class="section-title">Advertising</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">No advertisements are served on this site. A Google AdSense publisher ID exists in ads.txt for verification purposes only. The AdSense "Enabled" state is unavailable and rejected by the server.</p>
</div>

<div class="section">
  <h2 class="section-title">Governing Law</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">No governing-law, forum-selection, or arbitration clause is published at this time. This is a deliberate omission pending legal entity verification.</p>
</div>`,
    { title: 'Terms', activePath: '/terms', description: 'Terms of use for Advocate Not Adversary.' }
  );
}
