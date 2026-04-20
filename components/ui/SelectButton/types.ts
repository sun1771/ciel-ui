import type React from 'react'

/** Visual variants — maps directly to Figma "Type" property */
export type SelectButtonVariant = 'default' | 'outline' | 'transparent'

/** Sizes — maps directly to Figma "Size" property */
export type SelectButtonSize = 'lg' | 'sm'

/**
 * SelectButton — a toggle button with a trailing chevron icon.
 * The chevron points down when unselected (closed) and up when selected (open).
 * isSelected is a controlled prop; the parent manages state and renders the
 * dropdown (Menu) when isSelected=true.
 *
 * @see design-system/figma.md → Select Button (node 1748:7209)
 * @see docs/components.md for usage examples
 */
export interface SelectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant. Default: 'default' (filled blue). */
  variant?: SelectButtonVariant
  /** Size of the button. Default: 'lg'. */
  size?: SelectButtonSize
  /** When true: chevron points up (open state). When false: chevron points down. Default: false. */
  isSelected?: boolean
  /** Disables interaction and applies disabled token styling. */
  disabled?: boolean
  /** Additional CSS class names merged via cn(). */
  className?: string
  /** Button label text — required. */
  children: React.ReactNode
}
