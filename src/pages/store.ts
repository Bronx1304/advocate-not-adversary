import { layout } from '../layout';
import type { Env } from '../index';

const FREE_GUIDES = [
  { name: 'Prepare for an IEP Meeting', desc: 'A step-by-step guide for parents heading into their first or next IEP meeting.', slug: 'iep-meeting-prep' },
  { name: 'Notice Patterns Without Rushing to Labels', desc: 'An observation workbook to help you see your child clearly before seeking evaluation.', slug: 'notice-patterns' },
  { name: 'Make the Next Paycheck Easier to Understand', desc: 'A plain-language breakdown of pay stubs, deductions, and budgeting basics.', slug: 'paycheck-guide' },
  { name: 'Five Things I Wish Someone Told Me', desc: 'A web booklet for parents early in their journey.', slug: 'five-things' },
];

const FREE_BUNDLES = [
  { name: 'Meeting Priorities Quick Planner', slug: 'meeting-priorities' },
  { name: 'Student Strengths and Preferences Profile', slug: 'student-strengths' },
  { name: 'School Communication Log', slug: 'school-comm-log' },
  { name: 'Family Records Index', slug: 'family-records' },
  { name: 'Weekly Family Reset', slug: 'weekly-reset' },
  { name: 'Sensory-Friendly Outing Planner', slug: 'sensory-outing' },
  { name: 'Support Trial Observation Sheet', slug: 'support-trial' },
  { name: 'Student Voice Conversation Cards', slug: 'student-voice' },
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
      <h3>\u{1F4C4} ${g.name}</h3>
      <p>${g.desc}</p>
      <div style="margin-top:0.75rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
        <span class="feature-badge" style="color:var(--accent)">In preparation</span>
        <a href="/newsletter" class="btn btn-ghost" style="font-size:0.78rem;padding:0.4rem 0.9rem">Get release updates</a>
      </div>
    </div>`
  ).join('');

  const bundlesHtml = FREE_BUNDLES.map(b =>
    `<div class="info-card">
      <h3>\u{1F4E6} ${b.name}</h3>
      <p style="font-size:0.8rem;color:var(--text-muted)">Includes printable PDF, offline HTML edition, editable Markdown, read-me, and byte-checkable hashes.</p>
      <div style="margin-top:0.75rem;display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
        <span class="feature-badge" style="color:var(--accent)">In preparation</span>
        <a href="/newsletter" class="btn btn-ghost" style="font-size:0.78rem;padding:0.4rem 0.9rem">Get release updates</a>
      </div>
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
<p class="page-intro">Practical tools for autism parents, caregivers, and families. The resource library is being prepared with care; join the newsletter for release updates.</p>

<div class="store-tabs" role="tablist" aria-label="Store sections">
  <button role="tab" class="store-tab active" aria-selected="true" data-tab="guides">Free Guides</button>
  <button role="tab" class="store-tab" aria-selected="false" data-tab="tools">Tools & Workbooks</button>
  <button role="tab" class="store-tab" aria-selected="false" data-tab="purchases">My Purchases</button>
  <button role="tab" class="store-tab" aria-selected="false" data-tab="account">My Account</button>
</div>

<div id="tab-guides" class="store-panel" role="tabpanel">
  <div class="card-grid">${guidesHtml}</div>
</div>

<div id="tab-tools" class="store-panel" role="tabpanel" hidden>
  <h2 class="section-title" style="margin-top:0">Free Resource Bundles</h2>
  <div class="card-grid">${bundlesHtml}</div>

  <h2 class="section-title" style="margin-top:2rem">Coming Soon</h2>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">These resources are in development. They'll be available for purchase when ready.</p>
  <div class="card-grid">${comingSoonHtml}</div>
</div>

<div id="tab-purchases" class="store-panel" role="tabpanel" hidden>
  <div class="store-auth-gate">
    <h2 style="font-size:1.15rem;margin-bottom:0.75rem">My Purchases</h2>
    <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:1.25rem">Purchase history will appear here when the store opens.</p>
    <a href="/newsletter" class="btn btn-primary">Get release updates</a>
  </div>
</div>

<div id="tab-account" class="store-panel" role="tabpanel" hidden>
  <div class="store-auth-gate">
    <h2 style="font-size:1.15rem;margin-bottom:0.75rem">My Account & Membership</h2>
    <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:1.25rem">Member accounts will be available when they are ready. You do not need an account to use the public resources.</p>
    <a href="/newsletter" class="btn btn-primary">Get release updates</a>
  </div>
</div>

<div class="alert alert-info" style="margin-top:2rem">
  <strong>Coming next:</strong> Paid resources will be added only after checkout and secure delivery are fully ready.
</div>

<script>
(function(){
  var tabs = document.querySelectorAll('.store-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      document.querySelectorAll('.store-panel').forEach(function(p) { p.hidden = true; });
      document.getElementById('tab-' + tab.getAttribute('data-tab')).hidden = false;
    });
  });
})();
</script>`,
    { title: 'Store', activePath: '/store', description: 'Free guides, resource bundles, and tools for autism families.' }
  );
}
