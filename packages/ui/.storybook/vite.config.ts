import { defineConfig } from 'vite'

// Storybook/Vitest-browser Vite config. Kept separate from ../vite.config.ts,
// which is the library build (lib mode) and must not leak into Storybook.
export default defineConfig({
  css: {
    modules: { generateScopedName: 'acme-[local]-[hash:base64:5]' },
  },
})
