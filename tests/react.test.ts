import { describe, expect, it } from 'vitest';
import { requireMyanmarText, validateMyanmarPhone, validateUnicodeText } from '../src/react/index.js';

describe('React and form validators', () => {
  it('validates phone fields', () => {
    expect(validateMyanmarPhone('09784123456').valid).toBe(true);
  });

  it('requires Myanmar text', () => {
    expect(requireMyanmarText('hello').valid).toBe(false);
    expect(requireMyanmarText('မင်္ဂလာပါ').valid).toBe(true);
  });

  it('accepts Unicode-like text', () => {
    expect(validateUnicodeText('မင်္ဂလာပါ').valid).toBe(true);
  });
});
