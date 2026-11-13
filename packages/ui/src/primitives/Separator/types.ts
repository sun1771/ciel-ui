import type React from 'react'

export type SeparatorOrientation = 'horizontal' | 'vertical'

/** Props for the Separator divider component. */
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls the axis of the divider line. Default: 'horizontal' */
  orientation?: SeparatorOrientation
  /** Applied to the root <div>. */
  className?: string
}
