import { NumericUpDown } from '@acme/ui'

export default function Basic() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <span id="guests-label">Guests</span>
      <NumericUpDown aria-labelledby="guests-label" defaultValue={2} min={1} max={8} />
    </div>
  )
}
