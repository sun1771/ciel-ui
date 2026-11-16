import { Card } from '@cielui/react'

export default function Loading() {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Card loading />
      <Card loading loadingMedia={false} />
    </div>
  )
}
