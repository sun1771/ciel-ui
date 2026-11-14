import type React from 'react'

/** One step in the breadcrumb trail. The last item in the array is the current page. */
export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

/** Breadcrumb navigation trail. Last item is rendered as current-page (non-interactive). */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  className?: string
}
