'use client'

import React, { useState } from 'react'
import { TravelResultCard } from '@/recipes/travel/TravelResultCard'

/* Gradient stand-in for a real photo */
function PlaceholderImage({ label = 'Photo' }: { label?: string }) {
  return (
    <div
      aria-label={label}
      style={{
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(135deg, var(--ds-mapped-surface-action-hover-light) 0%, var(--ds-mapped-surface-action-hover) 100%)',
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

/* Round airline logo stand-in */
function LogoCircle({ color }: { color: string }) {
  return <div style={{ width: '100%', height: '100%', background: color }} />
}

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

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: '24px',
        fontWeight: 600,
        color: 'var(--ds-mapped-text-heading)',
        marginBottom: '24px',
        marginTop: 0,
      }}
    >
      {children}
    </h2>
  )
}

const row: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'flex-start',
}

const hotelImages = [
  <PlaceholderImage key="1" label="Hotel 1 / 4" />,
  <PlaceholderImage key="2" label="Hotel 2 / 4" />,
  <PlaceholderImage key="3" label="Hotel 3 / 4" />,
  <PlaceholderImage key="4" label="Hotel 4 / 4" />,
]

export default function CardPreviewPage() {
  const [selected, setSelected] = useState<number | null>(0)

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
          Figma: ↴ LAYOUT / Card — node 1818:1037 + .Card Content 3455:3491 (Type × Status)
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: 0,
            fontFamily: 'monospace',
          }}
        >
          Recipe built from Card, CardMedia, CardHeader, CardBody, CardMetric, CardFooter, CardPrice
          — see recipes/travel/TravelResultCard.tsx
        </p>
      </div>

      {/* Hotel */}
      <section style={{ marginBottom: '48px' }}>
        <H2>Hotel</H2>
        <SectionHeader title="recommended / normal / loading / more" />
        <div style={row}>
          <div>
            <TravelResultCard
              type="hotel"
              status="recommended"
              headline="Grand Hyatt Tokyo"
              ratingScore="8.8"
              tagLabel="Cheapest"
              roomInfo="1 room, king bed"
              price="$2,124.42"
              images={hotelImages}
            />
            <CodeLabel code='type="hotel" status="recommended"' />
          </div>
          <div>
            <TravelResultCard
              type="hotel"
              status="normal"
              headline="Park Hyatt Tokyo"
              ratingScore="8.8"
              tagLabel="Cheapest"
              roomInfo="1 room, king bed"
              price="$2,124.42"
              images={hotelImages}
            />
            <CodeLabel code='type="hotel" status="normal"' />
          </div>
          <div>
            <TravelResultCard type="hotel" status="loading" aria-label="Loading hotel card" />
            <CodeLabel code='type="hotel" status="loading"' />
          </div>
          <div>
            <TravelResultCard type="hotel" status="more" onDiscoverMore={() => {}} />
            <CodeLabel code='type="hotel" status="more"' />
          </div>
        </div>
      </section>

      {/* Rental car */}
      <section style={{ marginBottom: '48px' }}>
        <H2>Rental car</H2>
        <SectionHeader title="recommended / normal / loading / more" />
        <div style={row}>
          <div>
            <TravelResultCard
              type="rental car"
              status="recommended"
              headline="Toyota Corolla"
              rating="4.4/5"
              tagLabel="Cheapest"
              carSpecs={{ fuel: 'Gasoline', seats: 5, doors: 4, bags: 2 }}
              price="$2,124.42"
              image={<PlaceholderImage label="Car photo" />}
            />
            <CodeLabel code='type="rental car" status="recommended"' />
          </div>
          <div>
            <TravelResultCard
              type="rental car"
              status="normal"
              headline="Nissan Leaf"
              rating="4.4/5"
              tagLabel="Cheapest"
              carSpecs={{ fuel: 'Gasoline', seats: 5, doors: 4, bags: 2 }}
              price="$2,124.42"
              image={<PlaceholderImage label="Car photo" />}
            />
            <CodeLabel code='type="rental car" status="normal"' />
          </div>
          <div>
            <TravelResultCard
              type="rental car"
              status="loading"
              aria-label="Loading rental car card"
            />
            <CodeLabel code='type="rental car" status="loading"' />
          </div>
          <div>
            <TravelResultCard type="rental car" status="more" onDiscoverMore={() => {}} />
            <CodeLabel code='type="rental car" status="more"' />
          </div>
        </div>
      </section>

      {/* Flight */}
      <section style={{ marginBottom: '48px' }}>
        <H2>Flight</H2>
        <SectionHeader title="recommended / normal / loading / more — no image" />
        <div style={row}>
          <div>
            <TravelResultCard
              type="flight"
              status="recommended"
              headline="ANA"
              tagLabel="Cheapest"
              airlineLogos={[
                <LogoCircle key="a" color="#0022ff" />,
                <LogoCircle key="b" color="#667aff" />,
              ]}
              flightLegs={[
                { route: 'SFO→NRT', stops: 'Nonstop' },
                { route: 'NRT→SFO', stops: 'Nonstop' },
              ]}
              price="$2,124.42"
            />
            <CodeLabel code='type="flight" status="recommended"' />
          </div>
          <div>
            <TravelResultCard
              type="flight"
              status="normal"
              headline="JAL"
              tagLabel="Cheapest"
              airlineLogos={[
                <LogoCircle key="a" color="#0022ff" />,
                <LogoCircle key="b" color="#667aff" />,
              ]}
              flightLegs={[
                { route: 'SFO→NRT', stops: 'Nonstop' },
                { route: 'NRT→SFO', stops: 'Nonstop' },
              ]}
              price="$2,124.42"
            />
            <CodeLabel code='type="flight" status="normal"' />
          </div>
          <div>
            <TravelResultCard type="flight" status="loading" aria-label="Loading flight card" />
            <CodeLabel code='type="flight" status="loading"' />
          </div>
          <div>
            <TravelResultCard type="flight" status="more" onDiscoverMore={() => {}} />
            <CodeLabel code='type="flight" status="more"' />
          </div>
        </div>
      </section>

      {/* Interactive selection */}
      <section style={{ marginBottom: '48px' }}>
        <H2>Interactive — Click to Select</H2>
        <div style={row}>
          {['Hotel Okura', 'Grand Hyatt', 'Park Hyatt'].map((name, i) => (
            <div key={name}>
              <TravelResultCard
                type="hotel"
                status={i === 0 ? 'recommended' : 'normal'}
                headline={name}
                ratingScore="8.8"
                tagLabel="Cheapest"
                roomInfo="1 room, king bed"
                price={`$${(1200 + i * 340).toFixed(2)}`}
                images={hotelImages}
                isSelected={selected === i}
                onClick={() => setSelected((v) => (v === i ? null : i))}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected((v) => (v === i ? null : i))
                  }
                }}
              />
              <CodeLabel code={`isSelected={${selected === i}}`} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: 'var(--ds-mapped-text-disabled)', marginTop: '12px' }}>
          Click a card to toggle selection
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
        <strong
          style={{
            display: 'block',
            marginBottom: '8px',
            fontFamily: 'var(--ds-brand-font-family-body)',
          }}
        >
          Recipe (apps/docs/recipes/travel) composing Card parts + Chip (recommended + green chips),
          Button (Details / Discover more), CarouselItem + Pagination (hotel carousel), icons
          (Award, Star, Bed, Gasoline, Users, Car, Baggage, ArrowRight), graphics (Hotel / Flight /
          CarRental).
        </strong>
        --ds-mapped-surface-default — card background
        <br />
        --ds-mapped-border-default / -action-hover / -action — default / hover / selected border
        <br />
        --ds-mapped-text-heading — headline + price value
        <br />
        --ds-mapped-text-body — body / chips / suffix
        <br />
        --ds-mapped-icon-default — body metric icons
        <br />
        --ds-typography-body-md-semibold — headline + price · body-sm — body · body-xsm — chips /
        suffix
      </div>
    </div>
  )
}
