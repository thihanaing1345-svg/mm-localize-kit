# Security Policy

The project is a small localization utility package, but security still matters because it may be used in web forms, data import pipelines, and internal business tools.

## Supported versions

| Version | Supported |
| --- | --- |
| `0.1.x` | Yes |

## Responsible disclosure

If you find a vulnerability, please avoid posting exploit details in a public issue. Instead, open a private security advisory on GitHub if available, or contact the maintainer through the repository owner profile with a concise report.

A useful report should describe the affected function, the input required to reproduce the problem, the impact, and a minimal test case. The maintainer will acknowledge valid reports, investigate them, and publish a fix or mitigation as quickly as practical for a volunteer-maintained project.

## Scope

Security-sensitive issues may include denial-of-service inputs, unsafe CLI file handling, unexpected code execution, dependency vulnerabilities, or validation behavior that could cause downstream applications to trust unsafe data. General correctness bugs should be reported with the normal bug report template.
