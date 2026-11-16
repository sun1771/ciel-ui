'use client'

import { Button } from '@cielui/react'

const VARIANTS = ['default', 'outline', 'transparent'] as const
const name = (v: string) => v[0].toUpperCase() + v.slice(1)

export default function Variants() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['lg', 'sm'] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {VARIANTS.map((variant) => (
            <Button key={variant} variant={variant} size={size}>
              {name(variant)}
              {size === 'sm' ? ', small' : ''}
            </Button>
          ))}
        </div>
      ))}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        {VARIANTS.map((variant) => (
          <Button key={variant} variant={variant} disabled>
            {name(variant)}, disabled
          </Button>
        ))}
      </div>
    </div>
  )
}
