'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Menu.module.css'
import type { MenuProps } from './types'

/**
 * Menu
 * A scrollable container that holds a list of MenuItem components.
 * Renders as role="menu" with WAI-ARIA keyboard support: ArrowDown/ArrowUp
 * move between items (wrapping), Home/End jump to the ends, and only one item
 * is in the Tab order at a time (roving tabindex).
 * Width and height are controlled by the parent
 * via className — the component does not enforce fixed dimensions.
 *
 * Figma: PRIMITIVES / Menu — Menu node 1748:4388
 * Shadow: --ds-effect-shadow-overlay-light (2px 4px 16px -4px #00000059)
 *
 * @see app/design-system/figma.md for Figma mapping
 * @see app/docs/components.md for usage examples
 */
export function Menu({
  size = 'lg',
  showScrollbar = false,
  className,
  children,
  onKeyDown,
  ref,
  ...rest
}: MenuProps & { ref?: React.Ref<HTMLDivElement> }) {
  const menuRef = React.useRef<HTMLDivElement>(null)
  React.useImperativeHandle(ref, () => menuRef.current as HTMLDivElement, [])

  // The item that starts in the Tab order: the selected one, else the first enabled one.
  const items = React.Children.toArray(children).filter(React.isValidElement)
  const propsOf = (el: React.ReactElement) =>
    el.props as { isSelected?: boolean; disabled?: boolean }
  const selectedIdx = items.findIndex((el) => propsOf(el).isSelected && !propsOf(el).disabled)
  const tabStop = selectedIdx >= 0 ? selectedIdx : items.findIndex((el) => !propsOf(el).disabled)

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(e)
    const enabled = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not(:disabled)') ?? []
    )
    if (enabled.length === 0) return
    const current = enabled.indexOf(document.activeElement as HTMLElement)
    let next: number
    switch (e.key) {
      case 'ArrowDown':
        next = (current + 1) % enabled.length
        break
      case 'ArrowUp':
        next = (current - 1 + enabled.length) % enabled.length
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = enabled.length - 1
        break
      default:
        return
    }
    e.preventDefault()
    enabled.forEach((el) => (el.tabIndex = -1))
    enabled[next].tabIndex = 0
    enabled[next].focus()
  }

  let itemIndex = -1
  return (
    // Arrow-key roving focus is delegated to the menu; each item is focusable.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      ref={menuRef}
      role="menu"
      onKeyDown={handleKeyDown}
      aria-orientation="vertical"
      className={cn(styles.menu, showScrollbar && styles.scrollable, className)}
      {...rest}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        itemIndex++
        const childProps = child.props as Record<string, unknown>
        return React.cloneElement(
          child as React.ReactElement<{ size?: string; tabIndex?: number }>,
          {
            // Pass size down to MenuItem children that don't override it explicitly
            size: (childProps.size as string | undefined) ?? size,
            tabIndex:
              (childProps.tabIndex as number | undefined) ?? (itemIndex === tabStop ? 0 : -1),
          }
        )
      })}
    </div>
  )
}

Menu.displayName = 'Menu'
