'use client'

import { Carousel } from '@acme/ui'
import { CarouselItem } from '@acme/ui'

export default function CarouselPreviewPage() {
  return (
    <div style={{ padding: 'var(--ds-alias-spacing-xl)', maxWidth: '800px', margin: '0 auto' }}>
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
            fontSize: 'var(--ds-responsive-h4-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-heading)',
            color: 'var(--ds-mapped-text-heading)',
            margin: 0,
          }}
        >
          Carousel
        </h1>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-md-font-size)',
            color: 'var(--ds-mapped-text-body)',
            marginTop: 'var(--ds-alias-spacing-xs)',
            marginBottom: 0,
          }}
        >
          Figma: NAVIGATION / Carousel — nodes 852:391 (CarouselItem) / 3265:2551 (Carousel)
        </p>
        <p
          style={{
            fontSize: 'var(--ds-typography-body-sm-font-size)',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 'var(--ds-alias-spacing-xxs)',
            fontFamily: 'monospace',
          }}
        >
          {"import { Carousel, CarouselItem } from '@acme/ui'"}
        </p>
      </div>

      {/* ---- Section: CarouselItem ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxxl)' }}>
        <h2
          style={{
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-heading)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          CarouselItem
        </h2>

        {/* Directions */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Direction
          </h3>
          <div
            style={{
              display: 'flex',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
              background: 'var(--ds-mapped-surface-action)',
              padding: 'var(--ds-alias-spacing-lg)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="left" label="Previous" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                direction="left"
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="right" label="Next" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                direction="right"
              </div>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Shape (on dark bg to show transparency)
          </h3>
          <div
            style={{
              display: 'flex',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
              background: 'var(--ds-mapped-surface-action)',
              padding: 'var(--ds-alias-spacing-lg)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="left" shape="round" label="Previous (round)" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                shape="round"
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="left" shape="rectangle" label="Previous (rectangle)" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                shape="rectangle"
              </div>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Sizes
          </h3>
          <div
            style={{
              display: 'flex',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
              background: 'var(--ds-mapped-surface-action)',
              padding: 'var(--ds-alias-spacing-lg)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="right" size="lg" label="Next (lg)" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                size="lg"
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="right" size="sm" label="Next (sm)" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                size="sm"
              </div>
            </div>
          </div>
        </div>

        {/* States */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            States
          </h3>
          <div
            style={{
              display: 'flex',
              gap: 'var(--ds-alias-spacing-lg)',
              alignItems: 'center',
              background: 'var(--ds-mapped-surface-action)',
              padding: 'var(--ds-alias-spacing-lg)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="right" label="Next (default)" />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                default
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <CarouselItem direction="right" label="Next (disabled)" disabled />
              <div
                style={{
                  marginTop: '8px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: '#fff',
                }}
              >
                disabled
              </div>
            </div>
          </div>
          <p
            style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', marginTop: '8px' }}
          >
            Hover and focus-visible states are interactive — hover or tab to the buttons above to
            see them.
          </p>
        </div>
      </section>

      {/* ---- Section: Carousel (full) ---- */}
      <section style={{ marginBottom: 'var(--ds-alias-spacing-xxxl)' }}>
        <h2
          style={{
            fontSize: 'var(--ds-responsive-h6-font-size)',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontFamily: 'var(--ds-brand-font-family-heading)',
            color: 'var(--ds-mapped-text-heading)',
            marginBottom: 'var(--ds-alias-spacing-lg)',
          }}
        >
          Carousel (full)
        </h2>

        {/* Default — round nav buttons, lg, 3 slides */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Default — size=lg, shape=round, 3 slides
          </h3>
          <div
            style={{
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-xl)',
              padding: 'var(--ds-alias-spacing-lg)',
            }}
          >
            <Carousel size="lg" shape="round">
              <div
                style={{
                  height: '120px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                Slide 1
              </div>
              <div
                style={{
                  height: '120px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                Slide 2
              </div>
              <div
                style={{
                  height: '120px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                Slide 3
              </div>
            </Carousel>
          </div>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Carousel size="lg" shape="round">  {/* 3 children */}  </Carousel>'}
          </div>
        </div>

        {/* Rectangle nav buttons */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            shape=rectangle, 4 slides
          </h3>
          <div
            style={{
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-xl)',
              padding: 'var(--ds-alias-spacing-lg)',
            }}
          >
            <Carousel size="lg" shape="rectangle">
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Paris
              </div>
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Tokyo
              </div>
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                New York
              </div>
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Sydney
              </div>
            </Carousel>
          </div>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Carousel size="lg" shape="rectangle">  {/* 4 children */}  </Carousel>'}
          </div>
        </div>

        {/* Small size */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            size=sm
          </h3>
          <div
            style={{
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-xl)',
              padding: 'var(--ds-alias-spacing-lg)',
            }}
          >
            <Carousel size="sm" shape="round">
              <div
                style={{
                  height: '80px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Slide 1
              </div>
              <div
                style={{
                  height: '80px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Slide 2
              </div>
              <div
                style={{
                  height: '80px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Slide 3
              </div>
            </Carousel>
          </div>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Carousel size="sm" shape="round">  {/* 3 children */}  </Carousel>'}
          </div>
        </div>

        {/* Disabled */}
        <div style={{ marginBottom: 'var(--ds-alias-spacing-lg)' }}>
          <h3
            style={{
              fontSize: 'var(--ds-typography-body-sm-font-size)',
              fontWeight: 'var(--ds-brand-font-weight-medium)',
              color: 'var(--ds-mapped-text-disabled)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: 'var(--ds-alias-spacing-sm)',
            }}
          >
            Disabled
          </h3>
          <div
            style={{
              background: 'var(--ds-mapped-surface-action)',
              borderRadius: 'var(--ds-alias-border-radius-xl)',
              padding: 'var(--ds-alias-spacing-lg)',
            }}
          >
            <Carousel size="lg" shape="round" disabled>
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Slide 1
              </div>
              <div
                style={{
                  height: '100px',
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Slide 2
              </div>
            </Carousel>
          </div>
          <div
            style={{
              marginTop: '8px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--ds-mapped-text-disabled)',
            }}
          >
            {'<Carousel disabled>  {/* 2 children */}  </Carousel>'}
          </div>
        </div>
      </section>

      {/* Token reference */}
      <div
        style={{
          padding: 'var(--ds-alias-spacing-md)',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: 'var(--ds-alias-border-radius-lg)',
          fontSize: 'var(--ds-typography-body-sm-font-size)',
          color: 'var(--ds-mapped-text-body)',
        }}
      >
        <strong>Tokens used:</strong>
        <ul style={{ margin: '8px 0 0', padding: '0 0 0 16px', lineHeight: '1.8' }}>
          <li>--ds-mapped-surface-default-transparent — nav button bg (default/disabled)</li>
          <li>--ds-mapped-surface-action-hover-light — nav button bg on hover</li>
          <li>--ds-mapped-surface-default — nav button bg on focus</li>
          <li>--ds-mapped-icon-action — nav button icon color (default)</li>
          <li>--ds-mapped-icon-action-hover — nav button icon color on hover</li>
          <li>--ds-mapped-icon-disabled — nav button icon color when disabled</li>
          <li>--ds-mapped-border-focus — focus ring color</li>
          <li>--ds-alias-border-width-md — focus ring width (2px)</li>
          <li>--ds-alias-border-radius-round — round shape (64px)</li>
          <li>--ds-alias-border-radius-lg — rectangle shape (8px)</li>
          <li>--ds-alias-spacing-xxs — nav button padding (4px)</li>
          <li>--ds-alias-spacing-xs — controls gap (8px)</li>
        </ul>
      </div>
    </div>
  )
}
