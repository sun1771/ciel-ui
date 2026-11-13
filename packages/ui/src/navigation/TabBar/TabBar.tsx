'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './TabBar.module.css'
import type { TabBarProps } from './types'

/**
 * TabBar
 * A tablist container that wraps TabItem components.
 * Manages keyboard navigation (Left/Right/Home/End arrow keys) via
 * the roving tabindex pattern.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function TabBar({
  children,
  className,
  onKeyDown,
  ref,
  ...props
}: TabBarProps & { ref?: React.Ref<HTMLDivElement> }) {
  const innerRef = React.useRef<HTMLDivElement>(null)

  const resolvedRef = (node: HTMLDivElement | null) => {
    innerRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const tabs = innerRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]:not(:disabled)'
    )
    if (!tabs || tabs.length === 0) {
      onKeyDown?.(e)
      return
    }

    const tabArr = Array.from(tabs)
    const currentIndex = tabArr.indexOf(document.activeElement as HTMLButtonElement)

    let nextIndex: number | null = null

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      nextIndex = (currentIndex + 1) % tabArr.length
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      nextIndex = (currentIndex - 1 + tabArr.length) % tabArr.length
    } else if (e.key === 'Home') {
      e.preventDefault()
      nextIndex = 0
    } else if (e.key === 'End') {
      e.preventDefault()
      nextIndex = tabArr.length - 1
    }

    if (nextIndex !== null) {
      tabArr[nextIndex]?.focus()
    }

    onKeyDown?.(e)
  }

  return (
    // Arrow-key roving focus is delegated to the tablist; each tab is focusable.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      ref={resolvedRef}
      role="tablist"
      className={cn(styles.tabBar, className)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  )
}

TabBar.displayName = 'TabBar'
