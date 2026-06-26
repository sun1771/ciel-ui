'use client'

import React, { useState } from 'react'
import {
  NavigationPanel,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationLogoItem,
} from '@/components/layout/NavigationPanel'
import { Calendar, Bag, Map, Info, Settings, User } from '@/icons'

/** A full sidebar: logo item + primary group on top, supporting group at the
 *  bottom. `selected` / `onSelect` drive the active item; the logo item toggles
 *  the panel via the panel's `onToggle`. */
function DemoPanel({
  expanded,
  onToggle,
  selected,
  onSelect,
}: {
  expanded: boolean
  onToggle: () => void
  selected: string
  onSelect: (id: string) => void
}) {
  return (
    <NavigationPanel isExpanded={expanded} onToggle={onToggle}>
      {/* Part 1 — logo item separated (gap=md) from the primary item group */}
      <NavigationMenuGroup gap="md">
        <NavigationLogoItem />
        <NavigationMenuGroup>
          <NavigationMenuItem
            icon={<Calendar size={20} />}
            isSelected={selected === 'trips'}
            onClick={() => onSelect('trips')}
          >
            Trips
          </NavigationMenuItem>
          <NavigationMenuItem
            icon={<Bag size={20} />}
            isSelected={selected === 'packages'}
            onClick={() => onSelect('packages')}
          >
            Search Packages
          </NavigationMenuItem>
          <NavigationMenuItem
            icon={<Map size={20} />}
            isSelected={selected === 'explore'}
            onClick={() => onSelect('explore')}
          >
            Explore
          </NavigationMenuItem>
          <NavigationMenuItem icon={<Info size={20} />} disabled>
            Disabled
          </NavigationMenuItem>
        </NavigationMenuGroup>
      </NavigationMenuGroup>

      {/* Part 2 — supporting items pinned to the bottom */}
      <NavigationMenuGroup>
        <NavigationMenuItem
          icon={<Settings size={20} />}
          isSelected={selected === 'settings'}
          onClick={() => onSelect('settings')}
        >
          Settings
        </NavigationMenuItem>
        <NavigationMenuItem
          icon={<User size={20} />}
          isSelected={selected === 'profile'}
          onClick={() => onSelect('profile')}
        >
          Profile
        </NavigationMenuItem>
      </NavigationMenuGroup>
    </NavigationPanel>
  )
}

export default function NavigationPanelPreviewPage() {
  const [selectedA, setSelectedA] = useState('trips')
  const [selectedB, setSelectedB] = useState('trips')
  const [interactiveSelected, setInteractiveSelected] = useState('trips')
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
          Figma: LAYOUT / Navigation Panel — .NavigationMenuItem 1345:3878 /
          Navigation Panel 1348:4669
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxxs)',
            fontFamily: 'monospace',
          }}
        >
          {
            "import { NavigationPanel, NavigationMenuGroup, NavigationMenuItem, NavigationLogoItem } from '@/components/layout/NavigationPanel'"
          }
        </p>
      </div>

      {/* Section: Interactive toggle (logo item collapses/expands the panel) */}
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
          Interactive — the logo item toggles the panel
        </h2>
        <div
          style={{
            display: 'flex',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'flex-start',
            minHeight: '520px',
          }}
        >
          <DemoPanel
            expanded={expanded}
            onToggle={() => setExpanded((v) => !v)}
            selected={interactiveSelected}
            onSelect={setInteractiveSelected}
          />
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            Expanded: click the collapse button (right of the logo).
            <br />
            Collapsed: hover the logo — it swaps to an expand arrow — then click.
          </div>
        </div>
      </section>

      {/* Section: Expanded (static) */}
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
        <div style={{ minHeight: '520px' }}>
          <DemoPanel
            expanded
            onToggle={() => {}}
            selected={selectedA}
            onSelect={setSelectedA}
          />
        </div>
      </section>

      {/* Section: Collapsed (static) */}
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
        <div style={{ minHeight: '520px' }}>
          <DemoPanel
            expanded={false}
            onToggle={() => {}}
            selected={selectedB}
            onSelect={setSelectedB}
          />
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
        <NavigationPanel isExpanded>
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
          default / isSelected (filled blue) / disabled (hover state via CSS
          :hover)
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
          --ds-mapped-surface-action — selected item bg (filled blue)<br />
          --ds-mapped-surface-action-hover — selected item hover bg<br />
          --ds-mapped-surface-action-hover-light — item hover bg<br />
          --ds-mapped-text-on-action — selected item label (white)<br />
          --ds-mapped-text-action-hover — hover item label<br />
          --ds-mapped-text-body — default item label<br />
          --ds-mapped-text-disabled — disabled item label<br />
          --ds-mapped-icon-on-action — selected item icon (white)<br />
          --ds-mapped-icon-action-hover — hover item icon<br />
          --ds-mapped-icon-default — default item icon<br />
          --ds-mapped-icon-disabled — disabled item icon<br />
          --ds-mapped-border-focus — keyboard focus ring<br />
          --ds-effect-shadow — panel drop shadow<br />
          --ds-alias-border-radius-lg — item + logo radius (8px)<br />
          --ds-alias-spacing-md — panel padding-y + top-group gap<br />
          --ds-alias-spacing-xxxs — panel padding-x (2px)<br />
          --ds-alias-spacing-sm — item padding-x<br />
          --ds-alias-spacing-xs — item padding-y + logo padding<br />
          --ds-alias-spacing-xxs — logo item right padding<br />
          --ds-alias-spacing-none — item-list gap (0)<br />
          --ds-brand-font-family-body — label font family<br />
          --ds-brand-font-weight-regular — label font weight<br />
          --ds-typography-body-md-font-size — label font size<br />
          --ds-typography-body-md-line-height — label line height
        </div>
      </section>
    </div>
  )
}
