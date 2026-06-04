# AGENTS.md

This file explains how AI coding agents such as OpenAI Codex should be used in this repository.

## Project mission

`mm-localize-kit` is a real open-source toolkit for Myanmar-language localization and validation. Agents must help improve maintainability, tests, documentation, and developer experience. Agents must not fabricate adoption metrics, fake issues, fake users, fake stars, or misleading release history.

## Preferred agent tasks

AI agents are appropriate for writing tests, improving TypeScript types, adding examples, refactoring utilities, reviewing pull requests, drafting documentation, checking edge cases, and generating benchmark scaffolds. Agents may also help triage issues by reproducing bugs and proposing small, reviewable fixes.

## Guardrails

Do not add Myanmar township, telecom, or language datasets without provenance. Do not copy code or data from incompatible licenses. Do not claim Zawgyi detection accuracy without labeled benchmark data. Do not make broad claims such as “production-proven” unless maintainers provide evidence. Do not introduce runtime dependencies unless the benefit is clear and documented.

## Coding standards

Use strict TypeScript, small pure functions, explicit exported types, and tests for each public utility. Keep browser and Node.js compatibility in mind. Prefer dependency-free implementations for core utilities unless a mature dependency substantially improves correctness.

## Pull request style

Codex-generated pull requests should be small, focused, and easy to review. Each PR should explain the user problem, summarize the implementation, list tests run, and identify any limitations or data assumptions.

## Security and privacy

Do not commit secrets, private datasets, user records, production exports, or personal information. CLI examples should use synthetic sample data only.
