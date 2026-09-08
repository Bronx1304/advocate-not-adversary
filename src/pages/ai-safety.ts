import { layout } from '../layout';
import type { Env } from '../index';

export function aiSafetyPage(env: Env): string {
  return layout(
    `<p class="page-label">Safety Protocol</p>
<h1 class="page-title">Chris AI Safety Protocol</h1>
<p class="page-intro">This page documents every safety layer protecting conversations with Chris AI. Nothing here is hidden. The protocol is deterministic — safety decisions are made by code, not by the AI model.</p>

<div class="section">
  <h2 class="section-title">Intended Use</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">General parenting and caregiver education, organizing questions, navigating site resources, and non-clinical communication preparation.</p>
  <div class="alert alert-danger" style="margin-top:1rem">
    <strong>Not intended for:</strong> Emergencies, crisis counseling, diagnosis, treatment, medication advice, legal advice, or therapy.
  </div>
</div>

<div class="section">
  <h2 class="section-title">Six Safety Layers</h2>
  <div class="card-grid">
    <div class="info-card">
      <h3>Layer 1 — Bounded Input</h3>
      <p>Same-origin JSON only. Limited request and message size. Rate limits enforced per session.</p>
    </div>
    <div class="info-card">
      <h3>Layer 2 — Deterministic Routing</h3>
      <p>Crisis, minor safety, medication, diagnosis, and legal queries are routed to fixed text responses <strong>before any AI model is called</strong>. No model involvement in safety-critical routing.</p>
    </div>
    <div class="info-card">
      <h3>Layer 3 — Non-Editable Prompt + Evidence Floor</h3>
      <p>The system prompt cannot be edited through the admin panel. It permanently bans: impersonation of Chris or any professional, diagnosis, prescribing, legal advice, violence, sexual content involving minors, secrecy, guilt-based pressure, and emotional dependency.</p>
    </div>
    <div class="info-card">
      <h3>Layer 4 — Topic-Selected Autism Evidence</h3>
      <p>Up to 3 relevant evidence cards plus the autism-basics card are selected from the dated registry and injected into context. The model can only reference reviewed, sourced material.</p>
    </div>
    <div class="info-card">
      <h3>Layer 5 — Provider Output Screen</h3>
      <p>After the model generates a response, a post-generation check scans for unsafe content. If detected, the response is replaced with fixed safe text.</p>
    </div>
    <div class="info-card">
      <h3>Layer 6 — Deterministic Source Footer</h3>
      <p>The Worker (not the model) appends source titles and approved HTTPS addresses. The model cannot fabricate or modify source citations.</p>
    </div>
  </div>
</div>

<div class="section">
  <h2 class="section-title">Crisis Response</h2>
  <div class="alert alert-danger">
    <p><strong>How it works:</strong> The input detector normalizes text and checks conservative phrase patterns for suicidal ideation, self-harm, attempts, and intent to harm a child or partner.</p>
    <p style="margin-top:0.75rem"><strong>On detection:</strong> A fixed response is returned with emergency numbers (911, 988 Suicide & Crisis Lifeline, local emergency). No AI model is involved. The system does not use a child as leverage, does not shame the user, and does not claim a counselor is monitoring.</p>
  </div>
</div>

<div class="section">
  <h2 class="section-title">AI Models</h2>
  <div class="table-wrap">
    <table>
      <thead><tr><th>Provider</th><th>Model</th><th>Role</th></tr></thead>
      <tbody>
        <tr><td>Groq</td><td>gpt-oss-20b</td><td>Primary (fast)</td></tr>
        <tr><td>Groq</td><td>gpt-oss-120b</td><td>Fallback (deeper)</td></tr>
        <tr><td>NVIDIA</td><td>nemotron-3-super-120b-a12b</td><td>Secondary pool</td></tr>
        <tr><td>NVIDIA</td><td>nemotron-3.5-lightning-30b-a3b</td><td>Secondary pool</td></tr>
      </tbody>
    </table>
  </div>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.75rem"><strong>Fallback:</strong> Up to 2 retry cycles across all providers. If all fail, a fixed local continuity message is returned.</p>
</div>

<div class="section">
  <h2 class="section-title">Data Handling</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)"><strong>No transcript storage.</strong> Chat messages are processed in-flight and not saved. The only data retained is anonymous annual aggregate safety event counts (e.g., "crisis detections in 2026: 12") with no personally identifiable information.</p>
</div>

<div class="section">
  <h2 class="section-title">Controls</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">The site owner can disable or mark the chat feature as "Coming Soon" at any time through the admin panel. The safety layers cannot be reduced or bypassed through the admin panel.</p>
</div>`,
    { title: 'AI Safety', activePath: '/ai-safety', description: 'Complete documentation of the Chris AI safety protocol and guardrail system.' }
  );
}
