import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMetric,
  CardPrice,
  Chip,
} from '@acme/ui'
import { ArrowRight, Award, Baggage, Bed, Car, Gasoline, Star, Users } from '@acme/icons'
import { CarRentalGraphic, FlightGraphic, HotelGraphic } from './graphics'
import styles from './TravelResultCard.module.css'

/**
 * Recipe: a travel search-result card for hotels, rental cars and flights,
 * built entirely from the library's generic Card parts.
 *
 * This is example code for the docs site, not part of @acme/ui. Copy it and
 * adapt it to your own domain.
 */

export type TravelResultType = 'hotel' | 'rental car' | 'flight'
export type TravelResultStatus = 'recommended' | 'normal' | 'loading' | 'more'

export interface FlightLeg {
  /** Route summary, e.g. "SFO→NRT". */
  route: string
  /** Stops summary, e.g. "Nonstop". */
  stops: string
}

export interface CarSpecs {
  fuel?: string
  seats?: number
  doors?: number
  bags?: number
}

export interface TravelResultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  type: TravelResultType
  status?: TravelResultStatus
  isSelected?: boolean
  headline?: string
  /** Green tag chip next to the rating, e.g. "Cheapest". */
  tagLabel?: string
  price?: string
  priceSuffix?: string
  onDetails?: () => void
  onDiscoverMore?: () => void
  /** hotel — image slides (carousel when more than one). */
  images?: React.ReactNode[]
  /** hotel — rating score chip, e.g. "8.8". */
  ratingScore?: string
  /** hotel — room summary, e.g. "1 room, king bed". */
  roomInfo?: string
  /** rental car — single image. */
  image?: React.ReactNode
  /** rental car — rating, e.g. "4.4/5". */
  rating?: string
  carSpecs?: CarSpecs
  /** flight — up to two round airline logos. */
  airlineLogos?: React.ReactNode[]
  flightLegs?: FlightLeg[]
}

const graphicByType: Record<TravelResultType, React.ReactNode> = {
  hotel: <HotelGraphic />,
  'rental car': <CarRentalGraphic />,
  flight: <FlightGraphic />,
}

export function TravelResultCard({
  type,
  status = 'normal',
  isSelected,
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
}: TravelResultCardProps) {
  const arrow = <ArrowRight size={16} />

  if (status === 'loading') {
    return (
      <Card
        loading
        loadingMedia={type !== 'flight'}
        isSelected={isSelected}
        className={className}
        data-card-type={type}
        {...props}
      />
    )
  }

  if (status === 'more') {
    return (
      <Card
        isSelected={isSelected}
        className={[styles.more, className].filter(Boolean).join(' ')}
        data-card-type={type}
        {...props}
      >
        <div className={styles.graphic}>{graphicByType[type]}</div>
        <CardFooter
          justify="center"
          action={
            <Button variant="transparent" size="sm" iconRight={arrow} onClick={onDiscoverMore}>
              Discover more
            </Button>
          }
        />
      </Card>
    )
  }

  return (
    <Card isSelected={isSelected} className={className} data-card-type={type} {...props}>
      {type === 'hotel' && <CardMedia images={images} />}
      {type === 'rental car' && image != null && <CardMedia>{image}</CardMedia>}

      <CardHeader
        title={headline}
        badge={
          status === 'recommended' && (
            <Chip
              color="brand"
              variant="sharp"
              icon={<Award size={16} />}
              role="img"
              aria-label="Recommended"
            />
          )
        }
      >
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
            {(airlineLogos && airlineLogos.length > 0 ? airlineLogos : [null, null])
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
      </CardHeader>

      {type === 'hotel' && roomInfo != null && (
        <CardBody gap="xxs">
          <CardMetric icon={<Bed size={16} />}>{roomInfo}</CardMetric>
        </CardBody>
      )}
      {type === 'rental car' && carSpecs != null && (
        <CardBody gap="xs">
          {carSpecs.fuel != null && (
            <CardMetric icon={<Gasoline size={16} />}>{carSpecs.fuel}</CardMetric>
          )}
          {carSpecs.seats != null && (
            <CardMetric icon={<Users size={16} />}>{carSpecs.seats}</CardMetric>
          )}
          {carSpecs.doors != null && (
            <CardMetric icon={<Car size={16} />}>{carSpecs.doors}</CardMetric>
          )}
          {carSpecs.bags != null && (
            <CardMetric icon={<Baggage size={16} />}>{carSpecs.bags}</CardMetric>
          )}
        </CardBody>
      )}
      {type === 'flight' && flightLegs != null && flightLegs.length > 0 && (
        <CardBody gap="xs" align="start">
          {flightLegs.map((leg, i) => (
            <div key={i} className={styles.flightLeg}>
              <CardMetric>{leg.route}</CardMetric>
              <CardMetric>{leg.stops}</CardMetric>
            </div>
          ))}
        </CardBody>
      )}

      <CardFooter
        action={
          <Button variant="transparent" size="sm" iconRight={arrow} onClick={onDetails}>
            Details
          </Button>
        }
      >
        {price != null && <CardPrice value={price} suffix={priceSuffix} />}
      </CardFooter>
    </Card>
  )
}
