import { SelectButton } from '@acme/ui'

export default function Basic() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <SelectButton>Any time</SelectButton>
      <SelectButton isSelected>This weekend</SelectButton>
      <SelectButton variant="transparent" size="sm">
        Sort: price
      </SelectButton>
    </div>
  )
}
