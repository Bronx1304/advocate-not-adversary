import { layout } from '../layout';
import type { Env } from '../index';

const FREE_GUIDES = [
  { name: 'Prepare for an IEP Meeting', desc: 'A step-by-step guide for parents heading into their first or next IEP meeting.' },
  { name: 'Notice Patterns Without Rushing to Labels', desc: 'An observation workbook to help you see your child clearly before seeking evaluation.' },
  { name: 'Make the Next Paycheck Easier to Understand', desc: 'A plain-language breakdown of pay stubs, deductions, and budgeting basics.' },
  { name: 'Five Things I Wish Someone Told Me', desc: 'A web booklet for parents early in their journey.' },
];

const FREE_BUNDLES = [
  'Meeting Priorities Quick Planner',
  'Student Strengths and Preferences Profile',
  'School Communication Log',
  'Family Records Index',
  'Weekly Family Reset',
  'Sensory-Friendly Outing Planner',
  'Support Trial Observation Sheet',
  'Student Voice Conversation Cards',
];

const COMING_SOON = [
  'IEP Preparedness Guide (editable DOCX)',
  'Child Development Workbook (editable DOCX)',
  'Family Paycheck Workbook (editable DOCX)',
  'School Communication and Letter Templates',
  'Sensory and Communication Support',
  'Teen Transition Planning Workbook',
  'Everyday Advocacy Companion Guides',
  'Meeting Preparation Workbook',
  'Progress Review Workbook',
  'Home and School Partnership Workbook',
  'Caregiver Handover Toolkit',
  'Self-Advocacy Practice Workbook',
  'Everyday Routines Workbook',
  'School Year Organizer',
  'Transition Next Steps Workbook',
];

export function storePage(env: Env): string {
  const guidesHtml = FREE_GUIDES.map(g =>
    `<div class="info-card">
      <h3>📄 ${g.name}</h3>
      <p>${g.desc}</p>
      <p style="margin-top:0.5rem"><span class="feature-badge" style="color:var(--accent)">Free — No account needed</span></p>
    </div>`
  ).join('');

  const bundlesHtml = FREE_BUNDLES.map(b =>
    `<div class="info-card">
      <h3>📦 ${b}</h3>
      <p style="font-size:0.8rem;color:var(--text-muted)">Includes printable PDF, offline HTML edition, editable Markdown, read-me, and byte-checkable hashes.</p>
      <p style="margin-top:0.5rem"><span class="feature-badge" style="color:var(--accent)">Free Download</span></p>
    </div>`
  ).join('');

  const comingSoonHtml = COMING_SOON.map(c =>
    `<div class="info-card" style="opacity:0.6">
      <h3>${c}</h3>
      <p style="margin-top:0.25rem"><span class="feature-badge">Coming Soon</span></p>
    </div>`
  ).join('');

  return layout(
    `<p class="page-label">Store</p>
<h1 class="page-title">Resource Library & Store</h1>
<p class="page-intro">Practical tools for autism parents, caregivers, and families. Free guides require no account. All paid products are processed through Stripe.</p>

<div class="section">
  <h2 class="section-title">Free PDF Guides</h2>
  <div class="card-grid">${guidesHtml}</div>
</div>

<div class="section">
  <h2 class="section-title">Free Resource Bundles</h2>
  <div class="card-grid">${bundlesHtml}</div>
</div>

<div class="section">
  <h2 class="section-title">Coming Soon</h2>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">These resources are in development. They'll be available for purchase when ready.</p>
  <div class="card-grid">${comingSoonHtml}</div>
</div>

<div class="alert alert-info" style="margin-top:2rem">
  <strong>Seller:</strong> All products on this site are created and sold by Christopher M. Caballero. Payments are processed through Stripe's hosted checkout.
</div>`,
    { title: 'Store', activePath: '/store', description: 'Free guides, resource bundles, and tools for autism families.' }
  );
}
