import { describe, expect, it } from 'vitest';
import { detectMyanmarEncoding, hasMyanmarText, normalizeUnicode } from '../src/text/index.js';

describe('text utilities', () => {
  it('detects Myanmar script characters', () => {
    expect(hasMyanmarText('မင်္ဂလာပါ')).toBe(true);
    expect(hasMyanmarText('hello')).toBe(false);
  });

  it('normalizes whitespace and Unicode composition', () => {
    expect(normalizeUnicode('  မင်္ဂလာပါ\nပါ  ')).toBe('မင်္ဂလာပါ ပါ');
  });

  it('returns a detection result for Myanmar text', () => {
    const result = detectMyanmarEncoding('မင်္ဂလာပါ');
    expect(['unicode', 'mixed', 'zawgyi']).toContain(result.encoding);
    expect(result.confidence).toBeGreaterThan(0);
  });
});
