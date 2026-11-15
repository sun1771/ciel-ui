import React from 'react'

/** Props for a single tab item within a TabBar. */
export interface TabItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** Identifies the tab, so the TabBar can track which one is selected. */
  value?: string
  /** Whether this tab is selected. Overrides the TabBar's `value` when set. */
  isSelected?: boolean
  /** Disables the tab: prevents interaction and applies disabled styling. */
  disabled?: boolean
  /** Optional icon rendered to the left of the label (should use currentColor). */
  icon?: React.ReactNode
  /** Tab label text. */
  children: React.ReactNode
  /** Applied to the root <button> element. */
  className?: string
}

/** Props for the TabBar container (tablist). */
export interface TabBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  /** Value of the selected TabItem. Pass it to control the TabBar yourself. */
  value?: string
  /** Value of the TabItem selected at first, when `value` isn't passed (uncontrolled). */
  defaultValue?: string
  /** Called with the TabItem's value when the user selects a tab, in both modes. */
  onValueChange?: (value: string) => void
  /** TabItem components. */
  children: React.ReactNode
  /** Applied to the root <div> element. */
  className?: string
}
