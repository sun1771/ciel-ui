import type React from 'react'

/** All visual variants — maps directly to Figma "Type" property */
export type ButtonVariant = 'default' | 'outline' | 'transparent'

/** All sizes — maps directly to Figma "Size" property */
export type ButtonSize = 'lg' | 'sm'

/** Shape for ButtonIcon only — maps to Figma "shape" property */
export type ButtonShape = 'default' | 'round'

/**
 * Props shared by all three Button components.
 * hover/focus states are CSS pseudo-classes only and are never React props.
 */
export interface ButtonBaseProps {
  /** Visual style variant. Default: 'default' (filled blue). */
  variant?: ButtonVariant
  /** Size of the button. Default: 'lg'. */
  size?: ButtonSize
  /** Disables interaction and applies disabled token styling. */
  disabled?: boolean
  /** Shows a loading spinner; also disables interaction. */
  isLoading?: boolean
  /** Additional CSS class names merged via cn(). */
  className?: string
}

/**
 * Props for the standard horizontal Button.
 * Extends ButtonBaseProps and all native <button> HTML attributes.
 */
export interface ButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon rendered to the left of the label. */
  iconLeft?: React.ReactNode
  /** Icon rendered to the right of the label. */
  iconRight?: React.ReactNode
  /** Button label text — required. */
  children: React.ReactNode
}

/**
 * Props for the vertical layout ButtonVertical.
 * Icon(s) appear above and/or below the label in column direction.
 */
export interface ButtonVerticalProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon rendered above the label. */
  iconTop?: React.ReactNode
  /** Icon rendered below the label. */
  iconBottom?: React.ReactNode
  /** Optional secondary support text rendered below the label. */
  supportText?: React.ReactNode
  /** Button label text — required. */
  children: React.ReactNode
}

/**
 * Props for the icon-only ButtonIcon.
 * No visible text — label is required as aria-label for accessibility.
 */
export interface ButtonIconProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — becomes the button's aria-label. Never omit. */
  label: string
  /** The icon to render. Recommended sizes: 16 (sm), 20 (lg). */
  icon: React.ReactNode
  /** Border radius shape. 'round' produces a pill/circle shape. Default: 'default'. */
  shape?: ButtonShape
}

/**
 * Props for the icon-only ButtonIconSwitching.
 * Same affordance as ButtonIcon (transparent base) but the displayed icon
 * swaps on hover/focus — e.g. a collapsed nav logo that reveals an expand
 * arrow on hover, combining two controls into one.
 */
export interface ButtonIconSwitchingProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — becomes the button's aria-label. Never omit. */
  label: string
  /** Icon shown at rest (e.g. the app logo). Recommended sizes: 16 (sm), 20 (lg). */
  icon: React.ReactNode
  /** Icon revealed on hover/focus (e.g. an expand arrow). Match `icon`'s size. */
  hoverIcon: React.ReactNode
  /** Border radius shape. 'round' produces a pill/circle shape. Default: 'default'. */
  shape?: ButtonShape
}
