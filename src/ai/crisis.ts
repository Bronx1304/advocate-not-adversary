const CRISIS_RESPONSE = `I need to pause our conversation here. What you're describing sounds like a crisis, and I'm not equipped to help with that — I'm an educational chat tool, not a counselor or emergency service.

**If you or someone you know is in immediate danger, call 911.**

**988 Suicide & Crisis Lifeline:** Call or text **988** (24/7, free, confidential)

**Crisis Text Line:** Text **HOME** to **741741**

You are not alone. These services are staffed by real people who are trained to help. Please reach out to them now.`;

const MINOR_SAFETY_RESPONSE = `This sounds like it involves a child's safety. I'm not the right resource for this — I'm an educational tool, not a professional or emergency service.

**If a child is in immediate danger, call 911.**

**Childhelp National Child Abuse Hotline:** Call **1-800-422-4453** (24/7)

Please contact a qualified professional or emergency service right away.`;

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[""]/g, '"')
    .replace(/[^\w\s'"-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const CRISIS_PHRASES = [
  'want to die',
  'want to kill myself',
  'going to kill myself',
  'kill myself',
  'end my life',
  'end it all',
  'suicide',
  'suicidal',
  'take my own life',
  'don\'t want to be alive',
  'don\'t want to live',
  'better off dead',
  'wish i was dead',
  'wish i were dead',
  'rather be dead',
  'no reason to live',
  'nothing to live for',
  'can\'t go on',
  'can\'t do this anymore',
  'hurt myself',
  'cutting myself',
  'self harm',
  'self-harm',
  'overdose',
  'jump off',
  'hang myself',
];

const HARM_TO_OTHERS_PHRASES = [
  'hurt my child',
  'hurt my kid',
  'hurt my son',
  'hurt my daughter',
  'hurt my baby',
  'kill my child',
  'kill my kid',
  'kill my son',
  'kill my daughter',
  'shake my baby',
  'shake the baby',
  'hurt my partner',
  'hurt my wife',
  'hurt my husband',
  'kill my partner',
  'kill my wife',
  'kill my husband',
  'want to hurt',
  'going to hurt',
];

export interface CrisisCheckResult {
  isCrisis: boolean;
  type: 'self-harm' | 'harm-to-others' | null;
  response: string | null;
}

export function checkCrisis(message: string): CrisisCheckResult {
  const normalized = normalize(message);

  for (const phrase of CRISIS_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isCrisis: true, type: 'self-harm', response: CRISIS_RESPONSE };
    }
  }

  for (const phrase of HARM_TO_OTHERS_PHRASES) {
    if (normalized.includes(phrase)) {
      return { isCrisis: true, type: 'harm-to-others', response: MINOR_SAFETY_RESPONSE };
    }
  }

  return { isCrisis: false, type: null, response: null };
}
