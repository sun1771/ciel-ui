import { Menu, MenuItem } from '@cielui/react'
import { Settings, User } from '@cielui/icons'

export default function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {(['lg', 'sm'] as const).map((size) => (
        <div key={size} style={{ width: 200 }}>
          <Menu aria-label={size === 'lg' ? 'Large menu' : 'Small menu'} size={size}>
            <MenuItem iconLeft={<User size={size === 'sm' ? 16 : 20} />}>Profile</MenuItem>
            <MenuItem iconLeft={<Settings size={size === 'sm' ? 16 : 20} />}>Settings</MenuItem>
            <MenuItem disabled>Billing (soon)</MenuItem>
          </Menu>
        </div>
      ))}
    </div>
  )
}
