'use client'

import React, { useState } from 'react'
import {
  NavigationPanel,
  NavigationMenuGroup,
  NavigationMenuItem,
  NavigationLogoItem,
  NavigationProfileItem,
} from '@/components/layout/NavigationPanel'
import { Calendar, Bag, Map, Info } from '@/icons'

/** A full sidebar: logo item + primary group on top, and the Setting & Profile
 *  row at the bottom (auto gap fills the height between them). `selected` /
 *  `onSelect` drive the active item; the logo item toggles the panel. */
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
      {/* Part 1 — logo item separated (gap="lg") from the primary item group */}
      <NavigationMenuGroup gap="lg">
        <NavigationLogoItem />
        {/* Main group — 4px (xxs) gap between items; long labels truncate to … */}
        <NavigationMenuGroup gap="xxs">
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

      {/* Part 2 — Setting & Profile row pinned to the bottom (auto gap above) */}
      <NavigationProfileItem
        userName="Sanaz K."
        avatarInitials="SK"
        onProfileClick={() => onSelect('profile')}
        onSettingsClick={() => onSelect('settings')}
      />
    </NavigationPanel>
  )
}

const H2: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading)',
  fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
  fontSize: 'var(--ds-responsive-h6-font-size)',
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: 'var(--ds-alias-spacing-lg)',
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
            "import { NavigationPanel, NavigationMenuGroup, NavigationMenuItem, NavigationLogoItem, NavigationProfileItem } from '@/components/layout/NavigationPanel'"
          }
        </p>
      </div>

      {/* Section: Interactive toggle (logo item collapses/expands the panel) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={H2}>Interactive — the logo item toggles the panel</h2>
        <div
          style={{
            display: 'flex',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'flex-start',
          }}
        >
          {/* Definite height so the auto gap pushes the profile row to the bottom */}
          <div style={{ height: '560px' }}>
            <DemoPanel
              expanded={expanded}
              onToggle={() => setExpanded((v) => !v)}
              selected={interactiveSelected}
              onSelect={setInteractiveSelected}
            />
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            Expanded: click the collapse button (right of the logo); Settings sits
            to the right of the avatar.
            <br />
            Collapsed: hover the logo to reveal the expand arrow; Settings stacks
            on top of the avatar.
          </div>
        </div>
      </section>

      {/* Section: Expanded (static) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={H2}>Expanded (isExpanded=true)</h2>
        <div style={{ height: '560px' }}>
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
        <h2 style={H2}>Collapsed (isExpanded=false)</h2>
        <div style={{ height: '560px' }}>
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
        <h2 style={H2}>NavigationMenuItem — all states</h2>
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
        <h2 style={H2}>Tokens used</h2>
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
          --ds-mapped-surface-default — panel bg, item/logo/profile default bg
          <br />
          --ds-mapped-surface-action — selected item bg (filled blue)<br />
          --ds-mapped-surface-action-hover — selected item hover bg<br />
          --ds-mapped-surface-action-hover-light — item hover bg<br />
          --ds-mapped-text-on-action — selected item label (white)<br />
          --ds-mapped-text-action-hover — hover item label<br />
          --ds-mapped-text-body — default item + profile name label<br />
          --ds-mapped-text-disabled — disabled item label<br />
          --ds-mapped-icon-on-action — selected item icon (white)<br />
          --ds-mapped-icon-action-hover — hover item icon<br />
          --ds-mapped-icon-default — default item icon<br />
          --ds-mapped-icon-disabled — disabled item icon<br />
          --ds-mapped-border-focus — keyboard focus ring<br />
          --ds-effect-shadow — panel drop shadow (= Figma Token=shadow)<br />
          --ds-alias-border-radius-lg — item / logo / profile radius (8px)<br />
          --ds-alias-border-radius-round — profile avatar button focus radius
          <br />
          --ds-alias-spacing-lg — panel padding-y + top-group gap (24px)<br />
          --ds-alias-spacing-xxs — panel padding-x (4px) + logo/profile edge
          padding<br />
          --ds-alias-spacing-sm — item padding-x (12px)<br />
          --ds-alias-spacing-xs — item padding-y + logo/profile padding + gaps
          <br />
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
