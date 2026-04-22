'use client'

import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/Checkbox'

const sectionStyle: React.CSSProperties = {
  marginBottom: '48px',
}

const headingStyle: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 600,
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: '24px',
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
}

const subheadingStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 500,
  color: 'var(--ds-mapped-text-placeholder)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '16px',
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  alignItems: 'center',
  marginBottom: '32px',
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontFamily: 'monospace',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '8px',
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div style={labelStyle}>{label}</div>
    </div>
  )
}

function ToggleDemo({ label, error, children }: { label: string; error?: boolean; children?: React.ReactNode }) {
  const [checked, setChecked] = useState(false)
  return (
    <Item label={label}>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        error={error}
      >
        {children}
      </Checkbox>
    </Item>
  )
}

export default function CheckboxPreview() {
  return (
    <div>
      {/* Page header */}
      <div
        style={{
          marginBottom: '40px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            margin: 0,
          }}
        >
          Checkbox
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--ds-mapped-text-placeholder)', marginTop: '8px' }}>
          Figma: PRIMITIVES / Checkbox — nodes 307:1445, 307:1536
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)', marginTop: '4px', fontFamily: 'monospace' }}>
          {`import { Checkbox } from '@/components/ui/Checkbox'`}
        </p>
      </div>

      {/* Default states */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Default states</h2>
        <p style={subheadingStyle}>Unchecked and checked — no label</p>
        <div style={rowStyle}>
          <Item label="checked={false}">
            <Checkbox checked={false} onChange={() => {}} />
          </Item>
          <Item label="checked={true}">
            <Checkbox checked={true} onChange={() => {}} />
          </Item>
        </div>

        <p style={subheadingStyle}>With label</p>
        <div style={rowStyle}>
          <Item label='checked={false} — with label'>
            <Checkbox checked={false} onChange={() => {}}>Checkbox Label</Checkbox>
          </Item>
          <Item label='checked={true} — with label'>
            <Checkbox checked={true} onChange={() => {}}>Checkbox Label</Checkbox>
          </Item>
        </div>
      </section>

      {/* Interactive demos */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Interactive — click to toggle</h2>
        <p style={subheadingStyle}>Click to toggle checked state</p>
        <div style={rowStyle}>
          <ToggleDemo label="no label — click to toggle">
          </ToggleDemo>
          <ToggleDemo label="with label — click to toggle">
            Checkbox Label
          </ToggleDemo>
        </div>
      </section>

      {/* Error states */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Error state</h2>
        <p style={subheadingStyle}>error prop — affects box border/background and icon color when checked</p>
        <div style={rowStyle}>
          <Item label='error={true} checked={false}'>
            <Checkbox error checked={false} onChange={() => {}}>Error unchecked</Checkbox>
          </Item>
          <Item label='error={true} checked={true}'>
            <Checkbox error checked={true} onChange={() => {}}>Error checked</Checkbox>
          </Item>
          <ToggleDemo label="error — click to toggle" error>
            Error checkbox
          </ToggleDemo>
        </div>
      </section>

      {/* Disabled states */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Disabled state</h2>
        <p style={subheadingStyle}>disabled prop — grey box, cursor not-allowed, muted label</p>
        <div style={rowStyle}>
          <Item label='disabled checked={false}'>
            <Checkbox disabled checked={false} onChange={() => {}}>Disabled unchecked</Checkbox>
          </Item>
          <Item label='disabled checked={true}'>
            <Checkbox disabled checked={true} onChange={() => {}}>Disabled checked</Checkbox>
          </Item>
        </div>
      </section>

      {/* Without label */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Without label</h2>
        <p style={subheadingStyle}>children omitted — bare checkbox box only</p>
        <div style={rowStyle}>
          <Item label="unchecked, no label">
            <Checkbox checked={false} onChange={() => {}} />
          </Item>
          <Item label="checked, no label">
            <Checkbox checked={true} onChange={() => {}} />
          </Item>
          <Item label="disabled, no label">
            <Checkbox disabled checked={false} onChange={() => {}} />
          </Item>
          <Item label="disabled+checked, no label">
            <Checkbox disabled checked={true} onChange={() => {}} />
          </Item>
        </div>
      </section>

      {/* Token reference */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Tokens used</h2>
        <div
          style={{
            padding: '16px',
            background: 'var(--ds-mapped-surface-default)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'var(--ds-mapped-text-body)',
            lineHeight: '1.8',
          }}
        >
          <div>--ds-alias-spacing-xs — gap between box and label (8px)</div>
          <div>--ds-alias-border-width-sm — box border (1px)</div>
          <div>--ds-alias-border-width-md — focus ring (2px)</div>
          <div>--ds-alias-border-radius-md — box corner radius (4px)</div>
          <div>--ds-alias-border-radius-lg — focus ring corner radius (8px)</div>
          <div>--ds-mapped-surface-default — unchecked bg</div>
          <div>--ds-mapped-surface-action — checked bg</div>
          <div>--ds-mapped-surface-action-hover — checked hover bg</div>
          <div>--ds-mapped-surface-action-hover-light — unchecked hover bg</div>
          <div>--ds-mapped-surface-disabled — disabled bg</div>
          <div>--ds-mapped-surface-error — error bg</div>
          <div>--ds-mapped-border-default — unchecked border</div>
          <div>--ds-mapped-border-action — checked border</div>
          <div>--ds-mapped-border-action-hover — hover border</div>
          <div>--ds-mapped-border-disabled — disabled border</div>
          <div>--ds-mapped-border-error — error border</div>
          <div>--ds-mapped-border-focus — focus ring color</div>
          <div>--ds-mapped-icon-on-action — checkmark (checked, white)</div>
          <div>--ds-mapped-icon-disabled — checkmark (disabled)</div>
          <div>--ds-mapped-icon-error — checkmark (error+checked)</div>
          <div>--ds-mapped-text-body — label text</div>
          <div>--ds-mapped-text-disabled — label text (disabled)</div>
          <div>--ds-brand-font-family-body — Inter</div>
          <div>--ds-brand-font-weight-regular — 400</div>
          <div>--ds-typography-body-md-font-size — 16px label</div>
          <div>--ds-typography-body-md-line-height — 20px label</div>
        </div>
      </section>
    </div>
  )
}
