# @cielui/tokens

The design tokens of [Ciel UI](https://docs-ciel-ui.vercel.app): colour, typography, spacing, radius, borders, shadows and motion, as CSS custom properties.

```bash
npm install @cielui/tokens
```

```ts
import '@cielui/tokens/tokens.css'
```

```css
.card {
  padding: var(--ds-alias-spacing-md);
  border-radius: var(--ds-alias-border-radius-lg);
  background: var(--ds-mapped-surface-default);
  color: var(--ds-mapped-text-body);
  transition: box-shadow var(--ds-motion-duration-fast) var(--ds-motion-easing-standard);
}
```

- **Themes:** light by default; `data-theme="dark"` on `<html>` switches the `--ds-mapped-*` colours.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, the `--ds-motion-duration-*` tokens become `0ms`.
- **Source:** `@cielui/tokens/tokens.json` is the Tokens Studio file the CSS is generated from.

MIT licence.
