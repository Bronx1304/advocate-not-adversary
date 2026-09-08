import { layout } from '../layout';
import type { Env } from '../index';

export function accessibilityPage(env: Env): string {
  return layout(
    `<p class="page-label">Accessibility</p>
<h1 class="page-title">Accessibility Statement</h1>
<p class="page-intro">Version 1.4 — Targeting WCAG 2.2 Level AA. Self-reviewed, not independently audited.</p>

<div class="section">
  <h2 class="section-title">Features</h2>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:2">
    <li>Skip-to-content link on every page</li>
    <li>Semantic headings and labeled form controls</li>
    <li>Visible keyboard focus indicators</li>
    <li>Dialog focus containment and Escape-to-close</li>
    <li>Safety splash before any animation — reduced motion is default</li>
    <li>Background motion controls (stop / slow / fast)</li>
    <li>Motion pauses during dialogs and hidden tabs</li>
    <li>Video playlist with native playback controls</li>
    <li>Continuation checkbox for video (disabled when reduced motion is active)</li>
    <li>Jared's Guided Access — deterministic guide with predictable controls</li>
    <li>No third-party ad code loaded (advertising safety lock)</li>
  </ul>
</div>

<div class="section">
  <h2 class="section-title">Assessment Status</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Area</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Keyboard and dialog focus</td><td>Partially assessed</td></tr>
        <tr><td>Reduced motion</td><td>Partially assessed</td></tr>
        <tr><td>Advertising motion</td><td>Safety-locked (no ads served)</td></tr>
        <tr><td>Screen reader compatibility</td><td>Independent test needed</td></tr>
        <tr><td>PDF downloads</td><td>Remediation inventory open</td></tr>
        <tr><td>Third-party content</td><td>External (Beehiiv, Stripe, TikTok)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Known Limitations</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">PDF guides have not yet been remediated for screen reader accessibility. Third-party services (Beehiiv newsletter signup, Stripe checkout, TikTok embeds) operate under their own accessibility standards and are outside this site's direct control.</p>
</div>

<div class="section">
  <h2 class="section-title">Feedback</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">If you encounter an accessibility barrier on this site, please contact Owner Services through the homepage. Accessibility concerns are prioritized.</p>
</div>`,
    { title: 'Accessibility', activePath: '/accessibility', description: 'Accessibility statement and WCAG 2.2 compliance status.' }
  );
}
