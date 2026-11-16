# @cielui/tokens

## 0.1.1

### Patch Changes

- d23b09c: The npm pages now link to the docs site, https://docs-ciel-ui.vercel.app, which has a live example of every component. Releases are now published from GitHub Actions instead of a laptop.

## 0.1.0

First public release of the Ciel UI design tokens:

- `tokens.css`: CSS custom properties (`--ds-*`) for colour, typography, spacing, radius, borders, shadows and motion, with a light theme and a `[data-theme="dark"]` theme.
- `tokens.json`: the Tokens Studio source.
- Text, icon and control colours meet WCAG 2.2 AA contrast in both themes; motion durations become 0ms with `prefers-reduced-motion`.
