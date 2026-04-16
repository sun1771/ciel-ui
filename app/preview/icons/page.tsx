'use client'

import { useState } from 'react'
import {
  ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight,
  ArrowUp, ArrowUpLeft, ArrowUpRight,
  Award,
  Bag, Baggage, Bed,
  Calendar, Car, Check,
  ChevronDown, ChevronLeft, ChevronRight, ChevronTop,
  Collapse, Copy,
  Drag, Edit, Electric, Expand,
  Gasoline, Hybrid,
  Info,
  Map, MapPin, Mic, Minus, MoreVertical,
  Pause, Plus,
  Search, Settings, Share, Share2,
  ThumbsDown, ThumbsUp, Trip, TripOnChatIcon,
  User, Users,
  X,
} from '@/icons'
import type { IconProps } from '@/icons'
import type React from 'react'

type IconComponent = (props: IconProps) => React.JSX.Element

const iconRegistry: Array<{ name: string; Component: IconComponent }> = [
  { name: 'ArrowDown', Component: ArrowDown },
  { name: 'ArrowDownLeft', Component: ArrowDownLeft },
  { name: 'ArrowDownRight', Component: ArrowDownRight },
  { name: 'ArrowLeft', Component: ArrowLeft },
  { name: 'ArrowRight', Component: ArrowRight },
  { name: 'ArrowUp', Component: ArrowUp },
  { name: 'ArrowUpLeft', Component: ArrowUpLeft },
  { name: 'ArrowUpRight', Component: ArrowUpRight },
  { name: 'Award', Component: Award },
  { name: 'Bag', Component: Bag },
  { name: 'Baggage', Component: Baggage },
  { name: 'Bed', Component: Bed },
  { name: 'Calendar', Component: Calendar },
  { name: 'Car', Component: Car },
  { name: 'Check', Component: Check },
  { name: 'ChevronDown', Component: ChevronDown },
  { name: 'ChevronLeft', Component: ChevronLeft },
  { name: 'ChevronRight', Component: ChevronRight },
  { name: 'ChevronTop', Component: ChevronTop },
  { name: 'Collapse', Component: Collapse },
  { name: 'Copy', Component: Copy },
  { name: 'Drag', Component: Drag },
  { name: 'Edit', Component: Edit },
  { name: 'Electric', Component: Electric },
  { name: 'Expand', Component: Expand },
  { name: 'Gasoline', Component: Gasoline },
  { name: 'Hybrid', Component: Hybrid },
  { name: 'Info', Component: Info },
  { name: 'Map', Component: Map },
  { name: 'MapPin', Component: MapPin },
  { name: 'Mic', Component: Mic },
  { name: 'Minus', Component: Minus },
  { name: 'MoreVertical', Component: MoreVertical },
  { name: 'Pause', Component: Pause },
  { name: 'Plus', Component: Plus },
  { name: 'Search', Component: Search },
  { name: 'Settings', Component: Settings },
  { name: 'Share', Component: Share },
  { name: 'Share2', Component: Share2 },
  { name: 'ThumbsDown', Component: ThumbsDown },
  { name: 'ThumbsUp', Component: ThumbsUp },
  { name: 'Trip', Component: Trip },
  { name: 'TripOnChatIcon', Component: TripOnChatIcon },
  { name: 'User', Component: User },
  { name: 'Users', Component: Users },
  { name: 'X', Component: X },
]

const allSizes = [16, 20, 24, 32] as const
type IconSize = typeof allSizes[number]
type SizeFilter = IconSize | 'all'

const filterOptions: SizeFilter[] = ['all', 16, 20, 24, 32]

export default function IconsPreviewPage() {
  const [activeSize, setActiveSize] = useState<SizeFilter>('all')

  const displaySizes: IconSize[] =
    activeSize === 'all' ? [...allSizes] : [activeSize]

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h1
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Icon Library
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginBottom: 'var(--ds-alias-spacing-xs)',
          }}
        >
          {iconRegistry.length} icons
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-placeholder)',
            padding: 'var(--ds-alias-spacing-xs)',
            borderLeft: '2px solid var(--ds-mapped-border-default)',
          }}
        >
          Icons use <code>currentColor</code>. Color is controlled by the parent
          element&apos;s CSS <code>color</code> property via{' '}
          <code>var(--ds-color-text-primary)</code> etc.
        </p>
      </div>

      {/* Size filter */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--ds-alias-spacing-xxs)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
          flexWrap: 'wrap',
        }}
      >
        {filterOptions.map((opt) => {
          const isActive = activeSize === opt
          return (
            <button
              key={String(opt)}
              type="button"
              onClick={() => setActiveSize(opt)}
              style={{
                padding: `var(--ds-alias-spacing-xxs) var(--ds-alias-spacing-xs)`,
                borderRadius: 'var(--ds-alias-border-radius-lg)',
                border: isActive
                  ? '1px solid transparent'
                  : '1px solid var(--ds-mapped-border-default)',
                backgroundColor: isActive
                  ? 'var(--ds-mapped-surface-action)'
                  : 'var(--ds-mapped-surface-default)',
                color: isActive
                  ? 'var(--ds-mapped-text-on-action)'
                  : 'var(--ds-mapped-text-placeholder)',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: isActive ? 500 : 400,
                transition: 'background-color 150ms ease, color 150ms ease',
              }}
            >
              {opt === 'all' ? 'All' : String(opt)}
            </button>
          )
        })}
      </div>

      {/* Icon grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 'var(--ds-alias-spacing-md)',
        }}
      >
        {iconRegistry.map(({ name, Component }) => (
          <div
            key={name}
            style={{
              backgroundColor: 'var(--ds-mapped-surface-default)',
              border: '1px solid var(--ds-mapped-border-default)',
              borderRadius: 'var(--ds-alias-border-radius-md)',
              padding: 'var(--ds-alias-spacing-md)',
            }}
          >
            {/* Size row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--ds-alias-spacing-sm)',
                alignItems: 'center',
                marginBottom: 'var(--ds-alias-spacing-xs)',
              }}
            >
              {displaySizes.map((sz) => (
                <Component
                  key={sz}
                  size={sz}
                  color="currentColor"
                />
              ))}
            </div>

            {/* Icon name */}
            <p
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--ds-mapped-text-body)',
                margin: 'var(--ds-alias-spacing-xxs) 0 0',
              }}
            >
              {name}
            </p>

            {/* Import snippet */}
            <code
              style={{
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
                display: 'block',
                marginTop: '2px',
                wordBreak: 'break-all',
              }}
            >
              {'import { ' + name + " } from '@/icons'"}
            </code>

            {/* Color preview row */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--ds-alias-spacing-sm)',
                marginTop: 'var(--ds-alias-spacing-xs)',
                paddingTop: 'var(--ds-alias-spacing-xs)',
                borderTop: '1px solid var(--ds-mapped-border-default)',
              }}
            >
              <span style={{ color: 'var(--ds-mapped-text-body)' }}>
                <Component size={20} />
              </span>
              <span style={{ color: 'var(--ds-mapped-surface-action)' }}>
                <Component size={20} />
              </span>
              <span style={{ color: 'var(--ds-mapped-text-placeholder)' }}>
                <Component size={20} />
              </span>
            </div>
            <p
              style={{
                fontSize: '10px',
                color: 'var(--ds-mapped-text-disabled)',
                margin: '4px 0 0',
              }}
            >
              text-body · surface-action · text-placeholder
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
