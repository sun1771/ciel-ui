'use client'

import React, { useState } from 'react'
import { Snackbar } from '@/components/ui/feedback/Snackbar'
import { Info } from '@/design-system/icons/components/Info'
import { Check } from '@/design-system/icons/components/Check'
import { X } from '@/design-system/icons/components/X'

export default function SnackbarPreviewPage() {
  const [dismissed, setDismissed] = useState<Record<string, boolean>>({})

  const dismiss = (key: string) => setDismissed(prev => ({ ...prev, [key]: true }))
  const resetAll = () => setDismissed({})

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)', maxWidth: '800px' }}>

      {/* Page header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xl)',
        paddingBottom: 'var(--ds-alias-spacing-md)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0
        }}>
          Snackbar
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xs)'
        }}>
          Figma: FEEDBACK / Snackbar — node 852:286
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          fontFamily: 'monospace'
        }}>
          {`import { Snackbar } from '@/components/ui/feedback/Snackbar'`}
        </p>
      </div>

      {/* All 5 variants */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h6-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Variants
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>

          {/* default */}
          <div>
            <Snackbar
              variant="default"
              icon={<Info size={20} style={{ color: 'var(--ds-mapped-text-action)' }} />}
              title="Default notification"
              action={{ label: 'Learn more', onClick: () => alert('Learn more clicked') }}
              onClose={() => {}}
            >
              Something happened that you should know about.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="default" title="..." icon={<Info />} action={{ label: 'Learn more' }}`}
            </div>
          </div>

          {/* success */}
          <div>
            <Snackbar
              variant="success"
              icon={<Check size={20} style={{ color: 'var(--ds-mapped-icon-success)' }} />}
              title="Success — booking confirmed"
              action={{ label: 'View booking', onClick: () => alert('View booking') }}
              onClose={() => {}}
            >
              Your trip to Tokyo has been saved successfully.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="success" icon={<Check />}`}
            </div>
          </div>

          {/* error */}
          <div>
            <Snackbar
              variant="error"
              icon={<X size={20} style={{ color: 'var(--ds-mapped-icon-error)' }} />}
              title="Error — something went wrong"
              action={{ label: 'Try again', onClick: () => alert('Retry') }}
              onClose={() => {}}
            >
              Unable to generate your itinerary. Please try again.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="error" icon={<X />} role="alert"`}
            </div>
          </div>

          {/* warning */}
          <div>
            <Snackbar
              variant="warning"
              icon={<Info size={20} style={{ color: 'var(--ds-mapped-icon-warning)' }} />}
              title="Warning — limited availability"
              action={{ label: 'Check dates', onClick: () => alert('Check dates') }}
              onClose={() => {}}
            >
              Hotel prices may change. Book soon to lock in your rate.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="warning" icon={<Info />} role="alert"`}
            </div>
          </div>

          {/* info */}
          <div>
            <Snackbar
              variant="info"
              icon={<Info size={20} style={{ color: 'var(--ds-mapped-icon-information)' }} />}
              title="Info — tip for your trip"
              action={{ label: 'Learn more', onClick: () => alert('Learn more') }}
              onClose={() => {}}
            >
              The best time to visit this destination is April–June.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="info" icon={<Info />}`}
            </div>
          </div>

        </div>
      </section>

      {/* With progress bar */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h6-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          With progress bar
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>

          <div>
            <Snackbar
              variant="default"
              icon={<Info size={20} style={{ color: 'var(--ds-mapped-text-action)' }} />}
              title="Auto-dismissing"
              showProgress
              progress={65}
              onClose={() => {}}
            >
              This notification will dismiss automatically.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`showProgress progress={65}`}
            </div>
          </div>

          <div>
            <Snackbar
              variant="success"
              icon={<Check size={20} style={{ color: 'var(--ds-mapped-icon-success)' }} />}
              title="Upload complete"
              showProgress
              progress={100}
              onClose={() => {}}
            >
              All files uploaded successfully.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="success" showProgress progress={100}`}
            </div>
          </div>

          <div>
            <Snackbar
              variant="error"
              icon={<X size={20} style={{ color: 'var(--ds-mapped-icon-error)' }} />}
              title="Error"
              showProgress
              progress={20}
              onClose={() => {}}
            >
              Request failed. Retrying…
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`variant="error" showProgress progress={20}`}
            </div>
          </div>

        </div>
      </section>

      {/* Dismissable — interactive */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h6-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-xs)'
        }}>
          Dismissable (interactive)
        </h2>
        <p style={{ fontSize: 'var(--ds-typography-body-sm-font-size)', color: 'var(--ds-mapped-text-body)', marginBottom: 'var(--ds-alias-spacing-md)' }}>
          Click the X to dismiss each snackbar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>

          {!dismissed['d1'] && (
            <Snackbar
              variant="success"
              icon={<Check size={20} style={{ color: 'var(--ds-mapped-icon-success)' }} />}
              title="Trip saved"
              onClose={() => dismiss('d1')}
            >
              Your Tokyo itinerary is saved and ready.
            </Snackbar>
          )}

          {!dismissed['d2'] && (
            <Snackbar
              variant="warning"
              icon={<Info size={20} style={{ color: 'var(--ds-mapped-icon-warning)' }} />}
              title="Low credits"
              onClose={() => dismiss('d2')}
            >
              You have 1 generation remaining this session.
            </Snackbar>
          )}

          {(dismissed['d1'] || dismissed['d2']) && (
            <button
              type="button"
              onClick={resetAll}
              style={{
                fontFamily: 'var(--ds-brand-font-family-body)',
                fontSize: 'var(--ds-typography-body-sm-font-size)',
                color: 'var(--ds-mapped-text-action)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline'
              }}
            >
              Reset dismissed snackbars
            </button>
          )}

        </div>
      </section>

      {/* No icon, no close */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontFamily: 'var(--ds-brand-font-family-heading)',
          fontSize: 'var(--ds-responsive-h6-font-size)',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Minimal (no icon, no close)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>
          <div>
            <Snackbar variant="info" showClose={false} title="Quick tip">
              Tap any activity marker on the map to zoom in.
            </Snackbar>
            <div style={{ marginTop: '4px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
              {`showClose={false} — no icon, no close button`}
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <div style={{
        padding: 'var(--ds-alias-spacing-md)',
        background: 'var(--ds-mapped-surface-action-hover-light)',
        borderRadius: 'var(--ds-alias-border-radius-lg)',
        fontSize: 'var(--ds-typography-body-sm-font-size)',
        color: 'var(--ds-mapped-text-body)',
        fontFamily: 'monospace'
      }}>
        <strong style={{ display: 'block', marginBottom: 'var(--ds-alias-spacing-xs)', fontFamily: 'var(--ds-brand-font-family-body)' }}>Tokens used:</strong>
        --ds-mapped-surface-default — background (all variants)<br />
        --ds-mapped-border-default — border<br />
        --ds-mapped-text-body — body text<br />
        --ds-mapped-text-action/success/error/warning/information — title per variant<br />
        --ds-mapped-icon-default — close button icon<br />
        --ds-mapped-icon-success/error/warning/information — progress fill per variant<br />
        --ds-mapped-surface-action-hover-light/success/error/warning/information — progress track<br />
        --ds-typography-body-lg-semibold-* — title<br />
        --ds-typography-body-md-* — body + action link<br />
        --ds-alias-border-radius-lg — container radius<br />
        --ds-alias-border-radius-round — progress bar radius<br />
        --ds-alias-spacing-sm — container padding + content gap<br />
        --ds-alias-spacing-md — container padding-bottom<br />
        --ds-alias-spacing-xs — action row gap
      </div>

    </div>
  )
}
