import { Expander } from '@cielui/react'

export default function Sizes() {
  return (
    <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
      <Expander label="Large (default)" defaultExpanded>
        Free cancellation until 48 hours before check-in.
      </Expander>
      <Expander label="Small" size="sm">
        Pets are welcome for a fee of $20 a night.
      </Expander>
    </div>
  )
}
