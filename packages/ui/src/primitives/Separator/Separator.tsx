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
export function Separator({
  orientation = 'horizontal',
  className,
  ref,
  ...props
}: SeparatorProps & { ref?: React.Ref<HTMLDivElement> }) {
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

Separator.displayName = 'Separator'
