# Usage Guide

This guide shows how to use **mm-localize-kit** in practical Myanmar-language applications. The package is intentionally modular, so teams can adopt only the helpers they need.

## Text normalization

```ts
import { detectMyanmarEncoding, normalizeUnicode } from 'mm-localize-kit/text';

const raw = '  မင်္ဂလာပါ\nရန်ကုန်  ';
const cleaned = normalizeUnicode(raw);
const encoding = detectMyanmarEncoding(cleaned);
```

The v0.1.0 detection logic is heuristic. It is useful for flagging suspicious records during data cleanup, but it should not be treated as a perfect migration engine.

## Phone validation

```ts
import { normalizeMyanmarPhoneNumber, isValidMyanmarPhoneNumber } from 'mm-localize-kit/phone';

const phone = normalizeMyanmarPhoneNumber('+၉၅၉၇၈၄၁၂၃၄၅၆');
if (!isValidMyanmarPhoneNumber(phone)) {
  throw new Error('Please enter a valid Myanmar mobile number.');
}
```

## Currency and numerals

```ts
import { formatMMK } from 'mm-localize-kit/currency';
import { toMyanmarNumerals } from 'mm-localize-kit/numerals';

formatMMK(125000, { symbol: 'ကျပ်', useMyanmarNumerals: true });
toMyanmarNumerals('Invoice 2026-001');
```

## Search normalization

```ts
import { normalizeMyanmarSearchText } from 'mm-localize-kit/search';

const query = normalizeMyanmarSearchText('  Order-၁၂၃၊ မင်္ဂလာပါ!  ');
```

Search normalization converts Myanmar numerals to ASCII digits, lowers English text, removes common punctuation noise, and collapses whitespace. It is designed as a preprocessing helper for application-specific search indexes.

## React and Next.js forms

```tsx
import { validateMyanmarPhone, requireMyanmarText } from 'mm-localize-kit/react';

const phoneResult = validateMyanmarPhone(form.phone);
const nameResult = requireMyanmarText(form.customerName);
```

These functions are framework-neutral result objects, so they can be used with React Hook Form, Formik, Zod refinements, server actions, or custom validation code.

## CLI cleanup

```bash
pnpm build
node dist/cli/index.js clean examples/cli/raw.txt
node dist/cli/index.js clean examples/cli/raw.txt /tmp/mm-localize-clean.txt
node dist/cli/index.js detect "မင်္ဂလာပါ"
node dist/cli/index.js phone "+၉၅၉၇၈၄၁၂၃၄၅၆"
```

The CLI is intentionally simple in v0.1.0. It currently supports file-based `clean`, `detect`, and `phone` commands. Planned improvements include documented stdin support, JSON reports, safer output-file options, and stricter check-only mode for CI pipelines.
