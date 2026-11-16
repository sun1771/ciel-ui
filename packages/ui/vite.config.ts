import { defineConfig } from 'vite'

/**
 * Library build for @cielui/react.
 * - ESM only, one output file per source module (preserveModules) so
 *   consumers' bundlers can tree-shake unused components.
 * - Module-level 'use client' directives are kept per file by Rolldown, so
 *   React Server Component apps get correct client boundaries.
 * - All CSS Modules are compiled into one dist/styles.css that consumers
 *   import once. Class names are hashed and prefixed to avoid collisions.
 * - Type declarations are emitted separately by `tsc -p tsconfig.build.json`.
 */
export default defineConfig({
  css: {
    modules: { generateScopedName: 'ciel-[local]-[hash:base64:5]' },
  },
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'], cssFileName: 'styles' },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    // Leave JS readable for consumers (their bundler minifies); ship minified CSS.
    minify: false,
    cssMinify: true,
    rollupOptions: {
      external: [/^react($|\/)/, /^react-dom($|\/)/, /^@cielui\//, 'clsx'],
      output: { preserveModules: true, preserveModulesRoot: 'src', entryFileNames: '[name].js' },
      onwarn(warning, warn) {
        // 'use client' is preserved per module with preserveModules; verified in scripts/check-dist.mjs.
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
        warn(warning)
      },
    },
  },
})
