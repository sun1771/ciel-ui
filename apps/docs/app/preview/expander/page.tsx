'use client'

import React, { useState } from 'react'
import { Expander } from '@acme/ui'

export default function ExpanderPreviewPage() {
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(true)
  const [expanded3, setExpanded3] = useState(false)
  const [expanded4, setExpanded4] = useState(true)

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)' }}>
      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xxl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontSize: 'var(--ds-responsive-h4-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0,
          fontFamily: 'var(--ds-brand-font-family-heading)'
        }}>
          Expander
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xs)'
        }}>
          Figma: NAVIGATION / Expander — node 1683:1862
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxs)',
          fontFamily: 'monospace'
        }}>
          {'import { Expander } from \'@acme/ui\''}
        </p>
      </div>

      {/* Section: Sizes - lg (default) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-body-lg-semibold-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
          fontFamily: 'var(--ds-brand-font-family-body)'
        }}>
          Size: lg (default)
        </h2>

        {/* Collapsed */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3 style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-medium)',
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Collapsed
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)', maxWidth: '320px' }}>
            <Expander
              label="Parent Item"
              size="lg"
              isExpanded={false}
              onToggle={() => {}}
            />
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {'size="lg" isExpanded={false}'}
            </div>
          </div>
        </div>

        {/* Expanded (interactive) */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3 style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-medium)',
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Expanded (interactive — click to toggle)
          </h3>
          <div style={{ maxWidth: '320px' }}>
            <Expander
              label="Parent Item"
              size="lg"
              isExpanded={expanded1}
              onToggle={() => setExpanded1(!expanded1)}
            >
              <div style={{
                padding: 'var(--ds-alias-spacing-xs)',
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)'
              }}>
                Content Placeholder
              </div>
            </Expander>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="lg" isExpanded={expanded} onToggle={toggle}'}
            </div>
          </div>
        </div>

        {/* Expanded default (pre-expanded) */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3 style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-medium)',
            color: 'var(--ds-mapped-text-disabled)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: 'var(--ds-alias-spacing-xs)'
          }}>
            Expanded — shows semibold label + chevron-up
          </h3>
          <div style={{ maxWidth: '320px' }}>
            <Expander
              label="Parent Item"
              size="lg"
              isExpanded={expanded2}
              onToggle={() => setExpanded2(!expanded2)}
            >
              <div style={{
                padding: 'var(--ds-alias-spacing-xs)',
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)'
              }}>
                Content Placeholder
              </div>
            </Expander>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="lg" isExpanded={true}'}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Size sm */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-body-lg-semibold-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
          fontFamily: 'var(--ds-brand-font-family-body)'
        }}>
          Size: sm
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-sm)', maxWidth: '320px' }}>
          {/* sm collapsed */}
          <div>
            <Expander
              label="Parent Item"
              size="sm"
              isExpanded={false}
              onToggle={() => {}}
            />
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="sm" isExpanded={false}'}
            </div>
          </div>

          {/* sm expanded */}
          <div>
            <Expander
              label="Parent Item"
              size="sm"
              isExpanded={expanded3}
              onToggle={() => setExpanded3(!expanded3)}
            >
              <div style={{
                padding: 'var(--ds-alias-spacing-xs)',
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)'
              }}>
                Content Placeholder
              </div>
            </Expander>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="sm" isExpanded={expanded}'}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Disabled states */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-body-lg-semibold-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
          fontFamily: 'var(--ds-brand-font-family-body)'
        }}>
          Disabled states
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-sm)', maxWidth: '320px' }}>
          {/* disabled collapsed lg */}
          <div>
            <Expander
              label="Parent Item"
              size="lg"
              isExpanded={false}
              disabled
            />
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="lg" disabled isExpanded={false}'}
            </div>
          </div>

          {/* disabled expanded lg */}
          <div>
            <Expander
              label="Parent Item"
              size="lg"
              isExpanded={expanded4}
              disabled
            >
              <div style={{
                padding: 'var(--ds-alias-spacing-xs)',
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)'
              }}>
                Content Placeholder
              </div>
            </Expander>
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="lg" disabled isExpanded={true}'}
            </div>
          </div>

          {/* disabled collapsed sm */}
          <div>
            <Expander
              label="Parent Item"
              size="sm"
              isExpanded={false}
              disabled
            />
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', marginTop: 'var(--ds-alias-spacing-xxs)' }}>
              {'size="sm" disabled isExpanded={false}'}
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2 style={{
          fontSize: 'var(--ds-typography-body-lg-semibold-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-lg)',
          fontFamily: 'var(--ds-brand-font-family-body)'
        }}>
          Tokens used
        </h2>
        <div style={{
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace',
          lineHeight: '1.8'
        }}>
          --ds-mapped-surface-default: header bg (default)<br />
          --ds-mapped-surface-action-hover-light: header bg (hover)<br />
          --ds-mapped-surface-disabled: header bg (disabled + expanded)<br />
          --ds-mapped-text-body: label text (default)<br />
          --ds-mapped-text-action-hover: label text (hover)<br />
          --ds-mapped-text-disabled: label text (disabled)<br />
          --ds-mapped-icon-default: chevron (default)<br />
          --ds-mapped-icon-action-hover: chevron (hover)<br />
          --ds-mapped-icon-disabled: chevron (disabled)<br />
          --ds-mapped-border-disabled: border (disabled)<br />
          --ds-mapped-border-focus: focus ring<br />
          --ds-alias-border-radius-lg: corner radius<br />
          --ds-alias-spacing-xs / sm / xxs: padding + gap<br />
          --ds-typography-body-md / sm: font size + line-height<br />
          --ds-brand-font-weight-regular / semi-bold: collapsed / expanded weight
        </div>
      </section>
    </div>
  )
}
