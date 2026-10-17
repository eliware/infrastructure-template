# AGENTS.md

## Project

This repository is `eliware/infrastructure-template`.

It starts repositories for infrastructure configuration.

## Scope and boundaries

Use README.md for repository purpose, scope, and ownership.

## Layout

Use README.md and specs/README.md to find repository files.

## Development

Keep each source and test module focused on one responsibility.

## Validation

Use Node.js 26 or later and npm 12 or later.
Use native ESM for maintained JavaScript modules.
Run `npm test` for aggregate validation.
Run `npm run lint` for lint checks.
Run `npm run audit` for dependency checks.

Run `npm run format` to format files.
Run `npm run format:check` to check formatting.

## Security

Keep credentials, secret values, private data, and runtime state out of Git.

## Changes

Keep changes in this repository.
Use Eliware Operations for approval before external changes.

## Infrastructure

Document managed targets, committed files, checks, change control, and rollback in README.md.

## Private distribution

Limit access to approved Eliware users.
Do not publish npm packages.
