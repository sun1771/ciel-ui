import { Button } from '@acme/ui'

export default function Variants() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="transparent">Transparent</Button>
      <Button size="sm">Small</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}
