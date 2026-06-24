'use client'

import React, { useState } from 'react'
import {
  FieldPicker,
  FieldPickerDateRange,
  FieldPickerDateSelection,
  FieldPickerFlexibility,
  FieldPickerTripLength,
  FieldPickerTravelerCounts,
  CalendarDatePickerTab,
} from '@/components/primitives/FieldPicker'
// Internal panel (not re-exported from index) + shared helpers — imported
// directly so the preview can show the open calendar with both DatePicker tabs.
import {
  FieldPickerCalendar,
  MONTH_NAMES,
  flexibilityDays,
} from '@/components/primitives/FieldPicker/FieldPickerCalendar'

const defaultTravelers: FieldPickerTravelerCounts = {
  adults: 2,
  children: 0,
  pets: 0,
  rooms: 1,
}

function formatDateRange(start: Date | null, end: Date | null): string | null {
  if (start === null) return null
  const opts: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }
  const s = start.toLocaleString('en-US', opts)
  return end === null ? s : `${s} – ${end.toLocaleString('en-US', opts)}`
}

/** Mirrors FieldPicker's trigger label so the demo can show what the field reflects. */
function labelFor(sel: FieldPickerDateSelection): string {
  if (sel.tab === 'Flexible') {
    if (sel.tripLength && sel.month !== null) return `${sel.tripLength} in ${MONTH_NAMES[sel.month]}`
    if (sel.tripLength) return sel.tripLength
    if (sel.month !== null) return `${MONTH_NAMES[sel.month]} ${sel.year}`
    return '— nothing selected —'
  }
  const base = formatDateRange(sel.start, sel.end)
  if (base === null) return '— nothing selected —'
  const days = flexibilityDays(sel.flexibility)
  return days !== null ? `${base} (+- ${days})` : base
}

/**
 * Self-contained always-open calendar demo: owns all controlled state so both
 * tabs + a selected month render inline, and shows the resulting trigger label.
 */
function OpenCalendarDemo() {
  const [activeTab, setActiveTab] = useState<CalendarDatePickerTab>('Calendar')
  const [range, setRange] = useState<FieldPickerDateRange>({
    start: new Date(2026, 4, 9), // Tue, May 9 2026
    end: new Date(2026, 4, 13), // Sat, May 13 2026
  })
  const [flexibility, setFlexibility] = useState<FieldPickerFlexibility>('Exact date')
  const [tripLength, setTripLength] = useState<FieldPickerTripLength | null>('4-5 nights')
  const [includeWeekend, setIncludeWeekend] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<number | null>(5) // June
  const [displayYear, setDisplayYear] = useState(2026)

  const selection: FieldPickerDateSelection = {
    tab: activeTab,
    start: range.start,
    end: range.end,
    flexibility,
    tripLength,
    includeWeekend,
    month: selectedMonth,
    year: displayYear,
  }

  const panelShell: React.CSSProperties = {
    display: 'inline-block',
    background: 'var(--ds-mapped-surface-default)',
    border: '1px solid var(--ds-mapped-border-default)',
    borderRadius: '8px',
    boxShadow: 'var(--ds-effect-shadow-overlay-light)',
    padding: 'var(--ds-alias-spacing-md)',
  }

  return (
    <div>
      <div style={panelShell}>
        <FieldPickerCalendar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          startDate={range.start}
          endDate={range.end}
          onDateChange={setRange}
          flexibility={flexibility}
          onFlexibilityChange={setFlexibility}
          tripLength={tripLength}
          onTripLengthChange={setTripLength}
          includeWeekend={includeWeekend}
          onIncludeWeekendChange={setIncludeWeekend}
          selectedMonth={selectedMonth}
          displayYear={displayYear}
          onMonthSelect={setSelectedMonth}
          onYearChange={setDisplayYear}
        />
      </div>
      <p style={{ fontSize: '13px', color: 'var(--ds-mapped-text-body)', marginTop: '12px' }}>
        <strong>Trigger label (active tab “{activeTab}”): </strong>
        <span style={{ fontFamily: 'monospace' }}>{labelFor(selection)}</span>
      </p>
    </div>
  )
}

export default function FieldPickerPreviewPage() {
  const [dateRange, setDateRange] = useState<FieldPickerDateRange>({ start: null, end: null })
  const [dateSelection, setDateSelection] = useState<FieldPickerDateSelection | null>(null)
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

  const note: React.CSSProperties = {
    fontSize: '12px',
    color: 'var(--ds-mapped-text-placeholder)',
    marginBottom: '16px',
    maxWidth: '640px',
    lineHeight: 1.6,
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
          Figma: PRIMITIVES / Field Picker — node 1577:2890 · calendar set .Calendar — node 1542:3783
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

      {/* ========== Trigger reflects the full selection ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>Trigger reflects the full selection</h2>
        <p style={note}>
          The trigger label now reflects whatever the user commits to on the active tab — exact
          calendar dates, calendar dates <em>with</em> a ± flexibility, or a Flexible-tab trip
          length + month. Selections persist after clicking away because the state lives in{' '}
          <code>FieldPicker</code> (not the panel). Open the picker below, pick a range and a
          flexibility chip, or switch to <strong>Flexible</strong> and pick a length + month — the
          field and the live readout update.
        </p>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={subheading}>Interactive — uncontrolled, with onSelectionChange readout</h3>
          <div style={{ width: '260px' }}>
            <FieldPicker type="date" onSelectionChange={setDateSelection} />
          </div>
          <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-body)', marginTop: '12px', fontFamily: 'monospace' }}>
            {dateSelection
              ? `tab=${dateSelection.tab} · label="${labelFor(dateSelection)}"` +
                (dateSelection.tab === 'Calendar'
                  ? ` · flexibility=${dateSelection.flexibility}`
                  : ` · tripLength=${dateSelection.tripLength ?? 'null'} · month=${dateSelection.month !== null ? MONTH_NAMES[dateSelection.month] : 'null'} · includeWeekend=${dateSelection.includeWeekend}`)
              : 'no selection yet — open the picker'}
          </p>
        </div>

        <div style={{ marginBottom: '8px' }}>
          <h3 style={subheading}>Expected label examples</h3>
        </div>
        <div style={tokenBox}>
          <strong style={{ fontFamily: 'inherit' }}>Calendar, exact:</strong> Tue, May 9 – Sat, May 13<br />
          <strong style={{ fontFamily: 'inherit' }}>Calendar, +- 1 day:</strong> Tue, May 9 – Sat, May 13 (+- 1)<br />
          <strong style={{ fontFamily: 'inherit' }}>Flexible:</strong> 4-5 nights in June
        </div>
      </section>

      {/* ========== Open calendar panel — both tabs inline ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>Calendar panel — Date / Flexible tabs (inline)</h2>
        <p style={note}>
          Always-open panel pre-seeded with a <strong>May 9 – May 13</strong> range (Date tab) and a{' '}
          <strong>4-5 nights / June</strong> selection (Flexible tab). Switch tabs, pick a flexibility
          chip, or pick a month — the computed trigger label below updates live.
        </p>
        <OpenCalendarDemo />

        <div style={{ ...tokenBox, marginTop: '32px' }}>
          <strong style={{ fontFamily: 'inherit' }}>Tokens used — FieldPicker.module.css (calendar panel):</strong><br />
          --ds-mapped-surface-default — panel / day-cell background<br />
          --ds-mapped-surface-action — active day cell<br />
          --ds-mapped-surface-action-hover-light — range highlight / day-cell hover<br />
          --ds-mapped-border-default — borders (resting)<br />
          --ds-mapped-border-action-hover — selected option (flexibility / month)<br />
          --ds-mapped-border-focus — trigger border (open)<br />
          --ds-mapped-border-disabled — disabled borders<br />
          --ds-mapped-text-body — resting text / flexHeading / monthNavYear<br />
          --ds-mapped-text-on-action — active day cell text<br />
          --ds-mapped-text-heading — two-month calendar title<br />
          --ds-mapped-text-action-hover — selected option text<br />
          --ds-mapped-text-disabled — day header labels / disabled text<br />
          --ds-mapped-text-placeholder — empty trigger label<br />
          --ds-mapped-icon-default — trigger icon / month nav buttons<br />
          --ds-mapped-icon-disabled — counter button (at min/max)<br />
          --ds-effect-shadow-overlay-light — panel drop shadow<br />
          --ds-alias-border-radius-lg — panel / day cells / nav btn (8px)<br />
          --ds-alias-border-radius-round — counter buttons (64px)<br />
          --ds-alias-border-width-sm — all borders (1px)<br />
          --ds-alias-spacing-xxs — counter btn padding (4px)<br />
          --ds-alias-spacing-xs — trigger padding / month nav / option-row gap (8px)<br />
          --ds-alias-spacing-sm — trigger padding-x (12px)<br />
          --ds-alias-spacing-md — panel padding / calendarTab gap / flexGroup gap (16px)<br />
          --ds-alias-spacing-xl — two-month gap / flexibleTab group gap (32px)<br />
          --ds-typography-heading-h8-* — calendar title / flexHeading / monthNavYear (Poppins 600 18/20)<br />
          --ds-typography-body-md-* — trigger label / day cells (Inter 400 16/20)<br />
          --ds-typography-body-md-semibold-* — counter value (Inter 600 16/20)<br />
          --ds-typography-body-xsm-* — day header labels / counter subtitle (Inter 400 12/16)<br />
          40×40px — day cell size (Figma spec, no token)<br />
          <em style={{ fontFamily: 'inherit' }}>
            ButtonGroup, Button, ButtonVertical, ButtonIcon and Checkbox carry their own tokens from
            their respective component CSS modules.
          </em>
        </div>
      </section>

      {/* ========== type="date" trigger states ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={sectionTitle}>type=&quot;date&quot; — trigger states</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={subheading}>Controlled date range</h3>
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

    </div>
  )
}
