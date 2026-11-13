# Accessibility

## What is tested

Every Storybook story runs as a test in real Chromium (`pnpm test:stories`):

- **axe-core** checks the rendered story. Any violation fails the test (`parameters.a11y.test = 'error'`), including colour contrast.
- **Interaction tests** (`play` functions) cover keyboard and focus behaviour. They include:
  - focus trap and focus return in DialogBox
  - Escape returning focus to the trigger in Popover
  - roving tabindex with arrow keys, Home and End in TabBar and Menu
  - accessible names, including localised `labels`

Unit tests in jsdom (`pnpm test:unit`) cover state logic: controlled vs. uncontrolled behaviour, calendar grids for every `weekStartsOn`, and `ref` forwarding.

## Colour contrast

Contrast is enforced: any text below WCAG 2.2 AA (4.5:1) fails CI. These token values were changed to pass (light theme):

| Where it shows                         | Token                                  | Was                | Now                |
| -------------------------------------- | -------------------------------------- | ------------------ | ------------------ |
| Placeholder, hint and empty-state text | `--ds-mapped-text-placeholder`         | `#8d9199` (3.16:1) | `#73767d` (4.55:1) |
| Error messages                         | `--ds-mapped-text-error`               | `#f04438` (3.76:1) | `#d83d32` (4.53:1) |
| Success text (e.g. Snackbar title)     | `--ds-mapped-text-success`             | `#12b76a` (2.62:1) | `#0d884f` (4.51:1) |
| Warning text                           | `--ds-mapped-text-warning`             | `#f79009` (2.34:1) | `#ad6506` (4.52:1) |
| Information text                       | `--ds-mapped-text-information`         | `#2e90fa` (3.23:1) | `#2677ce` (4.55:1) |
| White text on brand "sharp" Chip       | new `--ds-mapped-surface-brand-strong` | `#667aff` (3.63:1) | `#5a6be0` (4.55:1) |

Related code changes:

- **Icons keep their colours.** Only the text tokens changed. Meaningful icons need 3:1 (WCAG 1.4.11). Default (3.16:1), error (3.76:1) and information (3.23:1) icons meet it. **Warning (`#f79009`, 2.34:1) and success (`#12b76a`, 2.62:1) icons don't** (see follow-ups). axe doesn't check icon contrast, so the test suite can't catch this.
- **Chip:** `brand` + `sharp` uses the new `--ds-mapped-surface-brand-strong` token. It no longer borrows `--ds-mapped-border-action-hover`, which stays `#667aff` for hover borders.
- **DateRangeCalendar:** weekday headers use `--ds-mapped-text-placeholder`. They used to use `--ds-mapped-text-disabled`, which is meant for disabled UI only.
- **Tag:** sets `aria-disabled` when disabled, so assistive tech knows the Tag is inactive. Disabled components are exempt from contrast requirements.

### Follow-ups

- `packages/tokens/tokens.css` was edited by hand (each change is marked `a11y:`). Copy these values into the token source (`tokens.json`), or the next regeneration will revert them.
- `--ds-mapped-icon-warning` and `--ds-mapped-icon-success` are below 3:1 for icons. Darken them, or pair those icons with text that carries the meaning (as Snackbar does with its title).
- The **dark theme** hasn't been audited yet. Stories are tested in the light theme only.
