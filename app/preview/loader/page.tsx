'use client'

import { Loader } from '@/components/ui/feedback/Loader'

export default function LoaderPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>

      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xxl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)',
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0,
        }}>
          Loader
        </h1>
        <p style={{
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xs)',
          marginBottom: 0,
        }}>
          Figma: ↴ FEEDBACK / Loader — node 817:1041
        </p>
        <p style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          marginBottom: 0,
        }}>
          {'import { Loader } from \'@/components/ui/feedback/Loader\''}
        </p>
      </div>

      {/* Sizes section */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
        }}>
          Sizes
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--ds-alias-spacing-xxl)',
          alignItems: 'flex-end',
        }}>
          {(['lg', 'md', 'sm', 'xs', 'xxs'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--ds-alias-spacing-xs)' }}>
              <Loader size={size} />
              <code style={{
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}>
                size=&quot;{size}&quot;
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Default state */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
        }}>
          Default (md)
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ds-alias-spacing-lg)' }}>
          <Loader />
          <code style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--ds-mapped-text-disabled)' }}>
            {'<Loader />'}
          </code>
        </div>
      </section>

      {/* Custom label */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
        }}>
          Custom aria-label
        </h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--ds-alias-spacing-lg)' }}>
          <Loader size="md" label="Generating itinerary…" />
          <code style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--ds-mapped-text-disabled)' }}>
            {'<Loader size="md" label="Generating itinerary…" />'}
          </code>
        </div>
      </section>

      {/* Dark background demo */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
        }}>
          On dark surface
        </h2>

        <div style={{
          display: 'flex',
          gap: 'var(--ds-alias-spacing-xxl)',
          alignItems: 'flex-end',
          padding: 'var(--ds-alias-spacing-xl)',
          background: 'var(--ds-mapped-surface-action)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
        }}>
          {(['lg', 'md', 'sm', 'xs', 'xxs'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--ds-alias-spacing-xs)' }}>
              <Loader size={size} style={{ filter: 'brightness(0) invert(1)' }} />
              <code style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>
                {size}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
        }}>
          Token reference
        </h2>
        <div style={{
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-md)',
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          lineHeight: '2',
        }}>
          <strong>--ds-mapped-surface-action</strong> — dot fill (blue)<br />
          <strong>--ds-alias-spacing-xxxl</strong> — lg size (64px)<br />
          <strong>--ds-alias-spacing-xxl</strong> — md size (48px)<br />
          <strong>--ds-alias-spacing-xl</strong> — sm size (32px)<br />
          <strong>--ds-alias-spacing-lg</strong> — xs size (24px)<br />
          <strong>--ds-alias-spacing-md</strong> — xxs size (16px)
        </div>
      </section>

    </div>
  )
}
