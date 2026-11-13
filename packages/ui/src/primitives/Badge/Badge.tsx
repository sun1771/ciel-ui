import React from 'react'
import { cn } from '../../lib/utils'
import type { BadgeProps } from './types'
import styles from './Badge.module.css'

/**
 * Badge
 * Display-only status indicator — pill with a short label or a 12px dot.
 * Five status variants (default/error/success/information/warning) control color.
 *
 * @see design-system/figma.md for Figma mapping (node 849:1026)
 * @see docs/components.md for usage examples
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', type = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.base,
          type === 'dot' ? styles.dot : styles.pill,
          styles[variant],
          className
        )}
        {...props}
      >
        {type === 'default' && children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'
