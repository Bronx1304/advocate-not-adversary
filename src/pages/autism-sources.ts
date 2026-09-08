import { layout } from '../layout';
import type { Env } from '../index';

interface Source {
  id: string;
  title: string;
  type: string;
  topics: string[];
  url: string;
}

const SOURCES: Source[] = [
  { id: 'AKS-001', title: 'NIMH — Autism Spectrum Disorder', type: 'Government health', topics: ['Autism basics', 'Evaluation'], url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
  { id: 'AKS-002', title: 'CDC — Signs and Symptoms of ASD', type: 'Government health', topics: ['Autism basics', 'Observation'], url: 'https://www.cdc.gov/autism/signs-symptoms/' },
  { id: 'AKS-003', title: 'CDC — Screening and Diagnosis of ASD', type: 'Government health', topics: ['Evaluation', 'Diagnosis process'], url: 'https://www.cdc.gov/autism/diagnosis/' },
  { id: 'AKS-004', title: 'ASHA — Augmentative and Alternative Communication (AAC)', type: 'Professional practice', topics: ['Communication', 'AAC'], url: 'https://www.asha.org/public/speech/disorders/aac/' },
  { id: 'AKS-005', title: 'NIMH — Sensory Processing Issues', type: 'Government health', topics: ['Sensory needs', 'Distress'], url: 'https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder' },
  { id: 'AKS-006', title: 'ASAN — About Autism', type: 'Autistic-led perspective', topics: ['Autism basics', 'Respectful language'], url: 'https://autisticadvocacy.org/about-asan/about-autism/' },
  { id: 'AKS-007', title: 'ASAN — Identity-First Language', type: 'Autistic-led perspective', topics: ['Respectful language', 'Adults'], url: 'https://autisticadvocacy.org/about-asan/identity-first-language/' },
  { id: 'AKS-008', title: 'IDEA — Individuals with Disabilities Education Act', type: 'Federal education', topics: ['School preparation', 'IEP'], url: 'https://sites.ed.gov/idea/' },
  { id: 'AKS-009', title: '34 CFR Part 300 — IDEA Regulations', type: 'Federal education', topics: ['School preparation', 'Legal framework'], url: 'https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300' },
  { id: 'AKS-010', title: 'IDEA — IEP Guide for Parents', type: 'Federal education', topics: ['School preparation', 'IEP'], url: 'https://sites.ed.gov/idea/regs/b' },
  { id: 'AKS-011', title: 'CDC — Autism Data and Statistics', type: 'Government health', topics: ['Autism basics'], url: 'https://www.cdc.gov/autism/data-research/' },
  { id: 'AKS-012', title: 'WHO — Vaccines and Autism (Position)', type: 'International evidence review', topics: ['Health misinformation'], url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination' },
  { id: 'AKS-013', title: 'Hviid et al. — MMR Vaccine and Autism (2019)', type: 'Primary research', topics: ['Health misinformation'], url: 'https://pubmed.ncbi.nlm.nih.gov/30831578/' },
  { id: 'AKS-014', title: 'FDA — Health Fraud: Autism "Cures"', type: 'Government health', topics: ['Health misinformation', 'Medication fraud'], url: 'https://www.fda.gov/consumers/health-fraud-scams/fraudulent-autism-products' },
  { id: 'AKS-015', title: 'NIMH — Co-occurring Conditions', type: 'Government health', topics: ['Co-occurring health', 'Autism basics'], url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd' },
];

export function autismSourcesPage(env: Env): string {
  const cardsHtml = SOURCES.map(s =>
    `<div class="info-card">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.75rem;flex-wrap:wrap">
        <h3 style="font-size:0.85rem">${s.id}</h3>
        <span class="feature-badge">${s.type}</span>
      </div>
      <p style="margin-top:0.5rem;font-weight:500">${s.title}</p>
      <p style="margin-top:0.35rem;font-size:0.78rem;color:var(--text-faint)">Topics: ${s.topics.join(', ')}</p>
      <p style="margin-top:0.35rem"><a href="${s.url}" target="_blank" rel="noopener" style="font-size:0.78rem;word-break:break-all">${s.url}</a></p>
    </div>`
  ).join('');

  return layout(
    `<p class="page-label">Evidence Register</p>
<h1 class="page-title">Autism Knowledge and Sources</h1>
<p class="page-intro">Every piece of autism information used by Chris AI comes from the sources listed below. These are reviewed, dated, and linked directly. The AI cannot reference sources outside this registry.</p>

<div class="section">
  <h2 class="section-title">Topics Covered</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Autism basics, observation and evaluation, communication and AAC, sensory needs and distress, co-occurring health conditions, supports, school preparation, health misinformation, and adults and respectful language.</p>
</div>

<div class="section">
  <h2 class="section-title">Reviewed Sources (${SOURCES.length})</h2>
  <div class="card-grid">${cardsHtml}</div>
</div>

<div class="section">
  <h2 class="section-title">Methodology</h2>
  <p style="font-size:0.85rem;color:var(--text-muted)">Sources are selected from government health agencies, professional organizations, autistic-led organizations, federal education law, and peer-reviewed research. Each source is reviewed for accuracy and relevance before inclusion.</p>
  <p style="font-size:0.85rem;color:var(--text-muted);margin-top:0.75rem"><strong>Deliberately omitted:</strong> Prevalence figures, which depend on year, location, and methods used.</p>
</div>`,
    { title: 'Autism Sources', activePath: '/autism-sources', description: 'The 15 reviewed evidence sources behind Chris AI.' }
  );
}
