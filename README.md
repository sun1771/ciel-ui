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
- Buttons — Button, ButtonVertical, ButtonIcon
- Icons — 46 total
- Menu — MenuItem (2 sizes, 4 states) + Menu container (scrollable) — components/ui/

## Important
This app copies files from tripon-ai.
It does not auto-sync.
Re-copy any file that changes in tripon-ai.
