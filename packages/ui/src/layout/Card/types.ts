import React from 'react'

/**
 * Card — a composable content card (Figma `Card` 1818:1037 + `.Card Content` 3455:3491).
 *
 * Compose the parts you need, in order:
 *   <Card>
 *     <CardMedia />            image or image carousel
 *     <CardHeader />           title, optional badge, optional meta row
 *     <CardBody>               metrics / supporting content
 *       <CardMetric />
 *     </CardBody>
 *     <CardFooter action={…}>  price/summary + action
 *       <CardPrice />
 *     </CardFooter>
 *   </Card>
 *
 * Width defaults to 230px (Figma); override with the `--card-width` custom
 * property or a className.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Applies the selected border (Figma Card State=selected). */
  isSelected?: boolean
  /** Renders a shimmer skeleton instead of `children` and sets `aria-busy`. */
  loading?: boolean
  /** Include a media placeholder in the loading skeleton. Default: true. */
  loadingMedia?: boolean
}

/** Accessible names for the media carousel controls. */
export interface CardMediaLabels {
  previous: string
  next: string
}

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Media slides (e.g. `<img>` elements). With more than one, the media area
   * becomes a carousel with arrows and pagination dots.
   */
  images?: React.ReactNode[]
  /** Single media element. Used when `images` is not provided. */
  children?: React.ReactNode
  /** Override the carousel controls' accessible names. */
  labels?: Partial<CardMediaLabels>
}

export type CardTitleElement = 'p' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Card title. */
  title: React.ReactNode
  /** Element used for the title, so it fits your page's heading outline. Default: 'p'. */
  titleAs?: CardTitleElement
  /** Element shown at the end of the title row, e.g. a "Recommended" chip. */
  badge?: React.ReactNode
  /** Meta row under the title, e.g. rating or tag chips. */
  children?: React.ReactNode
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spacing between items. Default: 'xs'. */
  gap?: 'xxs' | 'xs'
  /** Cross-axis alignment of items. Default: 'center'. */
  align?: 'center' | 'start'
}

export interface CardMetricProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading icon (16px recommended). */
  icon?: React.ReactNode
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Trailing action, e.g. a transparent "Details" Button. */
  action?: React.ReactNode
  /** 'between' puts content left and `action` right; 'center' centres everything. Default: 'between'. */
  justify?: 'between' | 'center'
}

export interface CardPriceProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Formatted price, e.g. "$2,124.42". */
  value: React.ReactNode
  /** Small trailing text, e.g. "Total" or "/ night". */
  suffix?: React.ReactNode
}
