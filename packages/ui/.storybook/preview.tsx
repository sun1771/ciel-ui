import React, { useEffect } from 'react'
import type { Decorator, Preview } from '@storybook/react-vite'
import '@acme/tokens/tokens.css'
import './preview.css'

/** Applies the toolbar's theme to <html data-theme>, the same switch consumers use. */
function ThemeRoot({ theme, children }: { theme: string; children: React.ReactNode }) {
  useEffect(() => {
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
  initialGlobals: { theme: 'light' },
  decorators: [withTheme],
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'requiredFirst' },
    // Fail story tests (Vitest addon) on any axe accessibility violation,
    // including colour contrast.
    a11y: { test: 'error' },
  },
}

export default preview
