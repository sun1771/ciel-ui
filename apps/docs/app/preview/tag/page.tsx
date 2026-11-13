'use client'

import React, { useState } from 'react'
import { Tag } from '@acme/ui'

export default function TagPreviewPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({})

  const dismiss = (key: string) => setDismissed((prev) => ({ ...prev, [key]: true }))
  const reset = () => setDismissed({})

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>

      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0
        }}>
          Tag
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xxs)',
          marginBottom: 0
        }}>
          Figma: PRIMITIVES / Tag — node 814:1481
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          fontFamily: 'monospace',
          marginBottom: 0
        }}>
          import &#123; Tag &#125; from &apos;@acme/ui&apos;
        </p>
      </div>

      {/* Sizes */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-sm)'
        }}>
          Sizes
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--ds-alias-spacing-sm)',
          alignItems: 'center'
        }}>
          <div>
            <Tag size="lg">Interest</Tag>
            <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              size=&quot;lg&quot;
            </div>
          </div>
          <div>
            <Tag size="sm">Interest</Tag>
            <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              size=&quot;sm&quot;
            </div>
          </div>
        </div>
      </section>

      {/* Static tags (no dismiss) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-sm)'
        }}>
          Static (no dismiss button)
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'center' }}>
          {['Beach', 'Mountains', 'City break', 'Culture', 'Food & drink'].map((label) => (
            <Tag key={label} size="lg">{label}</Tag>
          ))}
        </div>
        <div style={{ marginTop: 'var(--ds-alias-spacing-xs)', display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'center' }}>
          {['Beach', 'Mountains', 'City break'].map((label) => (
            <Tag key={label} size="sm">{label}</Tag>
          ))}
        </div>
      </section>

      {/* Dismissible tags */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-xxs)'
        }}>
          Dismissible (with onDismiss)
        </h2>
        <p style={{ fontSize: 'var(--ds-typography-body-sm-font-size)', color: 'var(--ds-mapped-text-body)', marginBottom: 'var(--ds-alias-spacing-sm)' }}>
          Click X to dismiss tags. Focus the X button to see the full-tag focus ring.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'center', marginBottom: 'var(--ds-alias-spacing-xs)' }}>
          {['Beach', 'Mountains', 'City break', 'Culture', 'Food & drink'].map((label) => (
            !dismissed[`lg-${label}`] && (
              <div key={label}>
                <Tag size="lg" onDismiss={() => dismiss(`lg-${label}`)}>
                  {label}
                </Tag>
                <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
                  size=&quot;lg&quot; onDismiss
                </div>
              </div>
            )
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xs)', alignItems: 'center' }}>
          {['Beach', 'Mountains', 'City break'].map((label) => (
            !dismissed[`sm-${label}`] && (
              <div key={label}>
                <Tag size="sm" onDismiss={() => dismiss(`sm-${label}`)}>
                  {label}
                </Tag>
                <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
                  size=&quot;sm&quot; onDismiss
                </div>
              </div>
            )
          ))}
        </div>
        <button
          onClick={reset}
          style={{
            marginTop: 'var(--ds-alias-spacing-sm)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-action)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0
          }}
        >
          Reset dismissed tags
        </button>
      </section>

      {/* Disabled state */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-sm)'
        }}>
          Disabled
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-sm)', alignItems: 'center' }}>
          <div>
            <Tag size="lg" disabled>Beach</Tag>
            <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              size=&quot;lg&quot; disabled
            </div>
          </div>
          <div>
            <Tag size="sm" disabled>Beach</Tag>
            <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              size=&quot;sm&quot; disabled
            </div>
          </div>
          <div>
            <Tag size="lg" disabled onDismiss={() => {}}>Dismissible disabled</Tag>
            <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              size=&quot;lg&quot; disabled onDismiss
            </div>
          </div>
        </div>
      </section>

      {/* Real-world usage */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-lg-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-sm)'
        }}>
          Real-world usage — trip interests
        </h2>
        <p style={{ fontSize: 'var(--ds-typography-body-sm-font-size)', color: 'var(--ds-mapped-text-body)', marginBottom: 'var(--ds-alias-spacing-sm)' }}>
          Tags as selected filter chips (hover, focus, and dismiss all work)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-xs)' }}>
          {['Adventure', 'Architecture', 'Art', 'Beach', 'Budget', 'Culture', 'Food & drink', 'Luxury', 'Nature', 'Nightlife'].map((interest) => (
            !dismissed[`interest-${interest}`] && (
              <Tag
                key={interest}
                size="sm"
                onDismiss={() => dismiss(`interest-${interest}`)}
              >
                {interest}
              </Tag>
            )
          ))}
        </div>
      </section>

      {/* Token reference */}
      <section style={{
        padding: 'var(--ds-alias-spacing-md)',
        background: 'var(--ds-mapped-surface-default)',
        border: '1px solid var(--ds-mapped-border-default)',
        borderRadius: 'var(--ds-alias-border-radius-lg)'
      }}>
        <strong style={{ fontSize: 'var(--ds-typography-body-sm-font-size)', color: 'var(--ds-mapped-text-body)' }}>Tokens used:</strong>
        <ul style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--ds-mapped-text-body)', marginTop: 'var(--ds-alias-spacing-xxs)', paddingLeft: 'var(--ds-alias-spacing-md)', lineHeight: '1.8' }}>
          <li>--ds-mapped-surface-default — default background</li>
          <li>--ds-mapped-surface-action-hover-light — hover background</li>
          <li>--ds-mapped-surface-disabled — disabled background</li>
          <li>--ds-mapped-border-action — default border</li>
          <li>--ds-mapped-border-action-hover — hover border</li>
          <li>--ds-mapped-border-disabled — disabled border</li>
          <li>--ds-mapped-border-focus — focus ring</li>
          <li>--ds-mapped-text-action — default text + icon</li>
          <li>--ds-mapped-text-action-hover — hover text + icon</li>
          <li>--ds-mapped-text-disabled — disabled text + icon</li>
          <li>--ds-alias-border-radius-lg — corner radius (8px)</li>
          <li>--ds-alias-border-width-sm — border (1px)</li>
          <li>--ds-alias-border-width-md — focus ring (2px)</li>
          <li>--ds-alias-spacing-xs / --ds-alias-spacing-sm / --ds-alias-spacing-xxs — padding + gap</li>
          <li>--ds-typography-body-md-* — lg typography (16px/20px)</li>
          <li>--ds-typography-body-sm-* — sm typography (14px/20px)</li>
          <li>--ds-brand-font-family-body — Inter</li>
          <li>--ds-brand-font-weight-regular — 400</li>
        </ul>
      </section>

    </div>
  )
}
