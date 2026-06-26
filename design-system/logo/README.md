# TripOn AI — Brand Logo

The TripOn AI brand mark, shipped as four hand-tuned SVGs at the icon size
scale (16 / 20 / 24 / 32). The artwork is **stored verbatim** — never
recreated, re-drawn, or re-coloured in code.

## Files

```
logo/
├── tripon-logo-16.svg   # raw brand SVG (verbatim, source of truth)
├── tripon-logo-20.svg
├── tripon-logo-24.svg
├── tripon-logo-32.svg
├── Logo.tsx             # React wrapper — loads the matching SVG as an <img>
├── types.ts             # LogoProps
├── index.ts             # barrel
└── README.md            # this file
```

## Why a separate module (not icons / graphics)?

- **icons/** are single-color components driven by `currentColor`.
- **graphics/** are full-color illustrations inlined as JSX paths.
- **logo/** is the brand mark: full-color, fixed artwork that must not change.
  Each size is a distinct hand-tuned drawing (not a scaled copy), so the raw
  SVGs are kept as the source of truth and loaded as an `<img>`. Next emits
  each statically-imported `.svg` as a static asset, so no `public/` copy is
  needed.

## Usage

```tsx
// main repo (tripon-ai)
import { Logo } from '@/app/design-system/logo'

// preview repo (test_rendered)
import { Logo } from '@/design-system/logo'

<Logo />              {/* defaults to size 24 */}
<Logo size={32} />
<Logo size={16} alt="" />   {/* alt="" marks it decorative */}
```

## Props (`LogoProps`)

| Prop      | Type                       | Default       | Notes                                  |
|-----------|----------------------------|---------------|----------------------------------------|
| `size`    | `16 \| 20 \| 24 \| 32`     | `24`          | Picks the matching hand-tuned SVG.     |
| `alt`     | `string`                   | `'TripOn AI'` | Accessible name; pass `''` if decorative. |
| `className` | `string`                 | —             | Forwarded to the `<img>`.              |
| …rest     | `<img>` attributes         | —             | `src` / `width` / `height` are managed. |
