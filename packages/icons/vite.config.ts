import { defineConfig } from 'vite'

/** Library build for @acme/icons: ESM, one file per icon for tree-shaking. */
export default defineConfig({
  build: {
    lib: { entry: 'src/index.ts', formats: ['es'] },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: [/^react($|\/)/],
      output: { preserveModules: true, preserveModulesRoot: 'src', entryFileNames: '[name].js' },
    },
  },
})
