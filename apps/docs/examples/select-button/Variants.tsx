'use client'

import { SelectButton } from '@acme/ui'

const VARIANTS = ['default', 'outline', 'transparent'] as const

export default function Variants() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['lg', 'sm'] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {VARIANTS.map((variant) => (
            <SelectButton key={variant} variant={variant} size={size}>
              {variant[0].toUpperCase() + variant.slice(1)}
              {size === 'sm' ? ', small' : ''}
            </SelectButton>
          ))}
        </div>
      ))}
    </div>
  )
}
