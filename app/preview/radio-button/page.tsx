'use client'

import React, { useState } from 'react'
import { RadioButton } from '@/components/ui/RadioButton'

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
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  marginBottom: '16px',
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  fontFamily: 'monospace',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '8px',
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '24px',
  alignItems: 'center',
  marginBottom: '32px',
}

const columnStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '12px',
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

function RadioGroupDemo() {
  const [value, setValue] = useState('economy')
  return (
    <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
      <legend
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--ds-mapped-text-body)',
          marginBottom: '12px',
        }}
      >
        Cabin class
      </legend>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {['Economy', 'Premium Economy', 'Business', 'First'].map((option) => {
          const val = option.toLowerCase().replace(' ', '-')
          return (
            <RadioButton
              key={val}
              name="cabin"
              value={val}
              checked={value === val}
              onChange={() => setValue(val)}
            >
              {option}
            </RadioButton>
          )
        })}
      </div>
    </fieldset>
  )
}

export default function RadioButtonPreview() {
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
            fontWeight: 700,
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
          }}
        >
          RadioButton
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: '8px',
          }}
        >
          Figma: PRIMITIVES / Radio Button — nodes 307:1550 / 307:1583
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: '4px',
            fontFamily: 'monospace',
          }}
        >
          {'import { RadioButton } from \'@/components/ui/RadioButton\''}
        </p>
      </div>

      {/* States */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>States</h2>

        <p style={subheadingStyle}>Circle only (no label)</p>
        <div style={rowStyle}>
          <Item label="default unselected">
            <RadioButton name="states-circle" value="a" />
          </Item>
          <Item label="default selected">
            <RadioButton name="states-circle" value="b" defaultChecked />
          </Item>
          <Item label="disabled unselected">
            <RadioButton name="states-disabled" value="c" disabled />
          </Item>
          <Item label="disabled selected">
            <RadioButton name="states-disabled" value="d" defaultChecked disabled />
          </Item>
        </div>

        <p style={subheadingStyle}>With label</p>
        <div style={rowStyle}>
          <Item label='checked={false}'>
            <RadioButton name="states-label" value="e">Option A</RadioButton>
          </Item>
          <Item label='defaultChecked'>
            <RadioButton name="states-label" value="f" defaultChecked>Option B</RadioButton>
          </Item>
          <Item label='disabled'>
            <RadioButton name="states-label-disabled" value="g" disabled>Disabled option</RadioButton>
          </Item>
          <Item label='disabled + checked'>
            <RadioButton name="states-label-disabled" value="h" defaultChecked disabled>Disabled checked</RadioButton>
          </Item>
        </div>
      </section>

      {/* Realistic group example */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Radio Group</h2>
        <p style={subheadingStyle}>Controlled group inside fieldset + legend</p>
        <RadioGroupDemo />
        <div style={{ ...labelStyle, marginTop: '16px' }}>
          {'<fieldset> + <legend> + controlled onChange'}
        </div>
      </section>

      {/* Tokens used */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Tokens used</h2>
        <div
          style={{
            padding: '16px',
            backgroundColor: 'var(--ds-mapped-surface-disabled)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'var(--ds-mapped-text-body)',
            lineHeight: '1.8',
          }}
        >
          <div>--ds-alias-border-radius-round — circle + knob shape (64px)</div>
          <div>--ds-alias-border-width-sm — circle border (1px)</div>
          <div>--ds-alias-border-width-md — focus ring (2px)</div>
          <div>--ds-alias-spacing-xs — wrapper gap, circle padding (8px)</div>
          <div>--ds-brand-font-family-body — label font (Inter)</div>
          <div>--ds-brand-font-weight-regular — label weight (400)</div>
          <div>--ds-mapped-border-action — circle border default + selected (#0022ff)</div>
          <div>--ds-mapped-border-action-hover — circle border hover (#667aff)</div>
          <div>--ds-mapped-border-disabled — circle border disabled (#e3e4e6)</div>
          <div>--ds-mapped-border-focus — focus ring color (#0022ff)</div>
          <div>--ds-mapped-surface-action — selected bg (#0022ff)</div>
          <div>--ds-mapped-surface-action-hover — hover+selected bg (#667aff)</div>
          <div>--ds-mapped-surface-action-hover-light — hover+unselected bg (#e5e8ff)</div>
          <div>--ds-mapped-surface-default — unselected bg (#ffffff)</div>
          <div>--ds-mapped-surface-disabled — disabled bg (#e3e4e6)</div>
          <div>--ds-mapped-text-body — label color (#2d2f33)</div>
          <div>--ds-mapped-text-disabled — disabled label (#aaadb3)</div>
          <div>--ds-mapped-text-on-action — knob color (white, #ffffff)</div>
          <div>--ds-typography-body-md-font-size — label size (16px)</div>
          <div>--ds-typography-body-md-line-height — label height (20px)</div>
        </div>
      </section>
    </div>
  )
}
