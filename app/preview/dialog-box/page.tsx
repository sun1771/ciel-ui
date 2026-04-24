'use client'

import React, { useState } from 'react'
import { DialogBox } from '@/components/layout/DialogBox'

function InfoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M16 14v8M16 11v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L28 26H4L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 14v6M16 22v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--ds-alias-spacing-xs)',
  alignItems: 'center',
}

const labelStyle: React.CSSProperties = {
  marginTop: 'var(--ds-alias-spacing-xxs)',
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--ds-mapped-text-disabled)',
}

const sectionStyle: React.CSSProperties = {
  marginBottom: 'var(--ds-alias-spacing-xxl)',
}

const h2Style: React.CSSProperties = {
  fontSize: 'var(--ds-responsive-h7-font-size)',
  fontFamily: 'var(--ds-brand-font-family-heading)',
  fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: 'var(--ds-alias-spacing-lg)',
  marginTop: 0,
}

const h3Style: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 500,
  color: 'var(--ds-mapped-text-disabled)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: 'var(--ds-alias-spacing-xs)',
  marginTop: 0,
}

const triggerButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: 'var(--ds-alias-spacing-xs) var(--ds-alias-spacing-sm)',
  backgroundColor: 'var(--ds-mapped-surface-action)',
  color: 'var(--ds-mapped-text-on-action)',
  border: '1px solid var(--ds-mapped-border-action)',
  borderRadius: 'var(--ds-alias-border-radius-lg)',
  fontFamily: 'var(--ds-brand-font-family-body)',
  fontSize: '14px',
  cursor: 'pointer',
}

export default function DialogBoxPreviewPage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const open = (id: string) => setOpenDialog(id)
  const close = () => setOpenDialog(null)

  return (
    <div style={{ maxWidth: '800px' }}>
      {/* Page header */}
      <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)', paddingBottom: 'var(--ds-alias-spacing-md)', borderBottom: '1px solid var(--ds-mapped-border-default)' }}>
        <h1 style={{ fontSize: 'var(--ds-responsive-h4-font-size)', fontFamily: 'var(--ds-brand-font-family-heading)', fontWeight: 'var(--ds-brand-font-weight-semi-bold)', color: 'var(--ds-mapped-text-heading)', margin: 0 }}>
          DialogBox
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
          Figma: LAYOUT / Dialog Box — node 1396:4050
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxxs)', fontFamily: 'monospace' }}>
          {`import { DialogBox } from '@/components/layout'`}
        </p>
      </div>

      {/* Section 1 — Basic (no icon, primary only) */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Basic — primary action only</h2>
        <h3 style={h3Style}>Default (no icon, no secondary)</h3>
        <div style={rowStyle}>
          <div>
            <button style={triggerButtonStyle} onClick={() => open('basic')}>
              Open Basic Dialog
            </button>
            <div style={labelStyle}>isOpen showClose primaryLabel="Confirm"</div>
          </div>
        </div>

        <DialogBox
          isOpen={openDialog === 'basic'}
          title="Dialog Heading"
          onClose={close}
          onPrimary={close}
        >
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ds-mapped-text-body)', lineHeight: '20px' }}>
            This is the dialog body content. It can contain any React nodes — text, forms, lists, or other components.
          </p>
        </DialogBox>
      </section>

      {/* Section 2 — With icon */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>With heading icon</h2>
        <h3 style={h3Style}>Info icon variant</h3>
        <div style={rowStyle}>
          <div>
            <button style={triggerButtonStyle} onClick={() => open('icon-info')}>
              Open Info Dialog
            </button>
            <div style={labelStyle}>icon={`{<InfoIcon />}`} showClose showSecondary</div>
          </div>
        </div>

        <DialogBox
          isOpen={openDialog === 'icon-info'}
          title="Dialog Heading"
          icon={<InfoIcon />}
          onClose={close}
          primaryLabel="Action"
          onPrimary={close}
          showSecondary
          secondaryLabel="Cancel"
          onSecondary={close}
        >
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ds-mapped-text-body)', lineHeight: '20px' }}>
            This dialog matches the Figma reference exactly: info icon in heading, two action buttons, and body content.
          </p>
        </DialogBox>
      </section>

      {/* Section 3 — Warning variant */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Warning variant</h2>
        <h3 style={h3Style}>Warning icon, destructive pattern</h3>
        <div style={rowStyle}>
          <div>
            <button style={{ ...triggerButtonStyle, backgroundColor: 'var(--ds-mapped-surface-error)', borderColor: 'var(--ds-mapped-border-error)' }} onClick={() => open('warning')}>
              Open Warning Dialog
            </button>
            <div style={labelStyle}>icon={`{<WarningIcon />}`} primaryLabel="Delete" showSecondary secondaryLabel="Cancel"</div>
          </div>
        </div>

        <DialogBox
          isOpen={openDialog === 'warning'}
          title="Delete Item"
          icon={<WarningIcon />}
          onClose={close}
          primaryLabel="Delete"
          onPrimary={close}
          showSecondary
          secondaryLabel="Cancel"
          onSecondary={close}
        >
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ds-mapped-text-body)', lineHeight: '20px' }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </DialogBox>
      </section>

      {/* Section 4 — No close button */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>No close button</h2>
        <h3 style={h3Style}>showClose=false — forced action required</h3>
        <div style={rowStyle}>
          <div>
            <button style={triggerButtonStyle} onClick={() => open('no-close')}>
              Open Forced Dialog
            </button>
            <div style={labelStyle}>showClose=false showSecondary primaryLabel="Accept" secondaryLabel="Decline"</div>
          </div>
        </div>

        <DialogBox
          isOpen={openDialog === 'no-close'}
          title="Terms & Conditions"
          showClose={false}
          primaryLabel="Accept"
          onPrimary={close}
          showSecondary
          secondaryLabel="Decline"
          onSecondary={close}
        >
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--ds-mapped-text-body)', lineHeight: '20px' }}>
            Please review and accept the terms before continuing. You must choose one of the actions below.
          </p>
        </DialogBox>
      </section>

      {/* Section 5 — Rich body content */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Rich body content</h2>
        <h3 style={h3Style}>children can be any React nodes</h3>
        <div style={rowStyle}>
          <div>
            <button style={triggerButtonStyle} onClick={() => open('rich')}>
              Open Rich Dialog
            </button>
            <div style={labelStyle}>children=form, icon showSecondary</div>
          </div>
        </div>

        <DialogBox
          isOpen={openDialog === 'rich'}
          title="Confirm Booking"
          icon={<InfoIcon />}
          onClose={close}
          primaryLabel="Book Now"
          onPrimary={close}
          showSecondary
          secondaryLabel="Go Back"
          onSecondary={close}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>
              <span>Destination</span>
              <span style={{ fontWeight: 500 }}>Tokyo, Japan</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>
              <span>Dates</span>
              <span style={{ fontWeight: 500 }}>Apr 15 – Apr 22</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>
              <span>Travelers</span>
              <span style={{ fontWeight: 500 }}>2 adults</span>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--ds-mapped-border-default)', margin: 'var(--ds-alias-spacing-xxs) 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 600, color: 'var(--ds-mapped-text-heading)' }}>
              <span>Total</span>
              <span>$3,240</span>
            </div>
          </div>
        </DialogBox>
      </section>

      {/* Token reference */}
      <section style={{ marginTop: 'var(--ds-alias-spacing-xl)', padding: 'var(--ds-alias-spacing-md)', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', fontSize: '12px', color: 'var(--ds-mapped-text-body)', lineHeight: '20px' }}>
        <strong style={{ display: 'block', marginBottom: 'var(--ds-alias-spacing-xxs)', color: 'var(--ds-mapped-text-heading)' }}>Tokens used</strong>
        <div style={{ fontFamily: 'monospace', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 16px' }}>
          <span>--ds-mapped-surface-default</span><span>dialog background</span>
          <span>--ds-mapped-border-default</span><span>dialog border</span>
          <span>--ds-alias-border-radius-lg</span><span>corner radius</span>
          <span>--ds-effect-shadow-overlay</span><span>dialog shadow</span>
          <span>--ds-alias-neutral-black-transparent</span><span>backdrop</span>
          <span>--ds-mapped-text-heading</span><span>dialog title</span>
          <span>--ds-mapped-icon-default</span><span>close icon color</span>
          <span>--ds-mapped-surface-action</span><span>primary button bg</span>
          <span>--ds-mapped-border-action</span><span>primary button border</span>
          <span>--ds-mapped-text-on-action</span><span>primary button label</span>
          <span>--ds-mapped-surface-action-hover</span><span>primary btn hover bg</span>
          <span>--ds-mapped-text-body</span><span>secondary button label</span>
          <span>--ds-alias-spacing-lg</span><span>section horizontal padding</span>
          <span>--ds-alias-spacing-md</span><span>section vertical padding</span>
          <span>--ds-alias-spacing-xs</span><span>btn padding-y, gaps</span>
          <span>--ds-alias-spacing-sm</span><span>btn padding-x</span>
          <span>--ds-typography-heading-h6-*</span><span>title typography</span>
          <span>--ds-typography-body-md-*</span><span>button label typography</span>
          <span>--ds-alias-border-width-sm</span><span>1px borders</span>
          <span>--ds-alias-border-width-md</span><span>focus ring width</span>
        </div>
      </section>
    </div>
  )
}
