# Ciel UI

A React 19 component library (38 components, 48 icons, design tokens) with a Storybook workbench and a Next.js docs site.

**Docs and live examples:** https://docs-ciel-ui.vercel.app

```bash
npm install @cielui/react @cielui/icons @cielui/tokens
```

## Repository layout

| Path              | Package          | What                                                                 |
| ----------------- | ---------------- | -------------------------------------------------------------------- |
| `packages/ui`     | `@cielui/react`  | Components (CSS Modules + `--ds-*` tokens)                           |
| `packages/icons`  | `@cielui/icons`  | Icon components                                                      |
| `packages/tokens` | `@cielui/tokens` | `tokens.json` (source) → `tokens.css`, light + `[data-theme="dark"]` |
| `apps/docs`       | `docs` (private) | Next.js 16 preview / docs site                                       |

## Getting started

Requires Node 20+ and pnpm (`corepack enable pnpm`).

```bash
pnpm install
pnpm dev          # docs site at http://localhost:3000
```

## Scripts (run from the repo root)

| Command               | Does                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`            | Run the docs site at http://localhost:3000 (uses package **source**, so edits hot-reload)                                                                       |
| `pnpm build`          | Build every package (`packages/*/dist`) and the docs site                                                                                                       |
| `pnpm lint`           | ESLint (incl. `jsx-a11y`, `react-hooks`)                                                                                                                        |
| `pnpm typecheck`      | `tsc --noEmit` in every package                                                                                                                                 |
| `pnpm check:packages` | Pack each package as it would be published and run [publint](https://publint.dev) + [Are The Types Wrong](https://arethetypeswrong.github.io)                   |
| `pnpm smoke`          | Install the packed packages into a fresh Next.js app, build it, and check SSR, CSS, types and tree-shaking                                                      |
| `pnpm test`           | Unit tests + every story in Chromium (light and dark), with axe and coverage                                                                                    |
| `pnpm storybook`      | Storybook at http://localhost:6006                                                                                                                              |
| `pnpm audit:hover`    | Hover every interactive element of every story with the real mouse (light and dark) and check contrast. Run `pnpm --filter @cielui/react build-storybook` first |
| `pnpm format`         | Prettier                                                                                                                                                        |

Run `pnpm build` before `check:packages` and `smoke`.

## Contributing and releases

- **CI** (`.github/workflows/ci.yml`) runs on every pull request and on `main`. It runs format, lint and typecheck; checks that `tokens.css` matches `tokens.json`; runs the unit and story tests with coverage thresholds; then builds, runs the package checks and the smoke test, the hover contrast audit, and finally the docs accessibility audit.
- **Changesets:** a PR that changes a published package adds a changeset with `pnpm changeset` (see `.changeset/README.md`). The three packages share one version number.

## Docs site (`apps/docs`)

The docs site has a landing page, guides (Getting started, Theming, Accessibility), design tokens, an icon gallery, a page per component with live examples and generated props tables, and the travel recipes.

- **Add a component page:** add an entry to `apps/docs/content/registry.ts` and its examples to `apps/docs/examples/<slug>/`. `scripts/codegen.mjs` (run automatically by `dev` and `build`) pairs examples with their source code, generates props tables from the TypeScript types, and fails if the registry and the files disagree.
- **Accessibility audit:** `pnpm --filter docs build && pnpm --filter docs start`, then `pnpm --filter docs audit:a11y`.

## Using the library

```bash
npm install @cielui/react @cielui/icons @cielui/tokens
```

Import the design tokens and the component styles once, at your app root:

```tsx
import '@cielui/tokens/tokens.css'
import '@cielui/react/styles.css'
```

Then use components anywhere:

```tsx
import { Button, Card, CardHeader } from '@cielui/react'
import { Search } from '@cielui/icons'
```

- **React 19** is a peer dependency. Packages are **ESM only**.
- **Server Components:** interactive components carry `'use client'`, so they can be rendered from Server Components (e.g. Next.js App Router) without wrappers.
- **Tree-shaking:** each component is its own module, so bundlers drop the ones you don't import.
- **Theming:** components read `--ds-*` CSS custom properties. Set `data-theme="dark"` on `<html>` for the dark theme, or override variables to rebrand.
- **Localisation:** components with built-in text accept a `labels` prop, e.g. `<DialogBox labels={{ close: 'Schließen' }} />`.
- **Controlled or not:** stateful components work on their own from a `default*` prop (`defaultChecked`, `defaultValue`, `defaultExpanded`, `defaultPage`, `defaultIndex`, `defaultState`), or take the value plus a change handler when you want to control them.
- **Motion:** transitions use the `--ds-motion-*` tokens and turn off when the user asks for reduced motion.

## How it's built

- `@cielui/react` and `@cielui/icons` are built with Vite (Rolldown) in library mode with `preserveModules`; `tsc` emits declarations, and `scripts/fix-dts-extensions.mjs` makes them resolvable under `nodenext`.
- In the workspace, each package's `exports` points at `src/`; `publishConfig.exports` switches it to `dist/` when packed or published.
- `@cielui/tokens`: `tokens.json` is the source of truth. `pnpm --filter @cielui/tokens build` (part of `pnpm build`) generates `tokens.css`, and `pnpm test` fails if the committed `tokens.css` is stale. Don't edit `tokens.css` by hand.
- `apps/docs/recipes/` holds domain-specific examples (the travel cards and pickers) built from the generic components. They are not part of the published packages.

## License

MIT
