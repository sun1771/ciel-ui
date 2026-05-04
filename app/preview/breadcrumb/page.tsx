'use client'

import React from 'react'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'
import { MapPin } from '@/icons'

export default function BreadcrumbPreview() {
  return (
    <div style={{ maxWidth: '860px' }}>
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
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Breadcrumb
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            marginBottom: 0,
          }}
        >
          Figma: NAVIGATION / Breadcrumb — node 814:1221
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-placeholder)',
            marginTop: 'var(--ds-alias-spacing-xxxs)',
            fontFamily: 'monospace',
          }}
        >
          {`import { Breadcrumb } from '@/components/navigation/Breadcrumb'`}
        </p>
      </div>

      {/* Section: Basic 3-item breadcrumb */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginTop: 0,
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Basic breadcrumb
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>
          {/* 3-item */}
          <div>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'Tokyo' },
              ]}
            />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
              }}
            >
              {`items={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Tokyo' }]}`}
            </div>
          </div>

          {/* 2-item */}
          <div>
            <Breadcrumb
              items={[
                { label: 'Trips', href: '/trips' },
                { label: 'Paris 2026' },
              ]}
            />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
              }}
            >
              {`items={[{ label: 'Trips', href: '/trips' }, { label: 'Paris 2026' }]}`}
            </div>
          </div>

          {/* Single item — current page only */}
          <div>
            <Breadcrumb
              items={[
                { label: 'Dashboard' },
              ]}
            />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
              }}
            >
              {`items={[{ label: 'Dashboard' }]}`}
            </div>
          </div>
        </div>
      </section>

      {/* Section: With icon on first item */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginTop: 0,
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          With icon slot
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-md)' }}>
          {/* Icon on first item */}
          <div>
            <Breadcrumb
              items={[
                { label: 'Explore', href: '/explore', icon: <MapPin size={16} /> },
                { label: 'Europe', href: '/explore/europe' },
                { label: 'Rome' },
              ]}
            />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
              }}
            >
              {`icon={<MapPin size={16} />} on first item`}
            </div>
          </div>

          {/* Icon on multiple items */}
          <div>
            <Breadcrumb
              items={[
                { label: 'Map', href: '/map', icon: <MapPin size={16} /> },
                { label: 'Kyoto', href: '/map/kyoto', icon: <MapPin size={16} /> },
                { label: 'Arashiyama' },
              ]}
            />
            <div
              style={{
                marginTop: 'var(--ds-alias-spacing-xxxs)',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-placeholder)',
              }}
            >
              {`icon on multiple items`}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Long path */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xl)' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginTop: 0,
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Deep path (4 levels)
        </h2>

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Asia', href: '/asia' },
            { label: 'Japan', href: '/asia/japan' },
            { label: 'Kyoto' },
          ]}
        />
      </section>

      {/* Token reference */}
      <section>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontSize: 'var(--ds-typography-body-lg-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginTop: 0,
            marginBottom: 'var(--ds-alias-spacing-md)',
          }}
        >
          Token reference
        </h2>
        <div
          style={{
            padding: 'var(--ds-alias-spacing-md)',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
            lineHeight: '1.8',
            fontFamily: 'monospace',
          }}
        >
          <div><strong>Text (all items):</strong> --ds-mapped-text-body</div>
          <div><strong>Link hover:</strong> --ds-mapped-text-action-hover</div>
          <div><strong>Icon / separator:</strong> --ds-mapped-icon-default</div>
          <div><strong>Focus ring:</strong> --ds-mapped-border-focus</div>
          <div><strong>Gap:</strong> --ds-alias-spacing-xs (8px)</div>
          <div><strong>Font size:</strong> --ds-typography-body-md-font-size (16px)</div>
          <div><strong>Line height:</strong> --ds-typography-body-md-line-height (20px)</div>
          <div><strong>Font family:</strong> --ds-brand-font-family-body (Inter)</div>
          <div><strong>Font weight:</strong> --ds-brand-font-weight-regular (400)</div>
        </div>
      </section>
    </div>
  )
}
