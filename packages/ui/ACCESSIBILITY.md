# Accessibility

## What is tested

| Layer                    | Command                         | What it checks                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Story tests, light theme | `pnpm test:stories`             | Every story in real Chromium. axe-core runs the WCAG 2.0, 2.1 and 2.2 A/AA rules plus best practices, colour contrast and target size included, and fails on any violation. `play` functions cover keyboard and focus behaviour.                             |
| Story tests, dark theme  | `pnpm test:stories`             | The same stories again with `data-theme="dark"`                                                                                                                                                                                                              |
| Token contrast audit     | `pnpm test:unit`                | `src/test/tokenContrast.test.ts` reads `tokens.css` and checks every text, icon and fill pairing the components use, in both themes                                                                                                                          |
| Hover audit              | `pnpm audit:hover`              | Moves the real mouse over every interactive element of every story (light and dark) and checks text (axe, 4.5:1) and icon-only controls (3:1) in the hover state. The story tests can't: simulated hover never triggers CSS `:hover`. Build Storybook first. |
| Unit tests               | `pnpm test:unit`                | State logic (controlled and uncontrolled), calendar grids for every `weekStartsOn`, `ref` forwarding                                                                                                                                                         |
| Docs site audit          | `pnpm --filter docs audit:a11y` | axe on every docs page and the 404 page (46 routes) in both themes, with code panels expanded; fails if a page does not load. Start the site first.                                                                                                          |

The interaction tests cover:

- focus trap and focus return in DialogBox
- Escape returning focus to the trigger in Popover
- roving tabindex with arrow keys, Home and End in TabBar and Menu
- accessible names, including localised `labels`

**Why the token audit exists:** axe only checks text it can see, and it skips icons and single-character text (a Badge showing "3"). The audit covers both gaps:

- **text:** 4.5:1 (WCAG 1.4.3)
- **icons and indicators:** 3:1 (WCAG 1.4.11)

## Colour changes

Every changed value keeps its original in `packages/tokens/tokens.json` (`$extensions.a11y`) and is marked `a11y:` in the generated `tokens.css`.

### Light theme

| Use                                       | Token                                                    | Was                                      | Now                                                 |
| ----------------------------------------- | -------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------- |
| Placeholder, hint and empty-state text    | `text-placeholder`                                       | `#8d9199` (3.16:1)                       | `#73767d` (4.55:1)                                  |
| Error text                                | `text-error`                                             | `#f04438` (3.76:1)                       | `#d83d32` (4.53:1)                                  |
| Success text                              | `text-success`                                           | `#12b76a` (2.62:1)                       | `#0d884f` (4.51:1)                                  |
| Warning text                              | `text-warning`                                           | `#f79009` (2.34:1)                       | `#ad6506` (4.52:1)                                  |
| Information text                          | `text-information`                                       | `#2e90fa` (3.23:1)                       | `#2677ce` (4.55:1)                                  |
| Warning icon                              | `icon-warning`                                           | `#f79009` (2.34:1)                       | `#cf7908` (3.29:1; 3.00:1 on its tinted surface)    |
| Success icon                              | `icon-success`                                           | `#12b76a` (2.62:1)                       | `#10a15e` (3.34:1; 3.02:1 on its tinted surface)    |
| Information icon                          | `icon-information`                                       | `#2e90fa` (2.89:1 on its tinted surface) | `#2d8df5` (3.00:1)                                  |
| White text on brand sharp Chip            | new `surface-brand-strong`                               | `#667aff` (3.63:1)                       | `#5a6be0` (4.55:1)                                  |
| White text on Badge status pills          | new `surface-{information,warning,error,success}-strong` | icon colours (2.3–3.8:1)                 | `#2677ce`, `#ad6506`, `#d83d32`, `#0d884f` (≥4.5:1) |
| Hover fill and hover border (both themes) | `surface-action-hover`, `border-action-hover`            | `#667aff` (white text 3.63:1)            | `#4b63ff` (4.64:1)                                  |

### Dark theme (page `#000000`)

| Use                               | Token                                        | Was                          | Now                                                                                                                 |
| --------------------------------- | -------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Links / action text               | `text-action`                                | `#334eff` (3.67:1)           | `#4b63ff` (4.53:1)                                                                                                  |
| Action text, hover                | `text-action-hover`                          | `#0022ff` (2.07:1)           | `#99a7ff` (9.33:1 on black, 5.98:1 on the hover fill `#001499`), lighter than the resting state, as dark UIs expect |
| Action icon, hover                | `icon-action-hover`                          | `#0022ff` (2.07:1)           | `#667aff` (5.79:1 on black, 3.71:1 on the hover fill `#001499`)                                                     |
| Focus ring                        | `border-focus`                               | inherited `#0022ff` (2.07:1) | `#1736ff` (3.01:1)                                                                                                  |
| Sharp Chip fills / status borders | `border-{success,information,error,warning}` | 2.8–4.3:1 with chip text     | `#0b7544`, `#2167b4`, `#bb352c`, `#965705`: ≥4.5:1 with chip text and ≥3.6:1 as borders on black                    |

### Related code changes

- **Badge:** pills and dots use the new `surface-*-strong` fills, not icon colours. The stories use two-character counts so axe checks them.
- **Chip:** `brand` + `sharp` uses `surface-brand-strong`. It no longer borrows `border-action-hover` (now `#4b63ff`, used for hover borders).
- **DateRangeCalendar:** weekday headers use `text-placeholder`, not `text-disabled` (they aren't disabled).
- **Tag:** sets `aria-disabled` when disabled. Disabled components are exempt from contrast requirements.

### Non-text contrast (WCAG 1.4.11 / 1.4.1)

- **Form control outlines** use a new `border-input` token: `#8d9199` (3.16:1) in light, `#5a5e66` (3.23:1) in dark. Covers Field, Input, TextArea, SearchBox, FieldPicker, Checkbox and the Switch track. Cards, tables and dividers keep `border-default` (decorative, so exempt).
- **Error outlines** use `border-input-error`: `#f04438` (3.76:1) in light, `#bb352c` (3.66:1) in dark. The pastel `border-*` status colours remain only as decorative accents (Chips), where text carries the meaning.
- **Checkbox `error`** also doubles the outline weight, so the state doesn't rely on colour alone (WCAG 1.4.1).
- **Pagination dots** use a new `surface-indicator` token: `#8d9199` (3.16:1) in light, `#5a5e66` (3.23:1) in dark. They used `surface-default`, so the unselected dots were invisible in both themes.
- **Selectable Menu items** show a tick as well as the filled background, so selection doesn't rely on colour alone.

### Motion (WCAG 2.3.3)

- Transitions use the `--ds-motion-*` tokens. With `prefers-reduced-motion: reduce`, `tokens.css` sets every duration to `0ms`, so hover, open and slide changes happen instantly.
- The Loader keeps turning with reduced motion (it shows that something is happening), but slowly and steadily: one turn every 3 seconds.

### Interaction patterns

- **SelectMenu**: WAI-ARIA menu button. Focus moves into the menu on open and back to the button on close; items are `menuitemradio` with `aria-checked`.
- **SearchBox with suggestions**: the input is a `combobox` (`aria-expanded`, `aria-controls`, `aria-autocomplete="list"`). Escape, picking an option, Tab away or a click outside closes the list.
- **Expander, AccordionProgressive, Carousel**: hidden content (a closed panel, off-screen slides) is `inert`, so Tab and screen readers skip it.
- **AIChat**: the conversation is a focusable `role="log"`, so keyboard users can scroll it.

**Before/after screenshots and the original values are in [DESIGN-CHANGES.md](DESIGN-CHANGES.md)**, so any change can be compared or reverted.

## Token source

`packages/tokens/tokens.json` (Tokens Studio format) is the source of truth, and `tokens.css` is generated from it by `pnpm --filter @acme/tokens build`. The `@acme/tokens` test fails if `tokens.css` is out of date. The tripon-ai repo still has the original, pre-a11y `tokens.json`. Don't copy its files over these; the token audit and story tests would fail.
