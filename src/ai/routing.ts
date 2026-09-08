const MEDICATION_RESPONSE = `I can't help with medication questions — that's outside what I'm built for. Medication decisions should always involve your child's doctor or a qualified medical professional. I'm here for general autism education only.`;

const DIAGNOSIS_RESPONSE = `I'm not able to help with diagnosis — I'm an educational tool, not a clinician. If you're wondering whether your child might be autistic, the right step is to talk to your pediatrician or request an evaluation through your school district. I can help you think about what to observe and how to prepare for that conversation.`;

const LEGAL_RESPONSE = `I can't give legal advice — that's outside my scope. If you're facing a legal issue related to your child's education or rights, consider contacting a special education advocate or attorney in your area. Many offer free initial consultations. I can help you understand general concepts like IEP rights and IDEA protections.`;

const MINOR_RESPONSE = `I'm designed for adult caregivers only. If you're under 18, please talk to a trusted adult — a parent, teacher, school counselor, or family member. They can help you better than I can.`;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[""]/g, '"')
    .replace(/[^\w\s'"-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const MEDICATION_PHRASES = [
  'what medication', 'which medication', 'prescribe', 'prescription',
  'dosage', 'dose', 'milligram', 'mg of', 'should i medicate',
  'should we medicate', 'put him on', 'put her on', 'ritalin',
  'adderall', 'risperdal', 'risperidone', 'abilify', 'aripiprazole',
  'melatonin dose', 'ssri', 'antipsychotic', 'stimulant medication',
];

const DIAGNOSIS_PHRASES = [
  'is my child autistic', 'does my child have autism', 'diagnose',
  'is he autistic', 'is she autistic', 'signs of autism in my',
  'do i have autism', 'am i autistic', 'could it be autism',
  'autism test', 'autism screening', 'evaluate my child',
];

const LEGAL_PHRASES = [
  'sue the school', 'file a lawsuit', 'legal action', 'due process',
  'hire a lawyer', 'attorney', 'file a complaint', 'legal rights',
  'can i sue', 'should i sue', 'restraining order',
];

const MINOR_PHRASES = [
  'i am a kid', 'i\'m a kid', 'i am 12', 'i am 13', 'i am 14',
  'i am 15', 'i am 16', 'i am 17', 'i\'m 12', 'i\'m 13', 'i\'m 14',
  'i\'m 15', 'i\'m 16', 'i\'m 17', 'im a minor', 'i\'m a minor',
  'i am a minor', 'i\'m underage', 'i am underage',
];

export interface RoutingResult {
  isRouted: boolean;
  category: 'medication' | 'diagnosis' | 'legal' | 'minor' | null;
  response: string | null;
}

export function routeByTopic(message: string): RoutingResult {
  const normalized = normalize(message);

  for (const phrase of MINOR_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isRouted: true, category: 'minor', response: MINOR_RESPONSE };
    }
  }

  for (const phrase of MEDICATION_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isRouted: true, category: 'medication', response: MEDICATION_RESPONSE };
    }
  }

  for (const phrase of DIAGNOSIS_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isRouted: true, category: 'diagnosis', response: DIAGNOSIS_RESPONSE };
    }
  }

  for (const phrase of LEGAL_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isRouted: true, category: 'legal', response: LEGAL_RESPONSE };
    }
  }

  return { isRouted: false, category: null, response: null };
}
