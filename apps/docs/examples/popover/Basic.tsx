'use client'

import { Button, Checkbox, Popover } from '@cielui/react'

export default function Basic() {
  return (
    <div style={{ minHeight: 200 }}>
      <Popover
        panelLabel="Filters"
        trigger={(props) => (
          <Button {...props} variant="outline">
            Filters
          </Button>
        )}
      >
        {({ close }) => (
          <div style={{ display: 'grid', gap: 12 }}>
            <Checkbox>Free cancellation</Checkbox>
            <Checkbox>Breakfast included</Checkbox>
            <Button size="sm" onClick={close}>
              Apply
            </Button>
          </div>
        )}
      </Popover>
    </div>
  )
}
