'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import styles from './Menu.module.css'
import type { MenuProps } from './types'

/**
 * Menu
 * A scrollable container that holds a list of MenuItem components.
 * Renders as role="menu". Width and height are controlled by the parent
 * via className — the component does not enforce fixed dimensions.
 *
 * Figma: PRIMITIVES / Menu — Menu node 1748:4388
 * Shadow: --ds-effect-shadow-overlay-light (2px 4px 16px -4px #00000059)
 *
 * @see app/design-system/figma.md for Figma mapping
 * @see app/docs/components.md for usage examples
 */
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  function Menu(
    {
      size = 'lg',
      showScrollbar = false,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="menu"
        aria-orientation="vertical"
        className={cn(
          styles.menu,
          showScrollbar && styles.scrollable,
          className,
        )}
        {...rest}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child
          // Pass size down to MenuItem children that don't override it explicitly
          const childProps = child.props as Record<string, unknown>
          if (childProps.size === undefined) {
            return React.cloneElement(child as React.ReactElement<{ size?: string }>, {
              size,
            })
          }
          return child
        })}
      </div>
    )
  },
)

Menu.displayName = 'Menu'
