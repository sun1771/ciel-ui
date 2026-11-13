import { Chip } from '@acme/ui'
import { Award } from '@acme/icons'

export default function Colors() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip color="green">Cheapest</Chip>
      <Chip color="blue">8.8 Excellent</Chip>
      <Chip color="orange">2 left</Chip>
      <Chip color="red" variant="sharp">
        Sold out soon
      </Chip>
      <Chip
        color="brand"
        variant="sharp"
        icon={<Award size={16} />}
        role="img"
        aria-label="Recommended"
      />
    </div>
  )
}
