import React from 'react'
import { cn } from '../../lib/utils'
import styles from './Card.module.css'
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardMetricProps,
  CardFooterProps,
  CardPriceProps,
} from './types'

function CardSkeleton({ media }: { media: boolean }) {
  return (
    <>
      {media && <div className={styles.skeletonImageArea} aria-hidden="true" />}
      <div className={styles.skeletonContent} aria-hidden="true">
        <div className={styles.skeletonRow} />
        <div className={styles.skeletonRow} />
        <div className={styles.skeletonRow} />
        <div className={cn(styles.skeletonRow, styles.skeletonRowSm)} />
      </div>
    </>
  )
}

/**
 * Card — container with hover/selected border and an optional loading skeleton.
 * Compose it from CardMedia, CardHeader, CardBody, CardFooter (see types.ts).
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { isSelected = false, loading = false, loadingMedia = true, className, children, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(styles.card, isSelected && styles.selected, className)}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <CardSkeleton media={loadingMedia} /> : children}
    </div>
  )
)
Card.displayName = 'Card'

/** Title row (title + optional badge) with an optional meta row underneath. */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, titleAs: Title = 'p', badge, children, className, ...props }, ref) => (
    <div ref={ref} className={cn(styles.headlineItem, className)} {...props}>
      <div className={styles.headlineRow}>
        <Title className={styles.headline}>{title}</Title>
        {badge}
      </div>
      {children != null && <div className={styles.headlineChips}>{children}</div>}
    </div>
  )
)
CardHeader.displayName = 'CardHeader'

/** Wrapping row of supporting content, usually CardMetric items. */
export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ gap = 'xs', align = 'center', className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        styles.bodyItem,
        gap === 'xxs' ? styles.gapXxs : styles.gapXs,
        align === 'start' && styles.alignStart,
        className
      )}
      {...props}
    />
  )
)
CardBody.displayName = 'CardBody'

/** Icon + text pair, e.g. a bed icon with "1 room, king bed". */
export const CardMetric = React.forwardRef<HTMLSpanElement, CardMetricProps>(
  ({ icon, className, children, ...props }, ref) => (
    <span ref={ref} className={cn(styles.bodyMetric, className)} {...props}>
      {icon != null && (
        <span className={styles.metricIcon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.bodyText}>{children}</span>
    </span>
  )
)
CardMetric.displayName = 'CardMetric'

/** Bottom row: summary content (e.g. CardPrice) on the left, `action` on the right. */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ action, justify = 'between', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(styles.priceItem, justify === 'center' && styles.priceItemCenter, className)}
      {...props}
    >
      {children}
      {action}
    </div>
  )
)
CardFooter.displayName = 'CardFooter'

/** Price value with an optional small suffix. Grows to push the footer action right. */
export const CardPrice = React.forwardRef<HTMLSpanElement, CardPriceProps>(
  ({ value, suffix, className, ...props }, ref) => (
    <span ref={ref} className={cn(styles.price, className)} {...props}>
      <span className={styles.priceValue}>{value}</span>
      {suffix != null && <span className={styles.priceSuffix}>{suffix}</span>}
    </span>
  )
)
CardPrice.displayName = 'CardPrice'
