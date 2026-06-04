# Project Plan

## Suitability for OpenAI Codex for Open Source

`mm-localize-kit` is a legitimate open-source project idea because it addresses practical localization needs for Myanmar-language software. It could support developers building e-commerce systems, education products, CRMs, online shops, content platforms, and public-service tools. The project has a clear developer audience and an underserved localization niche.

However, a brand-new repository should not assume immediate qualification for OpenAI’s Codex for Open Source program. OpenAI’s public program page says core maintainers or maintainers of widely used public projects should apply, and it also invites projects with ecosystem importance to explain their case.[1] The program terms state that OpenAI may consider repository usage, ecosystem importance, evidence of active maintenance, maintainer role or permissions, and program capacity.[2] Therefore, the honest assessment is that the project should first build a public maintenance history, release cadence, user feedback, npm downloads, and community evidence before applying, unless the application clearly explains that the project is new but addresses an important underserved ecosystem need.

| Criterion | Current MVP status | What to improve before applying |
| --- | --- | --- |
| Public repository | Ready once pushed to GitHub | Keep it public and documented. |
| Active maintenance | Not yet proven | Ship releases, respond to issues, maintain a changelog. |
| Usage/adoption | Not yet proven | Track npm downloads, GitHub traffic, stars, forks, issues, and real user feedback. |
| Ecosystem importance | Plausible | Gather testimonials from Myanmar developers and projects. |
| Responsible AI use | Strong plan | Use Codex for tests, reviews, docs, security, and release automation. |

## Recommended tech stack

The recommended stack is **TypeScript**, **Node.js 18+**, **Vitest**, **ESLint**, **GitHub Actions**, and **npm** publishing. TypeScript is the best fit because the target users include web, React, Next.js, Node.js, and CLI developers. The package should use ESM, strict typing, small dependency-free utilities, and exported submodules where useful.

| Layer | Recommendation | Reason |
| --- | --- | --- |
| Language | TypeScript | Strong types improve developer confidence and framework integration. |
| Runtime | Node.js 18+ | Modern ESM and stable `Intl` support. |
| Tests | Vitest | Fast TypeScript-friendly test runner. |
| Linting | ESLint with TypeScript plugin | Maintains code quality for contributors. |
| Package manager | pnpm | Fast installs and reproducible lockfiles. |
| CI | GitHub Actions | Standard OSS workflow for tests, linting, and build checks. |
| Publishing | npm with provenance | Easy adoption by JavaScript, React, and Next.js developers. |
| Docs site | VitePress or Docusaurus later | Dedicated docs once API stabilizes. |

## MVP feature list

The MVP should include Unicode and Zawgyi detection, Unicode normalization, Myanmar phone validation, MMK currency formatting, Burmese numeral conversion, Myanmar date formatting, a starter township and region helper dataset, Myanmar search normalization, React and Next.js form validation helpers, a CLI command for cleaning text datasets, examples, tests, and CI.

## Repository structure

```text
mm-localize-kit/
  src/
    text/        Unicode, Zawgyi, and normalization helpers
    phone/       Myanmar phone validation and parsing
    currency/    MMK formatting
    numerals/    Burmese numeral conversion
    date/        Myanmar date formatting
    geo/         Township and region helpers
    search/      Search normalization
    react/       Form validation helpers
    cli/         CLI entrypoint
  tests/         Vitest test cases
  examples/      React, Next.js, Node.js, and CLI examples
  data/          Starter sample datasets
  docs/          Project, roadmap, launch, publishing, and application plans
  .github/       Issue templates, PR template, CI workflow
```

## References

[1]: https://developers.openai.com/community/codex-for-oss "OpenAI Developers: Codex for Open Source"
[2]: https://developers.openai.com/codex/codex-for-oss-terms "OpenAI Developers: Codex for Open Source Program Terms"
[3]: https://openai.com/form/codex-open-source-fund/ "OpenAI: Codex Open Source Fund"
