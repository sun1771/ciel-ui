import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { COMPONENTS, componentBySlug } from '@/content/registry'
import { site } from '@/content/site'
import { loadExamples } from '@/generated/examples'
import { CodeBlock } from '@/components/site/CodeBlock'
import { Example, renderInlineCode } from '@/components/site/Example'
import { PropsTable } from '@/components/site/PropsTable'
import styles from '../../page.module.css'

export function generateStaticParams() {
  return COMPONENTS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/docs/components/[slug]'>): Promise<Metadata> {
  const doc = componentBySlug((await params).slug)
  return doc ? { title: doc.name, description: doc.description } : {}
}

export default async function ComponentPage({ params }: PageProps<'/docs/components/[slug]'>) {
  const { slug } = await params
  const doc = componentBySlug(slug)
  if (!doc) notFound()

  const { examples } = await loadExamples[slug as keyof typeof loadExamples]()
  const importLine = `import { ${doc.api.join(', ')} } from '${site.packages.ui}'`

  return (
    <article className={styles.article}>
      <p className={styles.eyebrow}>{doc.category}</p>
      <h1 className={styles.title}>{doc.name}</h1>
      <p className={styles.lead}>{renderInlineCode(doc.description)}</p>
      <div className={styles.meta}>
        <CodeBlock code={importLine} />
        {site.storybookUrl && (
          <a href={`${site.storybookUrl}/?path=/docs/${doc.storybook}--docs`}>View in Storybook</a>
        )}
      </div>

      <h2 id="examples">Examples</h2>
      {doc.examples.map((ex) => {
        const e = examples[ex.name]
        return (
          <Example
            key={ex.name}
            title={ex.title}
            description={ex.description}
            Component={e.Component}
            source={e.source}
          />
        )
      })}

      <h2 id="accessibility">Accessibility</h2>
      <ul className={styles.list}>
        {doc.a11y.map((line) => (
          <li key={line}>{renderInlineCode(line)}</li>
        ))}
      </ul>

      <h2 id="api">API</h2>
      {doc.api.map((name) => (
        <PropsTable key={name} component={name} />
      ))}
    </article>
  )
}
