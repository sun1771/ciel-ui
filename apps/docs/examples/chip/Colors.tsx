'use client'

import { Award } from '@acme/icons'
import { Chip } from '@acme/ui'

const COLORS = ['brand', 'blue', 'green', 'orange', 'red'] as const

export default function Colors() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['light', 'sharp'] as const).map((variant) => (
        <div
          key={variant}
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {COLORS.map((color) => (
            <Chip key={color} color={color} variant={variant}>
              {color[0].toUpperCase() + color.slice(1)}
            </Chip>
          ))}
          <Chip
            color="brand"
            variant={variant}
            icon={<Award size={16} />}
            role="img"
            aria-label="Recommended"
          />
        </div>
      ))}
    </div>
  )
}
