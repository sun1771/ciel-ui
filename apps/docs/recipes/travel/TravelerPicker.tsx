'use client'

import React, { useState } from 'react'
import { FieldPicker, Separator, cn } from '@acme/ui'
import { Minus, Plus, Users } from '@acme/icons'
import type { TravelerCounts, TravelerPickerProps } from './travelPickerTypes'
import styles from './TravelerPicker.module.css'

/**
 * Recipe: traveler / room counter picker, built on the library's FieldPicker.
 * Example code for the docs site, not part of @acme/ui.
 */

const DEFAULT_TRAVELERS: TravelerCounts = { adults: 1, children: 0, pets: 0, rooms: 1 }

function formatTravelers(t: TravelerCounts): string {
  const total = t.adults + t.children
  return `${total} traveler${total !== 1 ? 's' : ''}, ${t.rooms} room${t.rooms !== 1 ? 's' : ''}`
}

interface CounterRowProps {
  label: string
  subtitle?: string
  value: number
  min: number
  max?: number
  onChange: (value: number) => void
}

function CounterRow({ label, subtitle, value, min, max, onChange }: CounterRowProps) {
  const atMin = value <= min
  const atMax = max !== undefined && value >= max

  return (
    <div className={styles.counterRow}>
      <div className={styles.counterRowLabels}>
        <span className={styles.counterRowTitle}>{label}</span>
        {subtitle && <span className={styles.counterRowSubtitle}>{subtitle}</span>}
      </div>
      <div className={styles.counterControls}>
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={atMin}
          className={cn(styles.counterBtn, atMin && styles.counterBtnDisabled)}
          onClick={() => onChange(value - 1)}
        >
          <Minus size={16} />
        </button>
        <span className={styles.counterValue} aria-live="polite" aria-atomic="true">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={atMax}
          className={cn(styles.counterBtn, atMax && styles.counterBtnDisabled)}
          onClick={() => onChange(value + 1)}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}

export function TravelerPicker({
  travelers,
  defaultTravelers = DEFAULT_TRAVELERS,
  onTravelerChange,
  ...props
}: TravelerPickerProps) {
  const [internal, setInternal] = useState(defaultTravelers)
  const counts = travelers ?? internal

  function update(field: keyof TravelerCounts, value: number) {
    const next = { ...counts, [field]: value }
    if (travelers === undefined) setInternal(next)
    onTravelerChange?.(next)
  }

  return (
    <FieldPicker
      {...props}
      icon={<Users size={20} />}
      value={formatTravelers(counts)}
      placeholder="Add travelers"
      panelLabel="Select travelers"
    >
      <div className={styles.travelerPanel}>
        <CounterRow
          label="Adults"
          value={counts.adults}
          min={1}
          onChange={(v) => update('adults', v)}
        />
        <Separator />
        <CounterRow
          label="Children"
          subtitle="Ages 2–12"
          value={counts.children}
          min={0}
          onChange={(v) => update('children', v)}
        />
        <Separator />
        <CounterRow label="Pet" value={counts.pets} min={0} onChange={(v) => update('pets', v)} />
        <Separator />
        <CounterRow
          label="Room"
          value={counts.rooms}
          min={1}
          onChange={(v) => update('rooms', v)}
        />
      </div>
    </FieldPicker>
  )
}
