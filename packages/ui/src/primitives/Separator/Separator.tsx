import React from 'react'
import { cn } from '../../lib/utils'
import type { SeparatorProps } from './types'
import styles from './Separator.module.css'

/**
 * Separator
 * A 1px divider line in horizontal or vertical orientation.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(styles.base, styles[orientation], className)}
        {...props}
      />
    )
  }
)

Separator.displayName = 'Separator'
