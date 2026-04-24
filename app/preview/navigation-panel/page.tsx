'use client'

import React, { useState } from 'react'
import {
  NavigationPanel,
  NavigationMenuGroup,
  NavigationMenuItem,
} from '@/components/layout/NavigationPanel'
import { Info } from '@/icons'
import { Calendar } from '@/icons'
import { Bag } from '@/icons'
import { Map } from '@/icons'

export default function NavigationPanelPreviewPage() {
  const [selectedA, setSelectedA] = useState<string>('calendar')
  const [selectedB, setSelectedB] = useState<string>('calendar')
  const [expanded, setExpanded] = useState(true)

  return (
    <div
      style={{
        padding: 'var(--ds-alias-spacing-xl)',
        maxWidth: '900px',
        fontFamily: 'var(--ds-brand-font-family-body)',
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: 'var(--ds-alias-spacing-xxl)',
          paddingBottom: 'var(--ds-alias-spacing-lg)',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            lineHeight: 'var(--ds-responsive-h4-line-height)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          NavigationPanel
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Figma: LAYOUT / Navigation Panel — node 1348:4669
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxxs)',
            fontFamily: 'monospace',
          }}
        >
          {'import { NavigationPanel, NavigationMenuGroup, NavigationMenuItem } from \'@/components/layout/NavigationPanel\''}
        </p>
      </div>

      {/* Section: Expanded (default) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Expanded (isExpanded=true)
        </h2>
        <div style={{ display: 'flex', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'flex-start' }}>
          <div>
            <NavigationPanel isExpanded={true}>
              <NavigationMenuGroup>
                <NavigationMenuItem
                  icon={<Calendar size={20} />}
                  isSelected={selectedA === 'calendar'}
                  onClick={() => setSelectedA('calendar')}
                >
                  Calendar
                </NavigationMenuItem>
                <NavigationMenuItem
                  icon={<Bag size={20} />}
                  isSelected={selectedA === 'bag'}
                  onClick={() => setSelectedA('bag')}
                >
                  Bookings
                </NavigationMenuItem>
                <NavigationMenuItem
                  icon={<Map size={20} />}
                  isSelected={selectedA === 'map'}
                  onClick={() => setSelectedA('map')}
                >
                  Map
                </NavigationMenuItem>
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedA === 'info'}
                  onClick={() => setSelectedA('info')}
                >
                  Info
                </NavigationMenuItem>
              </NavigationMenuGroup>
              <NavigationMenuGroup>
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedA === 'settings'}
                  onClick={() => setSelectedA('settings')}
                >
                  Settings
                </NavigationMenuItem>
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedA === 'help'}
                  onClick={() => setSelectedA('help')}
                >
                  Help
                </NavigationMenuItem>
              </NavigationMenuGroup>
            </NavigationPanel>
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              isExpanded=true
            </div>
          </div>
        </div>
      </section>

      {/* Section: Collapsed */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Collapsed (isExpanded=false)
        </h2>
        <div style={{ display: 'flex', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'flex-start' }}>
          <div>
            <NavigationPanel isExpanded={false}>
              <NavigationMenuGroup>
                <NavigationMenuItem
                  icon={<Calendar size={20} />}
                  isSelected={selectedB === 'calendar'}
                  onClick={() => setSelectedB('calendar')}
                />
                <NavigationMenuItem
                  icon={<Bag size={20} />}
                  isSelected={selectedB === 'bag'}
                  onClick={() => setSelectedB('bag')}
                />
                <NavigationMenuItem
                  icon={<Map size={20} />}
                  isSelected={selectedB === 'map'}
                  onClick={() => setSelectedB('map')}
                />
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedB === 'info'}
                  onClick={() => setSelectedB('info')}
                />
              </NavigationMenuGroup>
              <NavigationMenuGroup>
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedB === 'settings'}
                  onClick={() => setSelectedB('settings')}
                />
                <NavigationMenuItem
                  icon={<Info size={20} />}
                  isSelected={selectedB === 'help'}
                  onClick={() => setSelectedB('help')}
                />
              </NavigationMenuGroup>
            </NavigationPanel>
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              isExpanded=false
            </div>
          </div>
        </div>
      </section>

      {/* Section: Interactive toggle */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Interactive toggle
        </h2>
        <div style={{ display: 'flex', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'flex-start' }}>
          <NavigationPanel isExpanded={expanded}>
            <NavigationMenuGroup>
              <NavigationMenuItem
                icon={<Calendar size={20} />}
                isSelected={true}
              >
                Calendar
              </NavigationMenuItem>
              <NavigationMenuItem icon={<Bag size={20} />}>
                Bookings
              </NavigationMenuItem>
              <NavigationMenuItem icon={<Map size={20} />}>
                Map
              </NavigationMenuItem>
              <NavigationMenuItem icon={<Info size={20} />} disabled>
                Disabled item
              </NavigationMenuItem>
            </NavigationMenuGroup>
            <NavigationMenuGroup>
              <NavigationMenuItem icon={<Info size={20} />}>
                Settings
              </NavigationMenuItem>
            </NavigationMenuGroup>
          </NavigationPanel>
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                padding: '8px 16px',
                background: 'var(--ds-mapped-surface-action)',
                color: 'var(--ds-mapped-text-on-action)',
                border: 'none',
                borderRadius: 'var(--ds-alias-border-radius-lg)',
                cursor: 'pointer',
                fontFamily: 'var(--ds-brand-font-family-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)',
              }}
            >
              Toggle: {expanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
      </section>

      {/* Section: All NavigationMenuItem states */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          NavigationMenuItem — all states
        </h2>
        <NavigationPanel isExpanded={true}>
          <NavigationMenuGroup>
            <NavigationMenuItem icon={<Info size={20} />}>
              Default
            </NavigationMenuItem>
            <NavigationMenuItem icon={<Info size={20} />} isSelected>
              Selected
            </NavigationMenuItem>
            <NavigationMenuItem icon={<Info size={20} />} disabled>
              Disabled
            </NavigationMenuItem>
          </NavigationMenuGroup>
        </NavigationPanel>
        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-xs)',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-text-disabled)',
          }}
        >
          default / isSelected / disabled (hover state via CSS :hover)
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Tokens used
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            fontFamily: 'monospace',
            lineHeight: '1.8',
          }}
        >
          --ds-mapped-surface-default — panel bg, item default bg<br />
          --ds-mapped-surface-action-hover-light — item hover bg<br />
          --ds-mapped-border-action — selected right border (4px)<br />
          --ds-mapped-border-action-hover — hover right border (1px)<br />
          --ds-mapped-border-focus — keyboard focus ring<br />
          --ds-mapped-text-body — default item label<br />
          --ds-mapped-text-action — selected item label<br />
          --ds-mapped-text-action-hover — hover item label<br />
          --ds-mapped-text-disabled — disabled item label<br />
          --ds-mapped-icon-default — default item icon<br />
          --ds-mapped-icon-action — selected item icon<br />
          --ds-mapped-icon-action-hover — hover item icon<br />
          --ds-mapped-icon-disabled — disabled item icon<br />
          --ds-effect-shadow — panel drop shadow<br />
          --ds-alias-spacing-md — panel padding-y<br />
          --ds-alias-spacing-none — panel padding-x<br />
          --ds-alias-spacing-sm — item padding-x<br />
          --ds-alias-spacing-xs — item padding-y + group gap<br />
          --ds-brand-font-family-body — label font family<br />
          --ds-brand-font-weight-regular — label font weight<br />
          --ds-typography-body-md-font-size — label font size<br />
          --ds-typography-body-md-line-height — label line height
        </div>
      </section>
    </div>
  )
}
