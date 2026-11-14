'use client'

import { useState } from 'react'
import { Switch } from '@acme/ui'

export default function Basic() {
  const [alerts, setAlerts] = useState(true)
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Switch checked={alerts} onClick={() => setAlerts((on) => !on)}>
        Price alerts
      </Switch>
      <Switch disabled>Requires a premium plan</Switch>
    </div>
  )
}
