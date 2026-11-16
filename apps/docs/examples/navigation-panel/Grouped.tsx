'use client'

import { NavigationMenuGroup, NavigationMenuItem, NavigationPanel } from '@cielui/react'

const SECTIONS = [
  { label: 'Plan', items: ['Search', 'Saved trips'] },
  { label: 'Account', items: ['Profile', 'Payments', 'Notifications'] },
]

/** Long link lists: `label` group headings, compact `size="sm"` items and
 * `href` links (pass your router's Link as `linkComponent`). This docs site's
 * own navigation is built this way. */
export default function Grouped() {
  return (
    <div style={{ height: 360, display: 'flex' }}>
      <NavigationPanel aria-label="Settings" style={{ ['--nav-panel-width' as string]: '220px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {SECTIONS.map((section) => (
            <NavigationMenuGroup key={section.label} label={section.label} gap="xxs">
              {section.items.map((item) => (
                <NavigationMenuItem
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  size="sm"
                  isSelected={item === 'Profile'}
                >
                  {item}
                </NavigationMenuItem>
              ))}
            </NavigationMenuGroup>
          ))}
        </div>
      </NavigationPanel>
    </div>
  )
}
