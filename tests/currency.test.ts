import { describe, expect, it } from 'vitest';
import { formatMMK } from '../src/currency/index.js';

describe('currency formatter', () => {
  it('formats MMK in English digits by default', () => {
    expect(formatMMK(1500000)).toBe('1,500,000 MMK');
  });

  it('formats MMK using Myanmar numerals and label', () => {
    expect(formatMMK(1500, { symbol: 'ကျပ်', useMyanmarNumerals: true })).toBe('၁,၅၀၀ ကျပ်');
  });
});
