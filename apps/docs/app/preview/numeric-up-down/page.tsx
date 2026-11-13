'use client'

import React, { useState } from 'react'
import { NumericUpDown } from '@acme/ui'

export default function NumericUpDownPreviewPage() {
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(3)
  const [value3, setValue3] = useState(1)
  const [value4, setValue4] = useState(5)
  const [value5, setValue5] = useState(0)

  return (
    <div
      style={{
        maxWidth: '720px',
        padding: 'var(--ds-alias-spacing-xl)',
      }}
    >
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
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            lineHeight: 'var(--ds-responsive-h4-line-height)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          NumericUpDown
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
            marginBottom: 0,
          }}
        >
          Figma: PRIMITIVES / Numeric Up Down (node 1503:4111)
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            marginBottom: 0,
            fontFamily: 'monospace',
          }}
        >
          {`import { NumericUpDown } from '@acme/ui'`}
        </p>
      </div>

      {/* Section: Default (no constraints) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          Default (no min/max)
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={value1} onChange={setValue1} />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {`value={${value1}}`}
            </code>
          </div>
        </div>
      </section>

      {/* Section: With min constraint */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          With min=1 (decrement disabled at minimum)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={value3} min={1} onChange={setValue3} />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {`value={${value3}} min={1}`}
            </code>
          </div>
        </div>
      </section>

      {/* Section: With min and max */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          With min=1 max=5 (both limits enforced)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={value2} min={1} max={5} onChange={setValue2} />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {`value={${value2}} min={1} max={5}`}
            </code>
          </div>
        </div>
      </section>

      {/* Section: At maximum */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          At maximum (increment disabled)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={value4} min={1} max={5} onChange={setValue4} />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {`value={${value4}} min={1} max={5}`}
            </code>
          </div>
        </div>
      </section>

      {/* Section: Disabled */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          Disabled
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xl)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={value5} onChange={setValue5} disabled />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {'value={0} disabled'}
            </code>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'flex-start' }}>
            <NumericUpDown value={3} min={1} max={5} disabled />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)', fontFamily: 'monospace' }}>
              {'value={3} min={1} max={5} disabled'}
            </code>
          </div>
        </div>
      </section>

      {/* Section: In context — traveler count */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          In context — traveler count picker
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ds-alias-spacing-md)',
            padding: 'var(--ds-alias-spacing-md)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            maxWidth: '320px',
          }}
        >
          {[
            { label: 'Adults', sub: '13 years and over' },
            { label: 'Children', sub: '2–12 years' },
            { label: 'Infants', sub: 'Under 2 years' },
          ].map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--ds-alias-spacing-md)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 'var(--ds-typography-body-md-font-size)',
                    fontWeight: 600,
                    color: 'var(--ds-mapped-text-body)',
                    lineHeight: 'var(--ds-typography-body-md-line-height)',
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontSize: 'var(--ds-typography-body-sm-font-size)',
                    color: 'var(--ds-mapped-text-placeholder)',
                    lineHeight: 'var(--ds-typography-body-sm-line-height)',
                  }}
                >
                  {row.sub}
                </div>
              </div>
              <NumericUpDown
                value={i === 0 ? 1 : 0}
                min={i === 0 ? 1 : 0}
                max={9}
                onChange={() => {}}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 600,
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-sm)',
          }}
        >
          Tokens used
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'var(--ds-mapped-text-body)',
            lineHeight: '1.8',
          }}
        >
          {[
            '--ds-alias-spacing-sm — container gap (12px)',
            '--ds-alias-spacing-xxs — button padding (4px)',
            '--ds-alias-border-radius-round — button shape (circle)',
            '--ds-alias-border-width-sm — button border (1px)',
            '--ds-alias-border-width-md — focus ring (2px)',
            '--ds-mapped-surface-default — button background',
            '--ds-mapped-surface-action-hover-light — hover background',
            '--ds-mapped-border-default — button border default',
            '--ds-mapped-border-disabled — button border at limit',
            '--ds-mapped-border-action-hover — hover border',
            '--ds-mapped-border-focus — focus ring color',
            '--ds-mapped-icon-default — icon color',
            '--ds-mapped-icon-disabled — icon color disabled',
            '--ds-mapped-text-body — value text',
            '--ds-mapped-text-disabled — value text disabled',
            '--ds-typography-body-md-semibold-* — value text style',
          ].map((t) => (
            <div key={t}>{t}</div>
          ))}
        </div>
      </section>
    </div>
  )
}
