import React from 'react'

/** Props for a single tab item within a TabBar. */
export interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether this tab is the currently active/selected tab. */
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
export interface TabBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** TabItem components. */
  children: React.ReactNode
  /** Applied to the root <div> element. */
  className?: string
}
