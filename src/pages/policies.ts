import { layout } from '../layout';
import type { Env } from '../index';

export function policiesPage(env: Env): string {
  return layout(
    `<p class="page-label">Governance</p>
<h1 class="page-title">Policy and Governance Center</h1>
<p class="page-intro">Version 1.0 — Effective September 2026. All site policies are published here for transparency. This center is maintained by the sole site owner.</p>

<div class="section">
  <h2 class="section-title">Governance Documents</h2>
  <div class="card-grid">
    <a href="/privacy" class="info-card" style="text-decoration:none;color:inherit"><h3>Privacy Notice</h3><p>How data flows through this site and who can see it.</p></a>
    <a href="/terms" class="info-card" style="text-decoration:none;color:inherit"><h3>Terms of Use</h3><p>Eligibility, disclaimers, and conditions for using this site.</p></a>
    <a href="/accessibility" class="info-card" style="text-decoration:none;color:inherit"><h3>Accessibility Statement</h3><p>WCAG 2.2 AA target and known limitations.</p></a>
    <a href="/ai-safety" class="info-card" style="text-decoration:none;color:inherit"><h3>Chris AI Safety Protocol</h3><p>Six-layer guardrail system for the AI chat.</p></a>
    <a href="/editorial-policy" class="info-card" style="text-decoration:none;color:inherit"><h3>Editorial and Newsletter Policy</h3><p>What this site publishes and the review process.</p></a>
    <a href="/autism-sources" class="info-card" style="text-decoration:none;color:inherit"><h3>Autism Evidence Register</h3><p>The 15 reviewed sources behind Chris AI.</p></a>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Additional Policies</h2>
  <div class="card-grid">
    <div class="info-card"><h3>Consumer Health Data</h3><p>Notice and consent framework. No health data is collected, stored, or sold.</p></div>
    <div class="info-card"><h3>Data Governance</h3><p>Operational policy for data handling, retention, and deletion.</p></div>
    <div class="info-card"><h3>Acceptable Use</h3><p>Usage policy for site visitors and AI chat users.</p></div>
    <div class="info-card"><h3>Security and Incident Response</h3><p>How security incidents are detected, reported, and resolved.</p></div>
    <div class="info-card"><h3>AI Governance Charter</h3><p>Principles governing AI use on this site.</p></div>
    <div class="info-card"><h3>Content Governance Charter</h3><p>How content is reviewed, approved, and published.</p></div>
    <div class="info-card"><h3>Commercial Disclosures</h3><p>Transparency about commercial relationships and revenue.</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Commerce Documents</h2>
  <div class="card-grid">
    <div class="info-card"><h3>Refund and Cancellation Policy</h3><p>Terms for digital product refunds and membership cancellations.</p></div>
    <div class="info-card"><h3>Usage Policy</h3><p>Permitted and prohibited uses of purchased digital products.</p></div>
    <div class="info-card"><h3>Stripe and Payment Terms</h3><p>How payments are processed and what data Stripe receives.</p></div>
    <div class="info-card"><h3>Google AdSense Terms and Disclosures</h3><p>Advertising is safety-locked off. Publisher ID exists for verification only — no ad code is loaded on this site.</p></div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Authority</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Entity</th><th>Authority</th></tr></thead>
      <tbody>
        <tr><td>Christopher M. Caballero</td><td>Sole website owner — full authority over all content, features, and policies</td></tr>
        <tr><td>Chris AI</td><td>No authority — generates bounded educational text only</td></tr>
        <tr><td>Qualified outside reviewer</td><td>Advises within professional scope only</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="section">
  <h2 class="section-title">How to Raise a Concern</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Contact Owner Services through the homepage support ticket. Select the "Privacy or safety concern" category. All concerns are reviewed by the site owner directly.</p>
</div>`,
    { title: 'Policies', activePath: '/policies', description: 'Policy and governance center for Advocate Not Adversary.' }
  );
}
