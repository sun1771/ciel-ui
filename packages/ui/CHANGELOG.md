# @cielui/react

## 0.1.1

### Patch Changes

- d23b09c: The npm pages now link to the docs site, https://docs-ciel-ui.vercel.app, which has a live example of every component. Releases are now published from GitHub Actions instead of a laptop.
- Updated dependencies [d23b09c]
  - @cielui/icons@0.1.1

## 0.1.0

First public release of Ciel UI: 38 accessible React 19 components, built on `@cielui/tokens` and `@cielui/icons`.

- WCAG 2.2 AA in light and dark themes (`data-theme="dark"`), tested with axe in a real browser.
- Every interactive component works controlled or uncontrolled (`value` / `defaultValue`, `checked` / `defaultChecked`, …).
- Subtle transitions from the `--ds-motion-*` tokens, switched off with reduced motion.
- Ready for React Server Components: interactive components ship with `'use client'`.
- ESM only, tree-shakeable, one stylesheet: `@cielui/react/styles.css`.
