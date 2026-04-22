'use client'

import React, { useState } from 'react'
import { TextArea } from '@/components/ui/TextArea'
import { Info } from '@/icons'

export default function TextAreaPreviewPage() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('This is some typed text that fills the textarea and shows the body text color.')

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

  return (
    <div style={{ padding: '40px', maxWidth: '900px' }}>
      {/* Page header */}
      <div style={{ marginBottom: '40px', paddingBottom: '24px', borderBottom: '1px solid var(--ds-mapped-border-default)' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: 'var(--ds-mapped-text-heading)', margin: 0, fontFamily: 'var(--ds-brand-font-family-heading)' }}>
          TextArea
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--ds-mapped-text-body)', marginTop: '8px', fontFamily: 'var(--ds-brand-font-family-body)' }}>
          Figma: PRIMITIVES / Text Area (.textarea 317:206 · Text Area 318:1216)
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', marginTop: '4px', fontFamily: 'monospace' }}>
          {"import { TextArea } from '@/components/ui/TextArea'"}
        </p>
      </div>

      {/* ─── STATES ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>States</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>All states (with label + placeholder)</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <TextArea label="Label" placeholder="Placeholder" />
              <span style={codeStyle}>default</span>
            </div>
            <div style={colStyle}>
              <TextArea label="Label" placeholder="Focus me (click/tab in)" />
              <span style={codeStyle}>focus (click/tab into it)</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                value={value1}
                onChange={e => setValue1(e.target.value)}
              />
              <span style={codeStyle}>hover (hover over it) · controlled</span>
            </div>
            <div style={colStyle}>
              <TextArea label="Label" placeholder="Cannot edit" disabled />
              <span style={codeStyle}>disabled</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                error="This field is required"
              />
              <span style={codeStyle}>error</span>
            </div>
          </div>
        </div>

        {/* Filled state */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Filled state</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                value={value2}
                onChange={e => setValue2(e.target.value)}
              />
              <span style={codeStyle}>value filled (editable)</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                value="Filled but disabled"
                disabled
                readOnly
              />
              <span style={codeStyle}>disabled + filled</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                value="Filled with error"
                error="Please correct this field"
                readOnly
              />
              <span style={codeStyle}>error + filled</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPOSITION: label + hint + error ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Composition</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Label, hint, and error combinations</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <TextArea placeholder="Placeholder" />
              <span style={codeStyle}>no label, no hint</span>
            </div>
            <div style={colStyle}>
              <TextArea label="Label" placeholder="Placeholder" />
              <span style={codeStyle}>label only</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Trip description"
                hint="Describe your ideal itinerary in a few sentences"
                placeholder="e.g. I want a relaxing beach trip with local food experiences…"
              />
              <span style={codeStyle}>label + hint above field</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Trip description"
                hint="Describe your ideal itinerary in a few sentences"
                placeholder="Placeholder"
                error="Description must be at least 20 characters"
              />
              <span style={codeStyle}>label + hint + error (both visible)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ICON RIGHT ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>With icon (iconRight)</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>iconRight slot — top-right of field</h3>
          <div style={rowStyle}>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                iconRight={<Info size={20} />}
              />
              <span style={codeStyle}>iconRight=Info/20 · default</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                iconRight={<Info size={20} />}
                disabled
              />
              <span style={codeStyle}>iconRight + disabled</span>
            </div>
            <div style={colStyle}>
              <TextArea
                label="Label"
                placeholder="Placeholder"
                iconRight={<Info size={20} />}
                error="Something went wrong"
              />
              <span style={codeStyle}>iconRight + error</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL EXAMPLES ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Real-world examples</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Trip description field</h3>
          <div style={rowStyle}>
            <div style={{ ...colStyle, width: '400px' }}>
              <TextArea
                label="Describe your trip"
                hint="Include your travel dates, preferred activities, and any special requirements"
                placeholder="e.g. I'm looking for a 7-day family trip to Japan in April, focusing on culture and food…"
                iconRight={<Info size={20} />}
              />
              <span style={codeStyle}>label + hint + iconRight · full width</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>With error — after validation</h3>
          <div style={rowStyle}>
            <div style={{ ...colStyle, width: '400px' }}>
              <TextArea
                label="Describe your trip"
                hint="Include your travel dates, preferred activities, and any special requirements"
                placeholder="Placeholder"
                value="Too short"
                error="Please provide at least 50 characters to help us build a better itinerary"
                readOnly
              />
              <span style={codeStyle}>error state — hint + error both visible</span>
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
          lineHeight: '20px',
        }}>
          <strong>Tokens used:</strong><br />
          --ds-alias-border-radius-lg (8px corner radius) ·
          --ds-alias-border-width-sm (1px border) ·
          --ds-alias-spacing-xs (8px padding-y, gap) ·
          --ds-alias-spacing-sm (12px padding-x) ·
          --ds-brand-font-family-body (Inter) ·
          --ds-brand-font-weight-regular (400) ·
          --ds-mapped-border-action (focus border) ·
          --ds-mapped-border-action-hover (hover border) ·
          --ds-mapped-border-default (default border) ·
          --ds-mapped-border-disabled (disabled border) ·
          --ds-mapped-border-error (error border) ·
          --ds-mapped-icon-default (icon default) ·
          --ds-mapped-icon-disabled (icon disabled) ·
          --ds-mapped-surface-default (bg default) ·
          --ds-mapped-surface-disabled (bg disabled) ·
          --ds-mapped-text-body (input text) ·
          --ds-mapped-text-disabled (disabled text) ·
          --ds-mapped-text-error (error message) ·
          --ds-mapped-text-placeholder (placeholder, hint) ·
          --ds-typography-body-md-font-size (16px) ·
          --ds-typography-body-md-line-height (20px)
        </div>
      </section>
    </div>
  )
}
