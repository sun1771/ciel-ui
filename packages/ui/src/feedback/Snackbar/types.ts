import React from 'react'

export type SnackbarVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

/** Inline action link shown at the bottom of the snackbar content. */
export interface SnackbarAction {
  label: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
}

/** Props for the Snackbar component. */
/** Accessible names used by Snackbar. */
export interface SnackbarLabels {
  /** Accessible name of the progress bar. */
  progress: string
  /** Close (X) button name. */
  dismiss: string
}

export interface SnackbarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Override accessible names (e.g. for localisation). */
  labels?: Partial<SnackbarLabels>
  /** Visual status variant — controls title color and progress bar color. */
  variant?: SnackbarVariant
  /** Icon rendered in the left slot (20×20). */
  icon?: React.ReactNode
  /** Title text, styled in the variant color. */
  title?: React.ReactNode
  /** Body message content. */
  children: React.ReactNode
  /** Optional inline action link rendered below the body. */
  action?: SnackbarAction
  /** Show the X close button. @default true */
  showClose?: boolean
  /** Callback when the close button is activated. */
  onClose?: () => void
  /** Show the 4px progress bar at the bottom. @default false */
  showProgress?: boolean
  /** Fill percentage for the progress bar (0–100). @default 100 */
  progress?: number
  className?: string
}
