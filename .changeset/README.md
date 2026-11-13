# Changesets

Every pull request that changes a published package (`@acme/ui`, `@acme/icons`, `@acme/tokens`) adds a changeset:

```bash
pnpm changeset
```

Pick the packages, the bump (patch, minor or major) and write one line for the changelog. Commit the generated `.changeset/*.md` file with the PR.

The three packages share one version number (`fixed` in `config.json`), so "Ciel UI 0.2.0" means the same thing for all of them. While the version is `0.x`, a minor bump may contain breaking changes.

On release, `pnpm changeset version` turns the pending changesets into version bumps and `CHANGELOG.md` entries.
