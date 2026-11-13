#!/usr/bin/env node
/**
 * Lint the packages exactly as they would be published: pack each with pnpm
 * (which applies publishConfig, e.g. exports → dist/) and run
 *   - publint: package.json / exports / files mistakes
 *   - attw (Are The Types Wrong): type resolution per module-resolution mode
 * on the tarballs. Run `pnpm build` first.
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const out = fs.mkdtempSync(path.join(os.tmpdir(), 'acme-pack-'))
const packages = [
  { dir: 'ui', attw: '--exclude-entrypoints styles.css' },
  { dir: 'icons', attw: '' },
  { dir: 'tokens', attw: null }, // CSS only — no types to check
]

let failed = false
try {
  for (const { dir, attw } of packages) {
    const cwd = path.join(root, 'packages', dir)
    const before = new Set(fs.readdirSync(out))
    execSync(`pnpm pack --pack-destination "${out}"`, { cwd, stdio: 'ignore' })
    const tgz = path.join(
      out,
      fs.readdirSync(out).find((f) => !before.has(f))
    )
    console.log(`\n── ${path.basename(tgz)}`)
    const steps = [`publint "${tgz}" --strict`]
    if (attw !== null) steps.push(`attw "${tgz}" --profile esm-only ${attw}`)
    for (const cmd of steps) {
      try {
        execSync(cmd, { cwd: root, stdio: 'inherit' })
      } catch {
        failed = true
      }
    }
  }
} finally {
  fs.rmSync(out, { recursive: true, force: true })
}
process.exit(failed ? 1 : 0)
