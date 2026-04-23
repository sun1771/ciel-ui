'use client'

import React, { useState } from 'react'
import { Card } from '@/components/layout/Card'

/* ------------------------------------------------------------------ */
/* Shared placeholder image element — gradient stand-in for real photo  */
/* ------------------------------------------------------------------ */
function PlaceholderImage({ label = 'Hotel photo' }: { label?: string }) {
  return (
    <div
      aria-label={label}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, var(--ds-mapped-surface-action-hover-light) 0%, var(--ds-mapped-surface-action-hover) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ds-mapped-text-on-action)',
        fontSize: '12px',
        fontFamily: 'var(--ds-brand-font-family-body)',
      }}
    >
      {label}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Reusable sample card body content                                     */
/* ------------------------------------------------------------------ */
function SampleCardBody({ title = 'Grand Hyatt Tokyo', subtitle = '8.8  Cheapest', detail = '1 room, king bed', price = '$2,124.42' }: {
  title?: string
  subtitle?: string
  detail?: string
  price?: string
}) {
  return (
    <>
      {/* Headline */}
      <div
        style={{
          padding: 'var(--ds-alias-spacing-sm) var(--ds-alias-spacing-sm) var(--ds-alias-spacing-none)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
            lineHeight: 'var(--ds-typography-body-md-semibold-line-height)',
            color: 'var(--ds-mapped-text-heading)',
          }}
        >
          {title}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontWeight: 'var(--ds-brand-font-weight-regular)',
            fontSize: 'var(--ds-typography-body-xsm-font-size)',
            lineHeight: 'var(--ds-typography-body-xsm-line-height)',
            color: 'var(--ds-mapped-text-body)',
          }}
        >
          {subtitle}
        </p>
      </div>
      {/* Body */}
      <div
        style={{
          padding: 'var(--ds-alias-spacing-xs) var(--ds-alias-spacing-sm)',
          fontFamily: 'var(--ds-brand-font-family-body)',
          fontWeight: 'var(--ds-brand-font-weight-regular)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          lineHeight: 'var(--ds-typography-body-sm-line-height)',
          color: 'var(--ds-mapped-text-body)',
        }}
      >
        {detail}
      </div>
      {/* Price + action */}
      <div
        style={{
          padding: 'var(--ds-alias-spacing-none) var(--ds-alias-spacing-sm) var(--ds-alias-spacing-xs)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
              fontSize: 'var(--ds-typography-body-md-semibold-font-size)',
              lineHeight: 'var(--ds-typography-body-md-semibold-line-height)',
              color: 'var(--ds-mapped-text-heading)',
            }}
          >
            {price}
          </span>
          <span
            style={{
              fontFamily: 'var(--ds-brand-font-family-body)',
              fontWeight: 'var(--ds-brand-font-weight-regular)',
              fontSize: 'var(--ds-typography-body-xsm-font-size)',
              lineHeight: 'var(--ds-typography-body-xsm-line-height)',
              color: 'var(--ds-mapped-text-body)',
            }}
          >
            Total
          </span>
        </div>
        <button
          type="button"
          style={{
            background: 'none',
            border: 'none',
            padding: '0',
            fontFamily: 'var(--ds-brand-font-family-body)',
            fontWeight: 'var(--ds-brand-font-weight-regular)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            lineHeight: 'var(--ds-typography-body-sm-line-height)',
            color: 'var(--ds-mapped-text-action)',
            cursor: 'pointer',
          }}
        >
          Details →
        </button>
      </div>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* Preview page                                                          */
/* ------------------------------------------------------------------ */
function CodeLabel({ code }: { code: string }) {
  return (
    <div
      style={{
        marginTop: '8px',
        fontFamily: 'monospace',
        fontSize: '11px',
        color: 'var(--ds-mapped-text-disabled)',
      }}
    >
      {code}
    </div>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h3
      style={{
        fontSize: '11px',
        fontWeight: 500,
        color: 'var(--ds-mapped-text-disabled)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '16px',
        marginTop: 0,
      }}
    >
      {title}
    </h3>
  )
}

export default function CardPreviewPage() {
  const [carouselPage, setCarouselPage] = useState(0)
  const carouselTotal = 4
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div style={{ maxWidth: '900px' }}>
      {/* Page header */}
      <div
        style={{
          marginBottom: '48px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--ds-mapped-border-default)',
        }}
      >
        <h1
          style={{
            fontSize: '32px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
            fontFamily: 'var(--ds-brand-font-family-heading)',
          }}
        >
          Card
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--ds-mapped-text-body)',
            marginTop: '8px',
            marginBottom: '4px',
          }}
        >
          Figma: ↴ LAYOUT / Card — node 1818:1037
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 0,
            fontFamily: 'monospace',
          }}
        >
          import {'{ Card }'} from &apos;@/components/layout/Card&apos;
        </p>
      </div>

      {/* States */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
            marginTop: 0,
          }}
        >
          States
        </h2>
        <SectionHeader title="Default / Hover / Selected / Loading" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>

          {/* Default */}
          <div>
            <Card image={<PlaceholderImage label="Photo 1" />}>
              <SampleCardBody />
            </Card>
            <CodeLabel code="state=default" />
          </div>

          {/* Hover note (hover is CSS-only) */}
          <div>
            <Card
              image={<PlaceholderImage label="Photo 1" />}
              style={{ borderWidth: 'var(--ds-alias-border-width-md)', borderColor: 'var(--ds-mapped-border-action-hover)' } as React.CSSProperties}
            >
              <SampleCardBody title="Hover state (simulated)" />
            </Card>
            <CodeLabel code="state=hover (CSS only)" />
          </div>

          {/* Selected */}
          <div>
            <Card
              image={<PlaceholderImage label="Photo 1" />}
              isSelected
            >
              <SampleCardBody title="Selected card" />
            </Card>
            <CodeLabel code="isSelected" />
          </div>

          {/* Loading */}
          <div>
            <Card isLoading aria-label="Loading hotel card" />
            <CodeLabel code="isLoading" />
          </div>
        </div>
      </section>

      {/* No image */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
            marginTop: 0,
          }}
        >
          Content Only (no image)
        </h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <Card>
              <SampleCardBody title="No image slot" subtitle="Content only card" />
            </Card>
            <CodeLabel code="<Card> (no image prop)" />
          </div>
          <div>
            <Card isSelected>
              <SampleCardBody title="Selected, no image" subtitle="Border: action blue" />
            </Card>
            <CodeLabel code="isSelected (no image)" />
          </div>
        </div>
      </section>

      {/* With carousel */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
            marginTop: 0,
          }}
        >
          With Carousel
        </h2>
        <SectionHeader title="showCarousel + carouselPage / carouselTotal" />
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <Card
              image={
                <PlaceholderImage label={`Photo ${carouselPage + 1} of ${carouselTotal}`} />
              }
              showCarousel
              carouselPage={carouselPage}
              carouselTotal={carouselTotal}
              onCarouselPrev={carouselPage > 0 ? () => setCarouselPage((p) => p - 1) : undefined}
              onCarouselNext={
                carouselPage < carouselTotal - 1
                  ? () => setCarouselPage((p) => p + 1)
                  : undefined
              }
            >
              <SampleCardBody title={`Photo ${carouselPage + 1} of ${carouselTotal}`} />
            </Card>
            <CodeLabel
              code={`showCarousel carouselPage={${carouselPage}} carouselTotal={${carouselTotal}}`}
            />
          </div>

          {/* showCarousel no callbacks — nav disabled */}
          <div>
            <Card
              image={<PlaceholderImage label="No handlers" />}
              showCarousel
            >
              <SampleCardBody title="Carousel arrows disabled" subtitle="No onCarouselPrev/Next" />
            </Card>
            <CodeLabel code="showCarousel (no callbacks → disabled arrows)" />
          </div>
        </div>
      </section>

      {/* Interactive selected toggle */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
            marginTop: 0,
          }}
        >
          Interactive — Click to Select
        </h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {['Hotel Okura', 'Grand Hyatt', 'Park Hyatt'].map((name, i) => (
            <div key={name}>
              <Card
                image={<PlaceholderImage label={name} />}
                isSelected={isSelected && i === 0}
                onClick={() => setIsSelected((v) => !v)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setIsSelected((v) => !v)
                  }
                }}
              >
                <SampleCardBody title={name} price={`$${(1200 + i * 340).toFixed(2)}`} />
              </Card>
              <CodeLabel code={`isSelected={${isSelected && i === 0}}`} />
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: '12px',
          }}
        >
          Click the first card to toggle selection
        </p>
      </section>

      {/* Token reference */}
      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: '12px',
          color: 'var(--ds-mapped-text-body)',
          fontFamily: 'monospace',
        }}
      >
        <strong style={{ display: 'block', marginBottom: '8px', fontFamily: 'var(--ds-brand-font-family-body)' }}>
          Tokens used:
        </strong>
        --ds-mapped-surface-default — card background<br />
        --ds-mapped-border-default — default 1px border<br />
        --ds-mapped-border-action-hover — hover 2px border<br />
        --ds-mapped-border-action — selected 2px border<br />
        --ds-mapped-surface-disabled — skeleton placeholders<br />
        --ds-alias-border-radius-lg — card corner radius (8px)<br />
        --ds-alias-border-width-sm — default border (1px)<br />
        --ds-alias-border-width-md — hover/selected border (2px)<br />
        --ds-alias-spacing-sm — content padding-x (12px)<br />
        --ds-alias-spacing-xs — content padding-y (8px)<br />
        --ds-alias-spacing-xxs — carousel nav padding (4px)
      </div>
    </div>
  )
}
