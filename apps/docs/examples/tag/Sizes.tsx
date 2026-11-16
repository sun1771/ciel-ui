'use client'

import { Tag } from '@acme/ui'

export default function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Tag onDismiss={() => {}}>Large</Tag>
      <Tag size="sm" onDismiss={() => {}}>
        Small
      </Tag>
      <Tag>Not dismissible</Tag>
      <Tag disabled onDismiss={() => {}}>
        Disabled
      </Tag>
    </div>
  )
}
