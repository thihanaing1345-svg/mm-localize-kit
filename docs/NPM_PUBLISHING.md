# npm Package Publishing Plan

The package should be published as `mm-localize-kit` if the name is available. If not, alternatives include `myanmar-web-utils`, `@myanmar-tools/localize-kit`, or `@mm-localize/kit`.

| Step | Action |
| --- | --- |
| 1 | Reserve package name only after the public repository is ready. |
| 2 | Confirm `package.json` metadata, repository URL, license, keywords, and package files. |
| 3 | Run `pnpm lint`, `pnpm test`, and `pnpm build`. |
| 4 | Use `npm publish --access public --provenance` for provenance-backed publishing. |
| 5 | Create a GitHub release with changelog notes and migration guidance. |
| 6 | Monitor npm downloads, issues, and installation feedback. |

Use semantic versioning after `1.0.0`. Before `1.0.0`, breaking API changes may happen but should still be documented clearly in `CHANGELOG.md`.
