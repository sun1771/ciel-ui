import type { Metadata } from 'next'
import { CodeBlock } from '@/components/site/CodeBlock'
import { site } from '@/content/site'
import { IconGallery } from './IconGallery'
import page from '../page.module.css'

export const metadata: Metadata = { title: 'Icons' }

export default function IconsPage() {
  return (
    <article className={page.article}>
      <p className={page.eyebrow}>Guides</p>
      <h1 className={page.title}>Icons</h1>
      <p className={page.lead}>
        Hand-tuned SVG icons at 16, 20, 24 and 32px. They inherit <code>currentColor</code> and are
        tree-shakeable: import only what you use.
      </p>
      <CodeBlock
        code={`import { Search } from '${site.packages.icons}'\n\n<Search size={20} aria-hidden="true" />`}
      />
      <h2>Gallery</h2>
      <IconGallery />
    </article>
  )
}
