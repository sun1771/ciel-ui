import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Workspace packages ship TypeScript source (until the Vite library build in
  // Phase 4), so Next compiles them, including their CSS Modules.
  transpilePackages: ['@acme/ui', '@acme/icons', '@acme/tokens'],
}

export default nextConfig
