'use client'

import { Carousel } from '@acme/ui'

const SLIDES = ['Morning', 'Afternoon', 'Evening']

/** Smaller, rectangular arrow buttons: `size="sm"` and `shape="rectangle"`. */
export default function Controls() {
  return (
    <div style={{ maxWidth: 320 }}>
      <Carousel aria-label="Day plan" size="sm" shape="rectangle">
        {SLIDES.map((slide) => (
          <div
            key={slide}
            style={{
              height: 100,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 8,
              background: 'var(--ds-mapped-surface-subtle)',
              color: 'var(--ds-mapped-text-body)',
            }}
          >
            {slide}
          </div>
        ))}
      </Carousel>
    </div>
  )
}
