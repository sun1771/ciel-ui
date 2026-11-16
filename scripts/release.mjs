#!/usr/bin/env node
/**
 * Publish the packages to npm. Run by .github/workflows/release.yml after a
 * "Version packages" pull request is merged; not meant to be run by hand.
 *
 * For each package whose version is not on npm yet:
 *   1. `pnpm pack`: applies publishConfig and turns `workspace:*` into the
 *      real version numbers, exactly like `pnpm publish` would.
 *   2. `npm stage publish <tarball>`: uploads it to npm's stage queue. It goes
 *      live when a maintainer approves it with 2FA on npmjs.com ("Staged
 *      Packages" tab) or with `npm stage approve`.
 * Then it tags the commit (`@cielui/react@0.2.0`, ...), pushes the tags and
 * creates one GitHub release for the version.
 *
 * Auth is npm trusted publishing (GitHub OIDC): no npm token is stored
 * anywhere. Needs npm CLI 11.15+ for `npm stage`.
 *
 * Usage: node scripts/release.mjs [--dry-run]
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const dryRun = process.argv.includes('--dry-run')
// Dependencies first: @cielui/react depends on @cielui/icons.
const DIRS = ['tokens', 'icons', 'ui']

const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { cwd: root, encoding: 'utf8', ...opts }).trim()

function isOnNpm(name, version) {
  try {
    return run('npm', ['view', `${name}@${version}`, 'version']) === version
  } catch {
    return false // E404: the package or version does not exist
  }
}

const tagExists = (tag) => run('git', ['tag', '--list', tag]) === tag

const packages = DIRS.map((dir) => {
  const { name, version } = JSON.parse(
    fs.readFileSync(path.join(root, 'packages', dir, 'package.json'), 'utf8')
  )
  return { dir, name, version, tag: `${name}@${version}` }
})

// Already live, or already staged by an earlier run (the tag is pushed right
// after staging, and a staged version is not visible on npm until approved).
const pending = packages.filter((p) => !tagExists(p.tag) && !isOnNpm(p.name, p.version))
if (pending.length === 0) {
  console.log('Nothing to publish: every version is already on npm or staged.')
  process.exit(0)
}

const out = fs.mkdtempSync(path.join(os.tmpdir(), 'ciel-release-'))
try {
  for (const p of pending) {
    const cwd = path.join(root, 'packages', p.dir)
    const before = new Set(fs.readdirSync(out))
    run('pnpm', ['pack', '--pack-destination', out], { cwd })
    const tgz = path.join(
      out,
      fs.readdirSync(out).find((f) => !before.has(f))
    )
    console.log(`\n── ${p.tag}: staging ${path.basename(tgz)}`)
    const args = ['stage', 'publish', tgz, '--access', 'public']
    if (dryRun) args.push('--dry-run')
    execFileSync('npm', args, { cwd: root, stdio: 'inherit' })
  }
} finally {
  fs.rmSync(out, { recursive: true, force: true })
}

if (dryRun) {
  console.log(`\nDry run: would tag and release ${pending.map((p) => p.tag).join(', ')}`)
  process.exit(0)
}

for (const p of pending) run('git', ['tag', p.tag])
run('git', ['push', 'origin', ...pending.map((p) => `refs/tags/${p.tag}`)])

// One GitHub release per version, on the @cielui/react tag. The three
// packages share a version number, so one set of notes covers them all.
const ui = packages.find((p) => p.dir === 'ui')
if (pending.includes(ui)) {
  const changelog = fs.readFileSync(path.join(root, 'packages/ui/CHANGELOG.md'), 'utf8')
  const section = changelog.split(/^## /m).find((s) => s.startsWith(`${ui.version}\n`)) ?? ''
  const notes = [
    section.replace(/^.*\n/, '').trim(),
    '',
    '```bash',
    `npm install ${packages.map((p) => p.tag).join(' ')}`,
    '```',
  ].join('\n')
  const notesFile = path.join(os.tmpdir(), `ciel-release-notes-${ui.version}.md`)
  fs.writeFileSync(notesFile, notes)
  run('gh', ['release', 'create', ui.tag, '--title', `v${ui.version}`, '--notes-file', notesFile])
  console.log(`\nCreated GitHub release v${ui.version}`)
}

console.log('\nStaged on npm. Approve on npmjs.com (Staged Packages) to make the versions live.')
