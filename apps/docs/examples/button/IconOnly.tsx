'use client'

import { Search, Settings, Share } from '@cielui/icons'
import { ButtonIcon } from '@cielui/react'

const VARIANTS = [
  { variant: 'default', label: 'Search', Icon: Search },
  { variant: 'outline', label: 'Share', Icon: Share },
  { variant: 'transparent', label: 'Settings', Icon: Settings },
] as const

/** Square by default, a circle with shape="round". Same height as a text Button. */
export default function IconOnly() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['lg', 'sm'] as const).map((size) => (
        <div
          key={size}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
        >
          {(['default', 'round'] as const).flatMap((shape) =>
            VARIANTS.map(({ variant, label, Icon }) => (
              <ButtonIcon
                key={`${shape}-${variant}`}
                label={label}
                icon={<Icon size={size === 'sm' ? 16 : 20} />}
                variant={variant}
                size={size}
                shape={shape}
              />
            ))
          )}
        </div>
      ))}
    </div>
  )
}
