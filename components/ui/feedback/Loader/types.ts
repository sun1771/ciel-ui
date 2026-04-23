import React from 'react'

export type LoaderSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs'

/** Props for the Loader spinner component. */
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls the outer dimensions of the spinner. Default: 'md' (48px). */
  size?: LoaderSize
  /** Accessible label announced to screen readers. Default: 'Loading'. */
  label?: string
  className?: string
}
