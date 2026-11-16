import { Carousel } from '@cielui/react'

const DESTINATIONS = ['Lisbon', 'Kyoto', 'Oaxaca', 'Reykjavík']

export default function Basic() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Carousel aria-label="Destinations">
        {DESTINATIONS.map((city) => (
          <div
            key={city}
            style={{
              height: 140,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 8,
              background: 'var(--ds-mapped-surface-action-hover-light)',
              color: 'var(--ds-mapped-text-body)',
            }}
          >
            {city}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
