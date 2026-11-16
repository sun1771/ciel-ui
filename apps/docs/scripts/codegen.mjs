#!/usr/bin/env node
/**
 * Docs code generation (runs before `next dev` / `next build`):
 *
 * 1. generated/examples/<slug>.tsx — imports each example component of a page
 *    and pairs it with its source code (shown under the live demo).
 * 2. generated/examples/index.ts — lazy loaders, so a page only bundles its own
 *    examples.
 * 3. generated/props.json — props tables extracted from @cielui/react's TypeScript
 *    types (JSDoc comments become descriptions) with react-docgen-typescript.
 *
 * It also checks the registry and the examples folder agree.
 */
import fs from 'node:fs'
import path from 'node:path'
import docgen from 'react-docgen-typescript'
import { COMPONENTS } from '../content/registry.ts'

const docsRoot = path.resolve(import.meta.dirname, '..')
const uiRoot = path.resolve(docsRoot, '../../packages/ui')
const outDir = path.join(docsRoot, 'generated')
const examplesDir = path.join(docsRoot, 'examples')

fs.rmSync(outDir, { recursive: true, force: true })
fs.mkdirSync(path.join(outDir, 'examples'), { recursive: true })

// ── 1+2. examples ────────────────────────────────────────────────────────────
const problems = []
const registered = new Set()
const loaders = []

for (const doc of COMPONENTS) {
  const lines = ["import type { ComponentType } from 'react'"]
  const entries = []
  doc.examples.forEach((ex, i) => {
    const file = path.join(examplesDir, doc.slug, `${ex.name}.tsx`)
    registered.add(path.relative(examplesDir, file))
    if (!fs.existsSync(file)) {
      problems.push(`missing example file: examples/${doc.slug}/${ex.name}.tsx`)
      return
    }
    const source = fs
      .readFileSync(file, 'utf8')
      .replace(/^'use client'\n\n?/, '')
      .trimEnd()
    lines.push(`import Example${i} from '../../examples/${doc.slug}/${ex.name}'`)
    entries.push(
      `  ${JSON.stringify(ex.name)}: { Component: Example${i}, source: ${JSON.stringify(source)} },`
    )
  })
  lines.push(
    '',
    'export const examples: Record<string, { Component: ComponentType; source: string }> = {',
    ...entries,
    '}',
    ''
  )
  fs.writeFileSync(path.join(outDir, 'examples', `${doc.slug}.tsx`), lines.join('\n'))
  loaders.push(`  ${JSON.stringify(doc.slug)}: () => import('./${doc.slug}'),`)
}

for (const dir of fs.readdirSync(examplesDir)) {
  for (const f of fs.readdirSync(path.join(examplesDir, dir))) {
    if (!registered.has(path.join(dir, f)))
      problems.push(`example not in registry: examples/${dir}/${f}`)
  }
}

fs.writeFileSync(
  path.join(outDir, 'examples', 'index.ts'),
  `export const loadExamples = {\n${loaders.join('\n')}\n} as const\n`
)

// ── 3. props tables ─────────────────────────────────────────────────────────
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) return walk(p)
    return /\.tsx$/.test(e.name) && !/\.(stories|test)\.tsx$/.test(e.name) ? [p] : []
  })
}

const parser = docgen.withCustomConfig(path.join(uiRoot, 'tsconfig.json'), {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
  // Keep the component's own props; drop the hundreds inherited from React's
  // HTML attribute types (documented once on each page instead).
  propFilter: (prop) => !prop.declarations?.every((d) => d.fileName.includes('node_modules')),
})

const wanted = new Set(COMPONENTS.flatMap((c) => c.api))
const props = {}
for (const doc of parser.parse(walk(path.join(uiRoot, 'src')))) {
  if (!wanted.has(doc.displayName)) continue
  props[doc.displayName] = {
    description: doc.description,
    props: Object.values(doc.props)
      .map((p) => ({
        name: p.name,
        // Unions like ButtonSize are shown as their values: "lg" | "sm"
        type:
          p.type?.name === 'enum' && Array.isArray(p.type.value)
            ? p.type.value.map((v) => v.value).join(' | ')
            : (p.type?.raw ?? p.type?.name ?? ''),
        required: p.required,
        defaultValue: p.defaultValue?.value ?? null,
        description: p.description,
      }))
      .sort((a, b) => Number(b.required) - Number(a.required) || a.name.localeCompare(b.name)),
  }
}
for (const name of wanted) if (!props[name]) problems.push(`no props found for ${name}`)
fs.writeFileSync(path.join(outDir, 'props.json'), JSON.stringify(props, null, 2) + '\n')

if (problems.length) {
  console.error('docs codegen problems:\n  ' + problems.join('\n  '))
  process.exit(1)
}
console.log(
  `docs codegen: ${COMPONENTS.length} pages, ${registered.size} examples, ${Object.keys(props).length} props tables`
)
