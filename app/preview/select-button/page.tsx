'use client'

import React, { useState } from 'react'
import { SelectButton } from '@/components/primitives/SelectButton'

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

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontFamily: 'monospace',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '8px',
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
  gap: '16px',
  alignItems: 'center',
  marginBottom: '32px',
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div style={labelStyle}>{label}</div>
    </div>
  )
}

function ToggleDemo({ variant, size, label }: { variant: 'default' | 'outline' | 'transparent'; size: 'lg' | 'sm'; label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <Item label={label}>
      <SelectButton
        variant={variant}
        size={size}
        isSelected={open}
        onClick={() => setOpen((v) => !v)}
      >
        Region
      </SelectButton>
    </Item>
  )
}

export default function SelectButtonPreview() {
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
          SelectButton
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: '8px',
          }}
        >
          Figma: PRIMITIVES / Select Button — node 1748:7209
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-placeholder)', marginTop: '4px', fontFamily: 'monospace' }}>
          {`import { SelectButton } from '@/components/primitives/SelectButton'`}
        </p>
      </div>

      {/* Variants */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Variants</h2>
        <p style={subheadingStyle}>All variants — size lg, isSelected=false (closed)</p>
        <div style={rowStyle}>
          <Item label='variant="default"'>
            <SelectButton variant="default" size="lg">Region</SelectButton>
          </Item>
          <Item label='variant="outline"'>
            <SelectButton variant="outline" size="lg">Region</SelectButton>
          </Item>
          <Item label='variant="transparent"'>
            <SelectButton variant="transparent" size="lg">Region</SelectButton>
          </Item>
        </div>

        <p style={subheadingStyle}>All variants — isSelected=true (open / chevron up)</p>
        <div style={rowStyle}>
          <Item label='variant="default" isSelected'>
            <SelectButton variant="default" size="lg" isSelected>Region</SelectButton>
          </Item>
          <Item label='variant="outline" isSelected'>
            <SelectButton variant="outline" size="lg" isSelected>Region</SelectButton>
          </Item>
          <Item label='variant="transparent" isSelected'>
            <SelectButton variant="transparent" size="lg" isSelected>Region</SelectButton>
          </Item>
        </div>
      </section>

      {/* Sizes */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Sizes</h2>
        <p style={subheadingStyle}>Default variant, both sizes</p>
        <div style={rowStyle}>
          <Item label='size="lg"'>
            <SelectButton variant="default" size="lg">Region</SelectButton>
          </Item>
          <Item label='size="sm"'>
            <SelectButton variant="default" size="sm">Region</SelectButton>
          </Item>
        </div>
        <p style={subheadingStyle}>Outline variant, both sizes</p>
        <div style={rowStyle}>
          <Item label='variant="outline" size="lg"'>
            <SelectButton variant="outline" size="lg">Region</SelectButton>
          </Item>
          <Item label='variant="outline" size="sm"'>
            <SelectButton variant="outline" size="sm">Region</SelectButton>
          </Item>
        </div>
        <p style={subheadingStyle}>Transparent variant, both sizes</p>
        <div style={rowStyle}>
          <Item label='variant="transparent" size="lg"'>
            <SelectButton variant="transparent" size="lg">Region</SelectButton>
          </Item>
          <Item label='variant="transparent" size="sm"'>
            <SelectButton variant="transparent" size="sm">Region</SelectButton>
          </Item>
        </div>
      </section>

      {/* Disabled states */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Disabled</h2>
        <p style={subheadingStyle}>All variants — disabled</p>
        <div style={rowStyle}>
          <Item label='variant="default" disabled'>
            <SelectButton variant="default" size="lg" disabled>Region</SelectButton>
          </Item>
          <Item label='variant="outline" disabled'>
            <SelectButton variant="outline" size="lg" disabled>Region</SelectButton>
          </Item>
          <Item label='variant="transparent" disabled'>
            <SelectButton variant="transparent" size="lg" disabled>Region</SelectButton>
          </Item>
        </div>
      </section>

      {/* Live toggle demos */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Interactive — click to toggle open/closed</h2>
        <p style={subheadingStyle}>isSelected state toggles chevron direction</p>
        <div style={rowStyle}>
          <ToggleDemo variant="default" size="lg" label='variant="default" size="lg" (click to toggle)' />
          <ToggleDemo variant="outline" size="lg" label='variant="outline" size="lg" (click to toggle)' />
          <ToggleDemo variant="transparent" size="lg" label='variant="transparent" size="lg" (click to toggle)' />
        </div>
        <div style={rowStyle}>
          <ToggleDemo variant="default" size="sm" label='variant="default" size="sm" (click to toggle)' />
          <ToggleDemo variant="outline" size="sm" label='variant="outline" size="sm" (click to toggle)' />
          <ToggleDemo variant="transparent" size="sm" label='variant="transparent" size="sm" (click to toggle)' />
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
          <div>--ds-mapped-surface-action — default bg</div>
          <div>--ds-mapped-surface-action-hover — default hover bg</div>
          <div>--ds-mapped-surface-default — outline/disabled bg</div>
          <div>--ds-mapped-border-action — default border</div>
          <div>--ds-mapped-border-action-hover — hover border</div>
          <div>--ds-mapped-border-default — outline border</div>
          <div>--ds-mapped-border-disabled — disabled border</div>
          <div>--ds-mapped-border-focus — focus ring</div>
          <div>--ds-mapped-text-on-action — default text</div>
          <div>--ds-mapped-text-body — outline text</div>
          <div>--ds-mapped-text-action — transparent text</div>
          <div>--ds-mapped-text-action-hover — hover text (outline/transparent)</div>
          <div>--ds-mapped-text-disabled — disabled text</div>
          <div>--ds-alias-spacing-xs — lg padding-y / gap</div>
          <div>--ds-alias-spacing-sm — lg padding-x</div>
          <div>--ds-alias-spacing-xxs — sm padding-y / gap</div>
          <div>--ds-alias-border-radius-lg — corner radius</div>
          <div>--ds-alias-border-width-sm — border thickness</div>
          <div>--ds-alias-border-width-md — focus ring thickness</div>
          <div>--ds-typography-body-md-font-size / line-height — lg text</div>
          <div>--ds-typography-body-sm-font-size / line-height — sm text</div>
        </div>
      </section>
    </div>
  )
}
