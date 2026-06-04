# Contributing to mm-localize-kit

Thank you for considering a contribution. The project exists to solve practical Myanmar localization problems for developers, so high-quality bug reports, real-world examples, failing test cases, and documentation improvements are all valuable.

## Development setup

```bash
git clone https://github.com/thihanaing1345-svg/mm-localize-kit.git
cd mm-localize-kit
pnpm install
pnpm check
```

The `pnpm check` command runs linting, type checking, tests, and a production build.

## Contribution workflow

| Step | Action |
| --- | --- |
| 1 | Open or find an issue that explains the problem or proposed improvement. Small documentation fixes may go directly to a pull request. |
| 2 | Create a focused branch such as `fix-phone-validation-edge-case` or `docs-nextjs-example`. |
| 3 | Add or update tests when behavior changes. A localization utility should prefer reproducible fixtures over informal assumptions. |
| 4 | Update documentation when a public API, CLI flag, or dataset changes. |
| 5 | Run `pnpm check` locally before opening the pull request. |
| 6 | Submit a pull request using the template and explain the reasoning, limitations, and any sources used. |

## Dataset contributions

Township, region, and localization datasets need extra care. Please include the source, date accessed, license or permission status, and a short explanation of any manual normalization. Unsourced bulk data may be declined until provenance is clear.

## Coding standards

The codebase uses TypeScript, ESM, Vitest, and ESLint. Public functions should be small, deterministic, documented through examples, and covered by tests. Avoid introducing heavy dependencies unless the benefit is clear and documented.

## Community expectations

Please follow the [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md). Disagreements are expected in localization work, especially around spelling, transliteration, and legacy encoding behavior, but discussions must remain respectful and evidence-based.
