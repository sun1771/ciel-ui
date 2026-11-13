import { Badge } from '@acme/ui'

export default function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Badge>12</Badge>
      <Badge variant="error">99+</Badge>
      <Badge variant="success">New</Badge>
      <Badge variant="information">Beta</Badge>
      <Badge variant="warning">!!</Badge>
      <Badge type="dot" variant="error" />
    </div>
  )
}
