'use client'

import { Badge } from '@acme/ui'

const VARIANTS = ['default', 'error', 'success', 'information', 'warning'] as const
const TEXT = { default: '12', error: '99+', success: 'New', information: 'Beta', warning: '!!' }

export default function Variants() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {VARIANTS.map((v) => (
          <Badge key={v} variant={v}>
            {TEXT[v]}
          </Badge>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {VARIANTS.map((v) => (
          <Badge key={v} type="dot" variant={v} />
        ))}
      </div>
    </div>
  )
}
