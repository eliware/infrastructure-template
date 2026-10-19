# Infrastructure guide

Use this guide to create and maintain an infrastructure repository from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Define managed targets

1. Create a private repository from this template.
2. Set its package identity and repository URLs.
3. Name each platform, environment, purpose, and owner in the repository README.
4. Put committed declarative inputs under `desired-state/`.
5. Keep live runtime records out of Git.

## Validate configuration

Add deterministic checks for repository files. Check syntax, schemas, references, generated output, and safety rules when required.

Keep platform checks in the repository that owns the platform configuration. A passing check does not prove live infrastructure health.

## Change and rollback

Document promotion and rollback in the owning Operations or workspace repository. Link to the approved procedure.

Do not use a commit, output, or validation result as approval to deploy. Use the approved change process for each target.

## Keep data out of Git

Keep plaintext secrets, credentials, decrypted state, live-only state, and runtime output out of Git. Examine encrypted files before commit. Keep this repository private.

## Validate the repository

Install Node.js 26 or later and npm 12 or later. Run `npm ci`, then run `npm test`.
