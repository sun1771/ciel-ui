import { Menu, MenuItem } from '@acme/ui'

export default function Selectable() {
  return (
    <div style={{ width: 240 }}>
      <Menu aria-label="Sort by" defaultValue="price">
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="distance">Distance</MenuItem>
      </Menu>
    </div>
  )
}
