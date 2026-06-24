'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Chip } from '@/components/primitives/Chip'
import { Button } from '@/components/primitives/Button'
import { CarouselItem } from '@/components/navigation/Carousel'
import { Pagination } from '@/components/navigation/Pagination'
import { Award, ArrowRight, Star, Bed, Gasoline, Users, Car, Baggage } from '@/icons'
import { HotelGraphic } from '@/design-system/graphics/components/HotelGraphic'
import { FlightGraphic } from '@/design-system/graphics/components/FlightGraphic'
import { CarRentalGraphic } from '@/design-system/graphics/components/CarRentalGraphic'
import styles from './Card.module.css'
import type { CardProps, CardType } from './types'

/* ---- .Image Item — hotel multi-image carousel (3455:3324) ---- */
function HotelImage({ images }: { images?: React.ReactNode[] }) {
  const [page, setPage] = useState(0)
  const total = images?.length ?? 0
  const hasCarousel = total > 1
  const current = total > 0 ? images?.[Math.min(page, total - 1)] : null

  return (
    <div className={styles.imageItem}>
      {current != null && <div className={styles.imageSlide}>{current}</div>}
      {hasCarousel && (
        <>
          <div className={styles.carouselNav}>
            <CarouselItem
              direction="left"
              shape="round"
              size="sm"
              label="Previous image"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            />
            <CarouselItem
              direction="right"
              shape="round"
              size="sm"
              label="Next image"
              onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
              disabled={page >= total - 1}
            />
          </div>
          <div className={styles.paginationOverlay}>
            <Pagination
              page={Math.min(page, total - 1) + 1}
              totalPages={total}
              onChange={(p) => setPage(p - 1)}
            />
          </div>
        </>
      )}
    </div>
  )
}

const graphicByType: Record<CardType, React.ReactNode> = {
  hotel: <HotelGraphic />,
  'rental car': <CarRentalGraphic />,
  flight: <FlightGraphic />,
}

/**
 * Card
 * Travel result card for hotels, rental cars, and flights. Composes Figma's
 * `Card` container state (border / selected) with the `.Card Content` set
 * (Type × Status: recommended / normal / loading / more).
 *
 * Per type: hotel = multi-image carousel; rental car = single image; flight = no image.
 * The headline is fixed and never changes with the carousel position.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      type,
      status = 'normal',
      isSelected = false,
      headline,
      tagLabel,
      price,
      priceSuffix = 'Total',
      onDetails,
      onDiscoverMore,
      images,
      ratingScore,
      roomInfo,
      image,
      rating,
      carSpecs,
      airlineLogos,
      flightLegs,
      className,
      ...props
    },
    ref,
  ) => {
    const isLoading = status === 'loading'
    const isMore = status === 'more'

    return (
      <div
        ref={ref}
        className={cn(
          styles.card,
          isSelected && styles.selected,
          isMore && styles.cardMore,
          className,
        )}
        data-card-type={type}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {isLoading ? (
          <>
            {type !== 'flight' && (
              <div className={styles.skeletonImageArea} aria-hidden="true" />
            )}
            <div className={styles.skeletonContent} aria-hidden="true">
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={styles.skeletonRow} />
              <div className={cn(styles.skeletonRow, styles.skeletonRowSm)} />
            </div>
          </>
        ) : isMore ? (
          <>
            <div className={styles.graphicContainer}>{graphicByType[type]}</div>
            <div className={cn(styles.priceItem, styles.priceItemMore)}>
              <Button
                variant="transparent"
                size="sm"
                iconRight={<ArrowRight size={16} />}
                onClick={onDiscoverMore}
              >
                Discover more
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* ---- Image Item ---- */}
            {type === 'hotel' && <HotelImage images={images} />}
            {type === 'rental car' && image != null && (
              <div className={styles.imageItem}>
                <div className={styles.imageSlide}>{image}</div>
              </div>
            )}

            {/* ---- Headline Item ---- */}
            <div className={styles.headlineItem}>
              <div className={styles.headlineRow}>
                <p className={styles.headline}>{headline}</p>
                {status === 'recommended' && (
                  <Chip
                    color="brand"
                    variant="sharp"
                    icon={<Award size={16} />}
                    role="img"
                    aria-label="Recommended"
                  />
                )}
              </div>
              <div className={styles.headlineChips}>
                {type === 'hotel' && ratingScore != null && (
                  <Chip color="green" variant="light">
                    {ratingScore}
                  </Chip>
                )}
                {type === 'rental car' && rating != null && (
                  <span className={styles.rating}>
                    <Star size={16} />
                    <span className={styles.ratingText}>{rating}</span>
                  </span>
                )}
                {type === 'flight' && (
                  <span className={styles.airlineLogos}>
                    {(airlineLogos && airlineLogos.length > 0
                      ? airlineLogos
                      : [null, null]
                    )
                      .slice(0, 2)
                      .map((logo, i) => (
                        <span key={i} className={styles.airlineLogo} aria-hidden="true">
                          {logo}
                        </span>
                      ))}
                  </span>
                )}
                {tagLabel != null && (
                  <Chip color="green" variant="light">
                    {tagLabel}
                  </Chip>
                )}
              </div>
            </div>

            {/* ---- Body Item ---- */}
            {type === 'hotel' && roomInfo != null && (
              <div className={cn(styles.bodyItem, styles.bodyHotel)}>
                <span className={styles.metricIcon}>
                  <Bed size={16} />
                </span>
                <p className={styles.bodyText}>{roomInfo}</p>
              </div>
            )}
            {type === 'rental car' && carSpecs != null && (
              <div className={cn(styles.bodyItem, styles.bodyRental)}>
                {carSpecs.fuel != null && (
                  <span className={styles.bodyMetric}>
                    <span className={styles.metricIcon}>
                      <Gasoline size={16} />
                    </span>
                    <span className={styles.bodyText}>{carSpecs.fuel}</span>
                  </span>
                )}
                {carSpecs.seats != null && (
                  <span className={styles.bodyMetric}>
                    <span className={styles.metricIcon}>
                      <Users size={16} />
                    </span>
                    <span className={styles.bodyText}>{carSpecs.seats}</span>
                  </span>
                )}
                {carSpecs.doors != null && (
                  <span className={styles.bodyMetric}>
                    <span className={styles.metricIcon}>
                      <Car size={16} />
                    </span>
                    <span className={styles.bodyText}>{carSpecs.doors}</span>
                  </span>
                )}
                {carSpecs.bags != null && (
                  <span className={styles.bodyMetric}>
                    <span className={styles.metricIcon}>
                      <Baggage size={16} />
                    </span>
                    <span className={styles.bodyText}>{carSpecs.bags}</span>
                  </span>
                )}
              </div>
            )}
            {type === 'flight' && flightLegs != null && flightLegs.length > 0 && (
              <div className={styles.bodyFlight}>
                {flightLegs.map((leg, i) => (
                  <div key={i} className={styles.flightLeg}>
                    <p className={styles.bodyText}>{leg.route}</p>
                    <p className={styles.bodyText}>{leg.stops}</p>
                  </div>
                ))}
              </div>
            )}

            {/* ---- Price and details Item ---- */}
            <div className={styles.priceItem}>
              <span className={styles.price}>
                {price != null && <span className={styles.priceValue}>{price}</span>}
                {priceSuffix != null && (
                  <span className={styles.priceSuffix}>{priceSuffix}</span>
                )}
              </span>
              <Button
                variant="transparent"
                size="sm"
                iconRight={<ArrowRight size={16} />}
                onClick={onDetails}
              >
                Details
              </Button>
            </div>
          </>
        )}
      </div>
    )
  },
)

Card.displayName = 'Card'
