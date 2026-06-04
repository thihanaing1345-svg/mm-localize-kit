import { describe, expect, it } from 'vitest';
import { findTownship, getTownshipsByRegion, MYANMAR_TOWNSHIPS } from '../src/geo/index.js';

describe('geo helpers', () => {
  it('ships starter township data', () => {
    expect(MYANMAR_TOWNSHIPS.length).toBeGreaterThan(0);
  });

  it('finds townships by English or Myanmar names', () => {
    expect(findTownship('Sanchaung')?.townshipMm).toBe('စမ်းချောင်း');
    expect(getTownshipsByRegion('Yangon').length).toBeGreaterThan(0);
  });
});
