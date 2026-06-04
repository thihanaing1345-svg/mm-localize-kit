import { toArabicNumerals } from '../numerals/index.js';

export interface MyanmarPhoneInfo {
  input: string;
  normalized: string;
  isValid: boolean;
  countryCode: 'MM';
  operator: 'MPT' | 'ATOM' | 'Ooredoo' | 'Mytel' | 'MEC' | 'Unknown';
  type: 'mobile' | 'fixed-line' | 'unknown';
}

export function normalizeMyanmarPhoneNumber(input: string): string {
  let value = toArabicNumerals(input).replace(/[\s\-().]/g, '');
  if (value.startsWith('0095')) value = `0${value.slice(4)}`;
  if (value.startsWith('+95')) value = `0${value.slice(3)}`;
  if (value.startsWith('95')) value = `0${value.slice(2)}`;
  return value;
}

export function getMyanmarPhoneOperator(input: string): MyanmarPhoneInfo['operator'] {
  const phone = normalizeMyanmarPhoneNumber(input);
  if (/^09(2|3|4|5)\d+/.test(phone)) return 'MPT';
  if (/^09(6)\d+/.test(phone)) return 'Mytel';
  if (/^09(7)\d+/.test(phone)) return 'ATOM';
  if (/^09(8|9)\d+/.test(phone)) return 'Ooredoo';
  if (/^013\d+/.test(phone)) return 'MEC';
  return 'Unknown';
}

export function isValidMyanmarPhoneNumber(input: string): boolean {
  const phone = normalizeMyanmarPhoneNumber(input);
  return /^09\d{7,9}$/.test(phone) || /^0[1-8]\d{5,8}$/.test(phone);
}

export function parseMyanmarPhoneNumber(input: string): MyanmarPhoneInfo {
  const normalized = normalizeMyanmarPhoneNumber(input);
  return {
    input,
    normalized,
    isValid: isValidMyanmarPhoneNumber(input),
    countryCode: 'MM',
    operator: getMyanmarPhoneOperator(input),
    type: normalized.startsWith('09') ? 'mobile' : normalized.startsWith('0') ? 'fixed-line' : 'unknown'
  };
}
