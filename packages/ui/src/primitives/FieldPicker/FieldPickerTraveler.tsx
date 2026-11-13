'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Minus } from '@acme/icons'
import { Plus } from '@acme/icons'
import { Separator } from '../Separator'
import type { TravelerPanelProps, FieldPickerTravelerCounts } from './types'
import styles from './FieldPicker.module.css'

interface CounterRowProps {
  label: string
  subtitle?: string
  value: number
  min: number
  max?: number
  onDecrement: () => void
  onIncrement: () => void
}

function CounterRow({
  label,
  subtitle,
  value,
  min,
  max,
  onDecrement,
  onIncrement,
}: CounterRowProps) {
  const atMin = value <= min
  const atMax = max !== undefined && value >= max

  return (
    <div className={styles.counterRow}>
      <div className={styles.counterRowLabels}>
        <span className={styles.counterRowTitle}>{label}</span>
        {subtitle && (
          <span className={styles.counterRowSubtitle}>{subtitle}</span>
        )}
      </div>
      <div className={styles.counterControls}>
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={atMin}
          className={cn(styles.counterBtn, atMin && styles.counterBtnDisabled)}
          onClick={onDecrement}
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
          onClick={onIncrement}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  )
}

export function FieldPickerTraveler({
  adults,
  children,
  pets,
  rooms,
  onTravelerChange,
}: TravelerPanelProps) {
  function update(field: keyof FieldPickerTravelerCounts, value: number) {
    const updated: FieldPickerTravelerCounts = { adults, children, pets, rooms }
    updated[field] = value
    onTravelerChange(updated)
  }

  return (
    <div className={styles.travelerPanel}>
      <CounterRow
        label="Adults"
        value={adults}
        min={1}
        onDecrement={() => update('adults', adults - 1)}
        onIncrement={() => update('adults', adults + 1)}
      />
      <Separator />
      <CounterRow
        label="Children"
        subtitle="Ages 2–12"
        value={children}
        min={0}
        onDecrement={() => update('children', children - 1)}
        onIncrement={() => update('children', children + 1)}
      />
      <Separator />
      <CounterRow
        label="Pet"
        value={pets}
        min={0}
        onDecrement={() => update('pets', pets - 1)}
        onIncrement={() => update('pets', pets + 1)}
      />
      <Separator />
      <CounterRow
        label="Room"
        value={rooms}
        min={1}
        onDecrement={() => update('rooms', rooms - 1)}
        onIncrement={() => update('rooms', rooms + 1)}
      />
    </div>
  )
}
