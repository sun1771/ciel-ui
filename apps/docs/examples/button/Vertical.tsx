'use client'

import { ArrowLeft, Expand, Sparkle } from '@acme/icons'
import { ButtonIconSwitching, ButtonVertical } from '@acme/ui'

export default function Vertical() {
  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
      <ButtonVertical variant="outline" iconTop={<ArrowLeft size={20} />}>
        Back
      </ButtonVertical>
      <ButtonVertical variant="transparent" supportText="3 nights">
        Kyoto
      </ButtonVertical>
      <ButtonIconSwitching
        label="Expand navigation"
        icon={<Sparkle size={20} />}
        hoverIcon={<Expand size={20} />}
      />
    </div>
  )
}
