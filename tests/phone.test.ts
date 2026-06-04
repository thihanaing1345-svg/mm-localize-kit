import { describe, expect, it } from 'vitest';
import { getMyanmarPhoneOperator, isValidMyanmarPhoneNumber, normalizeMyanmarPhoneNumber, parseMyanmarPhoneNumber } from '../src/phone/index.js';

describe('phone utilities', () => {
  it('normalizes Myanmar and international phone formats', () => {
    expect(normalizeMyanmarPhoneNumber('+၉၅၉၇၈၄၁၂၃၄၅၆')).toBe('09784123456');
  });

  it('validates Myanmar mobile numbers', () => {
    expect(isValidMyanmarPhoneNumber('09784123456')).toBe(true);
    expect(isValidMyanmarPhoneNumber('123')).toBe(false);
  });

  it('returns operator information', () => {
    expect(getMyanmarPhoneOperator('09978412345')).toBe('Ooredoo');
    expect(parseMyanmarPhoneNumber('09784123456').countryCode).toBe('MM');
  });
});
