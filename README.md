# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

@eliware/infrastructure-template [![License](https://img.shields.io/github/license/eliware/infrastructure-template)](https://github.com/eliware/infrastructure-template/blob/main/LICENSE) [![CI](https://github.com/eliware/infrastructure-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/infrastructure-template/actions/workflows/ci.yaml)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Managed targets](#managed-targets)
- [Configuration](#configuration)
- [Desired state](#desired-state)
- [Validation](#validation)
- [Change boundaries](#change-boundaries)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

This template owns reusable infrastructure repository structure; each derived repository owns its platform-specific desired state and change boundaries.

Package description: An Eliware infrastructure repository template for desired state, validation, rollout, and rollback boundaries. Author: Eliware <eliware@eliware.org>. License: MIT.

An Eliware infrastructure repository template for desired state, validation, rollout, and rollback boundaries. It provides an indexed desired-state surface and shared Node.js repository validation.

## Requirements

Use Node.js 26 and npm. The template is private and must remain private.

## Setup

Create a private repository from this template, replace its package identity and repository URLs, then run npm ci. Add the desired state and deterministic checks for the managed infrastructure.

## Usage

Use desired-state/ for committed declarative inputs. Define the managed targets and environments in a derived repository; this template does not include live infrastructure configuration.

## Development

Read AGENTS.md, specs/README.md, and the applicable shared conventions before changing the template. Keep repository-specific requirements in specs/directives.yaml.

Documentation: [specifications](specs/README.md)

## Testing

Run npm test for aggregate repository validation through eliware-test. CI runs npm ci followed by npm test. Add infrastructure-specific deterministic validation when a derived repository defines the corresponding manifests and schemas.

## Troubleshooting

If validation cannot find Node.js or npm, install Node.js 26 and run npm ci. A passing repository check does not prove that deployed infrastructure is healthy.

## Security

Keep the repository private. Do not commit plaintext secrets, credentials, decrypted runtime state, or live-only state. Encrypted secret payloads may be committed. Review committed inputs for secrets even when they are encrypted.

## Managed targets

A derived repository must identify each managed platform, environment, purpose, and ownership boundary. No live target is configured by this template.

## Configuration

The template has no runtime configuration or environment variables. Package metadata and .knit/deploy.yaml configure repository tooling and synchronization; they are not runtime settings.

## Desired state

Keep committed declarative configuration and deployment inputs in desired-state/, organized by managed target and environment. Keep live runtime evidence and canonical operating procedures in the owning Operations or workspace repository.

## Validation

Run deterministic syntax, schema, reference, render, and safety checks for the desired state present in a derived repository. Keep platform-specific preflights in that repository. A successful render or repository validation does not prove live infrastructure health.

## Change boundaries

Document promotion and rollback procedures in the owning Operations or workspace repository and link to them here. Do not treat a commit, validation pass, or render as authorization to deploy.

## Support

For help or discussion, join the Eliware community:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[license](LICENSE)

## Links

- [Home Page](https://github.com/eliware/infrastructure-template#readme)
- [GitHub repository](https://github.com/eliware/infrastructure-template.git)
- [Eliware](https://eliware.org)
- [GitHub organization](https://github.com/eliware)
- [Discord](https://discord.gg/M6aTR9eTwN)
- [specifications](specs/README.md)
