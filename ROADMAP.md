# Roadmap

This roadmap prioritizes correctness, practical developer experience, and transparent maintenance. It intentionally avoids fake adoption claims and focuses on work that can make the project useful to real Myanmar-language web and app teams.

## Near term: v0.1.x

| Area | Planned work | Why it matters |
| --- | --- | --- |
| Text handling | Add more Unicode/Zawgyi fixture cases and document limitations | Developers need predictable behavior before using detection in import pipelines |
| Phone validation | Expand operator-prefix tests and document landline scope separately | Myanmar products often collect phone numbers during checkout and registration |
| Township data | Replace sample dataset with source-reviewed data and provenance notes | Location helpers need traceable maintenance, not unsourced copying |
| CLI | Add `--json`, `--check`, and output-file options | Data teams need CI-friendly dataset cleanup commands |
| Documentation | Add recipes for e-commerce, education platforms, CRMs, and search | Practical examples help adoption more than abstract APIs |

## Mid term: v0.2.x

| Area | Planned work | Why it matters |
| --- | --- | --- |
| Framework integration | Add examples for React Hook Form, Zod, and Next.js server actions | Developers frequently need validation in existing form stacks |
| Browser support | Publish a static demo and documentation site | Users should be able to test formatting and normalization behavior visually |
| Testing | Add property-style tests for numeral and whitespace normalization | Utility packages should be boring, deterministic, and safe |
| Packaging | Add release automation after the manual v0.1.0 release proves stable | Automation should follow working maintenance practices, not precede them |

## Longer term

The project can become a shared localization layer for Myanmar web development if maintainers gather real bug reports, adopt clear data governance, and build compatibility examples with popular stacks. Long-term ideas include locale-aware sorting experiments, improved transliteration helpers, more complete region/township datasets, and documentation in both English and Myanmar language.
