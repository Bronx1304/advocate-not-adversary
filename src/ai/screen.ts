const UNSAFE_PATTERNS = [
  /\bi am chris\b/i,
  /\bi am a (doctor|therapist|counselor|lawyer|nurse|psychiatrist|psychologist)\b/i,
  /\byou should (stop|quit|discontinue) (taking|using) (your |the )?(medication|medicine|meds)\b/i,
  /\bi diagnose/i,
  /\byou have (autism|adhd|asd|add|anxiety|depression|ocd)\b/i,
  /\byour child (has|is diagnosed with|definitely has)\b/i,
  /\bi('m| am) always here for you\b/i,
  /\byou can always (come back|talk) to me\b/i,
  /\bthis (is|stays) between us\b/i,
  /\bdon'?t tell anyone\b/i,
  /\ba counselor is (watching|monitoring|listening)\b/i,
  /\bsomeone is (watching|monitoring)\b/i,
  /\bkill\b/i,
  /\bsuicide method/i,
  /\bhow to (harm|hurt) (yourself|themselves|a child)\b/i,
];

const SAFE_REPLACEMENT = `I wasn't able to generate a safe response to that question. Let me try a different approach — could you rephrase what you're asking? If you're dealing with something urgent, please reach out to a qualified professional or call 988 for the Suicide & Crisis Lifeline.`;

export function screenOutput(text: string): { safe: boolean; text: string } {
  for (const pattern of UNSAFE_PATTERNS) {
    if (pattern.test(text)) {
      return { safe: false, text: SAFE_REPLACEMENT };
    }
  }
  return { safe: true, text };
}
