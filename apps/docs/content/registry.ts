/**
 * Docs registry: every component page, its examples, and the components whose
 * props tables it shows. The sidebar, the component pages and the code
 * generator (scripts/codegen.mjs) all read from here.
 *
 * Examples live in examples/<slug>/<Name>.tsx; the file name is the example key.
 */

export type Category = 'Primitives' | 'Forms' | 'Feedback' | 'Navigation' | 'Layout'

export interface ExampleDef {
  /** File name in examples/<slug>/, without extension. */
  name: string
  title: string
  description?: string
}

export interface ComponentDoc {
  slug: string
  name: string
  category: Category
  description: string
  /** Components (display names) whose props tables are shown, in order. */
  api: string[]
  examples: ExampleDef[]
  /** Keyboard and screen-reader behaviour worth knowing. */
  a11y: string[]
  /** Storybook title, used to link to the stories. */
  storybook: string
}

export const CATEGORIES: Category[] = ['Primitives', 'Forms', 'Feedback', 'Navigation', 'Layout']

export const COMPONENTS: ComponentDoc[] = [
  // ── Primitives ───────────────────────────────────────────────────────────
  {
    slug: 'button',
    name: 'Button',
    category: 'Primitives',
    description:
      'Triggers an action. Comes in three variants and two sizes, with icon slots, a loading state, and icon-only and vertical forms.',
    api: ['Button', 'ButtonIcon', 'ButtonIconSwitching', 'ButtonVertical'],
    examples: [
      { name: 'Variants', title: 'Variants' },
      { name: 'WithIcons', title: 'With icons and loading' },
      {
        name: 'IconOnly',
        title: 'Icon-only',
        description: 'Always give an icon-only button a `label`. It becomes the accessible name.',
      },
    ],
    a11y: [
      'Renders a native `<button type="button">`, so Enter and Space activate it.',
      '`ButtonIcon` requires `label`, which is used as `aria-label`.',
      '`isLoading` keeps the button in place and shows a spinner, so the layout doesn’t shift.',
    ],
    storybook: 'primitives-button',
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    category: 'Primitives',
    description: 'A person or entity, shown as initials, an icon or an image.',
    api: ['Avatar'],
    examples: [{ name: 'Types', title: 'Types and sizes' }],
    a11y: ['Give image avatars a meaningful `alt`. Decorative avatars can use `alt=""`.'],
    storybook: 'primitives-avatar',
  },
  {
    slug: 'badge',
    name: 'Badge',
    category: 'Primitives',
    description: 'A small count or status indicator.',
    api: ['Badge'],
    examples: [{ name: 'Variants', title: 'Variants' }],
    a11y: [
      'Status fills meet 4.5:1 with white text in both themes.',
      'A count badge alone is ambiguous to screen readers. Mention it in the related control’s label, e.g. “Inbox, 12 unread”.',
    ],
    storybook: 'primitives-badge',
  },
  {
    slug: 'chip',
    name: 'Chip',
    category: 'Primitives',
    description: 'A compact label for attributes such as “Cheapest” or a rating.',
    api: ['Chip'],
    examples: [{ name: 'Colors', title: 'Colours and variants' }],
    a11y: ['An icon-only chip needs `role="img"` and an `aria-label`.'],
    storybook: 'primitives-chip',
  },
  {
    slug: 'tag',
    name: 'Tag',
    category: 'Primitives',
    description: 'A removable token, e.g. an active filter.',
    api: ['Tag'],
    examples: [{ name: 'Dismissible', title: 'Dismissible tags' }],
    a11y: [
      'The dismiss button is named by `labels.dismiss` (default “Dismiss”).',
      'Disabled tags set `aria-disabled`.',
    ],
    storybook: 'primitives-tag',
  },
  {
    slug: 'link',
    name: 'Link',
    category: 'Primitives',
    description: 'A navigational text link, standalone or inline in body copy.',
    api: ['Link'],
    examples: [{ name: 'Variants', title: 'Variants' }],
    a11y: ['Disabled links set `aria-disabled` and ignore clicks and Enter.'],
    storybook: 'primitives-link',
  },
  {
    slug: 'label',
    name: 'Label',
    category: 'Primitives',
    description: 'A form label, with an optional required marker and an icon slot.',
    api: ['Label'],
    examples: [{ name: 'Required', title: 'Required' }],
    a11y: [
      'The required variant adds visually hidden text (“required”) that screen readers announce.',
    ],
    storybook: 'primitives-label',
  },
  {
    slug: 'separator',
    name: 'Separator',
    category: 'Primitives',
    description: 'A thin horizontal or vertical divider.',
    api: ['Separator'],
    examples: [{ name: 'Orientations', title: 'Orientations' }],
    a11y: ['Renders `role="separator"` with the matching `aria-orientation`.'],
    storybook: 'primitives-separator',
  },
  {
    slug: 'menu',
    name: 'Menu',
    category: 'Primitives',
    description: 'A list of actions or options.',
    api: ['Menu', 'MenuItem'],
    examples: [{ name: 'Basic', title: 'Menu' }],
    a11y: [
      'WAI-ARIA menu pattern: ArrowUp and ArrowDown move between items (and wrap); Home and End jump to the ends.',
      'Roving tabindex: only one item is in the Tab order, so Tab leaves the menu.',
    ],
    storybook: 'primitives-menu',
  },
  {
    slug: 'popover',
    name: 'Popover',
    category: 'Primitives',
    description:
      'A trigger plus a floating, non-modal panel. You render the trigger, and Popover handles state and dismissal.',
    api: ['Popover'],
    examples: [{ name: 'Basic', title: 'Popover with a close action' }],
    a11y: [
      'The trigger gets `aria-expanded` and `aria-controls`, and the panel is `role="dialog"`, named by `panelLabel`.',
      'Escape closes it and returns focus to the trigger, and clicking outside also closes it.',
      'Use `open` and `onOpenChange` to control it, or `defaultOpen` to leave it uncontrolled.',
    ],
    storybook: 'primitives-popover',
  },

  // ── Forms ────────────────────────────────────────────────────────────────
  {
    slug: 'input',
    name: 'Input',
    category: 'Forms',
    description: 'A labelled text field with an optional hint, icons and error message.',
    api: ['Input'],
    examples: [{ name: 'States', title: 'States' }],
    a11y: [
      'The label, hint and error are linked with `aria-describedby`, and errors set `aria-invalid`.',
      'Outlines meet 3:1 against the page (WCAG 1.4.11).',
    ],
    storybook: 'primitives-input',
  },
  {
    slug: 'field',
    name: 'Field',
    category: 'Forms',
    description: 'The bare input box behind Input. Use it when you place the label yourself.',
    api: ['Field'],
    examples: [{ name: 'Basic', title: 'Field' }],
    a11y: ['Without a visible label, pass `aria-label` or `aria-labelledby`.'],
    storybook: 'primitives-field',
  },
  {
    slug: 'textarea',
    name: 'TextArea',
    category: 'Forms',
    description: 'Multi-line text input with a label, hint and error.',
    api: ['TextArea'],
    examples: [{ name: 'Basic', title: 'TextArea' }],
    a11y: ['Same labelling and error wiring as Input.'],
    storybook: 'primitives-textarea',
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    category: 'Forms',
    description: 'A native checkbox with a custom look. The label text is clickable.',
    api: ['Checkbox'],
    examples: [{ name: 'States', title: 'States' }],
    a11y: [
      'A native `<input type="checkbox">`, so Space toggles it and forms submit it.',
      'Error states set `aria-invalid`, and the outline gets heavier as well as turning red (WCAG 1.4.1).',
    ],
    storybook: 'primitives-checkbox',
  },
  {
    slug: 'radio-button',
    name: 'RadioButton',
    category: 'Forms',
    description: 'One choice from a set. Group radios with a shared `name`.',
    api: ['RadioButton'],
    examples: [{ name: 'Group', title: 'Radio group' }],
    a11y: [
      'Wrap groups in a `<fieldset>` with a `<legend>`, and arrow keys move between options natively.',
    ],
    storybook: 'primitives-radiobutton',
  },
  {
    slug: 'switch',
    name: 'Switch',
    category: 'Forms',
    description: 'An on/off toggle for settings that take effect immediately.',
    api: ['Switch'],
    examples: [{ name: 'Basic', title: 'Switch' }],
    a11y: ['`role="switch"` with `aria-checked`, named by its visible label.'],
    storybook: 'primitives-switch',
  },
  {
    slug: 'search-box',
    name: 'SearchBox',
    category: 'Forms',
    description:
      'A pill-shaped search field with a clear button and an optional suggestions dropdown.',
    api: ['SearchBox'],
    examples: [{ name: 'WithSuggestions', title: 'With suggestions' }],
    a11y: [
      'The clear button is named by `labels.clear`, and focus returns to the input after clearing.',
      '`ref` points at the native `<input>`.',
    ],
    storybook: 'primitives-searchbox',
  },
  {
    slug: 'select-button',
    name: 'SelectButton',
    category: 'Forms',
    description: 'A button that shows the current choice and opens a picker.',
    api: ['SelectButton'],
    examples: [{ name: 'Basic', title: 'SelectButton' }],
    a11y: ['Wire `aria-expanded` and `aria-controls` to whatever it opens.'],
    storybook: 'primitives-selectbutton',
  },
  {
    slug: 'numeric-up-down',
    name: 'NumericUpDown',
    category: 'Forms',
    description: 'A compact stepper for small counts.',
    api: ['NumericUpDown'],
    examples: [{ name: 'Basic', title: 'Stepper' }],
    a11y: ['The buttons are disabled at `min` and `max`, and are named by `labels`.'],
    storybook: 'primitives-numericupdown',
  },
  {
    slug: 'field-picker',
    name: 'FieldPicker',
    category: 'Forms',
    description:
      'A field-style trigger that opens a Popover panel. Put any picker inside and show its summary as `value`.',
    api: ['FieldPicker'],
    examples: [{ name: 'DateRange', title: 'Date range picker' }],
    a11y: [
      'Inherits Popover’s behaviour: Escape returns focus to the field, and the panel is a named dialog.',
    ],
    storybook: 'primitives-fieldpicker',
  },
  {
    slug: 'date-range-calendar',
    name: 'DateRangeCalendar',
    category: 'Forms',
    description:
      'One or two month grids for picking a start and end date, with localised month and day names.',
    api: ['DateRangeCalendar'],
    examples: [
      { name: 'Basic', title: 'Two months' },
      {
        name: 'Localised',
        title: 'German, Monday first',
        description:
          '`locale` drives month and weekday names, and `weekStartsOn` sets the first column.',
      },
    ],
    a11y: [
      'Each day is a button with a full date label (“Saturday, May 9”) and `aria-pressed` when selected.',
      'Month navigation buttons are named by `labels`.',
    ],
    storybook: 'primitives-daterangecalendar',
  },

  // ── Feedback ─────────────────────────────────────────────────────────────
  {
    slug: 'loader',
    name: 'Loader',
    category: 'Feedback',
    description: 'An indeterminate spinner.',
    api: ['Loader'],
    examples: [{ name: 'Sizes', title: 'Sizes' }],
    a11y: ['`role="status"` named by `label` (default “Loading”).'],
    storybook: 'feedback-loader',
  },
  {
    slug: 'progress',
    name: 'ProgressBar',
    category: 'Feedback',
    description: 'Determinate progress, as a bar or a circle.',
    api: ['ProgressBar', 'ProgressCircle'],
    examples: [{ name: 'Basic', title: 'Bar and circle' }],
    a11y: ['`role="progressbar"` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.'],
    storybook: 'feedback-progressbar',
  },
  {
    slug: 'snackbar',
    name: 'Snackbar',
    category: 'Feedback',
    description: 'A brief notification with an optional action, close button and progress.',
    api: ['Snackbar'],
    examples: [{ name: 'Variants', title: 'Variants' }],
    a11y: [
      'Status titles meet 4.5:1, and the colour never carries meaning alone (each variant has a title and an icon).',
      'The progress bar and close button are named by `labels`.',
    ],
    storybook: 'feedback-snackbar',
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  {
    slug: 'tabs',
    name: 'TabBar',
    category: 'Navigation',
    description: 'Tabs for switching between views.',
    api: ['TabBar', 'TabItem'],
    examples: [{ name: 'Basic', title: 'Tabs' }],
    a11y: [
      'WAI-ARIA tabs: arrow keys move focus (and wrap), and Home and End jump to the ends.',
      'Roving tabindex: only the selected tab is in the Tab order.',
    ],
    storybook: 'navigation-tabbar',
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'Shows where the current page sits in the hierarchy.',
    api: ['Breadcrumb'],
    examples: [{ name: 'Basic', title: 'Breadcrumb' }],
    a11y: [
      'A `<nav aria-label="Breadcrumb">` with an ordered list. The last item is the current page.',
    ],
    storybook: 'navigation-breadcrumb',
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'Dot pagination for carousels and short sequences.',
    api: ['Pagination'],
    examples: [{ name: 'Basic', title: 'Pagination' }],
    a11y: [
      'The current page has `aria-current="page"`, and every name is localisable through `labels`.',
    ],
    storybook: 'navigation-pagination',
  },
  {
    slug: 'button-group',
    name: 'ButtonGroup',
    category: 'Navigation',
    description: 'A segmented control for switching between a few options.',
    api: ['ButtonGroup', 'ButtonGroupItem'],
    examples: [{ name: 'Basic', title: 'Segmented control' }],
    a11y: [
      'Items are toggle buttons with `aria-pressed`, and the group is `role="group"`. Name it with `aria-label`.',
    ],
    storybook: 'navigation-buttongroup',
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    category: 'Navigation',
    description: 'Previous and next controls around content.',
    api: ['Carousel', 'CarouselItem'],
    examples: [{ name: 'Basic', title: 'Carousel controls' }],
    a11y: ['The controls are named by `labels`.'],
    storybook: 'navigation-carousel',
  },
  {
    slug: 'expander',
    name: 'Expander',
    category: 'Navigation',
    description: 'An inline “show more” disclosure.',
    api: ['Expander'],
    examples: [{ name: 'Basic', title: 'Expander' }],
    a11y: ['A button with `aria-expanded` and `aria-controls`.'],
    storybook: 'navigation-expander',
  },
  {
    slug: 'accordion',
    name: 'AccordionProgressive',
    category: 'Navigation',
    description: 'A collapsible section, for step-by-step forms.',
    api: ['AccordionProgressive'],
    examples: [{ name: 'Basic', title: 'Accordion' }],
    a11y: [
      'The header is a button with `aria-expanded`, and the content region is labelled by it.',
    ],
    storybook: 'navigation-accordionprogressive',
  },

  // ── Layout ───────────────────────────────────────────────────────────────
  {
    slug: 'card',
    name: 'Card',
    category: 'Layout',
    description:
      'A composable card. Build anything from its parts: media (single image or carousel), header, metrics and a footer with price and action.',
    api: ['Card', 'CardMedia', 'CardHeader', 'CardBody', 'CardMetric', 'CardFooter', 'CardPrice'],
    examples: [
      { name: 'Product', title: 'Product card' },
      { name: 'Loading', title: 'Loading skeleton' },
    ],
    a11y: [
      'Use `titleAs` to make the title a heading at the right level for your page.',
      '`loading` sets `aria-busy`, and media carousel controls are named by `labels`.',
    ],
    storybook: 'layout-card',
  },
  {
    slug: 'dialog',
    name: 'DialogBox',
    category: 'Layout',
    description: 'A modal dialog with a title, body and up to two actions.',
    api: ['DialogBox'],
    examples: [{ name: 'Basic', title: 'Confirm dialog' }],
    a11y: [
      'Focus moves into the dialog, Tab is trapped inside it, Escape closes it, and focus returns to the opener.',
      'It renders in a portal on `document.body`.',
    ],
    storybook: 'layout-dialogbox',
  },
  {
    slug: 'navigation-panel',
    name: 'NavigationPanel',
    category: 'Layout',
    description: 'A collapsible app sidebar with a logo, menu items and a profile row.',
    api: [
      'NavigationPanel',
      'NavigationLogoItem',
      'NavigationMenuGroup',
      'NavigationMenuItem',
      'NavigationProfileItem',
    ],
    examples: [{ name: 'Basic', title: 'Sidebar' }],
    a11y: [
      'A `<nav>` landmark, and the current item has `aria-current="page"`.',
      'Collapsed items keep their names (the label is visually hidden) and show a tooltip.',
    ],
    storybook: 'layout-navigationpanel',
  },
  {
    slug: 'package-card',
    name: 'PackageCard',
    category: 'Layout',
    description: 'A paged content card with a heading, an AI action and page navigation.',
    api: ['PackageCard'],
    examples: [{ name: 'Basic', title: 'Itinerary' }],
    a11y: [
      'Navigation buttons are disabled at the ends, and every name is localisable through `labels`.',
    ],
    storybook: 'layout-packagecard',
  },
  {
    slug: 'table',
    name: 'Table',
    category: 'Layout',
    description:
      'A data table with text, link and action cells, plus an optional title and toolbar.',
    api: ['Table'],
    examples: [{ name: 'Basic', title: 'Table' }],
    a11y: ['A native `<table>` with column headers.'],
    storybook: 'layout-table',
  },
  {
    slug: 'ai-chat',
    name: 'AIChat',
    category: 'Layout',
    description:
      'A chat panel for AI assistants: conversation, agent responses with thinking state, suggestions, reactions and a chat input.',
    api: ['AIChat', 'ChatInput', 'UserBubble', 'AgentBubble'],
    examples: [{ name: 'Basic', title: 'Chat panel' }],
    a11y: [
      'Enter sends and Shift+Enter adds a new line, and the action button’s name follows its state (voice input, send, stop).',
      'All built-in text is localisable through `labels`.',
    ],
    storybook: 'layout-aichat',
  },
]

export const componentBySlug = (slug: string) => COMPONENTS.find((c) => c.slug === slug)
