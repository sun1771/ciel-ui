# acme-ui

> Working name — `@acme/*` is a placeholder scope, to be renamed before the first publish.

A React 19 component library (34 components, 47 icons, design tokens) with a Storybook workbench and a Next.js docs site.

## Repository layout

| Path              | Package          | What                                                                |
| ----------------- | ---------------- | ------------------------------------------------------------------- |
| `packages/ui`     | `@acme/ui`       | Components (CSS Modules + `--ds-*` tokens)                          |
| `packages/icons`  | `@acme/icons`    | Icon components                                                     |
| `packages/tokens` | `@acme/tokens`   | `tokens.css` — CSS custom properties, light + `[data-theme="dark"]` |
| `apps/docs`       | `docs` (private) | Next.js 16 preview / docs site                                      |

## Getting started

Requires Node 20+ and pnpm (`corepack enable pnpm`).

```bash
pnpm install
pnpm dev          # docs site at http://localhost:3000/preview
```

## Scripts (run from the repo root)

| Command               | Does                                                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`            | Run the docs site (uses package **source**, so edits hot-reload)                                                                              |
| `pnpm build`          | Build every package (`packages/*/dist`) and the docs site                                                                                     |
| `pnpm lint`           | ESLint (incl. `jsx-a11y`, `react-hooks`)                                                                                                      |
| `pnpm typecheck`      | `tsc --noEmit` in every package                                                                                                               |
| `pnpm check:packages` | Pack each package as it would be published and run [publint](https://publint.dev) + [Are The Types Wrong](https://arethetypeswrong.github.io) |
| `pnpm smoke`          | Install the packed packages into a fresh Next.js app, build it, and check SSR, CSS, types and tree-shaking                                    |
| `pnpm format`         | Prettier                                                                                                                                      |

Run `pnpm build` before `check:packages` and `smoke`.

## Using the library

```bash
npm install @acme/ui @acme/icons @acme/tokens
```

Import the design tokens and the component styles once, at your app root:

```tsx
import '@acme/tokens/tokens.css'
import '@acme/ui/styles.css'
```

Then use components anywhere:

```tsx
import { Button, Card, CardHeader } from '@acme/ui'
import { Search } from '@acme/icons'
```

- **React 19** is a peer dependency. Packages are **ESM only**.
- **Server Components:** interactive components carry `'use client'`, so they can be rendered from Server Components (e.g. Next.js App Router) without wrappers.
- **Tree-shaking:** each component is its own module, so bundlers drop the ones you don't import.
- **Theming:** components read `--ds-*` CSS custom properties. Set `data-theme="dark"` on `<html>` for the dark theme, or override variables to rebrand.
- **Localisation:** components with built-in text accept a `labels` prop, e.g. `<DialogBox labels={{ close: 'Schließen' }} />`.

## How it's built

- `@acme/ui` and `@acme/icons` are built with Vite (Rolldown) in library mode with `preserveModules`; `tsc` emits declarations, and `scripts/fix-dts-extensions.mjs` makes them resolvable under `nodenext`.
- In the workspace, each package's `exports` points at `src/`; `publishConfig.exports` switches it to `dist/` when packed or published.
- `apps/docs/recipes/` holds domain-specific examples (the travel cards and pickers) built from the generic components. They are not part of the published packages.

## License

MIT
