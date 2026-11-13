import React from 'react'

/** Result category — maps to Figma `.Card Content` Type property. */
export type CardType = 'hotel' | 'rental car' | 'flight'

/** Content status — maps to Figma `.Card Content` Status property. */
export type CardStatus = 'recommended' | 'normal' | 'loading' | 'more'

/** A single flight leg shown in the flight body (e.g. outbound / return). */
export interface CardFlightLeg {
  /** Route summary, e.g. "SFO→NRT". */
  route: string
  /** Stops summary, e.g. "Nonstop". */
  stops: string
}

/** Rental car spec row metrics — each renders an icon + value. */
export interface CardCarSpecs {
  /** Fuel type label, e.g. "Gasoline". */
  fuel?: string
  /** Passenger seat count. */
  seats?: number
  /** Door count. */
  doors?: number
  /** Bag / luggage count. */
  bags?: number
}

/**
 * Props for the Card layout component.
 *
 * The Card composes Figma's `Card` container state (border / selected) with the
 * `.Card Content` set (Type × Status). One component renders a complete, ready-to-use
 * result card for hotels, rental cars, and flights.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Result category. Maps to Figma `.Card Content` Type. */
  type: CardType
  /** Content status. Maps to Figma `.Card Content` Status. Default: 'normal'. */
  status?: CardStatus
  /** Applies the selected border (Figma Card State=selected). */
  isSelected?: boolean

  /** Headline / title text (hotel name, flight route, car name). */
  headline?: string
  /** Green tag chip in the headline second row, e.g. "Cheapest". Omit to hide. */
  tagLabel?: string

  /** Price value, e.g. "$2,124.42". */
  price?: string
  /** Small suffix rendered after the price. Default: 'Total'. */
  priceSuffix?: string
  /** Click handler for the Details button (recommended / normal). */
  onDetails?: () => void
  /** Click handler for the Discover more button (more status). */
  onDiscoverMore?: () => void

  /** hotel — image slides for the multi-image carousel (each a ReactNode). */
  images?: React.ReactNode[]
  /** hotel — rating score chip, e.g. "8.8". */
  ratingScore?: string
  /** hotel — room summary, e.g. "1 room, king bed". */
  roomInfo?: string

  /** rental car — single image (no carousel). */
  image?: React.ReactNode
  /** rental car — rating value, e.g. "4.4/5" (rendered with a star icon). */
  rating?: string
  /** rental car — spec row metrics. */
  carSpecs?: CardCarSpecs

  /** flight — up to 2 round airline logos (each a ReactNode; falls back to a placeholder circle). */
  airlineLogos?: React.ReactNode[]
  /** flight — legs (e.g. outbound and return). */
  flightLegs?: CardFlightLeg[]

  className?: string
}
