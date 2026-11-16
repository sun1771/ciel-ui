import type React from 'react'
import type { SelectButtonSize, SelectButtonVariant } from '../SelectButton/types'

/** Props for SelectMenu: a SelectButton that opens a Menu of options. */
export interface SelectMenuProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'defaultValue' | 'onChange'
> {
  /** MenuItems, each with a `value`. The selected item's text becomes the button text. */
  children: React.ReactNode
  /** Value of the selected item. Pass it to control the selection yourself. */
  value?: string
  /** Value selected at first, when `value` isn't passed (uncontrolled). */
  defaultValue?: string
  /** Called with the item's value when the user picks an option, in both modes. */
  onValueChange?: (value: string) => void
  /** Button text while nothing is selected. */
  placeholder?: React.ReactNode
  /** Whether the menu is open. Pass it to control opening yourself. */
  open?: boolean
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void
  /** Accessible name of the menu. */
  'aria-label'?: string
  /** SelectButton style. Default: 'outline'. */
  variant?: SelectButtonVariant
  /** SelectButton and menu size. Default: 'lg'. */
  size?: SelectButtonSize
  /** Disables the button. */
  disabled?: boolean
  /** Extra class for the menu panel. */
  menuClassName?: string
}
