'use client'

import { useState } from 'react'
import { PackageCard } from '@acme/ui'

export default function PackageCardPreviewPage() {
  const [defaultPage, setDefaultPage] = useState(1)
  const [itineraryPage, setItineraryPage] = useState(1)
  const totalPages = 5

  return (
    <div style={{ maxWidth: '480px' }}>
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
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          PackageCard
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: '8px',
          }}
        >
          Figma: ↴ LAYOUT / Package Card — set node 2181:1455 (Loaded × Type)
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: '4px',
            fontFamily: 'monospace',
          }}
        >
          {"import { PackageCard } from '@acme/ui'"}
        </p>
      </div>

      {/* Section: variant="default" */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
          }}
        >
          variant=&quot;default&quot;
        </h2>

        <div style={{ marginBottom: '12px' }}>
          <PackageCard
            variant="default"
            heading="Package Card"
            page={defaultPage}
            totalPages={totalPages}
            onPrevPage={() => setDefaultPage((p) => Math.max(1, p - 1))}
            onNextPage={() => setDefaultPage((p) => Math.min(totalPages, p + 1))}
            onAction={() => alert('TripOn AI action')}
          >
            <div
              style={{
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                padding: '12px 16px',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
              }}
            >
              Content area — page {defaultPage} of {totalPages}
            </div>
          </PackageCard>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            variant=&quot;default&quot; heading=&quot;Package Card&quot; page={defaultPage}{' '}
            totalPages={totalPages}
          </div>
        </div>
      </section>

      {/* Section: variant="itinerary" */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
          }}
        >
          variant=&quot;itinerary&quot;
        </h2>

        <div style={{ marginBottom: '12px' }}>
          <PackageCard
            variant="itinerary"
            heading="Day-by-Day Itinerary"
            page={itineraryPage}
            totalPages={7}
            onPrevPage={() => setItineraryPage((p) => Math.max(1, p - 1))}
            onNextPage={() => setItineraryPage((p) => Math.min(7, p + 1))}
            onAction={() => alert('TripOn AI action')}
          >
            <div
              style={{
                background: 'var(--ds-mapped-surface-action-hover-light)',
                borderRadius: 'var(--ds-alias-border-radius-md)',
                padding: '12px 16px',
                color: 'var(--ds-mapped-text-body)',
                fontSize: 'var(--ds-typography-body-md-font-size)',
              }}
            >
              Day {itineraryPage} activities go here
            </div>
          </PackageCard>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            variant=&quot;itinerary&quot; heading=&quot;Day-by-Day Itinerary&quot; page=
            {itineraryPage} totalPages={7}
          </div>
        </div>
      </section>

      {/* Section: loaded=false (Not curated yet.) */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
          }}
        >
          loaded=&#123;false&#125; — not curated yet
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <PackageCard
              variant="default"
              loaded={false}
              heading="Package Card"
              onAction={() => alert('should not fire')}
            />
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              variant=&quot;default&quot; loaded=&#123;false&#125; — action + nav disabled,
              placeholder body
            </div>
          </div>

          <div>
            <PackageCard
              variant="itinerary"
              loaded={false}
              heading="Day-by-Day Itinerary"
              page={1}
            />
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              variant=&quot;itinerary&quot; loaded=&#123;false&#125; — dimmed &quot;Day 1&quot;
              label, placeholder body
            </div>
          </div>

          <div>
            <PackageCard
              variant="default"
              loaded={false}
              heading="Custom placeholder"
              emptyText="No plan generated yet — ask TripOn AI to build one."
            />
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              emptyText=&quot;…&quot; — custom placeholder text
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nav button states */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading)',
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: '24px',
          }}
        >
          Nav button states
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <PackageCard
              variant="default"
              heading="First page (prev disabled)"
              page={1}
              totalPages={3}
            >
              <div
                style={{
                  height: '32px',
                  background: 'var(--ds-mapped-surface-action-hover-light)',
                  borderRadius: 'var(--ds-alias-border-radius-md)',
                }}
              />
            </PackageCard>
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              page=1 totalPages=3 — prev disabled
            </div>
          </div>

          <div>
            <PackageCard
              variant="default"
              heading="Last page (next disabled)"
              page={3}
              totalPages={3}
            >
              <div
                style={{
                  height: '32px',
                  background: 'var(--ds-mapped-surface-action-hover-light)',
                  borderRadius: 'var(--ds-alias-border-radius-md)',
                }}
              />
            </PackageCard>
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              page=3 totalPages=3 — next disabled
            </div>
          </div>

          <div>
            <PackageCard
              variant="itinerary"
              heading="Itinerary — middle page"
              page={3}
              totalPages={7}
            >
              <div
                style={{
                  height: '32px',
                  background: 'var(--ds-mapped-surface-action-hover-light)',
                  borderRadius: 'var(--ds-alias-border-radius-md)',
                }}
              />
            </PackageCard>
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: 'var(--ds-mapped-text-disabled)',
              }}
            >
              variant=&quot;itinerary&quot; page=3 totalPages=7
            </div>
          </div>
        </div>
      </section>

      {/* Token reference */}
      <section style={{ marginBottom: '48px' }}>
        <div
          style={{
            padding: '16px',
            background: 'var(--ds-mapped-surface-action-hover-light)',
            borderRadius: 'var(--ds-alias-border-radius-lg)',
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-body)',
          }}
        >
          <strong>Tokens used (PackageCard.module.css):</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '16px', lineHeight: '1.8' }}>
            <li>--ds-mapped-surface-default — card background</li>
            <li>--ds-mapped-border-default — card border</li>
            <li>--ds-mapped-text-heading — heading + day label (loaded)</li>
            <li>--ds-mapped-text-disabled — day label (loaded=false)</li>
            <li>--ds-mapped-text-placeholder — &quot;Not curated yet.&quot; body (loaded=false)</li>
            <li>--ds-alias-border-radius-lg — card corner radius</li>
            <li>--ds-alias-border-width-sm — card border (1px)</li>
            <li>--ds-alias-spacing-sm — header/content vertical padding</li>
            <li>--ds-alias-spacing-md — horizontal padding + header gap</li>
            <li>--ds-alias-spacing-xs — nav group gap</li>
            <li>--ds-typography-heading-h8-* — heading typography</li>
            <li>--ds-typography-body-md-* — day label typography</li>
          </ul>
          <p style={{ marginTop: '8px', fontSize: 'inherit' }}>
            <strong>Composed from:</strong> ButtonIcon (action btn tokens via Button.module.css) +
            CarouselItem (nav btn tokens via Carousel.module.css)
          </p>
        </div>
      </section>
    </div>
  )
}
