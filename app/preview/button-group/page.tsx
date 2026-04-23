'use client'

import React, { useState } from 'react'
import { ButtonGroup, ButtonGroupItem } from '@/components/ui/navigation/ButtonGroup'
import { Info } from '@/icons'
import { Calendar } from '@/icons'
import { MapPin } from '@/icons'

export default function ButtonGroupPreviewPage() {
  const [selected1, setSelected1] = useState<number>(0)
  const [selected2, setSelected2] = useState<number>(1)
  const [selectedIcon, setSelectedIcon] = useState<number>(0)

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
          ButtonGroup
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--ds-mapped-text-body)',
          marginTop: '8px',
        }}>
          Figma: NAVIGATION / Button Group — nodes 466:1256 / 466:1297
        </p>
        <p style={{
          fontSize: '12px',
          color: 'var(--ds-mapped-text-placeholder)',
          marginTop: '4px',
          fontFamily: 'monospace',
        }}>
          import &#123; ButtonGroup, ButtonGroupItem &#125; from &apos;@/components/ui/navigation/ButtonGroup&apos;
        </p>
      </div>

      {/* ========== Button Group — button-group variant ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          ButtonGroup — button-group (icon + label)
        </h2>

        {/* Interactive — first item selected */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Interactive selection (click to select)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <ButtonGroup variant="button-group">
              <ButtonGroupItem
                isSelected={selected1 === 0}
                onClick={() => setSelected1(0)}
                icon={<Info size={20} />}
              >
                Option 1
              </ButtonGroupItem>
              <ButtonGroupItem
                isSelected={selected1 === 1}
                onClick={() => setSelected1(1)}
                icon={<Calendar size={20} />}
              >
                Option 2
              </ButtonGroupItem>
              <ButtonGroupItem
                isSelected={selected1 === 2}
                onClick={() => setSelected1(2)}
                icon={<MapPin size={20} />}
              >
                Option 3
              </ButtonGroupItem>
            </ButtonGroup>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              selected={selected1} (item index)
            </code>
          </div>
        </div>

        {/* States */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            States
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            {/* Default — no selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ButtonGroup>
                <ButtonGroupItem icon={<Info size={20} />}>Option 1</ButtonGroupItem>
                <ButtonGroupItem icon={<Calendar size={20} />}>Option 2</ButtonGroupItem>
                <ButtonGroupItem icon={<MapPin size={20} />}>Option 3</ButtonGroupItem>
              </ButtonGroup>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
                default (no isSelected)
              </code>
            </div>

            {/* Middle item selected */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ButtonGroup>
                <ButtonGroupItem icon={<Info size={20} />}>Option 1</ButtonGroupItem>
                <ButtonGroupItem isSelected icon={<Calendar size={20} />}>Option 2</ButtonGroupItem>
                <ButtonGroupItem icon={<MapPin size={20} />}>Option 3</ButtonGroupItem>
              </ButtonGroup>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
                isSelected on middle item
              </code>
            </div>

            {/* With disabled item */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ButtonGroup>
                <ButtonGroupItem isSelected icon={<Info size={20} />}>Option 1</ButtonGroupItem>
                <ButtonGroupItem icon={<Calendar size={20} />}>Option 2</ButtonGroupItem>
                <ButtonGroupItem disabled icon={<MapPin size={20} />}>Option 3</ButtonGroupItem>
              </ButtonGroup>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
                first isSelected, last disabled
              </code>
            </div>

            {/* All disabled */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <ButtonGroup>
                <ButtonGroupItem disabled icon={<Info size={20} />}>Option 1</ButtonGroupItem>
                <ButtonGroupItem disabled icon={<Calendar size={20} />}>Option 2</ButtonGroupItem>
                <ButtonGroupItem disabled icon={<MapPin size={20} />}>Option 3</ButtonGroupItem>
              </ButtonGroup>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
                all disabled
              </code>
            </div>

          </div>
        </div>

        {/* Without icons */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Label only (no icons)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ButtonGroup>
              <ButtonGroupItem
                isSelected={selected2 === 0}
                onClick={() => setSelected2(0)}
              >
                Day
              </ButtonGroupItem>
              <ButtonGroupItem
                isSelected={selected2 === 1}
                onClick={() => setSelected2(1)}
              >
                Week
              </ButtonGroupItem>
              <ButtonGroupItem
                isSelected={selected2 === 2}
                onClick={() => setSelected2(2)}
              >
                Month
              </ButtonGroupItem>
            </ButtonGroup>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              no icon prop — label only
            </code>
          </div>
        </div>
      </section>

      {/* ========== Icon Group ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          ButtonGroup — icon-group (icon only)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Interactive icon group */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ButtonGroup variant="icon-group">
              <ButtonGroupItem
                isSelected={selectedIcon === 0}
                onClick={() => setSelectedIcon(0)}
                icon={<Info size={20} />}
                aria-label="Info"
              />
              <ButtonGroupItem
                isSelected={selectedIcon === 1}
                onClick={() => setSelectedIcon(1)}
                icon={<Calendar size={20} />}
                aria-label="Calendar"
              />
              <ButtonGroupItem
                isSelected={selectedIcon === 2}
                onClick={() => setSelectedIcon(2)}
                icon={<MapPin size={20} />}
                aria-label="Map pin"
              />
            </ButtonGroup>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              variant=&quot;icon-group&quot; — icon-only items with aria-label
            </code>
          </div>

          {/* Icon group with disabled */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ButtonGroup variant="icon-group">
              <ButtonGroupItem
                isSelected
                icon={<Info size={20} />}
                aria-label="Info"
              />
              <ButtonGroupItem
                icon={<Calendar size={20} />}
                aria-label="Calendar"
              />
              <ButtonGroupItem
                disabled
                icon={<MapPin size={20} />}
                aria-label="Map pin (disabled)"
              />
            </ButtonGroup>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              first isSelected, last disabled
            </code>
          </div>

        </div>
      </section>

      {/* ========== Token reference ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          Token reference
        </h2>
        <div style={{
          padding: '24px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          lineHeight: '1.8',
        }}>
          <strong>ButtonGroup container:</strong><br />
          --ds-alias-border-width-sm (1px border)<br />
          --ds-mapped-border-default (container border color)<br />
          --ds-alias-border-radius-md (4px corner radius)<br />
          <br />
          <strong>ButtonGroupItem — layout:</strong><br />
          --ds-alias-spacing-xs (8px vertical padding + icon/label gap)<br />
          --ds-alias-spacing-sm (12px horizontal padding)<br />
          --ds-brand-font-family-body (Inter)<br />
          --ds-brand-font-weight-regular (400)<br />
          --ds-typography-body-md-font-size (16px)<br />
          --ds-typography-body-md-line-height (20px)<br />
          <br />
          <strong>ButtonGroupItem — states:</strong><br />
          default: --ds-mapped-surface-default / --ds-mapped-border-default / --ds-mapped-text-body<br />
          hover: --ds-mapped-surface-action-hover-light / --ds-mapped-border-action-hover / --ds-mapped-text-action-hover<br />
          selected: --ds-mapped-surface-action / --ds-mapped-border-action / --ds-mapped-text-on-action<br />
          disabled: --ds-mapped-surface-disabled / --ds-mapped-border-disabled / --ds-mapped-text-disabled<br />
          focus: --ds-alias-border-width-md + --ds-mapped-border-focus (outline)
        </div>
      </section>

    </div>
  )
}
