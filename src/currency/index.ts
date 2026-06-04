import { toMyanmarNumerals } from '../numerals/index.js';

export interface MMKFormatOptions {
  locale?: 'en-US' | 'my-MM';
  symbol?: 'MMK' | 'Ks' | 'ကျပ်' | '';
  useMyanmarNumerals?: boolean;
  maximumFractionDigits?: number;
}

export function formatMMK(amount: number, options: MMKFormatOptions = {}): string {
  const {
    locale = 'en-US',
    symbol = 'MMK',
    useMyanmarNumerals = false,
    maximumFractionDigits = 0
  } = options;

  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits,
    minimumFractionDigits: 0
  }).format(amount);

  const value = useMyanmarNumerals ? toMyanmarNumerals(formatted) : formatted;
  return symbol ? `${value} ${symbol}` : value;
}
