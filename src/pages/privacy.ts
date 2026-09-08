import { layout } from '../layout';
import type { Env } from '../index';

export function privacyPage(env: Env): string {
  return layout(
    `<p class="page-label">Privacy</p>
<h1 class="page-title">Privacy Notice</h1>
<p class="page-intro">Version 2.4 — Effective September 2026. This notice explains what data this site collects, where it goes, and who can see it.</p>

<div class="section">
  <h2 class="section-title">Data Flows</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Activity</th><th>Where Data Goes</th><th>What's Stored</th></tr></thead>
      <tbody>
        <tr><td>AI chat</td><td>Cloudflare + Groq / NVIDIA</td><td>Nothing — no transcript storage</td></tr>
        <tr><td>Support tickets</td><td>Cloudflare + domain mailbox</td><td>Ticket text (newest 500, 25 replies each)</td></tr>
        <tr><td>Network/security</td><td>Cloudflare</td><td>No IP attached to chat or safety counts</td></tr>
        <tr><td>Admin records</td><td>Cloudflare</td><td>Config revisions retained for rollback</td></tr>
        <tr><td>AI safety events</td><td>Cloudflare</td><td>Calendar-year aggregate counts, no PII</td></tr>
        <tr><td>Newsletter signup</td><td>Beehiiv</td><td>Email only — site does not keep subscriber DB</td></tr>
        <tr><td>Purchases</td><td>Stripe</td><td>Order references only — no card data stored on site</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Page-View Counter</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Aggregate page loads only. No visitor identifiers. Do Not Track (DNT) and Global Privacy Control (GPC) headers are honored.</p>
</div>

<div class="section">
  <h2 class="section-title">Member Accounts</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Passwordless email links expire after 15 minutes and work once. Sessions last 7 days. Stripe customer mapping links purchases to your email.</p>
</div>

<div class="section">
  <h2 class="section-title">Cookies</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Cookie</th><th>Duration</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>chris_chat</td><td>Short-lived</td><td>Chat security</td></tr>
        <tr><td>ana_admin</td><td>3 hours</td><td>Admin session</td></tr>
        <tr><td>ana_member</td><td>7 days</td><td>Member session</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.75rem">All cookies are Secure, HttpOnly, and SameSite.</p>
</div>

<div class="section">
  <h2 class="section-title">What We Don't Do</h2>
  <ul style="font-size:0.85rem;color:var(--text-muted);padding-left:1.25rem;line-height:2">
    <li>No sale of personal information</li>
    <li>No targeted advertising</li>
    <li>No persistent AI memory</li>
    <li>No cross-visit memory</li>
    <li>No tracking pixels or third-party analytics</li>
  </ul>
</div>`,
    { title: 'Privacy', activePath: '/privacy', description: 'Privacy notice for Advocate Not Adversary.' }
  );
}
