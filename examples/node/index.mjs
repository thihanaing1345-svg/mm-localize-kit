import {
  detectMyanmarEncoding,
  formatMMK,
  normalizeMyanmarPhoneNumber,
  normalizeMyanmarSearchText,
  toMyanmarNumerals
} from 'mm-localize-kit';

console.log(detectMyanmarEncoding('မင်္ဂလာပါ'));
console.log(normalizeMyanmarPhoneNumber('+၉၅၉၇၈၄၁၂၃၄၅၆'));
console.log(formatMMK(125000, { symbol: 'ကျပ်', useMyanmarNumerals: true }));
console.log(toMyanmarNumerals('2026'));
console.log(normalizeMyanmarSearchText(' Order-၁၂၃၊ မင်္ဂလာပါ! '));
