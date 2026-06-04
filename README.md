# mm-localize-kit

**mm-localize-kit** is a TypeScript-first open-source toolkit for developers building Myanmar-language websites, e-commerce systems, education platforms, CRMs, content tools, and online shop workflows. The project focuses on practical localization utilities that repeatedly appear in Myanmar software projects: Unicode and Zawgyi detection, Unicode cleanup, Myanmar phone validation, MMK formatting, Burmese numeral conversion, date formatting, township helpers, search normalization, form validators, and a CLI for cleaning text datasets.

> This repository is intended to be a real, maintainable open-source project. It should not be represented as widely adopted until usage exists. The first goal is to ship a useful MVP, invite feedback from Myanmar developers, and build a transparent maintenance record.

## Why this project exists

Myanmar-language applications often need the same small but important utilities. Developers may need to normalize mixed text before search, accept both Burmese and Latin digits in phone fields, format prices in MMK, prepare datasets from spreadsheets, or validate localized forms in React and Next.js. Existing libraries solve parts of this problem, especially Zawgyi detection or phone validation, but teams still combine many snippets across projects. **mm-localize-kit** aims to provide a modern, documented, tested, framework-friendly package that brings these workflows together.

## Current status

This repository is currently an **MVP scaffold**. It includes working utilities, tests, examples, community files, and a roadmap, but it should be improved with real-world datasets, accuracy benchmarks, and community review before any claim of broad adoption.

| Area | MVP support | Notes |
| --- | --- | --- |
| Unicode/Zawgyi detection | Heuristic detector | Future versions should benchmark against labeled data and may integrate mature detectors. |
| Unicode normalization | Yes | NFC normalization, whitespace cleanup, optional zero-width-space cleanup. |
| Myanmar phone validation | Yes | Supports Burmese digits and common mobile/fixed-line shapes; operator mapping needs ongoing review. |
| MMK formatting | Yes | Supports English or Myanmar numerals and configurable labels. |
| Burmese numerals | Yes | Converts ASCII digits and Myanmar digits both ways. |
| Myanmar date formatting | Yes | Uses `Intl.DateTimeFormat` with Myanmar locale support where available. |
| Township/region helpers | Starter dataset | The dataset must be expanded with documented provenance. |
| Search normalization | Yes | Normalizes Unicode, punctuation, whitespace, and digits. |
| React/Next.js validation helpers | Yes | Framework-friendly pure validators. |
| CLI dataset cleanup | Yes | Cleans files for search and dataset preparation. |

## Installation

```bash
npm install mm-localize-kit
# or
pnpm add mm-localize-kit
```

## Quick start

```ts
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
```

## CLI usage

```bash
mm-localize clean ./raw.txt ./clean.txt
mm-localize detect "မင်္ဂလာပါ"
mm-localize phone "+၉၅၉၇၈၄၁၂၃၄၅၆"
```

The CLI is designed for dataset cleanup tasks such as normalizing product names, school records, township columns, or CRM exports before search indexing.

## API overview

| Function | Purpose |
| --- | --- |
| `detectMyanmarEncoding(text)` | Returns `unicode`, `zawgyi`, `mixed`, or `unknown` with confidence metadata. |
| `normalizeUnicode(text, options)` | Applies Unicode composition and configurable whitespace cleanup. |
| `normalizeMyanmarPhoneNumber(phone)` | Converts Burmese digits and international prefixes to local Myanmar format. |
| `isValidMyanmarPhoneNumber(phone)` | Validates common Myanmar mobile and fixed-line formats. |
| `formatMMK(amount, options)` | Formats Myanmar Kyat values with configurable labels and numerals. |
| `toMyanmarNumerals(value)` | Converts ASCII digits to Burmese numerals. |
| `toArabicNumerals(value)` | Converts Burmese numerals to ASCII digits. |
| `formatMyanmarDate(date, options)` | Formats Gregorian dates for Myanmar-language interfaces. |
| `findTownship(query)` | Finds a township from the bundled dataset. |
| `normalizeMyanmarSearchText(text)` | Produces a normalized string for search indexing or matching. |
| `validateMyanmarPhone(value)` | Provides form-friendly validation results. |

## Examples

The repository includes examples for Node.js, React, Next.js, and CLI usage under the `examples/` directory. These examples are intentionally small so developers can copy patterns into real applications.

## Development

```bash
git clone https://github.com/thihanaing1345-svg/mm-localize-kit.git
cd mm-localize-kit
pnpm install
pnpm test
pnpm build
pnpm lint
```

## Accuracy and limitations

The first release uses practical heuristics for some features. It is useful for many application-level workflows, but it is not a replacement for audited national datasets, telecom authority data, or mature Zawgyi machine-learning detectors. Contributions that improve accuracy, benchmarks, and documented data provenance are especially welcome.

## OpenAI Codex for Open Source readiness

This project may become suitable for OpenAI’s Codex for Open Source program if it develops real usage, public maintenance activity, releases, issues, and ecosystem value. A brand-new repository should not claim immediate adoption. The ethical path is to launch the project, publish packages, collect feedback, and apply only when the repository has credible evidence of usefulness or a clear explanation of its underserved ecosystem importance.

## License

This project is released under the **MIT License**. Dataset contributions may require additional provenance notes in `docs/DATA_PROVENANCE.md` before inclusion.
