import { describe, expect, it } from 'vitest';
import { containsMyanmarNumerals, toArabicNumerals, toMyanmarNumerals } from '../src/numerals/index.js';

describe('numerals', () => {
  it('converts ASCII digits to Myanmar numerals', () => {
    expect(toMyanmarNumerals('Order 123')).toBe('Order ၁၂၃');
  });

  it('converts Myanmar numerals to ASCII digits', () => {
    expect(toArabicNumerals('၀၉၇၈၄၁၂၃၄၅၆')).toBe('09784123456');
  });

  it('detects Myanmar numerals', () => {
    expect(containsMyanmarNumerals('၁၂၃')).toBe(true);
    expect(containsMyanmarNumerals('123')).toBe(false);
  });
});
