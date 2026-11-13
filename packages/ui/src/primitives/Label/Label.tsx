'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Label.module.css'
import type { LabelProps } from './types'

/**
 * Label
 * A form label component that pairs with an input via htmlFor.
 * 'required' variant renders a red asterisk before the label text.
 *
 * @see design-system/figma.md for Figma mapping (node 56:186)
 * @see docs/components.md for usage examples
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ variant = 'default', icon, children, className, ...props }, ref) => {
    return (
      <label ref={ref} className={cn(styles.base, className)} {...props}>
        <span className={styles.labelText}>
          {variant === 'required' && (
            <>
              <span className={styles.asterisk} aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </>
          )}
          {children}
        </span>
        {icon && (
          <span className={styles.iconSlot} aria-hidden="true">
            {icon}
          </span>
        )}
      </label>
    )
  }
)

Label.displayName = 'Label'
