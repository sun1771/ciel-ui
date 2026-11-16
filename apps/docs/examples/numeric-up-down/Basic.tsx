import { NumericUpDown } from '@cielui/react'

export default function Basic() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <span id="guests-label">Guests</span>
      <NumericUpDown aria-labelledby="guests-label" defaultValue={2} min={1} max={8} />
      <span id="pets-label">Pets (not allowed)</span>
      <NumericUpDown aria-labelledby="pets-label" defaultValue={0} disabled />
    </div>
  )
}
