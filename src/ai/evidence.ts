export interface EvidenceCard {
  id: string;
  title: string;
  url: string;
  topics: string[];
  summary: string;
}

const EVIDENCE_REGISTRY: EvidenceCard[] = [
  { id: 'AKS-001', title: 'NIMH — Autism Spectrum Disorder', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', topics: ['autism basics', 'evaluation'], summary: 'Overview of ASD including signs, diagnosis, and treatments from the National Institute of Mental Health.' },
  { id: 'AKS-002', title: 'CDC — Signs and Symptoms of ASD', url: 'https://www.cdc.gov/autism/signs-symptoms/', topics: ['autism basics', 'observation', 'signs'], summary: 'CDC guide to recognizing autism signs and symptoms across developmental stages.' },
  { id: 'AKS-003', title: 'CDC — Screening and Diagnosis of ASD', url: 'https://www.cdc.gov/autism/diagnosis/', topics: ['evaluation', 'diagnosis', 'screening'], summary: 'CDC information on developmental screening and diagnostic evaluation process.' },
  { id: 'AKS-004', title: 'ASHA — Augmentative and Alternative Communication', url: 'https://www.asha.org/public/speech/disorders/aac/', topics: ['communication', 'aac', 'speech'], summary: 'ASHA overview of AAC systems for people with communication difficulties.' },
  { id: 'AKS-005', title: 'NIMH — Sensory Processing', url: 'https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder', topics: ['sensory', 'distress', 'meltdown'], summary: 'NIMH information on sensory processing differences in autism.' },
  { id: 'AKS-006', title: 'ASAN — About Autism', url: 'https://autisticadvocacy.org/about-asan/about-autism/', topics: ['autism basics', 'respectful language', 'identity'], summary: 'Autistic Self Advocacy Network perspective on what autism is.' },
  { id: 'AKS-007', title: 'ASAN — Identity-First Language', url: 'https://autisticadvocacy.org/about-asan/identity-first-language/', topics: ['respectful language', 'adults', 'identity'], summary: 'ASAN position on identity-first language and why many autistic people prefer it.' },
  { id: 'AKS-008', title: 'IDEA — Individuals with Disabilities Education Act', url: 'https://sites.ed.gov/idea/', topics: ['school', 'iep', 'education', 'rights'], summary: 'Federal law guaranteeing free appropriate public education for children with disabilities.' },
  { id: 'AKS-009', title: '34 CFR Part 300 — IDEA Regulations', url: 'https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300', topics: ['school', 'iep', 'legal framework', 'education'], summary: 'Federal regulations implementing IDEA, including IEP requirements and procedural safeguards.' },
  { id: 'AKS-010', title: 'IDEA — IEP Guide for Parents', url: 'https://sites.ed.gov/idea/regs/b', topics: ['school', 'iep', 'parents'], summary: 'Department of Education guide helping parents understand the IEP process.' },
  { id: 'AKS-011', title: 'CDC — Autism Data and Statistics', url: 'https://www.cdc.gov/autism/data-research/', topics: ['autism basics', 'data'], summary: 'CDC autism prevalence data and research summaries.' },
  { id: 'AKS-012', title: 'WHO — Vaccines and Autism', url: 'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination', topics: ['misinformation', 'vaccines'], summary: 'WHO position confirming no link between vaccines and autism.' },
  { id: 'AKS-013', title: 'Hviid et al. — MMR Vaccine and Autism (2019)', url: 'https://pubmed.ncbi.nlm.nih.gov/30831578/', topics: ['misinformation', 'vaccines', 'research'], summary: 'Large Danish cohort study (657,461 children) confirming no increased risk of autism from MMR vaccine.' },
  { id: 'AKS-014', title: 'FDA — Health Fraud: Autism "Cures"', url: 'https://www.fda.gov/consumers/health-fraud-scams/fraudulent-autism-products', topics: ['misinformation', 'fraud', 'cures'], summary: 'FDA warning about fraudulent products marketed as autism cures.' },
  { id: 'AKS-015', title: 'NIMH — Co-occurring Conditions', url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', topics: ['co-occurring', 'health', 'anxiety', 'adhd'], summary: 'NIMH information on conditions that commonly co-occur with autism.' },
];

const BASICS_CARD = EVIDENCE_REGISTRY[0];

export function selectEvidence(message: string, maxCards = 3): EvidenceCard[] {
  const normalized = message.toLowerCase();
  const scored: Array<{ card: EvidenceCard; score: number }> = [];

  for (const card of EVIDENCE_REGISTRY) {
    let score = 0;
    for (const topic of card.topics) {
      if (normalized.includes(topic)) {
        score += 2;
      }
      const words = topic.split(/\s+/);
      for (const word of words) {
        if (word.length > 3 && normalized.includes(word)) {
          score += 1;
        }
      }
    }
    const titleWords = card.title.toLowerCase().split(/\s+/);
    for (const word of titleWords) {
      if (word.length > 3 && normalized.includes(word)) {
        score += 1;
      }
    }
    if (score > 0) {
      scored.push({ card, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  const selected = scored.slice(0, maxCards).map(s => s.card);

  if (!selected.find(c => c.id === BASICS_CARD.id)) {
    selected.push(BASICS_CARD);
  }

  return selected;
}

export function formatEvidenceForPrompt(cards: EvidenceCard[]): string {
  if (cards.length === 0) return '';
  const lines = cards.map(c =>
    `[${c.id}] ${c.title}\n  Summary: ${c.summary}\n  URL: ${c.url}`
  );
  return `\n\nREVIEWED SOURCES (cite only these):\n${lines.join('\n\n')}`;
}

export function formatSourceFooter(cards: EvidenceCard[]): string {
  if (cards.length === 0) return '';
  const links = cards.map(c => `- ${c.title}: ${c.url}`);
  return `\n\n---\n**Sources referenced:**\n${links.join('\n')}`;
}
