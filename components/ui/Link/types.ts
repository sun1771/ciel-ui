import React from 'react'

/** Visual style of the link — standalone or embedded in text. */
export type LinkVariant = 'default' | 'in-line'

/**
 * Props for the Link component.
 * Extends AnchorHTMLAttributes so all native anchor props (href, target, rel, etc.)
 * pass through directly to the <a> element.
 */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** 'default' — no underline at rest, adds underline on hover.
   *  'in-line' — underline at rest (flows in body text), removes underline on hover. */
  variant?: LinkVariant
  /** Disables the link: adds aria-disabled, prevents navigation, removes pointer interaction. */
  disabled?: boolean
  /** Icon node rendered to the left of the link text — wrapped in aria-hidden. */
  iconLeft?: React.ReactNode
  /** Icon node rendered to the right of the link text — wrapped in aria-hidden. */
  iconRight?: React.ReactNode
  /** Link text content. */
  children: React.ReactNode
  /** Applied to the root <a> element. */
  className?: string
}
