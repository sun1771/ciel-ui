---
'@acme/ui': minor
'@acme/tokens': minor
---

Component polish:

- New `SelectMenu` (a SelectButton that opens a Menu). Menu and TabBar track their selection from item `value`s (`defaultValue`, or `value` + `onValueChange`).
- Uncontrolled modes for Switch (`defaultChecked`, `onCheckedChange`), NumericUpDown (`defaultValue`), Expander and AccordionProgressive (`defaultExpanded`), Pagination (`defaultPage`), Carousel (`defaultIndex`), AIChat (`defaultState`) and NavigationPanel (`defaultExpanded`).
- NavigationPanel items can be links (`href`, `linkComponent`), with `size="sm"` and group headings.
- Fixes: Checkbox shows its tick when uncontrolled; SearchBox suggestions close after a pick, on Escape or on a click outside; AIChat's conversation scrolls to its first message; the TextArea resize handle sits in the field's corner; the ProgressCircle label no longer overlaps the ring; icon-only buttons are square and match the button height; unselected Pagination dots are visible; the Table header no longer matches the row hover.
- Motion: new `--ds-motion-*` tokens (0ms with reduced motion) used for transitions across all components; new `surface-indicator` and `surface-subtle` colour tokens.
