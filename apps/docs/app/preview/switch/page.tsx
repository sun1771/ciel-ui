'use client'

import React, { useState } from 'react'
import { Switch } from '@acme/ui'

export default function SwitchPreview() {
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(true)

  return (
    <div style={{ maxWidth: '720px' }}>
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
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            lineHeight: 'var(--ds-responsive-h4-line-height)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Switch
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
            marginBottom: 0,
          }}
        >
          Figma: PRIMITIVES / Switch — node 314:137
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            marginBottom: 0,
            fontFamily: 'monospace',
          }}
        >
          {"import { Switch } from '@acme/ui'"}
        </p>
      </div>

      {/* Section: Checked states */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
            marginTop: 0,
          }}
        >
          Checked states
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'center',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          {/* Unchecked */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={false} onChange={() => {}} aria-label="Unchecked switch" />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              checked=false
            </code>
          </div>

          {/* Checked */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={true} onChange={() => {}} aria-label="Checked switch" />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              checked=true
            </code>
          </div>
        </div>
      </section>

      {/* Section: With label (interactive) */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
            marginTop: 0,
          }}
        >
          With label — interactive
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--ds-alias-spacing-lg)',
          }}
        >
          {/* Toggle 1 */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={checked1} onClick={() => setChecked1((v) => !v)}>
              Enable notifications
            </Switch>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              {`checked={${checked1}} — click to toggle`}
            </code>
          </div>

          {/* Toggle 2 */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={checked2} onClick={() => setChecked2((v) => !v)}>
              Dark mode
            </Switch>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              {`checked={${checked2}} — starts on`}
            </code>
          </div>
        </div>
      </section>

      {/* Section: Disabled states */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
            marginTop: 0,
          }}
        >
          Disabled
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'center',
          }}
        >
          {/* Disabled unchecked */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={false} disabled aria-label="Disabled unchecked switch" />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              disabled checked=false
            </code>
          </div>

          {/* Disabled checked */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={true} disabled aria-label="Disabled checked switch" />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              disabled checked=true
            </code>
          </div>

          {/* Disabled with label */}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch checked={checked3} disabled>
              Unavailable feature
            </Switch>
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              disabled + label
            </code>
          </div>
        </div>
      </section>

      {/* Section: Without label */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
            marginTop: 0,
          }}
        >
          Without label
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--ds-alias-spacing-xl)',
            alignItems: 'center',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xs)' }}
          >
            <Switch
              checked={checked4}
              onClick={() => setChecked4((v) => !v)}
              aria-label="Toggle feature"
            />
            <code style={{ fontSize: '11px', color: 'var(--ds-mapped-text-placeholder)' }}>
              {`no children — aria-label required`}
            </code>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-md)',
            marginTop: 0,
          }}
        >
          Tokens used
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-default)',
            border: '1px solid var(--ds-mapped-border-default)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            fontFamily: 'monospace',
            lineHeight: '1.8',
          }}
        >
          <div>--ds-mapped-surface-default — track bg (off)</div>
          <div>--ds-mapped-surface-action — track bg (on)</div>
          <div>--ds-mapped-surface-action-hover — track bg (hover on)</div>
          <div>--ds-mapped-surface-action-hover-light — track bg (hover off)</div>
          <div>--ds-mapped-surface-disabled — track bg (disabled)</div>
          <div>--ds-mapped-border-default — track border (off)</div>
          <div>--ds-mapped-border-action — track border (on)</div>
          <div>--ds-mapped-border-action-hover — track border (hover)</div>
          <div>--ds-mapped-border-disabled — track border (disabled)</div>
          <div>--ds-mapped-border-focus — focus ring</div>
          <div>--ds-alias-border-radius-round — track + knob radius (64px)</div>
          <div>--ds-alias-border-width-sm — track border (1px)</div>
          <div>--ds-alias-border-width-md — focus ring (2px)</div>
          <div>--ds-alias-spacing-xxs — track padding (4px)</div>
          <div>--ds-alias-spacing-xs — track-label gap (8px)</div>
          <div>--ds-brand-foundation-white — knob bg (always white)</div>
          <div>--ds-effect-shadow-overlay-light — knob shadow</div>
          <div>--ds-mapped-text-body — label text</div>
          <div>--ds-mapped-text-disabled — label text (disabled)</div>
          <div>--ds-brand-font-family-body — label font (Inter)</div>
          <div>--ds-brand-font-weight-regular — label weight (400)</div>
          <div>--ds-typography-body-md-font-size — label size (16px)</div>
          <div>--ds-typography-body-md-line-height — label line-height (20px)</div>
        </div>
      </section>
    </div>
  )
}
