import { describe, expect, it } from 'vitest';
import { formatMyanmarDate } from '../src/date/index.js';

describe('date formatter', () => {
  it('formats a date string', () => {
    const output = formatMyanmarDate('2026-01-15T00:00:00Z');
    expect(output.length).toBeGreaterThan(0);
  });
});
