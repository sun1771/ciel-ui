# @cielui/icons

The SVG icon components of [Ciel UI](https://github.com/sun1771/ciel-ui), for React 19. Tree-shakeable: only the icons you import are bundled.

```bash
npm install @cielui/icons
```

```tsx
import { Search } from '@cielui/icons'

;<Search size={20} aria-hidden="true" />
```

- `size`: 16, 20, 24 (default) or 32. Each size is drawn for its pixel grid.
- `color`: any CSS colour. The default is `currentColor`, so icons take the text colour.
- Decorative icons: `aria-hidden="true"`. Meaningful ones: `role="img"` and an `aria-label`.

MIT licence.
