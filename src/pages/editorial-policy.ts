import { layout } from '../layout';
import type { Env } from '../index';

export function editorialPolicyPage(env: Env): string {
  return layout(
    `<p class="page-label">Editorial</p>
<h1 class="page-title">Editorial and Newsletter Policy</h1>
<p class="page-intro">Version 2026-09-05.3 — This policy governs what this site publishes and the review process behind it.</p>

<div class="section">
  <h2 class="section-title">Scope</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">This policy applies to content published on this website only. It does not extend to external platforms (TikTok, YouTube, Etsy) which have their own content policies.</p>
</div>

<div class="section">
  <h2 class="section-title">Allowed Subjects</h2>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:2">
    <li>Site news and updates</li>
    <li>Autism parenting experiences</li>
    <li>Caregiver support and self-care</li>
    <li>Special education preparation</li>
    <li>Sensory accessibility</li>
    <li>Communication strategies</li>
    <li>Non-advisory financial organization</li>
  </ul>
</div>

<div class="section">
  <h2 class="section-title">Prohibited Content</h2>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:2">
    <li>Diagnosis or treatment recommendations</li>
    <li>Legal advice</li>
    <li>Cure language or deficit framing</li>
    <li>Shame, fear, or false urgency</li>
    <li>Invented testimonials</li>
    <li>Private identifying information about any person</li>
    <li>Cross-property content (content from other platforms reposted here)</li>
  </ul>
</div>

<div class="section">
  <h2 class="section-title">Review Process</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Human review is mandatory. All drafts are saved internally. The site owner must inspect and edit content before it is published. No content is auto-published.</p>
</div>

<div class="section">
  <h2 class="section-title">Newsletter Release Conditions</h2>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:2">
    <li>Confirmed recipients only (no purchased lists)</li>
    <li>Truthful sender information</li>
    <li>Verified claims and accurate citations</li>
    <li>Working unsubscribe link in every email</li>
    <li>Physical postal address included</li>
    <li>Sent through credentialed provider (Beehiiv)</li>
  </ul>
</div>`,
    { title: 'Editorial Policy', activePath: '/editorial-policy', description: 'Editorial standards and newsletter publishing policy.' }
  );
}
