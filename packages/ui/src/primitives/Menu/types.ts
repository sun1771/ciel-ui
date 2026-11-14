import type React from 'react'

/** All sizes — maps directly to Figma "Size" property on both MenuItem and Menu */
export type MenuSize = 'lg' | 'sm'

/**
 * Props shared by both MenuItem and Menu.
 * hover / focus states are CSS pseudo-classes only and are never React props.
 */
export interface MenuBaseProps {
  /** Size of the menu and its items. Default: 'lg'. */
  size?: MenuSize
  /** Additional CSS class names merged via cn(). */
  className?: string
}

/**
 * Props for a single interactive menu item.
 * Renders as a <button role="menuitem">. Extends all native <button> HTML attributes.
 *
 * Figma: PRIMITIVES / Menu — .menuitem node 282:1143
 *
 * Note: Figma "Status: disabeld" (typo in source) maps to the standard `disabled` prop.
 * Figma "hover" state is CSS :hover only — not a prop.
 * figma.md listed Text/action for selected label; actual Figma uses Text/on-action (white). ✓
 */
export interface MenuItemProps
  extends MenuBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Marks this item as the currently selected entry. */
  isSelected?: boolean
  /** Icon rendered to the left of the label. Inherits text color via currentColor. */
  iconLeft?: React.ReactNode
  /** Icon rendered to the right of the label. Inherits text color via currentColor. */
  iconRight?: React.ReactNode
  /** Item label text — required. */
  children: React.ReactNode
}

/**
 * Props for the Menu container that holds a list of MenuItems.
 * Renders as a <div role="menu">. Extends all native <div> HTML attributes.
 *
 * Figma: PRIMITIVES / Menu — Menu node 1748:4388
 */
export interface MenuProps extends MenuBaseProps, React.HTMLAttributes<HTMLDivElement> {
  /** When true, enables overflow-y: auto so the menu scrolls if taller than its container. */
  showScrollbar?: boolean
  /** One or more MenuItem components. */
  children: React.ReactNode
}
