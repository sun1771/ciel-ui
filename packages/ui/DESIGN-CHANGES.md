# Design changes for accessibility

The accessibility work changed some colours. This page keeps a **visual record of the design before and after**, so you can compare them and go back if needed.

- **Before** = the original design (commit `0569724`, before any colour changes)
- **After** = the current design

Screenshots: `design-changes/before` and `design-changes/after`. To recapture them after a future change:

```bash
pnpm --filter @acme/ui build-storybook
node scripts/design-screenshots.mjs packages/ui/storybook-static packages/ui/design-changes/after
```

## How to go back

The token values live in `packages/tokens/tokens.json`, and `tokens.css` is generated from it. Every changed token keeps its original value there, under `$extensions.a11y.<light|dark>.was`, which is usually a reference such as `{alias.information.default}`. The generated CSS shows the change as an `a11y: was #xxxxxx` comment.

To restore the original look of one token:

1. In `tokens.json`, copy the `was` value back into `$extensions.modes.<light|dark>`.
2. Run `pnpm --filter @acme/tokens build`.

The tables below list every original value. The steps were made in these commits, before the generator existed. They are a record of what changed: reverting the token part of a commit now means editing `tokens.json` as above, not running `git revert`.

| Commit    | Change                                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `398c348` | Text colours (placeholder, error, success, warning, information), brand Chip fill, calendar headers, Tag `aria-disabled`                                      |
| `0ecfe23` | Icon colours, Badge status fills, all dark-theme changes (links, focus ring, sharp Chip fills)                                                                |
| `cd43a5f` | Form-control outlines (`border-input`, `border-input-error`) and the Checkbox error cue                                                                       |
| `c84bd9a` | Pagination dots get 24×24px targets (WCAG 2.2 SC 2.5.8). Was 12×12px, so the dots were closer together                                                        |
| `f86fb78` | Dark-theme hover text and icon (`text-action-hover`, `icon-action-hover`) readable on the hover fill: hovered tabs and accordion headers are lighter blue     |
| `18a14aa` | Hover fill and hover border `#667aff` → `#4b63ff`, so white text on hovered buttons and menu items reaches 4.5:1. Hovered controls are a slightly deeper blue |

Reverting a commit brings back the matching accessibility failures, and the tests will fail again (`src/test/tokenContrast.test.ts` and the story axe checks).

### Original values (light theme)

| Token                                                 | Original                                  | Current                                 | Used by                                                                                                              |
| ----------------------------------------------------- | ----------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `text-placeholder`                                    | `#8d9199`                                 | `#73767d`                               | placeholders, hints, empty text, calendar headers                                                                    |
| `text-error`                                          | `#f04438`                                 | `#d83d32`                               | error messages                                                                                                       |
| `text-success`                                        | `#12b76a`                                 | `#0d884f`                               | success text                                                                                                         |
| `text-warning`                                        | `#f79009`                                 | `#ad6506`                               | warning text                                                                                                         |
| `text-information`                                    | `#2e90fa`                                 | `#2677ce`                               | information text                                                                                                     |
| `icon-warning`                                        | `#f79009`                                 | `#cf7908`                               | warning icons, Snackbar progress                                                                                     |
| `icon-success`                                        | `#12b76a`                                 | `#10a15e`                               | success icons, Snackbar progress                                                                                     |
| `icon-information`                                    | `#2e90fa`                                 | `#2d8df5`                               | information icons, Snackbar progress                                                                                 |
| `surface-brand-strong` _(new)_                        | Chip used `border-action-hover` `#667aff` | `#5a6be0`                               | Chip brand/sharp                                                                                                     |
| `surface-{info,warning,error,success}-strong` _(new)_ | Badge used the icon colours               | `#2677ce` `#ad6506` `#d83d32` `#0d884f` | Badge                                                                                                                |
| `border-input` _(new)_                                | controls used `border-default` `#f0f1f2`  | `#8d9199`                               | Field, Input, TextArea, SearchBox, FieldPicker, Checkbox, Switch                                                     |
| `border-input-error` _(new)_                          | controls used `border-error` `#f9b4af`    | `#f04438`                               | error outlines                                                                                                       |
| `surface-action-hover` _(both themes)_                | `#667aff`                                 | `#4b63ff`                               | hover fill of Button, Menu item, NavigationPanel item, DialogBox action, SelectButton, checked Checkbox/Radio/Switch |
| `border-action-hover` _(both themes)_                 | `#667aff`                                 | `#4b63ff`                               | hover borders; kept equal to the hover fill                                                                          |

For a **new** token, "going back" means pointing the component CSS at the original token again. For example, `Field.module.css` would use `var(--ds-mapped-border-default)` instead of `var(--ds-mapped-border-input)`.

### Original values (dark theme)

| Token                                                     | Original                                | Current                                       |
| --------------------------------------------------------- | --------------------------------------- | --------------------------------------------- |
| `text-action`                                             | `#334eff`                               | `#4b63ff`                                     |
| `text-action-hover`                                       | `#0022ff`                               | `#99a7ff` (was `#6b7fff` until the hover fix) |
| `icon-action-hover`                                       | `#0022ff`                               | `#667aff` (was `#1736ff` until the hover fix) |
| `border-focus`                                            | inherited `#0022ff`                     | `#1736ff`                                     |
| `border-success` / `-information` / `-error` / `-warning` | `#0e9255` `#2573c8` `#c0362d` `#c67307` | `#0b7544` `#2167b4` `#bb352c` `#965705`       |
| `border-input` _(new)_                                    | `border-default` `#2d2f33`              | `#5a5e66`                                     |
| `border-input-error` _(new)_                              | `border-error` `#c0362d`                | `#bb352c`                                     |

## Before / after

### Input — default

Outline #f0f1f2 → #8d9199 (border-input)

|       | Before                                                                | After                                                               |
| ----- | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-input--default--light.png) | ![after](design-changes/after/primitives-input--default--light.png) |
| Dark  | ![before](design-changes/before/primitives-input--default--dark.png)  | ![after](design-changes/after/primitives-input--default--dark.png)  |

### Input — error

Error outline #f9b4af → #f04438; error text #f04438 → #d83d32; placeholder #8d9199 → #73767d

|       | Before                                                              | After                                                             |
| ----- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-input--error--light.png) | ![after](design-changes/after/primitives-input--error--light.png) |
| Dark  | ![before](design-changes/before/primitives-input--error--dark.png)  | ![after](design-changes/after/primitives-input--error--dark.png)  |

### TextArea — error

Same as Input; hint text #8d9199 → #73767d

|       | Before                                                                 | After                                                                |
| ----- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-textarea--error--light.png) | ![after](design-changes/after/primitives-textarea--error--light.png) |
| Dark  | ![before](design-changes/before/primitives-textarea--error--dark.png)  | ![after](design-changes/after/primitives-textarea--error--dark.png)  |

### SearchBox

Outline #f0f1f2 → #8d9199

|       | Before                                                                        | After                                                                       |
| ----- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-searchbox--custom-icon--light.png) | ![after](design-changes/after/primitives-searchbox--custom-icon--light.png) |
| Dark  | ![before](design-changes/before/primitives-searchbox--custom-icon--dark.png)  | ![after](design-changes/after/primitives-searchbox--custom-icon--dark.png)  |

### FieldPicker

Outline #f0f1f2 → #8d9199; placeholder → #73767d

|       | Before                                                                          | After                                                                         |
| ----- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-fieldpicker--placeholder--light.png) | ![after](design-changes/after/primitives-fieldpicker--placeholder--light.png) |
| Dark  | ![before](design-changes/before/primitives-fieldpicker--placeholder--dark.png)  | ![after](design-changes/after/primitives-fieldpicker--placeholder--dark.png)  |

### Checkbox — checked

Unchanged when checked (reference)

|       | Before                                                                   | After                                                                  |
| ----- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-checkbox--checked--light.png) | ![after](design-changes/after/primitives-checkbox--checked--light.png) |
| Dark  | ![before](design-changes/before/primitives-checkbox--checked--dark.png)  | ![after](design-changes/after/primitives-checkbox--checked--dark.png)  |

### Checkbox — error

Outline #f9b4af → #f04438 and doubled in weight (non-colour cue)

|       | Before                                                                 | After                                                                |
| ----- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-checkbox--error--light.png) | ![after](design-changes/after/primitives-checkbox--error--light.png) |
| Dark  | ![before](design-changes/before/primitives-checkbox--error--dark.png)  | ![after](design-changes/after/primitives-checkbox--error--dark.png)  |

### RadioButton

Unchanged (reference)

|       | Before                                                                    | After                                                                   |
| ----- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-radiobutton--group--light.png) | ![after](design-changes/after/primitives-radiobutton--group--light.png) |
| Dark  | ![before](design-changes/before/primitives-radiobutton--group--dark.png)  | ![after](design-changes/after/primitives-radiobutton--group--dark.png)  |

### Switch

Track outline #f0f1f2 → #8d9199 (off state)

|       | Before                                                                  | After                                                                 |
| ----- | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-switch--disabled--light.png) | ![after](design-changes/after/primitives-switch--disabled--light.png) |
| Dark  | ![before](design-changes/before/primitives-switch--disabled--dark.png)  | ![after](design-changes/after/primitives-switch--disabled--dark.png)  |

### Badge

Status fills: icon colours → *-strong (#2677ce, #ad6506, #d83d32, #0d884f)

|       | Before                                                                 | After                                                                |
| ----- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-badge--variants--light.png) | ![after](design-changes/after/primitives-badge--variants--light.png) |
| Dark  | ![before](design-changes/before/primitives-badge--variants--dark.png)  | ![after](design-changes/after/primitives-badge--variants--dark.png)  |

### Chip

Brand sharp #667aff → #5a6be0; dark: sharp fills darkened

|       | Before                                                              | After                                                             |
| ----- | ------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-chip--colors--light.png) | ![after](design-changes/after/primitives-chip--colors--light.png) |
| Dark  | ![before](design-changes/before/primitives-chip--colors--dark.png)  | ![after](design-changes/after/primitives-chip--colors--dark.png)  |

### Tag — disabled

Visual unchanged; now aria-disabled

|       | Before                                                               | After                                                              |
| ----- | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Light | ![before](design-changes/before/primitives-tag--disabled--light.png) | ![after](design-changes/after/primitives-tag--disabled--light.png) |
| Dark  | ![before](design-changes/before/primitives-tag--disabled--dark.png)  | ![after](design-changes/after/primitives-tag--disabled--dark.png)  |

### Link

Dark: #334eff → #4b63ff (hover #0022ff → #6b7fff)

|       | Before                                                               | After                                                              |
| ----- | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Light | ![before](design-changes/before/primitives-link--default--light.png) | ![after](design-changes/after/primitives-link--default--light.png) |
| Dark  | ![before](design-changes/before/primitives-link--default--dark.png)  | ![after](design-changes/after/primitives-link--default--dark.png)  |

### DateRangeCalendar

Weekday headers #aaadb3 (disabled) → #73767d

|       | Before                                                                                 | After                                                                                |
| ----- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Light | ![before](design-changes/before/primitives-daterangecalendar--single-month--light.png) | ![after](design-changes/after/primitives-daterangecalendar--single-month--light.png) |
| Dark  | ![before](design-changes/before/primitives-daterangecalendar--single-month--dark.png)  | ![after](design-changes/after/primitives-daterangecalendar--single-month--dark.png)  |

### Snackbar — variants

Status titles darkened to ≥4.5:1

|       | Before                                                                  | After                                                                 |
| ----- | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Light | ![before](design-changes/before/feedback-snackbar--variants--light.png) | ![after](design-changes/after/feedback-snackbar--variants--light.png) |
| Dark  | ![before](design-changes/before/feedback-snackbar--variants--dark.png)  | ![after](design-changes/after/feedback-snackbar--variants--dark.png)  |

### Snackbar — progress

Progress fills darkened to ≥3:1 on their tracks

|       | Before                                                                       | After                                                                      |
| ----- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/feedback-snackbar--with-progress--light.png) | ![after](design-changes/after/feedback-snackbar--with-progress--light.png) |
| Dark  | ![before](design-changes/before/feedback-snackbar--with-progress--dark.png)  | ![after](design-changes/after/feedback-snackbar--with-progress--dark.png)  |

### Pagination: target size (WCAG 2.2 SC 2.5.8)

Each dot is now a 24×24px click and tap target. The visible dot is unchanged (8px, or the 20px pill when active), but the dots sit further apart. Was a 12×12px target (8px dot + 2px padding). To go back, restore `width`, `height` and `padding` in `Pagination.module.css` from the comment there. The CSS-only alternative, invisible enlarged hit areas, would overlap neighbouring dots.

|       | Before                                                                     | After                                                                    |
| ----- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Light | ![before](design-changes/before/navigation-pagination--default--light.png) | ![after](design-changes/after/navigation-pagination--default--light.png) |
| Dark  | ![before](design-changes/before/navigation-pagination--default--dark.png)  | ![after](design-changes/after/navigation-pagination--default--dark.png)  |

In a Card image carousel:

|       | Before                                                                  | After                                                                 |
| ----- | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Light | ![before](design-changes/before/layout-card--media-carousel--light.png) | ![after](design-changes/after/layout-card--media-carousel--light.png) |
| Dark  | ![before](design-changes/before/layout-card--media-carousel--dark.png)  | ![after](design-changes/after/layout-card--media-carousel--dark.png)  |

## Hover states

The hover fill and hover border went from `#667aff` to `#4b63ff` in both themes: white text on the old fill was 3.63:1, below the 4.5:1 minimum. Found by `pnpm audit:hover`, which hovers every interactive element with the real mouse. The screenshots are taken with the pointer resting on the element named below.

### Button — hover

The Default button is hovered.

|       | Before                                                                         | After                                                                        |
| ----- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-button--variants--hover--light.png) | ![after](design-changes/after/primitives-button--variants--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-button--variants--hover--dark.png)  | ![after](design-changes/after/primitives-button--variants--hover--dark.png)  |

### Menu item — hover

“Settings” is hovered.

|       | Before                                                                      | After                                                                     |
| ----- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-menu--default--hover--light.png) | ![after](design-changes/after/primitives-menu--default--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-menu--default--hover--dark.png)  | ![after](design-changes/after/primitives-menu--default--hover--dark.png)  |

### NavigationPanel item — hover

“Explore” is hovered.

|       | Before                                                                             | After                                                                            |
| ----- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/layout-navigationpanel--default--hover--light.png) | ![after](design-changes/after/layout-navigationpanel--default--hover--light.png) |
| Dark  | ![before](design-changes/before/layout-navigationpanel--default--hover--dark.png)  | ![after](design-changes/after/layout-navigationpanel--default--hover--dark.png)  |

### DialogBox action — hover

“Cancel booking” is hovered.

|       | Before                                                                    | After                                                                   |
| ----- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Light | ![before](design-changes/before/layout-dialogbox--open--hover--light.png) | ![after](design-changes/after/layout-dialogbox--open--hover--light.png) |
| Dark  | ![before](design-changes/before/layout-dialogbox--open--hover--dark.png)  | ![after](design-changes/after/layout-dialogbox--open--hover--dark.png)  |

### SelectButton — hover

The selected button is hovered.

|       | Before                                                                               | After                                                                              |
| ----- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-selectbutton--selected--hover--light.png) | ![after](design-changes/after/primitives-selectbutton--selected--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-selectbutton--selected--hover--dark.png)  | ![after](design-changes/after/primitives-selectbutton--selected--hover--dark.png)  |

### RadioButton — hover

The selected option is hovered.

|       | Before                                                                           | After                                                                          |
| ----- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Light | ![before](design-changes/before/primitives-radiobutton--group--hover--light.png) | ![after](design-changes/after/primitives-radiobutton--group--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-radiobutton--group--hover--dark.png)  | ![after](design-changes/after/primitives-radiobutton--group--hover--dark.png)  |

### Switch — hover

The switch is hovered.

|       | Before                                                                   | After                                                                  |
| ----- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-switch--on--hover--light.png) | ![after](design-changes/after/primitives-switch--on--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-switch--on--hover--dark.png)  | ![after](design-changes/after/primitives-switch--on--hover--dark.png)  |

### Input — hover

The field is hovered (hover border).

|       | Before                                                                       | After                                                                      |
| ----- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Light | ![before](design-changes/before/primitives-input--default--hover--light.png) | ![after](design-changes/after/primitives-input--default--hover--light.png) |
| Dark  | ![before](design-changes/before/primitives-input--default--hover--dark.png)  | ![after](design-changes/after/primitives-input--default--hover--dark.png)  |
