import { layout } from '../layout';
import type { Env } from '../index';

export function updatesPage(env: Env): string {
  return layout(
    `<p class="page-label">Updates</p>
<h1 class="page-title">Site Updates</h1>
<p class="page-intro">Clear, current information about what is available now and what is still being prepared.</p>

<div class="section">
  <h2 class="section-title">September 9, 2026</h2>
  <div class="card-grid">
    <div class="info-card"><p>The site is independently owned and operated by Chris Caballero.</p></div>
    <div class="info-card"><p>The home page, newsletter, safety information, policies, and autism source pages are available.</p></div>
    <div class="info-card"><p>The resource library, member access, purchases, direct-contact tools, and video are still being prepared.</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">What happens next</h2>
  <p style="font-size:0.88rem;color:var(--text-muted);line-height:1.72">Resources will be released one at a time after they are ready to use. Paid products will not open until checkout and secure delivery are in place.</p>
  <a href="/newsletter" class="btn btn-primary" style="margin-top:1rem">Get release updates</a>
</div>`,
    { title: 'Updates', activePath: '/updates', description: 'Current site status for Advocate Not Adversary.' }
  );
}
