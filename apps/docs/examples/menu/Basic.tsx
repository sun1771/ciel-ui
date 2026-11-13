import { Menu, MenuItem } from '@acme/ui'
import { Check, Settings, User } from '@acme/icons'

export default function Basic() {
  return (
    <div style={{ width: 240 }}>
      <Menu aria-label="Account">
        <MenuItem iconLeft={<User size={20} />}>Profile</MenuItem>
        <MenuItem iconLeft={<Settings size={20} />} isSelected iconRight={<Check size={20} />}>
          Settings
        </MenuItem>
        <MenuItem>Sign out</MenuItem>
      </Menu>
    </div>
  )
}
