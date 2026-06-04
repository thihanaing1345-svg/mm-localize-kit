import { describe, expect, it } from 'vitest';
import { normalizeMyanmarSearchText } from '../src/search/index.js';

describe('search normalization', () => {
  it('normalizes spaces, punctuation, and Myanmar numerals', () => {
    expect(normalizeMyanmarSearchText('  Order-၁၂၃၊ မင်္ဂလာပါ!  ')).toBe('order 123 မင်္ဂလာပါ');
  });
});
