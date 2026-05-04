'use client'

import React from 'react'
import { Label } from '@/components/primitives/Label'
import { Info } from '@/design-system/icons/components/Info'

/* ─── Shared scaffolding styles ─────────────────────────────────────────────── */
const pageWrap: React.CSSProperties = {
  maxWidth: '800px',
}

const pageHeader: React.CSSProperties = {
  marginBottom: '48px',
  paddingBottom: '24px',
  borderBottom: '1px solid var(--ds-mapped-border-default)',
}

const h1Style: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
  fontSize: '32px',
  fontWeight: 600,
  color: 'var(--ds-mapped-text-heading)',
  margin: 0,
}

const subtitleStyle: React.CSSProperties = {
  fontSize: '16px',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '8px',
  fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
}

const monoStyle: React.CSSProperties = {
  fontSize: '13px',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '4px',
  fontFamily: 'monospace',
}

const sectionStyle: React.CSSProperties = {
  marginBottom: '64px',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: '24px',
}

const h3Style: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 500,
  color: 'var(--ds-mapped-text-placeholder)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  marginBottom: '16px',
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '24px',
  alignItems: 'center',
}

const itemWrapStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '8px',
}

const codeLabel: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--ds-mapped-text-placeholder)',
}

const tokenBoxStyle: React.CSSProperties = {
  marginTop: '24px',
  padding: '16px',
  background: 'var(--ds-mapped-surface-action-hover-light)',
  borderRadius: 'var(--ds-alias-border-radius-lg)',
  fontSize: '13px',
  color: 'var(--ds-mapped-text-body)',
  fontFamily: 'monospace',
  lineHeight: '1.7',
}

/* ─────────────────────────────────────────────────────────────────────────── */

export default function LabelPreviewPage() {
  return (
    <div style={pageWrap}>
      {/* Page header */}
      <div style={pageHeader}>
        <h1 style={h1Style}>Label</h1>
        <p style={subtitleStyle}>Figma: PRIMITIVES / Label — node 56:186</p>
        <p style={monoStyle}>
          {`import { Label } from '@/components/primitives/Label'`}
        </p>
      </div>

      {/* ── Variants ── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Label</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Variants</h3>
          <div style={rowStyle}>
            <div style={itemWrapStyle}>
              <Label htmlFor="demo-default">
                Label
              </Label>
              <span style={codeLabel}>variant=&quot;default&quot; (no icon)</span>
            </div>

            <div style={itemWrapStyle}>
              <Label htmlFor="demo-default-icon" icon={<Info size={20} />}>
                Label
              </Label>
              <span style={codeLabel}>variant=&quot;default&quot; icon</span>
            </div>

            <div style={itemWrapStyle}>
              <Label htmlFor="demo-required" variant="required">
                Label
              </Label>
              <span style={codeLabel}>variant=&quot;required&quot; (no icon)</span>
            </div>

            <div style={itemWrapStyle}>
              <Label htmlFor="demo-required-icon" variant="required" icon={<Info size={20} />}>
                Label
              </Label>
              <span style={codeLabel}>variant=&quot;required&quot; icon</span>
            </div>
          </div>
        </div>

        {/* ── Real-world usage: paired with inputs ── */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Paired with inputs</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '320px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Label htmlFor="email-field" icon={<Info size={16} />}>
                Email address
              </Label>
              <input
                id="email-field"
                type="email"
                placeholder="you@example.com"
                style={{
                  padding: '8px 12px',
                  border: '1px solid var(--ds-mapped-border-default)',
                  borderRadius: 'var(--ds-alias-border-radius-lg)',
                  fontSize: '14px',
                  fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
                  color: 'var(--ds-mapped-text-body)',
                  background: 'var(--ds-mapped-surface-default)',
                  outline: 'none',
                }}
              />
              <span style={codeLabel}>default label + input</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Label htmlFor="password-field" variant="required">
                Password
              </Label>
              <input
                id="password-field"
                type="password"
                placeholder="••••••••"
                required
                aria-required="true"
                style={{
                  padding: '8px 12px',
                  border: '1px solid var(--ds-mapped-border-default)',
                  borderRadius: 'var(--ds-alias-border-radius-lg)',
                  fontSize: '14px',
                  fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
                  color: 'var(--ds-mapped-text-body)',
                  background: 'var(--ds-mapped-surface-default)',
                  outline: 'none',
                }}
              />
              <span style={codeLabel}>required label + input (aria-required on input)</span>
            </div>
          </div>
        </div>

        {/* ── Long label text ── */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Long label text</h3>
          <div style={rowStyle}>
            <div style={itemWrapStyle}>
              <Label htmlFor="long-default" icon={<Info size={20} />}>
                Departure city or airport
              </Label>
              <span style={codeLabel}>default with long text</span>
            </div>
            <div style={itemWrapStyle}>
              <Label htmlFor="long-required" variant="required" icon={<Info size={20} />}>
                Full legal name as on passport
              </Label>
              <span style={codeLabel}>required with long text</span>
            </div>
          </div>
        </div>

        {/* Token reference */}
        <div style={tokenBoxStyle}>
          <strong>Tokens used:</strong>
          <br />
          --ds-alias-spacing-xs — gap between label text and icon (8px)
          <br />
          --ds-alias-spacing-xxxs — gap between asterisk and text (2px)
          <br />
          --ds-brand-font-family-body — Inter
          <br />
          --ds-brand-font-weight-regular — 400
          <br />
          --ds-typography-body-md-font-size — 16px
          <br />
          --ds-typography-body-md-line-height — 20px
          <br />
          --ds-mapped-text-body — label text color
          <br />
          --ds-mapped-text-error — required asterisk color (#f04438)
          <br />
          --ds-mapped-icon-default — icon color (#44474d)
        </div>
      </section>
    </div>
  )
}
