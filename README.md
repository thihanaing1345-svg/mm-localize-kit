# mm-localize-kit

**mm-localize-kit** is a small TypeScript toolkit for Myanmar-language web and app projects.

It focuses on everyday localization problems that Myanmar developers often handle manually: checking Myanmar text, normalizing user input, validating local phone numbers, formatting MMK amounts, converting Burmese numerals, preparing text for search, and cleaning simple text datasets from the command line.

This project is still early. It is not presented as popular, production-proven, or complete. The goal is to build a useful, well-tested, community-maintained package around real Myanmar localization needs.

## Why this exists

Generic i18n libraries are useful for translations, pluralization, and locale-aware formatting, but Myanmar applications often need additional local rules. A checkout form may need to accept Myanmar numerals in a phone number. A search box may need to normalize mixed English and Myanmar punctuation. A dataset imported from an old system may contain inconsistent spacing or legacy-encoding artifacts. These problems are small individually, but they appear often in e-commerce, education, CRM, media, and internal business tools.

**mm-localize-kit** collects these utilities in one package so developers can reuse, test, and improve them together instead of rewriting the same helpers in every project.

## Current features

| Area | What is included |
| --- | --- |
| Text helpers | Detect Myanmar script, normalize Unicode text, and return a heuristic Unicode/Zawgyi-style detection result. |
| Phone numbers | Normalize Myanmar numerals and common `+95` formats, validate mobile-like numbers, and parse basic operator hints. |
| MMK currency | Format Myanmar Kyat amounts with English or Myanmar numerals. |
| Burmese numerals | Convert ASCII digits to Myanmar numerals and Myanmar numerals back to ASCII digits. |
| Dates | Format dates for Myanmar-facing interfaces. |
| Search normalization | Normalize mixed Myanmar/English search text for application-level search indexes. |
| Township data | Provide a starter township/region helper dataset with a documented need for community review. |
| Form helpers | Provide small validation helpers that can be used in React, Next.js, or plain TypeScript forms. |
| CLI | Clean Myanmar text files or stdin for simple dataset preparation workflows. |

## Installation

```bash
npm install mm-localize-kit
# or
pnpm add mm-localize-kit
# or
yarn add mm-localize-kit
```

The package targets **Node.js 18+**, uses native ESM, and includes TypeScript declarations.

## Quick start

```ts
import {
  detectMyanmarEncoding,
  formatMMK,
  isValidMyanmarPhoneNumber,
  normalizeMyanmarSearchText,
  toMyanmarNumerals,
} from 'mm-localize-kit';

const text = 'မင်္ဂလာပါ';
const phone = '+၉၅၉၇၈၄၁၂၃၄၅၆';

console.log(detectMyanmarEncoding(text));
console.log(isValidMyanmarPhoneNumber(phone));
console.log(formatMMK(125000, { symbol: 'ကျပ်', useMyanmarNumerals: true }));
console.log(toMyanmarNumerals('Invoice 123'));
console.log(normalizeMyanmarSearchText('  Order-၁၂၃၊ မင်္ဂလာပါ!  '));
```

## Focused imports

You can import from the root package or from focused subpaths.

| Need | Import path |
| --- | --- |
| Text detection and normalization | `mm-localize-kit/text` |
| Phone helpers | `mm-localize-kit/phone` |
| Currency formatting | `mm-localize-kit/currency` |
| Numeral conversion | `mm-localize-kit/numerals` |
| Date formatting | `mm-localize-kit/date` |
| Township and region helpers | `mm-localize-kit/geo` |
| Search normalization | `mm-localize-kit/search` |
| Form validation helpers | `mm-localize-kit/react` |
| Township sample data | `mm-localize-kit/data/townships` |

Example:

```ts
import { normalizeMyanmarPhoneNumber } from 'mm-localize-kit/phone';
import { formatMMK } from 'mm-localize-kit/currency';

const normalizedPhone = normalizeMyanmarPhoneNumber('+၉၅၉၇၈၄၁၂၃၄၅၆');
const price = formatMMK(45000, { symbol: 'ကျပ်', useMyanmarNumerals: true });
```

## CLI usage

Build the package first when running from a local checkout.

```bash
pnpm build
node dist/cli/index.js examples/cli/raw.txt
cat examples/cli/raw.txt | node dist/cli/index.js --stdin
```

The CLI is intentionally minimal in the first release. Future versions should add safer file-output options, JSON reports, and check-only mode for CI pipelines.

## Examples

| Example | Path |
| --- | --- |
| React form validation | `examples/react/MyanmarCheckoutForm.tsx` |
| Next.js product page | `examples/nextjs/app/products/page.tsx` |
| Plain JavaScript usage | `examples/javascript/index.mjs` |
| Browser demo page | `examples/demo/index.html` |
| CLI cleanup example | `examples/cli/README.md` |

## Documentation

| Document | Purpose |
| --- | --- |
| [`docs/USAGE.md`](./docs/USAGE.md) | Practical usage guide. |
| [`docs/API.md`](./docs/API.md) | Public API reference. |
| [`docs/DATA_PROVENANCE.md`](./docs/DATA_PROVENANCE.md) | Dataset source and review policy. |
| [`docs/NPM_PUBLISHING.md`](./docs/NPM_PUBLISHING.md) | npm publishing checklist. |
| [`ROADMAP.md`](./ROADMAP.md) | Planned improvements and maintenance priorities. |

## Development

```bash
git clone https://github.com/thihanaing1345-svg/mm-localize-kit.git
cd mm-localize-kit
pnpm install
pnpm check
```

The combined check runs linting, type checking, tests, and a build.

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Project status and limitations

This is an early `0.1.x` project. Some helpers are intentionally conservative and should be improved with real test cases. In particular, Unicode/Zawgyi detection is heuristic, township data needs careful source review, and phone validation should continue to grow through documented edge cases.

If you use the package and find a case that behaves incorrectly, please open an issue with the input, expected output, and context. Real examples are more useful than broad feature requests.

## Contributing

Contributions are welcome if they make the package more accurate, documented, or easier to use. Good first contributions include failing tests for Myanmar text edge cases, documentation fixes, township data corrections with sources, framework examples, and CLI improvements.

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md), [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md), and [`SECURITY.md`](./SECURITY.md) before contributing.

## License

This project is released under the [MIT License](./LICENSE).
