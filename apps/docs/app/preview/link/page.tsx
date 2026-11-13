'use client'

import { Link } from '@acme/ui'
import { ArrowRight } from '@acme/icons'
import { Info } from '@acme/icons'

export default function LinkPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
      <div
        style={{
          marginBottom: 'var(--ds-alias-spacing-xxl)',
          paddingBottom: 'var(--ds-alias-spacing-lg)',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
            fontFamily: 'var(--ds-brand-font-family-heading)',
          }}
        >
          Link
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
          }}
        >
          Figma: ↴ PRIMITIVES / Link — node 466:1407
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: 'var(--ds-alias-spacing-xxxs)',
            fontFamily: 'monospace',
          }}
        >
          import &#123; Link &#125; from &apos;@acme/ui&apos;
        </p>
      </div>

      {/* Section — variants */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
            fontFamily: 'var(--ds-brand-font-family-body)',
          }}
        >
          Link
        </h2>

        {/* Variants */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-placeholder)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Variants
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <Link
                href="#"
                variant="default"
                iconLeft={<Info size={20} />}
                iconRight={<ArrowRight size={20} />}
              >
                Default link
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                variant=&quot;default&quot;
              </div>
            </div>

            <div>
              <Link
                href="#"
                variant="in-line"
                iconLeft={<Info size={20} />}
                iconRight={<ArrowRight size={20} />}
              >
                In-line link
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                variant=&quot;in-line&quot;
              </div>
            </div>
          </div>
        </div>

        {/* States */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-placeholder)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            States
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <Link href="#" variant="default" iconRight={<ArrowRight size={20} />}>
                Default
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                default state
              </div>
            </div>

            <div>
              <Link href="#" variant="default" disabled iconRight={<ArrowRight size={20} />}>
                Disabled
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                disabled
              </div>
            </div>

            <div>
              <Link href="#" variant="in-line" disabled>
                In-line disabled
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                variant=&quot;in-line&quot; disabled
              </div>
            </div>
          </div>

          <p
            style={{
              marginTop: 'var(--ds-alias-spacing-sm)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              color: 'var(--ds-mapped-text-placeholder)',
            }}
          >
            Hover over links to see color + underline toggle. Tab to a link to see the focus ring.
          </p>
        </div>

        {/* Icon slots */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-placeholder)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            Icon Slots
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <Link href="#" variant="default" iconLeft={<Info size={20} />}>
                Left icon only
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                iconLeft
              </div>
            </div>

            <div>
              <Link href="#" variant="default" iconRight={<ArrowRight size={20} />}>
                Right icon only
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                iconRight
              </div>
            </div>

            <div>
              <Link
                href="#"
                variant="default"
                iconLeft={<Info size={20} />}
                iconRight={<ArrowRight size={20} />}
              >
                Both icons
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                iconLeft + iconRight
              </div>
            </div>

            <div>
              <Link href="#" variant="default">
                No icons
              </Link>
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-placeholder)',
                }}
              >
                text only
              </div>
            </div>
          </div>
        </div>

        {/* Inline in body text */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-placeholder)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-md)',
            }}
          >
            In-line variant within body text
          </h3>
          <p
            style={{
              fontSize: 'var(--ds-typography-body-md-font-size)',
              lineHeight: 'var(--ds-typography-body-md-line-height)',
              color: 'var(--ds-mapped-text-body)',
              fontFamily: 'var(--ds-brand-font-family-body)',
              maxWidth: '480px',
            }}
          >
            Plan your trip with TripOn AI. Read our{' '}
            <Link href="#" variant="in-line">
              terms of service
            </Link>{' '}
            and{' '}
            <Link href="#" variant="in-line" iconRight={<ArrowRight size={20} />}>
              privacy policy
            </Link>{' '}
            before booking.
          </p>
        </div>

        {/* Token reference */}
        <div
          style={{
            marginTop: 'var(--ds-alias-spacing-lg)',
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-default)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            fontFamily: 'monospace',
          }}
        >
          <strong>Tokens used:</strong>
          <ul
            style={{
              margin: 'var(--ds-alias-spacing-xs) 0 0',
              paddingLeft: 'var(--ds-alias-spacing-md)',
              lineHeight: '1.8',
            }}
          >
            <li>--ds-mapped-text-body — default text color</li>
            <li>--ds-mapped-text-action-hover — hover text color</li>
            <li>--ds-mapped-text-disabled — disabled text color</li>
            <li>--ds-mapped-icon-default — default icon color</li>
            <li>--ds-mapped-icon-action-hover — hover icon color</li>
            <li>--ds-mapped-icon-disabled — disabled icon color</li>
            <li>--ds-mapped-border-focus — focus ring color</li>
            <li>--ds-alias-spacing-xs — gap between icon and text (8px)</li>
            <li>--ds-alias-border-width-md — focus ring width (2px)</li>
            <li>--ds-alias-border-radius-lg — focus ring radius (8px)</li>
            <li>--ds-brand-font-family-body — Inter</li>
            <li>--ds-brand-font-weight-regular — 400</li>
            <li>--ds-typography-body-md-font-size — 16px</li>
            <li>--ds-typography-body-md-line-height — 20px</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
