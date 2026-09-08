import { layout } from '../layout';
import type { Env } from '../index';

export function updatesPage(env: Env): string {
  return layout(
    `<p class="page-label">Updates</p>
<h1 class="page-title">Site Updates</h1>
<p class="page-intro">A log of what's been built, fixed, and shipped.</p>

<div class="section">
  <h2 class="section-title">September 8, 2026</h2>
  <div class="card-grid">
    <div class="info-card"><p>Splash video playlist editor added to admin panel</p></div>
    <div class="info-card"><p>Searchable action records and page-view aggregate graphs</p></div>
    <div class="info-card"><p>Purchase-policy references linked in checkout flow</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">September 7, 2026</h2>
  <div class="card-grid">
    <div class="info-card"><p>Store catalog launched — 23 resources: 8 free, 15 coming soon</p></div>
    <div class="info-card"><p>The Quiet Fight first entry published: "Your child is not giving you a hard time"</p></div>
    <div class="info-card"><p>Chris's original voice video replaces splash placeholder</p></div>
    <div class="info-card"><p>Stripe controls repaired and seller connections verified</p></div>
    <div class="info-card"><p>Full conversation reconciliation completed</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">September 6, 2026</h2>
  <div class="card-grid">
    <div class="info-card"><p>Motion controls implemented — safety splash with reduced/slow/fast options</p></div>
    <div class="info-card"><p>Membership pricing controls added to admin</p></div>
    <div class="info-card"><p>Stripe setup and encrypted owner files</p></div>
    <div class="info-card"><p>Ad reservations configured (safety-locked off)</p></div>
    <div class="info-card"><p>Navigation structure repaired</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">September 5, 2026</h2>
  <div class="card-grid">
    <div class="info-card"><p>Policy and governance center released — 9 controlled documents</p></div>
    <div class="info-card"><p>Feature destinations implemented across all pages</p></div>
    <div class="info-card"><p>Site launched</p></div>
  </div>
</div>`,
    { title: 'Updates', activePath: '/updates', description: 'Site update log for Advocate Not Adversary.' }
  );
}
