import React from 'react'

/** Vertical gap between a NavigationMenuGroup's direct children.
 *  - `none` (default) — items touch, matching the primary/supporting item lists
 *  - `md` — 16px, matching the top wrapper that separates the logo item from
 *    the primary item group */
export type NavigationMenuGroupGap = 'none' | 'md'

/** Props for a single clickable navigation menu item (Type=regular). */
export interface NavigationMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Marks this item as the currently active route (filled blue pill). */
  isSelected?: boolean
  /** Icon slot — a 20px icon from the design system, rendered with currentColor. */
  icon?: React.ReactNode
  /** Label text — hidden automatically when the parent panel is collapsed. */
  children?: React.ReactNode
  className?: string
}

/** Props for the special logo menu item (Type=logo). It reads the panel's
 *  expanded state + toggle handler from context, so no expand/onToggle props
 *  are needed here. */
export interface NavigationLogoItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Accessible name for the brand logo. Defaults to "TripOn AI". */
  logoAlt?: string
  /** aria-label for the collapse control shown when the panel is expanded. */
  collapseLabel?: string
  /** aria-label for the expand control shown when the panel is collapsed. */
  expandLabel?: string
  className?: string
}

/** Props for a group of navigation items inside a NavigationPanel. */
export interface NavigationMenuGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertical gap between children. Default `none`. Use `md` for the top
   *  wrapper that separates the logo item from the primary item group. */
  gap?: NavigationMenuGroupGap
  children?: React.ReactNode
  className?: string
}

/** Props for the navigation panel container. */
export interface NavigationPanelProps extends React.HTMLAttributes<HTMLElement> {
  /** When true, item labels are visible and the panel is at full width.
   *  When false, only icons are shown and the panel shrinks to icon width. */
  isExpanded?: boolean
  /** Called when the logo item's collapse/expand control is activated. */
  onToggle?: () => void
  children?: React.ReactNode
  className?: string
}

/** Shared panel state passed to descendant items via context. */
export interface NavigationPanelContextValue {
  isExpanded: boolean
  onToggle?: () => void
}
