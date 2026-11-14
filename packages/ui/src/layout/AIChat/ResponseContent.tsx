'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Separator } from '../../primitives/Separator'
import type { ResponseContentItemProps, ResponseContentProps } from './types'
import styles from './AIChat.module.css'

/**
 * ResponseContentItem — `.Response Content item` (Figma node 2087:3575).
 * A bold section title (Body/md-semibold) + body text (Body/sm), followed by an
 * optional divider (reuses the Separator primitive, wrapped with 8px py).
 *
 * @see design-system/figma.md → AI Chat
 */
export function ResponseContentItem({
  title,
  separator = true,
  children,
  className,
  ref,
  ...props
}: ResponseContentItemProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn(styles.responseContentItem, className)} {...props}>
      {title !== undefined && title !== null && <p className={styles.responseTitle}>{title}</p>}
      <div className={styles.responseBody}>{children}</div>
      {separator && (
        <div className={styles.separatorWrap}>
          <Separator />
        </div>
      )}
    </div>
  )
}

ResponseContentItem.displayName = 'ResponseContentItem'

/**
 * ResponseContent — `.Response Content` (Figma node 2090:3602).
 * A vertical stack of ResponseContentItem blocks. Pass `sections` for the common
 * case, or `children` for full control.
 *
 * @see design-system/figma.md → AI Chat
 */
export function ResponseContent({
  sections,
  children,
  className,
  ref,
  ...props
}: ResponseContentProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className={cn(styles.responseContent, className)} {...props}>
      {children ??
        sections?.map((section, i) => (
          <ResponseContentItem key={i} title={section.title}>
            {section.content}
          </ResponseContentItem>
        ))}
    </div>
  )
}

ResponseContent.displayName = 'ResponseContent'
