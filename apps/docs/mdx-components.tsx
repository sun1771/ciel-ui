import type { MDXComponents } from 'mdx/types'
import { isValidElement } from 'react'
import { CodeBlock } from '@/components/site/CodeBlock'
import styles from '@/app/docs/prose.module.css'

/** How markdown elements render in the guides (Getting started, Theming, Accessibility). */
const components: MDXComponents = {
  wrapper: ({ children }) => <article className={styles.prose}>{children}</article>,
  // Fenced code blocks → highlighted CodeBlock with a copy button.
  pre: ({ children }) => {
    if (isValidElement<{ className?: string; children?: string }>(children)) {
      const lang = children.props.className?.replace('language-', '') ?? 'tsx'
      return <CodeBlock code={String(children.props.children ?? '').trimEnd()} lang={lang} />
    }
    return <pre>{children}</pre>
  },
}

export function useMDXComponents(): MDXComponents {
  return components
}
