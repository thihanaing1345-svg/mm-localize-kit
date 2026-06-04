import {
  detectMyanmarEncoding,
  formatMMK,
  normalizeMyanmarPhoneNumber,
  normalizeMyanmarSearchText,
  toMyanmarNumerals,
} from '../../dist/index.js';

const customer = {
  name: 'မောင်မောင်',
  phone: '+၉၅၉၇၈၄၁၂၃၄၅၆',
  total: 125000,
  query: ' Order-၁၂၃၊ မင်္ဂလာပါ! ',
};

console.log({
  encoding: detectMyanmarEncoding(customer.name),
  phone: normalizeMyanmarPhoneNumber(customer.phone),
  total: formatMMK(customer.total, { symbol: 'ကျပ်', useMyanmarNumerals: true }),
  orderLabel: toMyanmarNumerals('Order 123'),
  searchKey: normalizeMyanmarSearchText(customer.query),
});
