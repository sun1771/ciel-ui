'use client'

import React from 'react'
import { Table } from '@acme/ui'
import type { TableColumnDef, TableRowData } from '@acme/ui'
import { Info } from '@acme/icons'
import { Edit } from '@acme/icons'
import { Share } from '@acme/icons'

/* ─── Sample data — copy type ─────────────────────────── */
const flightColumns: TableColumnDef[] = [
  { key: 'airline', header: 'Airline' },
  { key: 'flight', header: 'Flight' },
  { key: 'from', header: 'From' },
  { key: 'to', header: 'To' },
  { key: 'departure', header: 'Departure' },
  { key: 'arrival', header: 'Arrival' },
  { key: 'price', header: 'Price' },
]

const flightRows: TableRowData[] = [
  { id: 1, airline: 'Air France', flight: 'AF 1234', from: 'JFK', to: 'CDG', departure: '08:00', arrival: '21:30', price: '$520' },
  { id: 2, airline: 'British Airways', flight: 'BA 178', from: 'LHR', to: 'LAX', departure: '11:15', arrival: '14:25', price: '$890' },
  { id: 3, airline: 'Emirates', flight: 'EK 202', from: 'DXB', to: 'JFK', departure: '02:20', arrival: '08:00', price: '$1,200' },
  { id: 4, airline: 'Delta', flight: 'DL 408', from: 'ATL', to: 'CDG', departure: '17:40', arrival: '08:15', price: '$730' },
  { id: 5, airline: 'Lufthansa', flight: 'LH 401', from: 'FRA', to: 'ORD', departure: '10:30', arrival: '13:05', price: '$660' },
]

/* ─── Sample data — link type ─────────────────────────── */
const hotelColumns: TableColumnDef[] = [
  { key: 'name', header: 'Hotel', type: 'link' },
  { key: 'city', header: 'City' },
  { key: 'stars', header: 'Stars' },
  { key: 'pricePerNight', header: 'Per Night' },
  { key: 'rating', header: 'Rating' },
]

const hotelRows: TableRowData[] = [
  { id: 1, name: { label: 'Hotel Plaza', href: '#', icon: <Info size={20} /> }, city: 'Paris', stars: '★★★★★', pricePerNight: '$320', rating: '9.2' },
  { id: 2, name: { label: 'Grand Central', href: '#', icon: <Info size={20} /> }, city: 'New York', stars: '★★★★', pricePerNight: '$180', rating: '8.7' },
  { id: 3, name: { label: 'Marina Bay', href: '#', icon: <Info size={20} /> }, city: 'Singapore', stars: '★★★★★', pricePerNight: '$450', rating: '9.5' },
  { id: 4, name: { label: 'Ritz Carlton', href: '#' }, city: 'Tokyo', stars: '★★★★★', pricePerNight: '$580', rating: '9.8' },
]

/* ─── Sample data — action type ──────────────────────── */
const itineraryColumns: TableColumnDef[] = [
  { key: 'day', header: 'Day' },
  { key: 'time', header: 'Time' },
  { key: 'activity', header: 'Activity' },
  { key: 'location', header: 'Location' },
  { key: 'cost', header: 'Est. Cost' },
  { key: 'actions', header: 'Actions', type: 'action' },
]

const iconActions = (
  <React.Fragment>
    <button aria-label="Edit activity" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <Edit size={20} />
    </button>
    <button aria-label="Share activity" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <Share size={20} />
    </button>
  </React.Fragment>
)

const itineraryRows: TableRowData[] = [
  { id: 1, day: 'Day 1', time: '09:00', activity: 'Eiffel Tower', location: 'Paris, France', cost: '$28', actions: iconActions },
  { id: 2, day: 'Day 1', time: '13:00', activity: 'Seine River Cruise', location: 'Paris, France', cost: '$18', actions: iconActions },
  { id: 3, day: 'Day 2', time: '10:00', activity: 'Louvre Museum', location: 'Paris, France', cost: '$22', actions: iconActions },
  { id: 4, day: 'Day 2', time: '15:00', activity: 'Montmartre Walk', location: 'Paris, France', cost: 'Free', actions: iconActions },
]

/* ─── Action buttons for the title bar ───────────────── */
const tableActions = (
  <React.Fragment>
    <button
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 12px',
        background: 'var(--ds-mapped-surface-action)',
        color: 'var(--ds-mapped-text-on-action)',
        border: '1px solid var(--ds-mapped-border-action)',
        borderRadius: 'var(--ds-alias-border-radius-lg)',
        fontSize: 'var(--ds-typography-body-md-font-size)',
        fontFamily: 'var(--ds-typography-body-md-font-family)',
        cursor: 'pointer',
      }}
    >
      Export
    </button>
    <button
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 12px',
        background: 'var(--ds-mapped-surface-action)',
        color: 'var(--ds-mapped-text-on-action)',
        border: '1px solid var(--ds-mapped-border-action)',
        borderRadius: 'var(--ds-alias-border-radius-lg)',
        fontSize: 'var(--ds-typography-body-md-font-size)',
        fontFamily: 'var(--ds-typography-body-md-font-family)',
        cursor: 'pointer',
      }}
    >
      Filter
    </button>
  </React.Fragment>
)

const sectionLabel = (text: string) => (
  <h3 style={{
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ds-mapped-text-placeholder)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    margin: '0 0 12px 0',
  }}>
    {text}
  </h3>
)

export default function TablePreviewPage() {
  return (
    <div style={{ maxWidth: '1100px' }}>
      {/* Page header */}
      <div style={{
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '1px solid var(--ds-mapped-border-default)',
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          color: 'var(--ds-mapped-text-heading)',
          margin: '0 0 4px 0',
        }}>
          Table
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--ds-mapped-text-placeholder)', margin: '0 0 4px 0' }}>
          Figma: LAYOUT / Table — node 926:1465
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', margin: 0, fontFamily: 'monospace' }}>
          {`import { Table } from '@acme/ui'`}
        </p>
      </div>

      {/* Section 1 — copy cells + title bar + actions */}
      <section style={{ marginBottom: '48px' }}>
        {sectionLabel('Copy cells — with title bar and actions')}
        <Table
          title="Flight Options"
          actions={tableActions}
          columns={flightColumns}
          rows={flightRows}
        />
        <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {'title="Flight Options" actions={...} columns={flightColumns} rows={flightRows}'}
        </div>
      </section>

      {/* Section 2 — link cells */}
      <section style={{ marginBottom: '48px' }}>
        {sectionLabel('Link cells (type="link")')}
        <Table
          title="Hotel Suggestions"
          columns={hotelColumns}
          rows={hotelRows}
        />
        <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {'columns={[{ key: "name", header: "Hotel", type: "link" }, ...]}'}
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)' }}>
          Link cell value shape: <code style={{ fontFamily: 'monospace' }}>{`{ label: string; href: string; icon?: ReactNode }`}</code>
        </div>
      </section>

      {/* Section 3 — action cells */}
      <section style={{ marginBottom: '48px' }}>
        {sectionLabel('Action cells (type="action")')}
        <Table
          title="Day 1–2 Itinerary"
          columns={itineraryColumns}
          rows={itineraryRows}
        />
        <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {'columns={[{ key: "actions", header: "Actions", type: "action" }, ...]}'}
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)' }}>
          Action cell value: any ReactNode (icon buttons, badges, etc.)
        </div>
      </section>

      {/* Section 4 — no title bar */}
      <section style={{ marginBottom: '48px' }}>
        {sectionLabel('No title bar')}
        <Table
          columns={flightColumns}
          rows={flightRows.slice(0, 3)}
        />
        <div style={{ marginTop: '8px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {'<Table columns={...} rows={...} /> (no title or actions prop)'}
        </div>
      </section>

      {/* Token reference */}
      <section style={{
        padding: '16px',
        background: 'var(--ds-mapped-surface-action-hover-light)',
        borderRadius: 'var(--ds-alias-border-radius-lg)',
        fontSize: '12px',
        color: 'var(--ds-mapped-text-body)',
        lineHeight: '1.8',
      }}>
        <strong>Tokens used (25):</strong>
        <div style={{ fontFamily: 'monospace', marginTop: '8px', columns: 2 }}>
          --ds-alias-border-radius-lg<br />
          --ds-alias-border-width-sm<br />
          --ds-alias-spacing-lg (title padding)<br />
          --ds-alias-spacing-sm (cell padding)<br />
          --ds-alias-spacing-xs (gaps)<br />
          --ds-alias-spacing-xxxs (action gap)<br />
          --ds-mapped-border-default<br />
          --ds-mapped-icon-action<br />
          --ds-mapped-surface-action-hover-light<br />
          --ds-mapped-surface-default<br />
          --ds-mapped-text-action-hover<br />
          --ds-mapped-text-body<br />
          --ds-mapped-text-heading (title)<br />
          --ds-responsive-h4-font-size<br />
          --ds-responsive-h4-line-height<br />
          --ds-typography-body-md-font-family<br />
          --ds-typography-body-md-font-size<br />
          --ds-typography-body-md-font-weight<br />
          --ds-typography-body-md-line-height<br />
          --ds-typography-body-md-semibold-font-family<br />
          --ds-typography-body-md-semibold-font-size<br />
          --ds-typography-body-md-semibold-font-weight<br />
          --ds-typography-body-md-semibold-line-height<br />
          --ds-typography-heading-h4-font-family<br />
          --ds-typography-heading-h4-font-weight<br />
        </div>
      </section>
    </div>
  )
}
