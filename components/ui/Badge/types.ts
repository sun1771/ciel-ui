import React from 'react'

export type BadgeVariant = 'default' | 'error' | 'success' | 'information' | 'warning'

export type BadgeType = 'default' | 'dot'

/** Display-only status badge — pill label or 12px dot indicator. Non-interactive. */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls background color. Default: 'default' (blue). */
  variant?: BadgeVariant
  /** 'default' = text pill; 'dot' = 12px circle indicator. Default: 'default'. */
  type?: BadgeType
  /** Text rendered inside the pill — only used when type="default". */
  children?: React.ReactNode
  /** Applied to the root <div>. */
  className?: string
}
