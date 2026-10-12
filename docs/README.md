# Infrastructure guide

Use this guide to create and maintain an infrastructure repository from this template.

## Define managed targets

1. Create a private repository from this template.
2. Set its package identity and repository URLs.
3. Name each platform, environment, purpose, and owner in the repository README.
4. Put committed declarative inputs under `desired-state/`.
5. Keep live runtime evidence out of Git.

## Validate desired state

Add deterministic checks for the files in the repository. Check syntax, schemas, references, rendered output, and safety rules where they apply.

Keep platform-specific preflight checks in the repository that owns the platform configuration. A successful check does not prove that live infrastructure is healthy.

## Change and rollback

Document promotion and rollback in the owning Operations or workspace repository. Link to the approved procedure.

Do not treat a commit, render, or validation result as approval to deploy. Use the authorized change process for each target.

## Protect data

Keep plaintext secrets, credentials, decrypted state, live-only state, and runtime output out of Git. Review encrypted files before commit. Keep this repository private.

## Validate the repository

Install Node.js 26 or later and npm 12 or later. Run `npm ci`, then run `npm test`.
