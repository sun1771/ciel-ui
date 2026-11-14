#!/usr/bin/env node
// Make emitted .d.ts files resolvable under TypeScript's node16/nodenext rules:
// rewrite extensionless relative specifiers ('./x') to './x.js' or './x/index.js'.
// (Bundler resolution doesn't need this; strict ESM resolution does.)
// Usage: node scripts/fix-dts-extensions.mjs <distDir>
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve(process.argv[2] ?? 'dist')
const SPEC = /((?:from|import)\s*\(?\s*['"])(\.{1,2}\/[^'"]*)(['"])/g
let changed = 0

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith('.d.ts')) fix(p)
  }
}

function resolveSpec(file, spec) {
  if (/\.(js|mjs|cjs|json|css)$/.test(spec)) return spec
  const base = path.resolve(path.dirname(file), spec)
  if (fs.existsSync(base + '.d.ts')) return spec + '.js'
  if (fs.existsSync(path.join(base, 'index.d.ts'))) return spec.replace(/\/?$/, '/index.js')
  throw new Error(`${path.relative(dist, file)}: cannot resolve '${spec}'`)
}

function fix(file) {
  const src = fs.readFileSync(file, 'utf8')
  const out = src.replace(SPEC, (_, pre, spec, post) => pre + resolveSpec(file, spec) + post)
  if (out !== src) {
    fs.writeFileSync(file, out)
    changed++
  }
}

walk(dist)
console.log(
  `fix-dts-extensions: updated ${changed} declaration files in ${path.relative(process.cwd(), dist) || '.'}`
)
