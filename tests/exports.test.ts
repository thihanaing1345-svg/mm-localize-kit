import { describe, expect, it } from 'vitest';
import * as root from '../src/index.js';
import * as text from '../src/text/index.js';
import * as phone from '../src/phone/index.js';

describe('public exports', () => {
  it('exposes root localization helpers', () => {
    expect(typeof root.formatMMK).toBe('function');
    expect(typeof root.normalizeMyanmarSearchText).toBe('function');
    expect(typeof root.validateMyanmarPhone).toBe('function');
  });

  it('keeps submodule APIs importable', () => {
    expect(text.hasMyanmarText('မင်္ဂလာပါ')).toBe(true);
    expect(phone.isValidMyanmarPhoneNumber('09784123456')).toBe(true);
  });
});
