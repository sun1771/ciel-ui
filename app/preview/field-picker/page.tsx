'use client'

import React, { useState } from 'react'
import {
  FieldPicker,
  FieldPickerDateRange,
  FieldPickerTravelerCounts,
} from '@/components/primitives/FieldPicker'

const defaultTravelers: FieldPickerTravelerCounts = {
  adults: 2,
  children: 0,
  pets: 0,
  rooms: 1,
}

export default function FieldPickerPreviewPage() {
  const [dateRange, setDateRange] = useState<FieldPickerDateRange>({
    start: null,
    end: null,
  })
  const [travelers, setTravelers] = useState<FieldPickerTravelerCounts>(defaultTravelers)

  const sectionTitle: React.CSSProperties = {
    fontFamily: 'var(--ds-brand-font-family-heading)',
    fontSize: '24px',
    fontWeight: '600',
    color: 'var(--ds-mapped-text-heading)',
    marginBottom: '24px',
  }

  const subheading: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '600',
    color: 'var(--ds-mapped-text-placeholder)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '16px',
  }

  const tokenBox: React.CSSProperties = {
    padding: '16px',
    background: 'var(--ds-mapped-surface-action-hover-light)',
    borderRadius: '8px',
    fontSize: '12px',
    color: 'var(--ds-mapped-text-body)',
    fontFamily: 'monospace',
    lineHeight: '1.8',
  }

  return (
    <div style={{ padding: '48px', maxWidth: '960px' }}>

      {/* Page header */}
      <div style={{
        marginBottom: '48px',
        paddingBottom: '24px',
        borderBottom: '1px solid var(--ds-mapped-border-default)',
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '32px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          margin: '0',
        }}>
          FieldPicker
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)', marginTop: '8px' }}>
          Figma: PRIMITIVES / Field Picker — node 1577:2890
        </p>
        <p style={{
          fontSize: '12px',
          color: 'var(--ds-mapped-text-placeholder)',
          marginTop: '4px',
          fontFamily: 'monospace',
        }}>
          import &#123; FieldPicker &#125; from &apos;@/components/primitives/FieldPicker&apos;
        </p>
      </div>

      {/* ========== type="date" ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>type=&quot;date&quot; — Date Range Calendar</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Default (no selection)</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker type="date" />
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Controlled — interactive</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker
              type="date"
              startDate={dateRange.start}
              endDate={dateRange.end}
              onDateChange={setDateRange}
            />
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)', marginTop: '8px', fontFamily: 'monospace' }}>
            start: {dateRange.start?.toLocaleDateString() ?? 'null'} /
            end: {dateRange.end?.toLocaleDateString() ?? 'null'}
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Disabled</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker type="date" disabled />
          </div>
        </div>

        <div style={tokenBox}>
          <strong style={{ fontFamily: 'inherit' }}>Tokens used (date trigger + calendar):</strong><br />
          --ds-mapped-surface-default — panel / trigger background<br />
          --ds-mapped-border-default — border (resting)<br />
          --ds-mapped-border-action-hover — border (hover / flex chip selected)<br />
          --ds-mapped-border-focus — border (open)<br />
          --ds-mapped-border-disabled — border (disabled)<br />
          --ds-mapped-surface-action — active day cell / active tab bg<br />
          --ds-mapped-surface-action-hover-light — range highlight / chip selected bg<br />
          --ds-mapped-surface-disabled — trigger bg (disabled)<br />
          --ds-mapped-text-on-action — active day cell text<br />
          --ds-mapped-text-body — resting text<br />
          --ds-mapped-text-disabled — day header labels / disabled text<br />
          --ds-mapped-text-placeholder — empty trigger label<br />
          --ds-mapped-text-heading — month title<br />
          --ds-mapped-icon-default — trigger icon / nav buttons<br />
          --ds-effect-shadow-overlay-light — panel drop shadow<br />
          --ds-alias-border-radius-lg — trigger / panel / day cells (8px)<br />
          --ds-alias-spacing-xs — trigger padding-x / panel gap (8px)<br />
          --ds-alias-spacing-sm — trigger padding-x / tab padding (12px)<br />
          --ds-alias-spacing-md — panel padding (16px)<br />
          --ds-alias-spacing-xl — two-month gap (32px)<br />
          40×40px — day cell size (Figma spec, no token)
        </div>
      </section>

      {/* ========== type="traveler" ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>type=&quot;traveler&quot; — Traveler Counters</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Default (2 adults, 1 room)</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker type="traveler" />
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Controlled — interactive</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker
              type="traveler"
              travelers={travelers}
              onTravelerChange={setTravelers}
            />
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)', marginTop: '8px', fontFamily: 'monospace' }}>
            adults: {travelers.adults} / children: {travelers.children} /
            pets: {travelers.pets} / rooms: {travelers.rooms}
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Disabled</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker type="traveler" disabled />
          </div>
        </div>

        <div style={tokenBox}>
          <strong style={{ fontFamily: 'inherit' }}>Tokens used (traveler panel):</strong><br />
          --ds-mapped-border-default — counter button border<br />
          --ds-mapped-border-action-hover — counter button border (hover)<br />
          --ds-mapped-border-disabled — counter button border (at min/max)<br />
          --ds-mapped-icon-default — counter button icon<br />
          --ds-mapped-icon-disabled — counter button icon (at min/max)<br />
          --ds-mapped-text-action-hover — counter button icon (hover)<br />
          --ds-alias-border-radius-round — counter button shape (64px)<br />
          --ds-alias-spacing-xxs — counter button padding (4px)<br />
          24×24px — counter button size (Figma spec, no token)<br />
          260px — traveler panel width (Figma spec, no token)
        </div>
      </section>

      {/* ========== Figma layout comparison ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>Side-by-side (Figma layout reference)</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Date picker
            </p>
            <div style={{ width: '260px' }}>
              <FieldPicker type="date" />
            </div>
          </div>
          <div>
            <p style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Traveler picker
            </p>
            <div style={{ width: '260px' }}>
              <FieldPicker type="traveler" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
