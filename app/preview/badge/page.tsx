'use client'

import { Badge } from '@/components/primitives/Badge'

export default function BadgePreviewPage() {
  return (
    <div style={{ padding: '48px', maxWidth: '960px' }}>

      {/* Page header */}
      <div style={{
        marginBottom: '48px',
        paddingBottom: '24px',
        borderBottom: '1px solid var(--ds-mapped-border-default)',
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '32px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          margin: '0',
        }}>
          Badge
        </h1>
        <p style={{
          fontSize: '14px',
          color: 'var(--ds-mapped-text-body)',
          marginTop: '8px',
        }}>
          Figma: PRIMITIVES / Badge — node 849:1026
        </p>
        <p style={{
          fontSize: '12px',
          color: 'var(--ds-mapped-text-placeholder)',
          marginTop: '4px',
          fontFamily: 'monospace',
        }}>
          import &#123; Badge &#125; from &apos;@/components/primitives/Badge&apos;
        </p>
      </div>

      {/* ========== type="default" (pill) ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          type=&quot;default&quot; — Label Pill
        </h2>

        {/* All variants */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Variants
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default" type="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;default&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="error" type="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;error&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="success" type="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;success&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="information" type="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;information&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="warning" type="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;warning&quot;</code>
            </div>

          </div>
        </div>

        {/* Various label lengths */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Label lengths
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default">1</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>&quot;1&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default">9</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>&quot;9&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default">99</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>&quot;99&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default">999</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>&quot;999&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="error">New</Badge>
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>&quot;New&quot;</code>
            </div>

          </div>
        </div>

        {/* Token reference */}
        <div style={{
          padding: '16px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: '8px',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace',
          lineHeight: '1.8',
        }}>
          <strong style={{ fontFamily: 'inherit' }}>Tokens used (pill):</strong><br />
          --ds-mapped-surface-action — background (default)<br />
          --ds-mapped-icon-error — background (error)<br />
          --ds-mapped-icon-success — background (success)<br />
          --ds-mapped-icon-information — background (information)<br />
          --ds-mapped-icon-warning — background (warning)<br />
          --ds-mapped-text-on-action — label text (white)<br />
          --ds-typography-body-sm-semibold-* — 14px/600/Inter<br />
          --ds-alias-spacing-xxs — padding (4px)<br />
          --ds-alias-border-radius-round — pill shape (64px)
        </div>
      </section>

      {/* ========== type="dot" (indicator) ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          type=&quot;dot&quot; — Indicator Circle
        </h2>

        {/* All dot variants */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            Variants
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="default" type="dot" aria-label="Default status indicator" />
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;default&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="error" type="dot" aria-label="Error status indicator" />
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;error&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="success" type="dot" aria-label="Success status indicator" />
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;success&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="information" type="dot" aria-label="Information status indicator" />
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;information&quot;</code>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Badge variant="warning" type="dot" aria-label="Warning status indicator" />
              <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>variant=&quot;warning&quot;</code>
            </div>

          </div>
        </div>

        {/* Dot in context */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: '600',
            color: 'var(--ds-mapped-text-placeholder)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px',
          }}>
            In context (dot alongside text)
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Badge variant="success" type="dot" aria-label="Online" />
              <span style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>Online</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Badge variant="warning" type="dot" aria-label="Away" />
              <span style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>Away</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Badge variant="error" type="dot" aria-label="Offline" />
              <span style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)' }}>Offline</span>
            </div>

          </div>
        </div>

        {/* Token reference */}
        <div style={{
          padding: '16px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: '8px',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace',
          lineHeight: '1.8',
        }}>
          <strong style={{ fontFamily: 'inherit' }}>Tokens used (dot):</strong><br />
          Same background color tokens as pill<br />
          --ds-alias-border-radius-round — circle shape (64px)<br />
          12px × 12px — component-specific dimension (no token)
        </div>
      </section>

      {/* ========== Figma comparison ========== */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: '24px',
        }}>
          Figma layout (5 variants × 2 types)
        </h2>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          {/* Pills column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <Badge variant="default">99</Badge>
            <Badge variant="error">99</Badge>
            <Badge variant="success">99</Badge>
            <Badge variant="information">99</Badge>
            <Badge variant="warning">99</Badge>
          </div>
          {/* Dots column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', paddingTop: '4px' }}>
            <Badge variant="default" type="dot" aria-label="Default" />
            <Badge variant="error" type="dot" aria-label="Error" />
            <Badge variant="success" type="dot" aria-label="Success" />
            <Badge variant="information" type="dot" aria-label="Information" />
            <Badge variant="warning" type="dot" aria-label="Warning" />
          </div>
        </div>
      </section>

    </div>
  )
}
