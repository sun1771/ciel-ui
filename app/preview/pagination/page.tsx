'use client'

import React, { useState } from 'react'
import { Pagination } from '@/components/ui/navigation/Pagination'

export default function PaginationPreviewPage() {
  const [activePage3, setActivePage3] = useState(1)
  const [activePage5, setActivePage5] = useState(2)
  const [activePage7, setActivePage7] = useState(4)

  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)', maxWidth: '800px' }}>
      {/* Header */}
      <div style={{
        marginBottom: 'var(--ds-alias-spacing-xl)',
        paddingBottom: 'var(--ds-alias-spacing-lg)',
        borderBottom: '1px solid var(--ds-mapped-border-default)'
      }}>
        <h1 style={{
          fontSize: 'var(--ds-typography-heading-h4-font-size)',
          fontWeight: 'var(--ds-typography-heading-h4-font-weight)',
          fontFamily: 'var(--ds-typography-heading-h4-font-family)',
          color: 'var(--ds-mapped-text-heading)',
          margin: 0
        }}>
          Pagination
        </h1>
        <p style={{
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          marginTop: 'var(--ds-alias-spacing-xxs)'
        }}>
          Figma: NAVIGATION / Pagination — node 3265:2696
        </p>
        <p style={{
          fontSize: 'var(--ds-typography-body-xsm-font-size)',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: 'var(--ds-alias-spacing-xxxs)',
          fontFamily: 'monospace'
        }}>
          {`import { Pagination } from '@/components/ui/navigation/Pagination'`}
        </p>
      </div>

      {/* Section: Interactive — 3 pages */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-typography-heading-h7-font-weight)',
          fontFamily: 'var(--ds-typography-heading-h7-font-family)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Interactive (totalPages=3)
        </h2>

        <div style={{
          padding: 'var(--ds-alias-spacing-lg)',
          background: 'var(--ds-mapped-surface-action)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--ds-alias-spacing-md)'
        }}>
          <Pagination
            page={activePage3}
            totalPages={3}
            onChange={setActivePage3}
          />
          <div style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-surface-action-hover-light)'
          }}>
            page={activePage3} totalPages={3} — click a dot to change
          </div>
        </div>

        <div style={{ marginTop: 'var(--ds-alias-spacing-xs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {`<Pagination page={${activePage3}} totalPages={3} onChange={setPage} />`}
        </div>
      </section>

      {/* Section: Interactive — 5 pages */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-typography-heading-h7-font-weight)',
          fontFamily: 'var(--ds-typography-heading-h7-font-family)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Interactive (totalPages=5)
        </h2>

        <div style={{
          padding: 'var(--ds-alias-spacing-lg)',
          background: 'var(--ds-mapped-surface-action)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--ds-alias-spacing-md)'
        }}>
          <Pagination
            page={activePage5}
            totalPages={5}
            onChange={setActivePage5}
          />
          <div style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-surface-action-hover-light)'
          }}>
            page={activePage5} totalPages={5} — click a dot to change
          </div>
        </div>

        <div style={{ marginTop: 'var(--ds-alias-spacing-xs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {`<Pagination page={${activePage5}} totalPages={5} onChange={setPage} />`}
        </div>
      </section>

      {/* Section: Interactive — 7 pages */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-typography-heading-h7-font-weight)',
          fontFamily: 'var(--ds-typography-heading-h7-font-family)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          Interactive (totalPages=7)
        </h2>

        <div style={{
          padding: 'var(--ds-alias-spacing-lg)',
          background: 'var(--ds-mapped-surface-action)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--ds-alias-spacing-md)'
        }}>
          <Pagination
            page={activePage7}
            totalPages={7}
            onChange={setActivePage7}
          />
          <div style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'var(--ds-mapped-surface-action-hover-light)'
          }}>
            page={activePage7} totalPages={7} — click a dot to change
          </div>
        </div>

        <div style={{ marginTop: 'var(--ds-alias-spacing-xs)', fontFamily: 'monospace', fontSize: '11px', color: 'var(--ds-mapped-text-disabled)' }}>
          {`<Pagination page={${activePage7}} totalPages={7} onChange={setPage} />`}
        </div>
      </section>

      {/* Section: States */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2 style={{
          fontSize: 'var(--ds-typography-heading-h7-font-size)',
          fontWeight: 'var(--ds-typography-heading-h7-font-weight)',
          fontFamily: 'var(--ds-typography-heading-h7-font-family)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-md)'
        }}>
          States
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>
          {/* Default */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', fontFamily: 'monospace', marginBottom: 'var(--ds-alias-spacing-xxs)' }}>
              default (page=1, totalPages=4)
            </div>
            <div style={{
              padding: 'var(--ds-alias-spacing-md)',
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-md)',
              display: 'inline-flex'
            }}>
              <Pagination page={1} totalPages={4} />
            </div>
          </div>

          {/* Middle active */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', fontFamily: 'monospace', marginBottom: 'var(--ds-alias-spacing-xxs)' }}>
              page=3 active (page=3, totalPages=5)
            </div>
            <div style={{
              padding: 'var(--ds-alias-spacing-md)',
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-md)',
              display: 'inline-flex'
            }}>
              <Pagination page={3} totalPages={5} />
            </div>
          </div>

          {/* Disabled */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--ds-mapped-text-disabled)', fontFamily: 'monospace', marginBottom: 'var(--ds-alias-spacing-xxs)' }}>
              disabled (page=2, totalPages=4, disabled)
            </div>
            <div style={{
              padding: 'var(--ds-alias-spacing-md)',
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-md)',
              display: 'inline-flex'
            }}>
              <Pagination page={2} totalPages={4} disabled />
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section>
        <div style={{
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-md)',
          fontSize: 'var(--ds-typography-body-xsm-font-size)',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace'
        }}>
          <strong>Tokens used:</strong>
          <ul style={{ margin: 'var(--ds-alias-spacing-xs) 0 0', paddingLeft: 'var(--ds-alias-spacing-md)' }}>
            <li>--ds-mapped-surface-action-hover — active dot fill</li>
            <li>--ds-mapped-surface-default — inactive dot fill</li>
            <li>--ds-mapped-surface-disabled — disabled dot fill</li>
            <li>--ds-mapped-surface-action-hover-light — hover on inactive dot</li>
            <li>--ds-mapped-border-focus — focus ring</li>
            <li>--ds-alias-border-radius-round — dot + button border-radius (pill/circle)</li>
            <li>--ds-alias-spacing-xxxs — dot button padding (2px)</li>
            <li>--ds-alias-spacing-xs — dot size (8px)</li>
            <li>--ds-alias-spacing-sm — button container size (12px)</li>
            <li>--ds-alias-spacing-lg — active button container width (24px)</li>
            <li>--ds-alias-spacing-none — container gap (0px)</li>
          </ul>
          <div style={{ marginTop: 'var(--ds-alias-spacing-xs)', color: 'var(--ds-mapped-text-warning)' }}>
            ⚠ 20px (active dot width) has no alias token — hardcoded with flag comment in CSS module
          </div>
        </div>
      </section>
    </div>
  )
}
