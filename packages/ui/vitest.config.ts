import path from 'node:path'
import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'

const dirname = import.meta.dirname

// A fresh object per project: Vitest mutates the browser config when expanding
// instances, so sharing one object makes the second project a duplicate.
const browser = () => ({
  enabled: true,
  headless: true,
  provider: playwright(),
  instances: [{ browser: 'chromium' as const }],
})

export default defineConfig({
  css: {
    modules: { generateScopedName: 'ciel-[local]-[hash:base64:5]' },
  },
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx', 'src/**/types.ts', 'src/**/index.ts'],
      // Fail the run if coverage drops below these (current: ~91% statements).
      thresholds: { statements: 85, branches: 80, functions: 80, lines: 85 },
    },
    projects: [
      {
        // Fast behaviour tests in jsdom with Testing Library.
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['src/**/*.test.{ts,tsx}'],
          setupFiles: ['src/test/setup.ts'],
        },
      },
      {
        // Every story rendered in real Chromium: play functions + axe checks.
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        test: { name: 'storybook', browser: browser() },
      },
      {
        // The same stories again in the dark theme (axe checks dark-mode contrast).
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        define: { 'import.meta.env.STORYBOOK_TEST_THEME': JSON.stringify('dark') },
        test: { name: 'storybook-dark', browser: browser() },
      },
    ],
  },
})
