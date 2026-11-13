'use client'

import React, { useState } from 'react'
import { TabBar, TabItem } from '@acme/ui'
import { Calendar, MapPin, Bed, Users, Info } from '@acme/icons'

export default function TabBarPreviewPage() {
  const [activeTab1, setActiveTab1] = useState(0)
  const [activeTab2, setActiveTab2] = useState(0)
  const [activeTab3, setActiveTab3] = useState(1)

  const tabs = ['Flights', 'Hotels', 'Activities', 'Transport']
  const tabsWithIcons = [
    { label: 'Itinerary', icon: <Calendar size={20} /> },
    { label: 'Map', icon: <MapPin size={20} /> },
    { label: 'Stay', icon: <Bed size={20} /> },
    { label: 'Travelers', icon: <Users size={20} /> },
  ]

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
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
            fontSize: 'var(--ds-responsive-h3-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Tab Bar
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Figma: NAVIGATION / Tab Bar — nodes 380:1132 (TabItem) / 380:1237 (TabBar)
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            fontFamily: 'monospace',
          }}
        >
          {`import { TabBar, TabItem } from '@acme/ui'`}
        </p>
      </div>

      {/* ---- Section 1: Text-only tabs (controlled, interactive) ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Text-only tabs (interactive)
        </h2>

        <TabBar aria-label="Trip category tabs">
          {tabs.map((label, i) => (
            <TabItem key={label} isSelected={activeTab1 === i} onClick={() => setActiveTab1(i)}>
              {label}
            </TabItem>
          ))}
        </TabBar>

        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-xs)',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-text-disabled)',
          }}
        >
          {`<TabBar> with 4 <TabItem> — active: "${tabs[activeTab1]}"`}
        </div>

        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-md)',
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-action)',
          }}
        >
          Active tab: <strong>{tabs[activeTab1]}</strong> — use arrow keys to move focus, click to
          select
        </div>
      </section>

      {/* ---- Section 2: Tabs with icons (interactive) ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Tabs with icons (interactive)
        </h2>

        <TabBar aria-label="Itinerary view tabs">
          {tabsWithIcons.map((tab, i) => (
            <TabItem
              key={tab.label}
              isSelected={activeTab2 === i}
              icon={tab.icon}
              onClick={() => setActiveTab2(i)}
            >
              {tab.label}
            </TabItem>
          ))}
        </TabBar>

        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-xs)',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-text-disabled)',
          }}
        >
          {`<TabItem icon={<Calendar size={20} />}>Itinerary</TabItem>`}
        </div>
      </section>

      {/* ---- Section 3: States (static display) ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          States
        </h2>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-lg)' }}
        >
          {/* Default unselected */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--ds-mapped-text-disabled)',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              default (unselected)
            </p>
            <TabBar aria-label="State: default unselected">
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
            </TabBar>
          </div>

          {/* Selected */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--ds-mapped-text-disabled)',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              selected (isSelected=true)
            </p>
            <TabBar aria-label="State: selected">
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
              <TabItem icon={<Info size={20} />} isSelected>
                Tab Item
              </TabItem>
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
            </TabBar>
          </div>

          {/* Disabled unselected */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--ds-mapped-text-disabled)',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              disabled (not selected)
            </p>
            <TabBar aria-label="State: disabled unselected">
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
              <TabItem icon={<Info size={20} />} disabled>
                Disabled
              </TabItem>
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
            </TabBar>
          </div>

          {/* Disabled + selected */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--ds-mapped-text-disabled)',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              disabled + selected
            </p>
            <TabBar aria-label="State: disabled selected">
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
              <TabItem icon={<Info size={20} />} isSelected disabled>
                Disabled Selected
              </TabItem>
              <TabItem icon={<Info size={20} />}>Tab Item</TabItem>
            </TabBar>
          </div>

          {/* Mixed states */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontFamily: 'monospace',
                color: 'var(--ds-mapped-text-disabled)',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              mixed states
            </p>
            <TabBar aria-label="State: mixed" onKeyDown={() => {}}>
              <TabItem icon={<Info size={20} />}>Default</TabItem>
              <TabItem icon={<Info size={20} />} isSelected onClick={() => setActiveTab3(1)}>
                Selected
              </TabItem>
              <TabItem icon={<Info size={20} />} disabled>
                Disabled
              </TabItem>
              <TabItem icon={<Info size={20} />} isSelected disabled>
                Disabled+Sel
              </TabItem>
            </TabBar>
          </div>
        </div>
      </section>

      {/* ---- Section 4: Icon-only labels ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Without icons
        </h2>

        <TabBar aria-label="Text-only tabs" onKeyDown={() => {}}>
          <TabItem>Overview</TabItem>
          <TabItem isSelected>Details</TabItem>
          <TabItem>Reviews</TabItem>
          <TabItem disabled>Unavailable</TabItem>
        </TabBar>

        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-xs)',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-text-disabled)',
          }}
        >
          TabItem without icon prop — text label only
        </div>
      </section>

      {/* ---- Token reference ---- */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Token reference
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            fontFamily: 'monospace',
          }}
        >
          <strong>TabBar:</strong>
          <br />
          --ds-mapped-border-default: tab bar bottom border
          <br />
          --ds-alias-border-width-md: 2px border
          <br />
          <br />
          <strong>TabItem:</strong>
          <br />
          --ds-mapped-text-body: unselected label
          <br />
          --ds-mapped-text-action: selected label
          <br />
          --ds-mapped-text-action-hover: hover label
          <br />
          --ds-mapped-text-disabled: disabled label
          <br />
          --ds-mapped-icon-default: unselected icon
          <br />
          --ds-mapped-icon-action: selected icon
          <br />
          --ds-mapped-icon-action-hover: hover icon
          <br />
          --ds-mapped-icon-disabled: disabled icon
          <br />
          --ds-mapped-surface-action-hover-light: hover background
          <br />
          --ds-mapped-surface-disabled: disabled background
          <br />
          --ds-mapped-border-action: selected indicator
          <br />
          --ds-mapped-border-action-hover: hover+selected indicator
          <br />
          --ds-mapped-border-disabled: disabled+selected indicator
          <br />
          --ds-mapped-border-focus: focus ring
          <br />
          --ds-alias-spacing-xs: padding-y + gap
          <br />
          --ds-alias-spacing-sm: padding-x
          <br />
          --ds-alias-spacing-xxs: focus ring inset
          <br />
          --ds-alias-border-radius-lg: focus ring radius
          <br />
          --ds-typography-body-md-*: label typography (Inter 16px/20px)
          <br />
          --ds-brand-font-weight-regular: unselected weight (400)
          <br />
          --ds-brand-font-weight-semi-bold: selected weight (600)
        </div>
      </section>
    </div>
  )
}
