# tripon-ai Component Preview

Standalone visual preview app for components built in /Users/sanazkhanali/dev/tripon-ai

## Purpose
Visually verify components and icons match Figma designs and use correct design tokens
before integrating into the main app.

## How to run
```bash
cd /Users/sanazkhanali/dev/test_rendered
npm run dev
```
Visit http://localhost:3000/preview

## Adding a new component preview
1. Copy the component folder from tripon-ai:
   ```bash
   cp -r /Users/sanazkhanali/dev/tripon-ai/components/ui/[Component] \
     ./components/ui/[Component]
   ```

2. Re-copy tokens.css if tokens have changed:
   ```bash
   cp /Users/sanazkhanali/dev/tripon-ai/app/design-system/tokens/tokens.css \
     ./design-system/tokens/tokens.css
   ```

3. Re-copy icons if new icons were added:
   ```bash
   cp -r /Users/sanazkhanali/dev/tripon-ai/app/design-system/icons/components \
     ./design-system/icons/
   cp /Users/sanazkhanali/dev/tripon-ai/app/design-system/icons/index.ts \
     ./design-system/icons/index.ts
   ```

4. Create app/preview/[component-name]/page.tsx

5. Add a nav link in app/preview/layout.tsx

## Currently previewed
- Avatar — 3 types (icon, image, initials), 3 sizes (lg/md/sm) — components/ui/
- Badge — 5 variants (default, error, success, information, warning), 2 types (pill, dot) — components/ui/
- Buttons — Button, ButtonVertical, ButtonIcon
- Icons — 46 total
- Menu — MenuItem (2 sizes, 4 states) + Menu container (scrollable) — components/ui/
- Label — 2 variants (default, required), icon slot — components/ui/
- SelectButton — 3 variants (default, outline, transparent), 2 sizes, disabled, isSelected toggle — components/ui/
- Field + Input — 5 states (default, hover, focus, disabled, error), icon slots, Label + hint/error text — components/ui/
- RadioButton — 4 states (default, hover, focus, disabled), with/without label, group example — components/ui/
- Switch — 2 checked states (on/off), hover, focus, disabled, with/without label — components/ui/
- Checkbox — unchecked/checked, with/without label, error, disabled, interactive toggle — components/ui/
- Tag — 2 sizes (lg/sm), static + dismissible (onDismiss), disabled — components/ui/
- TextArea — 5 states (default, hover, focus, disabled, error), iconRight slot, label/hint/error composition — components/ui/
- Link — 2 variants (default, in-line), hover underline toggle, focus ring, disabled, icon slots — components/ui/
- Chip — 5 colors (brand/blue/green/orange/red), 2 variants (light/sharp), icon + label slots — components/ui/
- Separator — 2 orientations (horizontal, vertical) — components/ui/
- NumericUpDown — stepper (min/max limits, disabled state, traveler count example) — components/ui/
- SearchBox — pill search input, clear button, custom icon slot, parent-controlled dropdown — components/ui/

## Important
This app copies files from tripon-ai.
It does not auto-sync.
Re-copy any file that changes in tripon-ai.
