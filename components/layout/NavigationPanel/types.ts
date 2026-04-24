import React from 'react'

/** Props for a single clickable navigation menu item. */
export interface NavigationMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Marks this item as the currently active route. */
  isSelected?: boolean
  /** Icon slot — should be a 20px icon from @/icons, rendered with currentColor. */
  icon?: React.ReactNode
  /** Label text — hidden automatically when the parent panel is collapsed. */
  children?: React.ReactNode
  className?: string
}

/** Props for the navigation panel container. */
export interface NavigationPanelProps extends React.HTMLAttributes<HTMLElement> {
  /** When true, item labels are visible and the panel is 155px wide.
   *  When false, only icons are shown and the panel shrinks to icon width. */
  isExpanded?: boolean
  children?: React.ReactNode
  className?: string
}
