import { Carousel } from '@acme/ui'

export default function Basic() {
  return (
    <Carousel>
      <div
        style={{
          width: 260,
          height: 140,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 8,
          background: 'var(--ds-mapped-surface-action-hover-light)',
        }}
      >
        Slide content
      </div>
    </Carousel>
  )
}
