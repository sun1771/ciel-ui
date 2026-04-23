'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import styles from './ButtonGroup.module.css'
import type { ButtonGroupProps } from './types'

/**
 * ButtonGroup
 * Segmented control container that groups ButtonGroupItem components.
 * Use variant="button-group" (default) for icon+label items, "icon-group" for icon-only.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ variant = 'button-group', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(styles.group, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'
