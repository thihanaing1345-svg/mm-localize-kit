import { toArabicNumerals } from '../numerals/index.js';
import { normalizeUnicode } from '../text/index.js';

export interface SearchNormalizeOptions {
  lowercase?: boolean;
  stripPunctuation?: boolean;
  normalizeDigits?: boolean;
  removeZeroWidthSpace?: boolean;
}

export function normalizeMyanmarSearchText(input: string, options: SearchNormalizeOptions = {}): string {
  const {
    lowercase = true,
    stripPunctuation = true,
    normalizeDigits = true,
    removeZeroWidthSpace = true
  } = options;

  let output = normalizeUnicode(input, { trim: true, collapseWhitespace: true, removeZeroWidthSpace });
  if (normalizeDigits) output = toArabicNumerals(output);
  if (lowercase) output = output.toLocaleLowerCase('my-MM');
  if (stripPunctuation) output = output.replace(/[၊။,.;:!?()[\]{}"'`~@#$%^&*_+=<>/\\|-]/g, ' ');
  return output.replace(/\s+/g, ' ').trim();
}
