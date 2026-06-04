export type MyanmarEncoding = 'unicode' | 'zawgyi' | 'mixed' | 'unknown';

const MYANMAR_RANGE = /[\u1000-\u109F\uAA60-\uAA7F\uA9E0-\uA9FF]/;
const COMMON_ZAWGYI_PATTERNS = [
  /\u1031[\u1000-\u1021]/,
  /[\u1000-\u1021]\u1031/,
  /\u103B[\u1000-\u1021]/,
  /[\u1033\u1034]/,
  /[\u1060-\u1097]/
];
const COMMON_UNICODE_PATTERNS = [
  /[\u1000-\u1021]\u103A?\u1039[\u1000-\u1021]/,
  /[\u1000-\u1021][\u102B-\u1032]*[\u1036-\u1038]?/,
  /\u1031[\u1000-\u1021][\u102B-\u103E]*/
];

export interface EncodingDetectionResult {
  encoding: MyanmarEncoding;
  confidence: number;
  zawgyiScore: number;
  unicodeScore: number;
  reason: string;
}

export function hasMyanmarText(input: string): boolean {
  return MYANMAR_RANGE.test(input);
}

export function detectMyanmarEncoding(input: string): EncodingDetectionResult {
  if (!input || !hasMyanmarText(input)) {
    return { encoding: 'unknown', confidence: 0, zawgyiScore: 0, unicodeScore: 0, reason: 'No Myanmar script characters were found.' };
  }

  const zawgyiScore = COMMON_ZAWGYI_PATTERNS.reduce((score, pattern) => score + (pattern.test(input) ? 1 : 0), 0);
  const unicodeScore = COMMON_UNICODE_PATTERNS.reduce((score, pattern) => score + (pattern.test(input) ? 1 : 0), 0);

  if (zawgyiScore > 0 && unicodeScore > 0 && Math.abs(zawgyiScore - unicodeScore) <= 1) {
    return { encoding: 'mixed', confidence: 0.55, zawgyiScore, unicodeScore, reason: 'Both Unicode-like and Zawgyi-like patterns were detected.' };
  }

  if (zawgyiScore > unicodeScore) {
    return { encoding: 'zawgyi', confidence: Math.min(0.95, 0.55 + zawgyiScore * 0.12), zawgyiScore, unicodeScore, reason: 'Common Zawgyi ordering or code-point patterns were detected.' };
  }

  return { encoding: 'unicode', confidence: Math.min(0.95, 0.6 + unicodeScore * 0.1), zawgyiScore, unicodeScore, reason: 'Myanmar text is present and no strong Zawgyi-only pattern dominated.' };
}

export interface NormalizeUnicodeOptions {
  trim?: boolean;
  collapseWhitespace?: boolean;
  removeZeroWidthSpace?: boolean;
}

export function normalizeUnicode(input: string, options: NormalizeUnicodeOptions = {}): string {
  const { trim = true, collapseWhitespace = true, removeZeroWidthSpace = false } = options;
  let output = input.normalize('NFC');
  if (removeZeroWidthSpace) output = output.replace(/\u200B/g, '');
  if (collapseWhitespace) output = output.replace(/[\t\r\n ]+/g, ' ');
  if (trim) output = output.trim();
  return output;
}
