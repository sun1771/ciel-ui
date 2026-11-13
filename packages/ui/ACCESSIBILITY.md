# Accessibility

## What is tested

Every Storybook story runs as a test in real Chromium (`pnpm test:stories`):

- **axe-core** checks the rendered story. Any violation fails the test (`parameters.a11y.test = 'error'`), except colour contrast (see below).
- **Interaction tests** (`play` functions) cover keyboard and focus behaviour. They include:
  - focus trap and focus return in DialogBox
  - Escape returning focus to the trigger in Popover
  - roving tabindex with arrow keys, Home and End in TabBar and Menu
  - accessible names, including localised `labels`

Unit tests in jsdom (`pnpm test:unit`) cover state logic: controlled vs. uncontrolled behaviour, calendar grids for every `weekStartsOn`, and `ref` forwarding.

## Known issues: colour contrast (design tokens)

The colour-contrast rule is **turned off in automated runs only**. The Storybook Accessibility panel still reports it. These colours are below the WCAG 2.2 AA minimum of 4.5:1 for normal text. Fixing them means changing palette tokens, which is a design decision.

| Where it shows                         | Token                                    | Colour    | Ratio on white | Nearest compliant shade |
| -------------------------------------- | ---------------------------------------- | --------- | -------------- | ----------------------- |
| Placeholder, hint and empty-state text | `--ds-mapped-text-placeholder`           | `#8d9199` | 3.16:1         | `#73767d` (4.55:1)      |
| Error messages                         | `--ds-mapped-text-error`                 | `#f04438` | 3.76:1         | `#d83d32` (4.53:1)      |
| Snackbar success title                 | `--ds-mapped-text-success`               | `#12b76a` | 2.62:1         | `#0d884f` (4.51:1)      |
| White text on brand "sharp" chips      | `--ds-brand-sharp-blue-300` (background) | `#667aff` | 3.63:1         | `#5a6be0` (4.55:1)      |
| Calendar weekday headers (Su, Mo, …)   | `--ds-mapped-text-disabled`              | `#aaadb3` | 2.25:1         | `#74767a` (4.55:1)      |

Notes:

- **Disabled text** (`--ds-mapped-text-disabled`) is exempt from WCAG contrast rules. The calendar weekday headers aren't disabled, though; they borrow that token. A code-only fix is to give them a readable token such as `--ds-mapped-text-body`.
- The placeholder colour is also `--ds-mapped-icon-default`. Icons need only 3:1 (WCAG 1.4.11), which `#8d9199` meets, so changing the text token without changing the icon token is enough.
- Dark-theme values have not been audited yet.

When the tokens are fixed, delete the `color-contrast` exception in `.storybook/preview.tsx` so CI enforces contrast too.
