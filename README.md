# mm-localize-kit

**mm-localize-kit** is a TypeScript-first open-source toolkit for developers building Myanmar-language websites, e-commerce platforms, education products, CRMs, dashboards, and data-cleaning workflows.

Myanmar applications often need practical localization behavior that is not covered by generic internationalization libraries. Teams may need to validate local phone numbers, normalize Myanmar text for search, format MMK prices, convert Burmese numerals, handle Unicode-oriented data pipelines, and clean mixed-language datasets before importing them into production systems. This project provides small, tested utilities for those recurring tasks.

> **Project status:** v0.1.0 is an early public release. The repository is useful as a starter toolkit, but it does not claim broad adoption yet. Feedback, real-world test cases, dataset corrections, and documentation contributions are welcome.

## Features

| Area | Utilities | Current maturity |
| --- | --- | --- |
| Myanmar text | Detect Myanmar script, classify Unicode-like/Zawgyi-like text, normalize whitespace and Unicode composition | MVP heuristic implementation |
| Phone numbers | Normalize, validate, parse, and infer common Myanmar mobile operator prefixes | MVP validation rules |
| MMK currency | Format Myanmar Kyat values with English or Myanmar numerals | Stable small utility |
| Burmese numerals | Convert ASCII digits to Myanmar numerals and back | Stable small utility |
| Dates | Format JavaScript dates for Myanmar-facing interfaces | MVP helper |
| Township data | Search a starter township/region dataset | Sample dataset, needs community review |
| Search | Normalize mixed Myanmar/English search strings | MVP helper |
| React forms | Framework-agnostic validator functions usable in React and Next.js | MVP helper |
| CLI | Clean Myanmar text datasets from files or stdin | MVP command |

## Installation

```bash
pnpm add mm-localize-kit
# or
npm install mm-localize-kit
# or
yarn add mm-localize-kit
```

The package targets **Node.js 18+** and ships as native ESM with TypeScript declaration files.

## Quick start

```ts
import {
  detectMyanmarEncoding,
  formatMMK,
  isValidMyanmarPhoneNumber,
  normalizeMyanmarSearchText,
  toMyanmarNumerals,
} from 'mm-localize-kit';

console.log(detectMyanmarEncoding('မင်္ဂလာပါ'));
console.log(isValidMyanmarPhoneNumber('+၉၅၉၇၈၄၁၂၃၄၅၆'));
console.log(formatMMK(125000, { symbol: 'ကျပ်', useMyanmarNumerals: true }));
console.log(toMyanmarNumerals('Order 123'));
console.log(normalizeMyanmarSearchText('  Order-၁၂၃၊ မင်္ဂလာပါ!  '));
```

## Subpath imports

For smaller imports and clearer code ownership, every utility area has a documented subpath export.

| Use case | Import path |
| --- | --- |
| Text detection and normalization | `mm-localize-kit/text` |
| Phone number helpers | `mm-localize-kit/phone` |
| Currency formatting | `mm-localize-kit/currency` |
| Numeral conversion | `mm-localize-kit/numerals` |
| Date formatting | `mm-localize-kit/date` |
| Township and region helpers | `mm-localize-kit/geo` |
| Search normalization | `mm-localize-kit/search` |
| Form validation helpers | `mm-localize-kit/react` |
| Township sample data | `mm-localize-kit/data/townships` |

## Examples

The repository includes practical examples for common developer workflows.

| Example | Path | Purpose |
| --- | --- | --- |
| React form | `examples/react/MyanmarCheckoutForm.tsx` | Validate checkout phone/name fields |
| Next.js page | `examples/nextjs/app/products/page.tsx` | Format product data for Myanmar users |
| Plain JavaScript | `examples/javascript/index.mjs` | Use utilities without a framework |
| Browser demo page | `examples/demo/index.html` | Show Myanmar/English localization examples |
| CLI cleanup | `examples/cli/README.md` | Clean a text dataset from the terminal |

## CLI usage

After installing globally or running from a built checkout, the CLI can normalize whitespace and prepare text files for downstream processing.

```bash
pnpm build
node dist/cli/index.js examples/cli/raw.txt
cat examples/cli/raw.txt | node dist/cli/index.js --stdin
```

## Documentation

Detailed usage notes are available in the `docs/` folder.

| Document | Description |
| --- | --- |
| `docs/USAGE.md` | Practical guide for text, phone, currency, date, search, React, and CLI usage |
| `docs/API.md` | Public API reference for exported functions |
| `docs/DATA_PROVENANCE.md` | Dataset provenance and review policy |
| `docs/NPM_PUBLISHING.md` | npm publishing plan |
| `docs/PROJECT_PLAN.md` | Open-source project plan and Codex readiness assessment |

## Roadmap

The short-term roadmap focuses on correctness, documentation, and real usage rather than inflated metrics. Planned work includes broader township data review, improved Unicode/Zawgyi handling, more validation cases, browser documentation, and a small documentation site. See [`ROADMAP.md`](./ROADMAP.md) for details.

## Contributing

Contributions are welcome, especially from developers who build Myanmar-language systems in production. Good first contributions include failing test cases, township data corrections with sources, documentation improvements, framework examples, and validation edge cases. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) and [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) before opening issues or pull requests.

## Security

Please do not open public issues for security-sensitive problems. Follow the responsible disclosure process in [`SECURITY.md`](./SECURITY.md).

## License

This project is released under the [MIT License](./LICENSE).
