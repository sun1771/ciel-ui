import React, { useLayoutEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import '@cielui/tokens/tokens.css'
import './preview.css'

/** Applies the toolbar's theme to <html data-theme>, the same switch consumers use. */
function ThemeRoot({ theme, children }: { theme: string; children: React.ReactNode }) {
  // Layout effect: the theme is applied before play functions and axe run.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])
  return <>{children}</>
}

const withTheme: Decorator = (Story, context) => (
  <ThemeRoot theme={context.globals.theme as string}>
    <Story />
  </ThemeRoot>
)

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      description: 'Colour theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  // The storybook-dark test project sets STORYBOOK_TEST_THEME to run every story in dark mode.
  initialGlobals: { theme: import.meta.env.STORYBOOK_TEST_THEME ?? 'light' },
  decorators: [withTheme],
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'requiredFirst' },
    // Fail story tests (Vitest addon) on any axe accessibility violation,
    // including colour contrast.
    a11y: {
      test: 'error',
      // Include WCAG 2.1 and 2.2 AA rules (e.g. 2.5.8 target size), not just 2.0.
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
        },
      },
    },
  },
}

export default preview
