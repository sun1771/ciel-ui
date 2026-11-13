'use client'

import { Avatar } from '@acme/ui'

export default function AvatarPreviewPage() {
  const sampleImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face'

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
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Avatar
        </h1>
        <p
          style={{
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
          }}
        >
          Figma: PRIMITIVES / Avatar — node 814:1333
        </p>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
          }}
        >
          {`import { Avatar } from '@acme/ui'`}
        </p>
      </div>

      {/* ── Type: icon ── */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-typography-heading-h7-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          type=&quot;icon&quot;
        </h2>

        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            All Sizes
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Avatar type="icon" size="lg" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;lg&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="icon" size="md" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;md&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="icon" size="sm" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;sm&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Type: initials ── */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-typography-heading-h7-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          type=&quot;initials&quot;
        </h2>

        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            All Sizes — default initials &quot;SK&quot;
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="lg" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;lg&quot; (H6 Poppins 24px)
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="md" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;md&quot; (H7 Poppins 20px)
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="sm" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;sm&quot; (Body/md-semibold Inter 16px)
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Custom initials
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="lg" initials="JD" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                initials=&quot;JD&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="md" initials="AB" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                initials=&quot;AB&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="initials" size="sm" initials="XY" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                initials=&quot;XY&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Type: image ── */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-typography-heading-h7-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          type=&quot;image&quot;
        </h2>

        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            All Sizes
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <Avatar type="image" size="lg" src={sampleImage} alt="Sample user photo" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;lg&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="image" size="md" src={sampleImage} alt="Sample user photo" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;md&quot;
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="image" size="sm" src={sampleImage} alt="Sample user photo" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                size=&quot;sm&quot;
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            No src provided (graceful empty state)
          </h3>
          <div style={{ display: 'flex', gap: 'var(--ds-alias-spacing-lg)', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <Avatar type="image" size="lg" alt="No photo" />
              <div
                style={{
                  marginTop: 'var(--ds-alias-spacing-xxs)',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: 'var(--ds-mapped-text-body)',
                }}
              >
                no src
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All types side by side ── */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-typography-heading-h7-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          All 3 types — lg size
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-alias-spacing-lg)',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Avatar type="icon" size="lg" />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-body)',
              }}
            >
              type=&quot;icon&quot;
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar type="initials" size="lg" initials="SK" />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-body)',
              }}
            >
              type=&quot;initials&quot;
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Avatar type="image" size="lg" src={sampleImage} alt="Sample user" />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-body)',
              }}
            >
              type=&quot;image&quot;
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-default)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
          }}
        >
          <strong>Tokens used:</strong>
          <ul style={{ marginTop: 'var(--ds-alias-spacing-xs)', paddingLeft: 'var(--ds-alias-spacing-md)' }}>
            <li>--ds-alias-border-radius-round — circle shape</li>
            <li>--ds-alias-border-width-sm — border thickness (1px)</li>
            <li>--ds-mapped-border-default — border color</li>
            <li>--ds-mapped-surface-default — background (icon + initials types)</li>
            <li>--ds-mapped-icon-default — User icon color</li>
            <li>--ds-mapped-text-heading — initials text color</li>
            <li>--ds-typography-heading-h6-* — lg initials (Poppins SemiBold 24px)</li>
            <li>--ds-typography-heading-h7-* — md initials (Poppins SemiBold 20px)</li>
            <li>--ds-typography-body-md-semibold-* — sm initials (Inter SemiBold 16px)</li>
          </ul>
          <p style={{ marginTop: 'var(--ds-alias-spacing-xs)' }}>
            <strong>Hardcoded (no token):</strong> container sizes 64px / 48px / 32px — component-specific dimensions
          </p>
        </div>
      </section>
    </div>
  )
}
