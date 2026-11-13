import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  // .mdx files in app/ are pages (Getting started, Theming, Accessibility).
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // Workspace packages ship TypeScript source in development, so Next compiles
  // them (including their CSS Modules).
  transpilePackages: ['@acme/ui', '@acme/icons', '@acme/tokens'],
}

const withMDX = createMDX({
  // Plugins are named as strings so they work with Turbopack.
  options: { remarkPlugins: ['remark-gfm'] },
})

export default withMDX(nextConfig)
