# @cielui/react

Accessible, themeable React 19 components from [Ciel UI](https://docs-ciel-ui.vercel.app): WCAG 2.2 AA in light and dark themes, ready for React Server Components.

```bash
npm install @cielui/react @cielui/icons @cielui/tokens
```

Import the styles once, at the root of your app (tokens first):

```tsx
import '@cielui/tokens/tokens.css'
import '@cielui/react/styles.css'
```

Then use the components:

```tsx
import { Button } from '@cielui/react'
import { ArrowRight } from '@cielui/icons'

export function Book() {
  return <Button iconRight={<ArrowRight size={20} />}>Book</Button>
}
```

Dark mode: set `data-theme="dark"` on `<html>`. Theming, accessibility notes and a live example of every component: see the [docs](https://docs-ciel-ui.vercel.app). Source code is on [GitHub](https://github.com/sun1771/ciel-ui).

- React 19 is a peer dependency. ESM only, tree-shakeable.
- Fonts: the tokens name Inter and Poppins; load them in your app or point `--ds-brand-font-family-*` at your own.

MIT licence.
