const MYANMAR_DIGITS = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'] as const;
const ASCII_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const myanmarToAsciiMap = new Map(MYANMAR_DIGITS.map((digit, index) => [digit, ASCII_DIGITS[index]]));
const asciiToMyanmarMap = new Map(ASCII_DIGITS.map((digit, index) => [digit, MYANMAR_DIGITS[index]]));

export function toMyanmarNumerals(input: string | number): string {
  return String(input).replace(/[0-9]/g, digit => asciiToMyanmarMap.get(digit as typeof ASCII_DIGITS[number]) ?? digit);
}

export function toArabicNumerals(input: string | number): string {
  return String(input).replace(/[၀-၉]/g, digit => myanmarToAsciiMap.get(digit as typeof MYANMAR_DIGITS[number]) ?? digit);
}

export function containsMyanmarNumerals(input: string): boolean {
  return /[၀-၉]/.test(input);
}
