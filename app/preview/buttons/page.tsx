'use client'

import { Button } from '@/components/primitives/Button'
import { ButtonVertical } from '@/components/primitives/Button'
import { ButtonIcon } from '@/components/primitives/Button'
import { Search, MapPin, Plus } from '@/icons'
import type { ButtonVariant, ButtonSize } from '@/components/primitives/Button'

const variants: ButtonVariant[] = ['default', 'outline', 'transparent']
const sizes: ButtonSize[] = ['lg', 'sm']

const sectionStyle: React.CSSProperties = {
  marginBottom: 'var(--ds-alias-spacing-xxl)',
}

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
  fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
  fontSize: 'var(--ds-typography-body-lg-font-size)',
  lineHeight: 'var(--ds-typography-body-lg-line-height)',
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: 'var(--ds-alias-spacing-md)',
  paddingBottom: 'var(--ds-alias-spacing-xs)',
  borderBottom: '1px solid var(--ds-mapped-border-default)',
}

const subHeadingStyle: React.CSSProperties = {
  fontSize: 'var(--ds-typography-body-sm-font-size)',
  fontWeight: 500,
  color: 'var(--ds-mapped-text-body)',
  marginBottom: 'var(--ds-alias-spacing-xs)',
  marginTop: 'var(--ds-alias-spacing-md)',
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'var(--ds-alias-spacing-md)',
  marginBottom: 'var(--ds-alias-spacing-sm)',
}

const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 'var(--ds-alias-spacing-xxs)',
}

const codeStyle: React.CSSProperties = {
  fontSize: '11px',
  color: 'var(--ds-mapped-text-placeholder)',
  background: 'var(--ds-mapped-surface-disabled)',
  padding: '2px 6px',
  borderRadius: 'var(--ds-alias-border-radius-sm)',
}

const tokenCalloutStyle: React.CSSProperties = {
  fontSize: '12px',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: 'var(--ds-alias-spacing-md)',
  padding: 'var(--ds-alias-spacing-xs)',
  borderLeft: '2px solid var(--ds-mapped-border-default)',
}

export default function ButtonsPreviewPage() {
  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-xl)',
        }}
      >
        Button Components
      </h1>

      {/* ─── SECTION 1: Button ─────────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Button</h2>

        {/* Variants */}
        <h3 style={subHeadingStyle}>Variants (size="lg")</h3>
        <div style={rowStyle}>
          {variants.map((v) => (
            <div key={v} style={labelStyle}>
              <Button variant={v} size="lg">
                {v === 'default' ? 'Primary' : v.charAt(0).toUpperCase() + v.slice(1)}
              </Button>
              <code style={codeStyle}>variant="{v}"</code>
            </div>
          ))}
        </div>

        {/* Sizes */}
        <h3 style={subHeadingStyle}>Sizes (variant="default")</h3>
        <div style={rowStyle}>
          {sizes.map((s) => (
            <div key={s} style={labelStyle}>
              <Button variant="default" size={s}>
                Button {s}
              </Button>
              <code style={codeStyle}>size="{s}"</code>
            </div>
          ))}
        </div>

        {/* States */}
        <h3 style={subHeadingStyle}>States (variant="default" size="lg")</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <Button variant="default" size="lg">Default</Button>
            <code style={codeStyle}>default</code>
          </div>
          <div style={labelStyle}>
            <Button variant="default" size="lg" disabled>Disabled</Button>
            <code style={codeStyle}>disabled</code>
          </div>
          <div style={labelStyle}>
            <Button variant="default" size="lg" isLoading>Loading</Button>
            <code style={codeStyle}>isLoading</code>
          </div>
        </div>

        {/* With icons */}
        <h3 style={subHeadingStyle}>With Icons</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <Button variant="default" size="lg" iconLeft={<Search size={16} />}>
              Icon Left
            </Button>
            <code style={codeStyle}>iconLeft={'{<Search size={16} />}'}</code>
          </div>
          <div style={labelStyle}>
            <Button variant="default" size="lg" iconRight={<MapPin size={16} />}>
              Icon Right
            </Button>
            <code style={codeStyle}>iconRight={'{<MapPin size={16} />}'}</code>
          </div>
          <div style={labelStyle}>
            <Button
              variant="default"
              size="lg"
              iconLeft={<Search size={16} />}
              iconRight={<MapPin size={16} />}
            >
              Both Icons
            </Button>
            <code style={codeStyle}>iconLeft + iconRight</code>
          </div>
          <div style={labelStyle}>
            <Button variant="default" size="lg" isLoading iconLeft={<Search size={16} />}>
              Loading + Icon
            </Button>
            <code style={codeStyle}>isLoading + iconLeft</code>
          </div>
        </div>

        <p style={tokenCalloutStyle}>
          Tokens: background uses <code>var(--ds-mapped-surface-action)</code>,
          text uses <code>var(--ds-mapped-text-on-action)</code>
        </p>
      </section>

      {/* ─── SECTION 2: ButtonVertical ─────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Button Vertical</h2>

        {/* Variants */}
        <h3 style={subHeadingStyle}>Variants (size="lg")</h3>
        <div style={rowStyle}>
          {variants.map((v) => (
            <div key={v} style={labelStyle}>
              <ButtonVertical variant={v} size="lg" iconTop={<Plus size={20} />}>
                {v === 'default' ? 'Primary' : v.charAt(0).toUpperCase() + v.slice(1)}
              </ButtonVertical>
              <code style={codeStyle}>variant="{v}"</code>
            </div>
          ))}
        </div>

        {/* Sizes */}
        <h3 style={subHeadingStyle}>Sizes (variant="default")</h3>
        <div style={rowStyle}>
          {sizes.map((s) => (
            <div key={s} style={labelStyle}>
              <ButtonVertical variant="default" size={s} iconTop={<Plus size={s === 'lg' ? 20 : 16} />}>
                Button {s}
              </ButtonVertical>
              <code style={codeStyle}>size="{s}"</code>
            </div>
          ))}
        </div>

        {/* States */}
        <h3 style={subHeadingStyle}>States (variant="default" size="lg")</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <ButtonVertical variant="default" size="lg" iconTop={<Plus size={20} />}>
              Default
            </ButtonVertical>
            <code style={codeStyle}>default</code>
          </div>
          <div style={labelStyle}>
            <ButtonVertical variant="default" size="lg" disabled iconTop={<Plus size={20} />}>
              Disabled
            </ButtonVertical>
            <code style={codeStyle}>disabled</code>
          </div>
          <div style={labelStyle}>
            <ButtonVertical variant="default" size="lg" isLoading>
              Loading
            </ButtonVertical>
            <code style={codeStyle}>isLoading</code>
          </div>
        </div>

        {/* With icons */}
        <h3 style={subHeadingStyle}>With Icons</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <ButtonVertical variant="default" size="lg" iconTop={<Search size={20} />}>
              Icon Top
            </ButtonVertical>
            <code style={codeStyle}>iconTop</code>
          </div>
          <div style={labelStyle}>
            <ButtonVertical variant="default" size="lg" iconBottom={<MapPin size={20} />}>
              Icon Bottom
            </ButtonVertical>
            <code style={codeStyle}>iconBottom</code>
          </div>
          <div style={labelStyle}>
            <ButtonVertical
              variant="default"
              size="lg"
              iconTop={<Search size={20} />}
              iconBottom={<MapPin size={20} />}
            >
              Both
            </ButtonVertical>
            <code style={codeStyle}>iconTop + iconBottom</code>
          </div>
          <div style={labelStyle}>
            <ButtonVertical
              variant="default"
              size="lg"
              iconTop={<Plus size={20} />}
              supportText="Subtitle"
            >
              With Support Text
            </ButtonVertical>
            <code style={codeStyle}>supportText</code>
          </div>
        </div>

        <p style={tokenCalloutStyle}>
          Tokens: background uses <code>var(--ds-mapped-surface-action)</code>,
          text uses <code>var(--ds-mapped-text-on-action)</code>
        </p>
      </section>

      {/* ─── SECTION 3: ButtonIcon ─────────────────────────────────────────── */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Button Icon</h2>

        {/* Variants */}
        <h3 style={subHeadingStyle}>Variants (size="lg")</h3>
        <div style={rowStyle}>
          {variants.map((v) => (
            <div key={v} style={labelStyle}>
              <ButtonIcon
                variant={v}
                size="lg"
                icon={<Search size={20} />}
                label={`Search — ${v}`}
              />
              <code style={codeStyle}>variant="{v}"</code>
            </div>
          ))}
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="lg"
              shape="round"
              icon={<Plus size={20} />}
              label="Add — round"
            />
            <code style={codeStyle}>shape="round"</code>
          </div>
        </div>

        {/* Sizes */}
        <h3 style={subHeadingStyle}>Sizes (variant="default")</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="sm"
              icon={<Search size={16} />}
              label="Search sm"
            />
            <code style={codeStyle}>size="sm" · 16px icon</code>
          </div>
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="lg"
              icon={<Search size={20} />}
              label="Search lg"
            />
            <code style={codeStyle}>size="lg" · 20px icon</code>
          </div>
        </div>

        {/* States */}
        <h3 style={subHeadingStyle}>States (variant="default" size="lg")</h3>
        <div style={rowStyle}>
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="lg"
              icon={<MapPin size={20} />}
              label="Map Pin — default"
            />
            <code style={codeStyle}>default</code>
          </div>
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="lg"
              disabled
              icon={<MapPin size={20} />}
              label="Map Pin — disabled"
            />
            <code style={codeStyle}>disabled</code>
          </div>
          <div style={labelStyle}>
            <ButtonIcon
              variant="default"
              size="lg"
              isLoading
              icon={<MapPin size={20} />}
              label="Map Pin — loading"
            />
            <code style={codeStyle}>isLoading</code>
          </div>
        </div>

        <p style={tokenCalloutStyle}>
          Tokens: background uses <code>var(--ds-mapped-surface-action)</code>,
          icon color uses <code>var(--ds-mapped-icon-on-action)</code>
        </p>
      </section>
    </div>
  )
}
