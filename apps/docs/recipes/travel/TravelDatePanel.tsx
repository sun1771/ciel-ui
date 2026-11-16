'use client'

import React from 'react'
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  ButtonVertical,
  CarouselItem,
  Checkbox,
  DateRangeCalendar,
  cn,
} from '@cielui/react'
import { Calendar as CalendarIcon, Info } from '@cielui/icons'
import type { DateFlexibility, TravelDatePanelProps, TripLength } from './travelPickerTypes'
import styles from './TravelDatePicker.module.css'

/**
 * Recipe: the travel date panel — a "Date" tab (DateRangeCalendar + ± day
 * flexibility) and a "Flexible" tab (trip length + month picker).
 * Fully controlled; TravelDatePicker owns the state so it survives closing.
 * Example code for the docs site, not part of @cielui/react.
 */

export const FLEX_OPTIONS: readonly DateFlexibility[] = [
  'Exact date',
  '± 1 day',
  '± 2 day',
  '± 3 day',
  '± 7 day',
  '± 14 day',
]

export const TRIP_LENGTH_OPTIONS: readonly TripLength[] = [
  '1 night',
  '2-3 nights',
  '4-5 nights',
  'week',
  '2 week',
  'month',
]

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const MONTH_ABBR = MONTH_NAMES.map((m) => m.slice(0, 3))

/** Number of ± days a flexibility option represents, or null for "Exact date". */
export function flexibilityDays(flex: DateFlexibility): number | null {
  if (flex === 'Exact date') return null
  const match = flex.match(/\d+/)
  return match ? Number(match[0]) : null
}

export function TravelDatePanel({
  activeTab,
  onTabChange,
  startDate,
  endDate,
  onDateChange,
  flexibility,
  onFlexibilityChange,
  tripLength,
  onTripLengthChange,
  includeWeekend,
  onIncludeWeekendChange,
  selectedMonth,
  displayYear,
  onMonthSelect,
  onYearChange,
}: TravelDatePanelProps) {
  return (
    <div>
      {/* Tab switcher — Figma "Button Group" (Date | Flexible, Info icon each) */}
      <ButtonGroup className={styles.tabSwitcher} aria-label="Date picker mode">
        <ButtonGroupItem
          className={styles.tabItem}
          isSelected={activeTab === 'Calendar'}
          icon={<Info size={20} />}
          onClick={() => onTabChange('Calendar')}
        >
          Date
        </ButtonGroupItem>
        <ButtonGroupItem
          className={styles.tabItem}
          isSelected={activeTab === 'Flexible'}
          icon={<Info size={20} />}
          onClick={() => onTabChange('Flexible')}
        >
          Flexible
        </ButtonGroupItem>
      </ButtonGroup>

      {/* Both panels are always rendered, stacked in one grid cell so the panel
          keeps a constant size across tabs; the inactive one is hidden. */}
      <div className={styles.tabPanels}>
        {/* ── Tab 1: DatePicker=Calendar ─────────────────────── */}
        <div
          className={cn(
            styles.tabPanel,
            styles.calendarTab,
            activeTab !== 'Calendar' && styles.tabPanelHidden
          )}
          aria-hidden={activeTab !== 'Calendar'}
        >
          <DateRangeCalendar value={{ start: startDate, end: endDate }} onChange={onDateChange} />

          {/* Flexibility options — Button (outline); selected = action-hover */}
          <div className={styles.optionRow}>
            {FLEX_OPTIONS.map((option) => (
              <Button
                key={option}
                variant="outline"
                size="lg"
                aria-pressed={flexibility === option}
                className={cn(flexibility === option && styles.optionSelected)}
                onClick={() => onFlexibilityChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        {/* ── Tab 2: DatePicker=Flexible ─────────────────────── */}
        <div
          className={cn(
            styles.tabPanel,
            styles.flexibleTab,
            activeTab !== 'Flexible' && styles.tabPanelHidden
          )}
          aria-hidden={activeTab !== 'Flexible'}
        >
          {/* "How long?" — trip length options + include-weekend checkbox */}
          <div className={styles.flexGroup}>
            <span className={styles.flexHeading}>How long?</span>
            <div className={styles.optionRow}>
              {TRIP_LENGTH_OPTIONS.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  size="lg"
                  aria-pressed={tripLength === option}
                  className={cn(tripLength === option && styles.optionSelected)}
                  onClick={() => onTripLengthChange(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Checkbox
              checked={includeWeekend}
              onChange={(e) => onIncludeWeekendChange(e.target.checked)}
            >
              Include weekend
            </Checkbox>
          </div>

          {/* "When?" — month picker: CarouselItem year nav + abbreviated month grid */}
          <div className={styles.flexGroup}>
            <span className={styles.flexHeading}>When?</span>
            <div className={styles.monthNav}>
              <CarouselItem
                direction="left"
                shape="round"
                size="sm"
                label="Previous year"
                onClick={() => onYearChange(displayYear - 1)}
              />
              <span className={styles.monthNavYear} aria-live="polite" aria-atomic="true">
                {displayYear}
              </span>
              <CarouselItem
                direction="right"
                shape="round"
                size="sm"
                label="Next year"
                onClick={() => onYearChange(displayYear + 1)}
              />
            </div>
            <div className={styles.monthGrid}>
              {MONTH_ABBR.map((month, idx) => (
                <ButtonVertical
                  key={month}
                  variant="outline"
                  size="lg"
                  iconTop={<CalendarIcon size={20} />}
                  aria-pressed={selectedMonth === idx}
                  aria-label={MONTH_NAMES[idx]}
                  className={cn(styles.monthCell, selectedMonth === idx && styles.optionSelected)}
                  onClick={() => onMonthSelect(idx)}
                >
                  {month}
                </ButtonVertical>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
