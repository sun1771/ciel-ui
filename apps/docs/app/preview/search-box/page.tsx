'use client'

import React, { useState } from 'react'
import { SearchBox } from '@acme/ui'
import { MapPin } from '@acme/icons'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 'var(--ds-alias-spacing-xxs)',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: 'var(--ds-mapped-text-disabled)',
      }}
    >
      {children}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
      <h2
        style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginTop: 0,
          marginBottom: 'var(--ds-alias-spacing-sm)',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
      <h3
        style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-medium)',
          color: 'var(--ds-mapped-text-disabled)',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.08em',
          marginTop: 0,
          marginBottom: 'var(--ds-alias-spacing-xs)',
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--ds-alias-spacing-md)',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  )
}

function Col({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ds-alias-spacing-xxs)',
        width: '260px',
      }}
    >
      {children}
    </div>
  )
}

/* Simple controlled demo with clear button */
function ControlledDemo({ disabled }: { disabled?: boolean }) {
  const [value, setValue] = useState('')
  return (
    <SearchBox
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      icon={<MapPin size={20} />}
      placeholder="Search destination..."
      disabled={disabled}
    />
  )
}

/* Demo with dropdown suggestions */
function DropdownDemo() {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)

  const suggestions = [
    'San Francisco, CA',
    'New York, NY',
    'Tokyo, Japan',
    'Paris, France',
    'London, UK',
  ]
  const filtered = suggestions.filter((s) => s.toLowerCase().includes(value.toLowerCase()))

  return (
    <SearchBox
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
        setOpen(true)
      }}
      onClear={() => {
        setValue('')
        setOpen(false)
      }}
      icon={<MapPin size={20} />}
      placeholder="Search destination..."
      onFocus={() => setOpen(true)}
      onBlur={() => setTimeout(() => setOpen(false), 150)}
    >
      {open && filtered.length > 0 && (
        <div
          style={{
            background: 'var(--ds-mapped-surface-default)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            overflow: 'hidden',
          }}
        >
          {filtered.map((s) => (
            <button
              key={s}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setValue(s)
                setOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--ds-alias-spacing-xs)',
                width: '100%',
                padding: 'var(--ds-alias-spacing-sm)',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--ds-mapped-border-default)',
                cursor: 'pointer',
                fontFamily: 'var(--ds-brand-font-family-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                color: 'var(--ds-mapped-text-body)',
                textAlign: 'left',
              }}
            >
              <MapPin size={20} style={{ color: 'var(--ds-mapped-icon-default)', flexShrink: 0 }} />
              {s}
            </button>
          ))}
        </div>
      )}
    </SearchBox>
  )
}

export default function SearchBoxPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
      <div
        style={{
          marginBottom: 'var(--ds-alias-spacing-xl)',
          paddingBottom: 'var(--ds-alias-spacing-lg)',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-typography-heading-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          SearchBox
        </h1>
        <p
          style={{
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            marginBottom: 0,
          }}
        >
          Figma: PRIMITIVES / Search Box — node 1360:1829
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            marginBottom: 0,
          }}
        >
          {`import { SearchBox } from '@acme/ui'`}
        </p>
      </div>

      {/* States */}
      <Section title="SearchBox">
        <SubSection title="States">
          <Row>
            <Col>
              <ControlledDemo />
              <Label>default (empty)</Label>
            </Col>
            <Col>
              <SearchBox
                value="San Francisco, CA"
                onChange={() => {}}
                onClear={() => {}}
                icon={<MapPin size={20} />}
                placeholder="Search destination..."
              />
              <Label>filled (value + clear button)</Label>
            </Col>
            <Col>
              <ControlledDemo disabled />
              <Label>disabled={true} (empty)</Label>
            </Col>
            <Col>
              <SearchBox
                value="San Francisco, CA"
                onChange={() => {}}
                disabled
                icon={<MapPin size={20} />}
                placeholder="Search destination..."
              />
              <Label>disabled={true} (filled)</Label>
            </Col>
          </Row>
        </SubSection>

        <SubSection title="Custom icon">
          <Row>
            <Col>
              <SearchBox
                value=""
                onChange={() => {}}
                placeholder="Search destination..."
                icon={<MapPin size={20} style={{ color: 'var(--ds-mapped-icon-action)' }} />}
              />
              <Label>icon prop — custom blue MapPin</Label>
            </Col>
          </Row>
        </SubSection>

        <SubSection title="With dropdown (focus to open)">
          <Row>
            <Col>
              <DropdownDemo />
              <Label>children prop — parent-controlled dropdown</Label>
            </Col>
          </Row>
        </SubSection>

        <SubSection title="Tokens used">
          <div
            style={{
              padding: 'var(--ds-alias-spacing-sm)',
              background: 'var(--ds-mapped-surface-disabled)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontFamily: 'monospace',
              color: 'var(--ds-mapped-text-body)',
              lineHeight: '1.8',
            }}
          >
            <strong>Layout</strong>
            <br />
            --ds-alias-spacing-xs — padding-y, gap
            <br />
            --ds-alias-spacing-sm — padding-x
            <br />
            --ds-alias-spacing-xxs — dropdown offset
            <br />
            --ds-alias-border-radius-lg — wrapper + dropdown
            <br />
            --ds-alias-border-width-sm — border
            <br />
            <br />
            <strong>Colors</strong>
            <br />
            --ds-mapped-surface-default — bg
            <br />
            --ds-mapped-surface-disabled — bg disabled
            <br />
            --ds-mapped-border-default — border default
            <br />
            --ds-mapped-border-action-hover — border hover
            <br />
            --ds-mapped-border-action — border focus
            <br />
            --ds-mapped-border-disabled — border disabled
            <br />
            --ds-mapped-text-body — input text
            <br />
            --ds-mapped-text-placeholder — placeholder
            <br />
            --ds-mapped-text-disabled — disabled text
            <br />
            --ds-mapped-icon-default — icon
            <br />
            --ds-mapped-icon-disabled — icon disabled
            <br />
            --ds-mapped-icon-action-hover — clear icon hover
            <br />
            --ds-effect-shadow-overlay-light — dropdown shadow
            <br />
            <br />
            <strong>Typography</strong>
            <br />
            --ds-brand-font-family-body — Inter
            <br />
            --ds-brand-font-weight-regular — 400
            <br />
            --ds-typography-body-md-font-size — 16px
            <br />
            --ds-typography-body-md-line-height — 20px
          </div>
        </SubSection>
      </Section>
    </div>
  )
}
