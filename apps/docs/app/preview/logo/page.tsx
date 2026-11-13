'use client'

import { Logo } from '@acme/ui'

const sizes = [16, 20, 24, 32] as const

export default function LogoPreviewPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h1
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Brand Logo
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginBottom: 'var(--ds-alias-spacing-xs)',
          }}
        >
          TripOn AI brand mark — 4 hand-tuned SVGs at the icon size scale.
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-placeholder)',
            padding: 'var(--ds-alias-spacing-xs)',
            borderLeft: '2px solid var(--ds-mapped-border-default)',
          }}
        >
          The logo is a full-color brand asset (not <code>currentColor</code>). Raw SVGs live in{' '}
          <code>design-system/logo/</code> and are loaded as an <code>&lt;img&gt;</code>.
        </p>
      </div>

      {/* Size grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 'var(--ds-alias-spacing-md)',
          marginBottom: 'var(--ds-alias-spacing-xl)',
        }}
      >
        {sizes.map((sz) => (
          <div
            key={sz}
            style={{
              backgroundColor: 'var(--ds-mapped-surface-default)',
              border: '1px solid var(--ds-mapped-border-default)',
              borderRadius: 'var(--ds-alias-border-radius-md)',
              padding: 'var(--ds-alias-spacing-md)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--ds-alias-spacing-sm)',
            }}
          >
            <div
              style={{
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Logo size={sz} />
            </div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--ds-mapped-text-body)',
                margin: 0,
              }}
            >
              {sz}×{sz}
            </p>
            <code
              style={{
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
                wordBreak: 'break-all',
                textAlign: 'center',
              }}
            >
              {`<Logo size={${sz}} />`}
            </code>
          </div>
        ))}
      </div>

      {/* On a dark surface */}
      <h2
        style={{
          fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          fontSize: 'var(--ds-responsive-h6-font-size)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-sm)',
        }}
      >
        On a dark surface
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--ds-alias-spacing-lg)',
          padding: 'var(--ds-alias-spacing-lg)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          backgroundColor: 'var(--ds-brand-sharp-blue-600, #001bcc)',
        }}
      >
        {sizes.map((sz) => (
          <Logo key={sz} size={sz} />
        ))}
      </div>

      {/* Import snippet */}
      <code
        style={{
          display: 'block',
          marginTop: 'var(--ds-alias-spacing-lg)',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-placeholder)',
        }}
      >
        {"import { Logo } from '@acme/ui'"}
      </code>
    </div>
  )
}
