'use client'

import React from 'react'
import { Chip } from '@acme/ui'
import type { ChipColor } from '@acme/ui'
import { Award } from '@acme/icons'

const colors: ChipColor[] = ['brand', 'blue', 'green', 'orange', 'red']

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 'var(--ds-alias-spacing-xxs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
      {children}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
      <h2 style={{
        fontFamily: 'var(--ds-brand-font-family-body)',
        fontSize: 'var(--ds-typography-body-lg-font-size)',
        fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
        color: 'var(--ds-mapped-text-heading)',
        marginTop: 0,
        marginBottom: 'var(--ds-alias-spacing-sm)'
      }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
      <h3 style={{
        fontFamily: 'var(--ds-brand-font-family-body)',
        fontSize: 'var(--ds-typography-body-sm-font-size)',
        fontWeight: 'var(--ds-brand-font-weight-medium)',
        color: 'var(--ds-mapped-text-disabled)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.08em',
        marginTop: 0,
        marginBottom: 'var(--ds-alias-spacing-xs)'
      }}>
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function ChipPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>

      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0
        }}>
          Chip
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xxs)',
          marginBottom: 0
        }}>
          Figma: PRIMITIVES / Chip — node 1249:2540
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          fontFamily: 'monospace',
          marginBottom: 0
        }}>
          import &#123; Chip &#125; from &apos;@acme/ui&apos;
        </p>
      </div>

      <Section title="Chip">

        {/* Light variants — all colors */}
        <SubSection title="Light variant — all colors">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-sm)', alignItems: 'flex-start' }}>
            {colors.map((color) => (
              <div key={color}>
                <Chip color={color} variant="light" icon={<Award size={16} />}>{color}</Chip>
                <Label>color=&quot;{color}&quot; variant=&quot;light&quot;</Label>
              </div>
            ))}
          </div>
        </SubSection>

        {/* Sharp variants — all colors */}
        <SubSection title="Sharp variant — all colors">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-sm)', alignItems: 'flex-start' }}>
            {colors.map((color) => (
              <div key={color}>
                <Chip color={color} variant="sharp" icon={<Award size={16} />}>{color}</Chip>
                <Label>color=&quot;{color}&quot; variant=&quot;sharp&quot;</Label>
              </div>
            ))}
          </div>
        </SubSection>

        {/* Complete color × variant matrix */}
        <SubSection title="Full matrix — all 10 combinations">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 'var(--ds-alias-spacing-sm)', justifyContent: 'start' }}>
            {colors.map((color) => (
              <React.Fragment key={color}>
                <div>
                  <Chip color={color} variant="light">{color} / light</Chip>
                </div>
                <div>
                  <Chip color={color} variant="sharp">{color} / sharp</Chip>
                </div>
              </React.Fragment>
            ))}
          </div>
        </SubSection>

        {/* Slot combinations */}
        <SubSection title="Slot combinations">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ds-alias-spacing-sm)', alignItems: 'flex-start' }}>
            <div>
              <Chip color="brand" variant="light" icon={<Award size={16} />}>Icon + Label</Chip>
              <Label>icon + children</Label>
            </div>
            <div>
              <Chip color="brand" variant="light">Label only</Chip>
              <Label>children only</Label>
            </div>
            <div>
              <Chip color="brand" variant="light" icon={<Award size={16} />} />
              <Label>icon only</Label>
            </div>
            <div>
              <Chip color="brand" variant="sharp" icon={<Award size={16} />}>Icon + Label</Chip>
              <Label>sharp — icon + children</Label>
            </div>
            <div>
              <Chip color="brand" variant="sharp">Label only</Chip>
              <Label>sharp — children only</Label>
            </div>
          </div>
        </SubSection>

        {/* Token reference */}
        <div style={{
          marginTop: 'var(--ds-alias-spacing-lg)',
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace'
        }}>
          <div style={{ fontWeight: 'var(--ds-brand-font-weight-semi-bold)', marginBottom: 'var(--ds-alias-spacing-xs)', fontFamily: 'var(--ds-brand-font-family-body)' }}>
            Tokens used:
          </div>
          <div>--ds-alias-border-radius-lg — corner radius (8px)</div>
          <div>--ds-alias-border-width-sm — border thickness (1px)</div>
          <div>--ds-alias-spacing-xs — horizontal padding (8px)</div>
          <div>--ds-alias-spacing-xxs — vertical padding + gap (4px)</div>
          <div>--ds-mapped-border-default — chip border color</div>
          <div>--ds-mapped-border-action-hover — brand/sharp background</div>
          <div>--ds-mapped-border-information — blue/sharp background</div>
          <div>--ds-mapped-border-success — green/sharp background</div>
          <div>--ds-mapped-border-warning — orange/sharp background</div>
          <div>--ds-mapped-border-error — red/sharp background</div>
          <div>--ds-mapped-surface-action-hover-light — brand/light background</div>
          <div>--ds-mapped-surface-information — blue/light background</div>
          <div>--ds-mapped-surface-success — green/light background</div>
          <div>--ds-mapped-surface-warning — orange/light background</div>
          <div>--ds-mapped-surface-error — red/light background</div>
          <div>--ds-mapped-text-body — text for all except brand/sharp</div>
          <div>--ds-mapped-text-on-action — text for brand/sharp (white)</div>
          <div>--ds-typography-body-xsm-* — 12px/16px Inter Regular</div>
        </div>
      </Section>
    </div>
  )
}
