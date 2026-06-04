# Contributing to mm-localize-kit

Thank you for considering a contribution. This project aims to become a practical, trusted localization toolkit for Myanmar-language software. Contributions are welcome from developers, language experts, QA testers, documentation writers, designers, and maintainers of Myanmar websites or apps.

## Development principles

The project should remain useful, transparent, and maintainable. New features should include tests, documentation, and examples when possible. Dataset changes should include source notes and should avoid copying data from incompatible or unclear licenses.

| Contribution type | Expected evidence |
| --- | --- |
| Utility function | Tests, documentation, and realistic examples. |
| Dataset update | Source, license/provenance note, and reviewable diff. |
| Validation rule | Examples of valid and invalid inputs. |
| Bug fix | Reproduction test or clear explanation. |
| Documentation | Clear developer-focused wording and runnable snippets. |

## Local setup

```bash
pnpm install
pnpm test
pnpm build
pnpm lint
```

## Pull request checklist

Before opening a pull request, please make sure tests pass, TypeScript builds successfully, and public APIs are documented. If your change affects Myanmar-specific rules, include examples that show why the rule is correct.

## Dataset contributions

Township, region, telecom, and localization datasets must be handled carefully. Please include a short provenance note describing where the data came from, whether it is public, and whether it can be redistributed under this project’s license. If provenance is unclear, open an issue first instead of submitting the dataset directly.

## Community expectations

Please be respectful, patient, and specific. Myanmar localization can involve language, encoding, and historical compatibility issues. Disagreements should be resolved with examples, references, and tests rather than personal criticism.
