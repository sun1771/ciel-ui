'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './ButtonGroup.module.css'
import type { ButtonGroupProps } from './types'

/**
 * ButtonGroup
 * Segmented control container that groups ButtonGroupItem components.
 * Items may be icon+label or icon-only (give icon-only items an aria-label).
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function ButtonGroup({
  className,
  children,
  ref,
  ...props
}: ButtonGroupProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} role="group" className={cn(styles.group, className)} {...props}>
      {children}
    </div>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
