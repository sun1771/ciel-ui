import { Switch } from '@cielui/react'

export default function Basic() {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Switch defaultChecked>Price alerts</Switch>
      <Switch>Newsletter</Switch>
      <Switch disabled>Requires a premium plan</Switch>
    </div>
  )
}
