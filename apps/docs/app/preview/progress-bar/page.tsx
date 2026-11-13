'use client'

import { ProgressBar } from '@acme/ui'
import { ProgressCircle } from '@acme/ui'

export default function ProgressBarPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)', maxWidth: '800px' }}>
      {/* Page header */}
      <div
        style={{
          marginBottom: 'var(--ds-alias-spacing-xl)',
          paddingBottom: 'var(--ds-alias-spacing-lg)',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Progress Bar
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            fontFamily: 'var(--ds-brand-font-family-body)',
          }}
        >
          Figma: FEEDBACK / Progress Bar — nodes 852:25 (ProgressBar), 852:46 (ProgressCircle)
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxxs)',
            fontFamily: 'monospace',
          }}
        >
          {"import { ProgressBar, ProgressCircle } from '@acme/ui'"}
        </p>
      </div>

      {/* ===== ProgressBar ===== */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          ProgressBar
        </h2>

        {/* Values */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Values
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-lg)' }}
          >
            {[0, 25, 50, 75, 100].map((v) => (
              <div key={v}>
                <ProgressBar value={v} showLabel label={`Progress ${v}%`} />
                <div
                  style={{
                    marginTop: 'var(--ds-alias-spacing-xxs)',
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: 'var(--ds-mapped-text-disabled)',
                  }}
                >
                  {`value={${v}} showLabel label="Progress ${v}%"`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Without label */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            No label
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}
          >
            <ProgressBar value={60} />
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              value={60}
            </div>
          </div>
        </div>

        {/* Default label (no label prop, showLabel=true) */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Default label (auto percentage)
          </h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}
          >
            <ProgressBar value={80} showLabel />
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              {'value={80} showLabel'}
            </div>
          </div>
        </div>

        {/* Token reference */}
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            color: 'var(--ds-mapped-text-body)',
          }}
        >
          <strong>Tokens used:</strong>
          <ul
            style={{
              margin: 'var(--ds-alias-spacing-xxs) 0 0',
              paddingLeft: 'var(--ds-alias-spacing-md)',
            }}
          >
            <li>--ds-mapped-surface-action-hover-light: track background</li>
            <li>--ds-mapped-surface-action: fill/progress color</li>
            <li>--ds-mapped-text-body: label text</li>
            <li>--ds-alias-spacing-xxs: track height (4px) + gap</li>
            <li>--ds-alias-border-radius-round: pill track/fill ends</li>
            <li>--ds-typography-body-sm-*: label typography</li>
          </ul>
        </div>
      </section>

      {/* ===== ProgressCircle ===== */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          ProgressCircle
        </h2>

        {/* Sizes */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Sizes
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-xl)',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-alias-spacing-xs)',
              }}
            >
              <ProgressCircle value={80} size="default" showLabel />
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-disabled)',
                }}
              >
                {'size="default" value={80} showLabel'}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-alias-spacing-xs)',
              }}
            >
              <ProgressCircle value={80} size="sm" showLabel />
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-disabled)',
                }}
              >
                {'size="sm" value={80} showLabel'}
              </div>
            </div>
          </div>
        </div>

        {/* Various values */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Values
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-xl)',
              alignItems: 'flex-end',
            }}
          >
            {[0, 25, 50, 75, 100].map((v) => (
              <div
                key={v}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 'var(--ds-alias-spacing-xs)',
                }}
              >
                <ProgressCircle value={v} showLabel />
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    color: 'var(--ds-mapped-text-disabled)',
                  }}
                >
                  {`value={${v}}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Without label */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 600,
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            No label
          </h3>
          <div
            style={{ display: 'flex', gap: 'var(--ds-alias-spacing-lg)', alignItems: 'flex-end' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-alias-spacing-xs)',
              }}
            >
              <ProgressCircle value={65} size="default" />
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-disabled)',
                }}
              >
                {'size="default" value={65}'}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--ds-alias-spacing-xs)',
              }}
            >
              <ProgressCircle value={65} size="sm" />
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-disabled)',
                }}
              >
                {'size="sm" value={65}'}
              </div>
            </div>
          </div>
        </div>

        {/* Token reference */}
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            color: 'var(--ds-mapped-text-body)',
          }}
        >
          <strong>Tokens used:</strong>
          <ul
            style={{
              margin: 'var(--ds-alias-spacing-xxs) 0 0',
              paddingLeft: 'var(--ds-alias-spacing-md)',
            }}
          >
            <li>--ds-mapped-surface-action-hover-light: SVG track ring stroke</li>
            <li>--ds-mapped-surface-action: SVG progress arc stroke</li>
            <li>--ds-mapped-text-body: center label text</li>
            <li>--ds-typography-body-sm-*: label typography</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
