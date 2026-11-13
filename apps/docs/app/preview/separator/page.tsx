'use client'

import { Separator } from '@acme/ui'

export default function SeparatorPreview() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
      <div
        style={{
          marginBottom: 'var(--ds-alias-spacing-xl)',
          paddingBottom: 'var(--ds-alias-spacing-lg)',
          borderBottom: `1px solid var(--ds-mapped-border-default)`,
        }}
      >
        <h1
          style={{
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-heading)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Separator
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Figma: PRIMITIVES / Separator — node 1611:7292
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            fontFamily: 'monospace',
          }}
        >
          {"import { Separator } from '@acme/ui'"}
        </p>
      </div>

      {/* Section: Horizontal */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          orientation=&quot;horizontal&quot; (default)
        </h2>

        {/* Between two content blocks */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Between content blocks
          </h3>
          <div
            style={{
              border: `1px solid var(--ds-mapped-border-default)`,
              borderRadius: 'var(--ds-alias-border-radius-lg)',
              padding: 'var(--ds-alias-spacing-md)',
            }}
          >
            <p
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                margin: 0,
              }}
            >
              Departure: Tokyo, Japan
            </p>
            <Separator style={{ margin: 'var(--ds-alias-spacing-sm) 0' }} />
            <p
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                margin: 0,
              }}
            >
              Arrival: Osaka, Japan
            </p>
            <Separator style={{ margin: 'var(--ds-alias-spacing-sm) 0' }} />
            <p
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
                margin: 0,
              }}
            >
              Return: Tokyo, Japan
            </p>
          </div>
          <div
            style={{
              marginTop: 'var(--ds-alias-spacing-xxs)',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Separator />'}
          </div>
        </div>

        {/* Default (no props) */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Default (no props)
          </h3>
          <Separator />
          <div
            style={{
              marginTop: 'var(--ds-alias-spacing-xxs)',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Separator />'}
          </div>
        </div>

        {/* Explicit horizontal */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Explicit horizontal
          </h3>
          <Separator orientation="horizontal" />
          <div
            style={{
              marginTop: 'var(--ds-alias-spacing-xxs)',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'orientation="horizontal"'}
          </div>
        </div>
      </section>

      {/* Section: Vertical */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          orientation=&quot;vertical&quot;
        </h2>

        {/* Between inline items */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Between inline items
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ds-alias-spacing-sm)' }}>
            <span
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
              }}
            >
              Flights
            </span>
            <Separator orientation="vertical" style={{ height: '20px' }} />
            <span
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
              }}
            >
              Hotels
            </span>
            <Separator orientation="vertical" style={{ height: '20px' }} />
            <span
              style={{
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
              }}
            >
              Cars
            </span>
          </div>
          <div
            style={{
              marginTop: 'var(--ds-alias-spacing-xxs)',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'orientation="vertical" style={{ height: "20px" }}'}
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2
          style={{
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Tokens used
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            fontFamily: 'monospace',
          }}
        >
          <div>--ds-mapped-border-default — line color (#f0f1f2 light / #2d2f33 dark)</div>
          <div>--ds-alias-border-width-sm — line thickness (1px)</div>
        </div>
      </section>
    </div>
  )
}
