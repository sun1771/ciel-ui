'use client'

import React, { useState } from 'react'
import { Field } from '@acme/ui'
import { Input } from '@acme/ui'
import { Label } from '@acme/ui'

export default function FieldPreviewPage() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('Some filled value')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  const sectionStyle: React.CSSProperties = { marginBottom: '48px' }
  const h2Style: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 600,
    color: 'var(--ds-mapped-text-heading)',
    marginBottom: '24px',
    fontFamily: 'var(--ds-brand-font-family-heading)',
  }
  const h3Style: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ds-mapped-text-disabled)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '16px',
    fontFamily: 'var(--ds-brand-font-family-body)',
  }
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    alignItems: 'flex-start',
  }
  const colStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '260px',
  }
  const codeStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '11px',
    color: 'var(--ds-mapped-text-disabled)',
  }

  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )

  const InfoIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="7" r="0.75" fill="currentColor"/>
    </svg>
  )

  return (
    <div style={{ padding: '40px', maxWidth: '900px' }}>
      {/* Page header */}
      <div style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--ds-mapped-border-default)' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--ds-mapped-text-heading)', margin: 0, fontFamily: 'var(--ds-brand-font-family-heading)' }}>
          Field + Input
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--ds-mapped-text-body)', marginTop: '8px', fontFamily: 'var(--ds-brand-font-family-body)' }}>
          Figma: PRIMITIVES / Field (63:939) · PRIMITIVES / Input (165:1110)
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', marginTop: '4px', fontFamily: 'monospace' }}>
          {'import { Field, Input } from \'@acme/ui\''}
        </p>
      </div>

      {/* ─── FIELD ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Field — bare input wrapper</h2>

        {/* States */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>States (unfilled)</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Field placeholder="Placeholder" />
              <span style={codeStyle}>default</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Placeholder" value={value1} onChange={e => setValue1(e.target.value)} />
              <span style={codeStyle}>hover (hover over it)</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Focus me" />
              <span style={codeStyle}>focus (click/tab into it)</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Placeholder" disabled />
              <span style={codeStyle}>disabled</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Placeholder" error="Something went wrong" />
              <span style={codeStyle}>error</span>
            </div>
          </div>
        </div>

        {/* Filled state */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Filled state</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Field
                placeholder="Placeholder"
                value={value2}
                onChange={e => setValue2(e.target.value)}
              />
              <span style={codeStyle}>value=&quot;Some filled value&quot;</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Placeholder" value="Filled value" disabled readOnly />
              <span style={codeStyle}>disabled + filled</span>
            </div>
            <div style={colStyle}>
              <Field
                placeholder="Placeholder"
                value="Error value"
                error="Field has an error"
                readOnly
              />
              <span style={codeStyle}>error + filled</span>
            </div>
          </div>
        </div>

        {/* With icons */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>With icons</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Field placeholder="Search…" iconLeft={<SearchIcon />} />
              <span style={codeStyle}>iconLeft</span>
            </div>
            <div style={colStyle}>
              <Field placeholder="Placeholder" iconRight={<InfoIcon />} />
              <span style={codeStyle}>iconRight</span>
            </div>
            <div style={colStyle}>
              <Field
                placeholder="Placeholder"
                iconLeft={<SearchIcon />}
                iconRight={<InfoIcon />}
              />
              <span style={codeStyle}>iconLeft + iconRight</span>
            </div>
            <div style={colStyle}>
              <Field
                placeholder="Placeholder"
                iconLeft={<SearchIcon />}
                iconRight={<InfoIcon />}
                disabled
              />
              <span style={codeStyle}>disabled + both icons</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INPUT ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Input — Label + Field + hint/error</h2>

        {/* Basic variants */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Variants</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Input label="Label" placeholder="Placeholder" />
              <span style={codeStyle}>label only</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Label"
                placeholder="Placeholder"
                hint="This is some helpful hint text"
              />
              <span style={codeStyle}>label + hint</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Label"
                placeholder="Placeholder"
                error="This field has an error"
              />
              <span style={codeStyle}>label + error (replaces hint)</span>
            </div>
            <div style={colStyle}>
              <Input placeholder="No label" hint="Hint without label" />
              <span style={codeStyle}>no label + hint</span>
            </div>
          </div>
        </div>

        {/* States */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>States</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Input
                label="Default"
                placeholder="Placeholder"
                hint="Hint text"
              />
              <span style={codeStyle}>default</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Filled"
                value={value3}
                onChange={e => setValue3(e.target.value)}
                placeholder="Type something"
                hint="Hint text"
              />
              <span style={codeStyle}>controlled (type to fill)</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Disabled"
                placeholder="Placeholder"
                hint="Hint text"
                disabled
              />
              <span style={codeStyle}>disabled</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Error"
                placeholder="Placeholder"
                hint="This hint is hidden"
                error="Something went wrong here"
              />
              <span style={codeStyle}>error state</span>
            </div>
          </div>
        </div>

        {/* With icons */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>With icons</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Input
                label="Search"
                placeholder="Search…"
                hint="Results update as you type"
                iconLeft={<SearchIcon />}
              />
              <span style={codeStyle}>iconLeft</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Info field"
                placeholder="Placeholder"
                hint="Hint text"
                iconRight={<InfoIcon />}
              />
              <span style={codeStyle}>iconRight</span>
            </div>
            <div style={colStyle}>
              <Input
                label="Full example"
                placeholder="Placeholder"
                iconLeft={<SearchIcon />}
                iconRight={<InfoIcon />}
                value={value4}
                onChange={e => setValue4(e.target.value)}
                hint="Type to see filled state"
              />
              <span style={codeStyle}>iconLeft + iconRight + controlled</span>
            </div>
          </div>
        </div>

        {/* Label component standalone */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Label component — standalone</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <Label>Default label</Label>
              <span style={codeStyle}>variant=&quot;default&quot;</span>
            </div>
            <div style={colStyle}>
              <Label variant="required">Required field</Label>
              <span style={codeStyle}>variant=&quot;required&quot;</span>
            </div>
            <div style={colStyle}>
              <Label icon={<InfoIcon />}>With icon</Label>
              <span style={codeStyle}>with icon prop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <div style={{
          padding: '16px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'var(--ds-brand-font-family-body)',
        }}>
          <strong>Field tokens:</strong>{' '}
          --ds-alias-border-radius-lg · --ds-alias-border-width-sm · --ds-alias-spacing-xs ·
          --ds-alias-spacing-sm · --ds-brand-font-family-body · --ds-brand-font-weight-regular ·
          --ds-mapped-border-action · --ds-mapped-border-action-hover · --ds-mapped-border-default ·
          --ds-mapped-border-disabled · --ds-mapped-border-error · --ds-mapped-icon-default ·
          --ds-mapped-icon-disabled · --ds-mapped-surface-default · --ds-mapped-surface-disabled ·
          --ds-mapped-text-body · --ds-mapped-text-disabled · --ds-mapped-text-placeholder ·
          --ds-typography-body-md-font-size · --ds-typography-body-md-line-height
          <br /><br />
          <strong>Input adds:</strong>{' '}
          --ds-mapped-text-error
        </div>
      </section>
    </div>
  )
}
