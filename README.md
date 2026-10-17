# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/infrastructure-template [![License](https://img.shields.io/github/license/eliware/infrastructure-template)](https://github.com/eliware/infrastructure-template/blob/main/LICENSE) [![CI](https://github.com/eliware/infrastructure-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/infrastructure-template/actions/workflows/ci.yaml)

An Eliware infrastructure repository template for target configuration, validation, rollout, and rollback boundaries.

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
- [Target configuration](#target-configuration)
- [Validation](#validation)
- [Change boundaries](#change-boundaries)
- [Support](#support)
- [Links](#links)
- [License](#license)

## Features

This template starts private infrastructure repositories. Each derived repository defines its managed targets and controls.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Replace the template name, description, URLs, keywords, and sample content.
Run `npm ci` from the repository root.

## Usage

Follow this README and the [user guide](docs/README.md).

## Development

Read [AGENTS.md](AGENTS.md) and [the specifications index](specs/README.md) before you change files.
Keep documents and records in the repository that owns them.

## Testing

Run `npm test` before handoff. It runs the repository checks through `eliware-test`.

## Troubleshooting

Install the required Node.js and npm versions. Run `npm ci` after dependency changes.
For each validation error, inspect the named file and rule.

## Security

Keep credentials, secrets, private data, and runtime state out of Git.
Use only approved secret stores for secret values.

## Managed targets

Name each platform, environment, purpose, and owner in the derived repository.
This template defines no live target.

## Configuration

This template has no runtime settings. Package metadata and `.knit/deploy.yaml` configure repository tools.

## Target configuration

Store committed configuration files under `desired-state/`. Organize them by target and environment.
Keep live status records and operating procedures in their owning repositories.

## Validation

Check syntax, schemas, references, rendered output, and safety rules for the files in the derived repository.
A passing check does not prove live infrastructure health.

## Change boundaries

Link to approved rollout and rollback procedures in the owning Operations or workspace repository.
Do not use a commit or validation result as approval to deploy.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/infrastructure-template)
- [Bug Reports](https://github.com/eliware/infrastructure-template/issues)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
