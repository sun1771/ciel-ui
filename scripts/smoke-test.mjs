#!/usr/bin/env node
/**
 * Consumer smoke test: install the *packed* packages into a fresh Next.js app
 * outside the workspace, build it, and check the output — what a real user
 * of the published packages would experience.
 *
 * Checks:
 *  1. the published .d.ts files type-check strictly (nodenext, skipLibCheck off),
 *     and `next build` succeeds (a Server Component page renders the package's
 *     client components)
 *  2. the prerendered HTML contains the components' content
 *  3. the built CSS contains the library's classes and the design tokens
 *  4. tree-shaking: the route that imports only Button ships no AIChat code
 *
 * Usage: node scripts/smoke-test.mjs [--keep]   (run `pnpm build` first)
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const keep = process.argv.includes('--keep')
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'ciel-smoke-'))
const packs = path.join(work, 'packs')
const app = path.join(work, 'app')
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' })

let failures = 0
function check(name, ok, detail = '') {
  console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`)
  if (!ok) failures++
}

try {
  // 1. Pack the built packages (publishConfig swaps exports to dist/).
  fs.mkdirSync(packs)
  // Tarball of each package folder, whatever its name and version.
  const tarballs = {}
  for (const pkg of ['ui', 'icons', 'tokens']) {
    const dir = path.join(root, 'packages', pkg)
    if (pkg !== 'tokens' && !fs.existsSync(path.join(dir, 'dist'))) {
      throw new Error(`packages/${pkg}/dist is missing — run \`pnpm build\` first`)
    }
    const before = new Set(fs.readdirSync(packs))
    execSync(`pnpm pack --pack-destination "${packs}"`, { cwd: dir, stdio: 'ignore' })
    tarballs[pkg] = path.join(
      packs,
      fs.readdirSync(packs).find((f) => !before.has(f))
    )
  }
  const tgz = (pkg) => `file:${tarballs[pkg]}`

  // 2. Fresh app from the fixture.
  fs.cpSync(path.join(root, 'smoke/next-app'), app, { recursive: true })
  const nextVersion = JSON.parse(fs.readFileSync(path.join(root, 'apps/docs/package.json'), 'utf8'))
    .dependencies.next
  fs.writeFileSync(
    path.join(app, 'package.json'),
    JSON.stringify(
      {
        name: 'ciel-smoke',
        private: true,
        scripts: { build: 'next build' },
        dependencies: {
          '@cielui/react': tgz('ui'),
          '@cielui/icons': tgz('icons'),
          '@cielui/tokens': tgz('tokens'),
          next: nextVersion,
          react: '19.2.4',
          'react-dom': '19.2.4',
        },
        devDependencies: {
          typescript: '^5',
          '@types/react': '^19',
          '@types/react-dom': '^19',
          '@types/node': '^20',
        },
        // @cielui/react depends on @cielui/icons: use the local tarball for
        // it too, never the copy published on the registry.
        overrides: { '@cielui/icons': '$@cielui/icons' },
      },
      null,
      2
    )
  )

  run('npm install --no-audit --no-fund --loglevel=error', app)
  run('npx tsc -p tsconfig.libcheck.json', app)
  check('published .d.ts type-check strictly (nodenext, skipLibCheck off)', true)

  run('npx next build', app)
  check('next build (consumer types + SSR of client components)', true)

  // 3. Output checks.
  const serverApp = path.join(app, '.next/server/app')
  const html = fs.readFileSync(path.join(serverApp, 'index.html'), 'utf8')
  for (const text of ['Smoke Button', 'Smoke Card', 'Smoke Picker', 'Smoke Chat', '$10']) {
    check(`page renders "${text}"`, html.includes(text))
  }

  const cssDir = path.join(app, '.next/static')
  const css = walk(cssDir)
    .filter((f) => f.endsWith('.css'))
    .map((f) => fs.readFileSync(f, 'utf8'))
    .join('\n')
  check('CSS includes library classes', /\.ciel-[a-zA-Z]+-/.test(css))
  check('CSS includes design tokens', css.includes('--ds-'))

  const buttonOnlyHtml = fs.readFileSync(path.join(serverApp, 'button-only.html'), 'utf8')
  const scripts = [...buttonOnlyHtml.matchAll(/<script[^>]+src="\/_next\/([^"]+)"/g)].map((m) =>
    path.join(app, '.next', decodeURIComponent(m[1]))
  )
  const js = scripts
    .filter((f) => fs.existsSync(f))
    .map((f) => fs.readFileSync(f, 'utf8'))
    .join('\n')
  check('button-only route loads client JS', js.length > 0, `${scripts.length} scripts`)
  check(
    'tree-shaking: button-only route has no AIChat code',
    !js.includes('Collapse chat') && !js.includes('Stop generating')
  )
} catch (err) {
  console.error(err.message)
  failures++
} finally {
  if (keep) console.log(`kept: ${work}`)
  else fs.rmSync(work, { recursive: true, force: true })
}

console.log(failures ? `\nsmoke test FAILED (${failures})` : '\nsmoke test passed')
process.exit(failures ? 1 : 0)

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
}
