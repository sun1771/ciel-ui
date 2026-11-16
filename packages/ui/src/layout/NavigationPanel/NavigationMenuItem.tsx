'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import type { NavigationMenuItemProps } from './types'
import { useNavigationPanel } from './NavigationPanel'
import styles from './NavigationPanel.module.css'

/**
 * NavigationMenuItem
 * A single clickable item (Type=regular) inside a NavigationPanel. Shows an
 * icon and an optional label. When the parent panel is collapsed it renders as
 * a square icon-only button (the label is hidden). The selected state is a
 * filled blue pill. With `href` it renders as a link (the panel's
 * `linkComponent`, default <a>) and `isSelected` sets aria-current="page".
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export function NavigationMenuItem({
  href,
  size = 'lg',
  isSelected = false,
  disabled = false,
  icon,
  children,
  className,
  onClick,
  onKeyDown,
  ref,
  ...props
}: NavigationMenuItemProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const { isExpanded, linkComponent: LinkComponent = 'a' } = useNavigationPanel()

  // When a string label is truncated to an ellipsis, expose the full text as
  // a native tooltip (title) — but only while it actually overflows.
  const textRef = React.useRef<HTMLSpanElement>(null)
  const [overflowTitle, setOverflowTitle] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    const el = textRef.current
    if (!el || typeof children !== 'string') {
      setOverflowTitle(undefined)
      return
    }
    setOverflowTitle(el.scrollWidth > el.clientWidth ? children : undefined)
  }, [children, isExpanded])

  const title = !isExpanded && typeof children === 'string' ? children : overflowTitle
  const classes = cn(
    styles.item,
    size === 'sm' && styles.itemSm,
    isSelected && styles.selected,
    disabled && styles.disabled,
    !isExpanded && styles.itemCollapsed,
    className
  )
  const content = (
    <>
      {icon && (
        <span className={styles.itemIcon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children && (
        <span ref={textRef} className={styles.itemText}>
          {children}
        </span>
      )}
    </>
  )

  if (href !== undefined) {
    // A link. Disabled links lose their href (not focusable, not followable).
    return (
      <LinkComponent
        ref={ref}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        aria-current={isSelected ? 'page' : undefined}
        title={title}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </LinkComponent>
    )
  }

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      aria-disabled={disabled || undefined}
      aria-current={isSelected ? 'page' : undefined}
      // Collapsed: the label is visually hidden (still the accessible name), so
      // show it as a tooltip. Expanded: tooltip only when the label is truncated.
      title={title}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={classes}
      {...props}
    >
      {content}
    </button>
  )
}

NavigationMenuItem.displayName = 'NavigationMenuItem'
