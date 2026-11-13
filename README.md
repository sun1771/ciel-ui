# acme-ui

> Working name — `@acme/*` is a placeholder scope, to be renamed before the first publish.

A React 19 component library (34 components, 47 icons, design tokens) with a Storybook workbench and a Next.js docs site.

## Repository layout

| Path | Package | What |
|---|---|---|
| `packages/ui` | `@acme/ui` | Components (CSS Modules + `--ds-*` tokens) |
| `packages/icons` | `@acme/icons` | Icon components |
| `packages/tokens` | `@acme/tokens` | `tokens.css` — CSS custom properties, light + `[data-theme="dark"]` |
| `apps/docs` | `docs` (private) | Next.js 16 preview / docs site |

## Getting started

Requires Node 20+ and pnpm (`corepack enable pnpm`).

```bash
pnpm install
pnpm dev          # docs site at http://localhost:3000/preview
```

## Scripts (run from the repo root via Turborepo)

| Command | Does |
|---|---|
| `pnpm dev` | Run the docs site |
| `pnpm build` | Build every package/app |
| `pnpm lint` | ESLint (incl. `jsx-a11y`, `react-hooks`) |
| `pnpm typecheck` | `tsc --noEmit` in every package |
| `pnpm format` | Prettier |

## Using the library (preview)

```tsx
import '@acme/tokens/tokens.css'
import { Button } from '@acme/ui'
import { Search } from '@acme/icons'
```

## License

MIT
