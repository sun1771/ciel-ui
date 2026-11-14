import { Avatar } from '@acme/ui'

export default function Types() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar type="initials" initials="SK" size="lg" alt="Sam Kim" />
      <Avatar type="initials" initials="AL" alt="Ana Lee" />
      <Avatar type="icon" size="sm" alt="Guest" />
    </div>
  )
}
