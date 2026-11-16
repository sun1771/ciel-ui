import { Avatar } from '@acme/ui'

// A stand-in photo, so the example has no external image.
const PHOTO =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%23c7d0ff"/%3E%3Ccircle cx="20" cy="16" r="7" fill="%23667aff"/%3E%3Cpath d="M6 40c2-9 8-13 14-13s12 4 14 13z" fill="%23667aff"/%3E%3C/svg%3E'

export default function Types() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['lg', 'md', 'sm'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar type="image" src={PHOTO} size={size} alt="Ana Lee" />
          <Avatar type="initials" initials="SK" size={size} alt="Sam Kim" />
          <Avatar type="icon" size={size} alt="Guest" />
        </div>
      ))}
    </div>
  )
}
