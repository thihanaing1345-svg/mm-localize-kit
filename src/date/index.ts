import { toMyanmarNumerals } from '../numerals/index.js';

export interface MyanmarDateFormatOptions {
  locale?: 'my-MM' | 'en-US';
  calendar?: 'gregory';
  dateStyle?: 'short' | 'medium' | 'long' | 'full';
  useMyanmarNumerals?: boolean;
}

export function formatMyanmarDate(date: Date | string | number, options: MyanmarDateFormatOptions = {}): string {
  const {
    locale = 'my-MM',
    calendar = 'gregory',
    dateStyle = 'medium',
    useMyanmarNumerals = true
  } = options;
  const d = date instanceof Date ? date : new Date(date);
  const formatted = new Intl.DateTimeFormat(locale, { calendar, dateStyle }).format(d);
  return useMyanmarNumerals ? toMyanmarNumerals(formatted) : formatted;
}
