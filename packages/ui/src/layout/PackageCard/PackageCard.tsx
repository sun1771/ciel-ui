import React from 'react'
import { Sparkle } from '@acme/icons'
import { ButtonIcon } from '../../primitives/Button'
import { CarouselItem } from '../../navigation/Carousel'
import { cn } from '../../lib/utils'
import styles from './PackageCard.module.css'
import type { PackageCardLabels, PackageCardProps } from './types'

const DEFAULT_LABELS: PackageCardLabels = {
  action: 'AI actions',
  pageNavigation: 'Page navigation',
  previousPage: 'Previous page',
  nextPage: 'Next page',
}

const defaultFormatPageLabel = (page: number) => `Day ${page}`

/**
 * PackageCard
 * Card container with a heading, an action button, and built-in page navigation.
 * variant="default" — prev/next arrows only.
 * variant="itinerary" — prev / "Day N" / next in the header.
 * loaded=false — content not yet generated: shows the `emptyText` placeholder and
 * disables the action button, nav buttons, and dims the "Day N" label.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const PackageCard = React.forwardRef<HTMLDivElement, PackageCardProps>(
  (
    {
      variant = 'default',
      loaded = true,
      emptyText = 'Nothing here yet.',
      heading,
      page = 1,
      totalPages = 1,
      onPrevPage,
      onNextPage,
      onAction,
      actionIcon = <Sparkle size={16} />,
      formatPageLabel = defaultFormatPageLabel,
      labels,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const l = { ...DEFAULT_LABELS, ...labels }
    // When not loaded, all interactive controls are disabled (Figma `Loaded=False`).
    const isPrevDisabled = !loaded || page <= 1
    const isNextDisabled = !loaded || page >= totalPages

    return (
      <div ref={ref} className={cn(styles.card, className)} {...props}>
        {/* Header row */}
        <div className={styles.header}>
          {/* H8 heading */}
          <span className={styles.heading}>{heading ?? ''}</span>

          {/* Action button */}
          <ButtonIcon
            icon={actionIcon}
            label={l.action}
            onClick={onAction}
            disabled={!loaded}
            className={!loaded ? styles.actionDisabled : undefined}
            variant="transparent"
            size="sm"
            shape="default"
          />

          {/* Navigation group */}
          <div className={styles.nav} role="group" aria-label={l.pageNavigation}>
            <CarouselItem
              direction="left"
              size="sm"
              label={l.previousPage}
              disabled={isPrevDisabled}
              onClick={onPrevPage}
            />

            {variant === 'itinerary' && (
              <span
                className={cn(styles.dayLabel, !loaded && styles.dayLabelDisabled)}
                aria-live="polite"
              >
                {formatPageLabel(page)}
              </span>
            )}

            <CarouselItem
              direction="right"
              size="sm"
              label={l.nextPage}
              disabled={isNextDisabled}
              onClick={onNextPage}
            />
          </div>
        </div>

        {/* Content area — children when loaded, placeholder text otherwise */}
        <div className={styles.content}>
          {loaded ? children : <p className={styles.emptyText}>{emptyText}</p>}
        </div>
      </div>
    )
  }
)

PackageCard.displayName = 'PackageCard'
