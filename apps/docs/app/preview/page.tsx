export default function PreviewIndexPage() {
  const cards = [
    { label: 'Buttons →', href: '/preview/buttons' },
    { label: 'Icons →', href: '/preview/icons' },
    { label: 'Logo →', href: '/preview/logo' },
  ]

  return (
    <div>
      <h1
        style={{
          fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
          fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
          fontSize: 'var(--ds-responsive-h4-font-size)',
          lineHeight: 'var(--ds-responsive-h4-line-height)',
          color: 'var(--ds-mapped-text-heading)',
          marginBottom: 'var(--ds-alias-spacing-xs)',
        }}
      >
        Component Preview
      </h1>
      <p
        style={{
          fontSize: 'var(--ds-typography-body-md-font-size)',
          lineHeight: 'var(--ds-typography-body-md-line-height)',
          color: 'var(--ds-mapped-text-placeholder)',
          marginBottom: 'var(--ds-alias-spacing-xl)',
        }}
      >
        Select a component from the sidebar to begin
      </p>

      <div style={{ display: 'flex', gap: 'var(--ds-alias-spacing-md)', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            style={{
              display: 'block',
              textDecoration: 'none',
              background: 'var(--ds-mapped-surface-default)',
              border: '1px solid var(--ds-mapped-border-default)',
              borderRadius: 'var(--ds-alias-border-radius-lg)',
              padding: 'var(--ds-alias-spacing-lg)',
              color: 'var(--ds-mapped-text-action)',
              fontSize: 'var(--ds-typography-body-md-font-size)',
              fontWeight: 500,
              minWidth: '160px',
              transition: 'border-color 150ms ease',
            }}
          >
            {card.label}
          </a>
        ))}
      </div>
    </div>
  )
}
