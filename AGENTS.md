# AGENTS.md

## Project

Repository: eliware/infrastructure-template. Purpose: provide a reusable baseline for private infrastructure repositories.

## Scope and boundaries

Scope: this repository owns the infrastructure template's desired-state layout, directives, and shared repository validation. It does not own live infrastructure, production credentials, rollout execution, or canonical operational procedures. This AGENTS.md applies repository-wide; nearer AGENTS.md instructions apply within subdirectories.

## Layout

Required files and structure: README.md, AGENTS.md, package.json, LICENSE, specs/README.md, specs/directives.yaml, .knit/deploy.yaml, and .github/workflows/ci.yaml. desired-state/ contains committed declarative inputs.

## Development

Before changing files, read the root README.md, applicable AGENTS.md instructions, applicable documentation, and applicable specifications.

This Development guidance applies repository-wide; nearer AGENTS.md instructions apply within subdirectories. Use Node.js 26, npm, and native ESM .mjs modules for repository tooling. Read README.md, applicable specifications, implementation, and tests before changing behavior. Every source and test module must have a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators are valid, including coordinators of coordinators, when each module does only its own responsibility. When a change introduces a distinct responsibility, create a focused submodule with a mirrored test and wire it through its owner; do not add the new responsibility to an existing module. During ordinary review, refactor them when you notice mixed responsibilities. The 100-line source and 200-line test maxima are blocking. Passing them does not prove that a module is cohesive or permit mixed responsibilities.

The required files are README.md, AGENTS.md, package.json, LICENSE, specs/README.md, specs/directives.yaml, .knit/deploy.yaml, and .github/workflows/ci.yaml.

## Validation

Use Node.js 26 with npm. This template has no runtime environment settings or application entrypoint; package metadata is not runtime configuration. Run npm ci after dependency changes and npm test before handoff. CI runs npm ci followed by npm test. Infrastructure-specific deterministic checks belong in the owning derived repository when its desired state defines those checks.

## Security

Keep this repository private. Never commit plaintext secrets, credentials, decrypted runtime state, or machine-specific files. Encrypted secret payloads may be committed.

## Changes

Keep instructions actionable, current, and concise. Project-specific rules may add requirements without weakening shared rules unless authorized. A documented deviation does not waive any convention ID or validation stage. Do not publish, release, deploy, or modify external systems without explicit authorization through the applicable Operations handoff.

## Infrastructure

Manage committed desired state here and keep it distinct from operational procedures and live runtime evidence. Define managed targets, ownership boundaries, deterministic validation, change control, rollback, and secret handling in derived repositories. Keep canonical operating procedures, rollout decisions, rollback records, and live evidence in the owning Operations or workspace repository.

## Private distribution

This repository is private and must remain private. Set package.json private to true. Do not publish an npm package or include npm publication credentials.
