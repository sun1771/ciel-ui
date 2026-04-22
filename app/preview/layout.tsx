'use client'

import React, { useState, useEffect } from 'react'

const navLinks = [
  { href: '/preview/avatar', label: 'Avatar' },
  { href: '/preview/badge', label: 'Badge' },
  { href: '/preview/buttons', label: 'Buttons' },
  { href: '/preview/chip', label: 'Chip' },
  { href: '/preview/checkbox', label: 'Checkbox' },
  { href: '/preview/icons', label: 'Icons' },
  { href: '/preview/menu', label: 'Menu' },
  { href: '/preview/label', label: 'Label' },
  { href: '/preview/field', label: 'Field + Input' },
  { href: '/preview/radio-button', label: 'RadioButton' },
  { href: '/preview/select-button', label: 'SelectButton' },
  { href: '/preview/link', label: 'Link' },
  { href: '/preview/switch', label: 'Switch' },
  { href: '/preview/tag', label: 'Tag' },
  { href: '/preview/separator', label: 'Separator' },
  { href: '/preview/text-area', label: 'TextArea' },
  { href: '/preview/field-picker', label: 'FieldPicker' },
  { href: '/preview/numeric-up-down', label: 'NumericUpDown' },
  { href: '/preview/search-box', label: 'SearchBox' },
]

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  function toggleDark() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.dataset.theme = next ? 'dark' : ''
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--ds-mapped-surface-page)',
        color: 'var(--ds-mapped-text-body)',
        fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: '220px',
          flexShrink: 0,
          borderRight: '1px solid var(--ds-mapped-border-default)',
          padding: 'var(--ds-alias-spacing-lg)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--ds-alias-spacing-lg)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
            fontWeight: 'var(--ds-brand-font-weight-semi-bold)',
            fontSize: '14px',
            color: 'var(--ds-mapped-text-heading)',
            lineHeight: '1.3',
          }}
        >
          tripon-ai preview
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ds-alias-spacing-xxs)' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: `var(--ds-alias-spacing-xxs) var(--ds-alias-spacing-xs)`,
                  borderRadius: 'var(--ds-alias-border-radius-lg)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? 500 : 400,
                  color: isActive
                    ? 'var(--ds-mapped-text-on-action)'
                    : 'var(--ds-mapped-text-body)',
                  backgroundColor: isActive
                    ? 'var(--ds-mapped-surface-action)'
                    : 'transparent',
                  transition: 'background-color 150ms ease, color 150ms ease',
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top bar */}
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: `var(--ds-alias-spacing-xs) var(--ds-alias-spacing-lg)`,
            borderBottom: '1px solid var(--ds-mapped-border-default)',
            gap: 'var(--ds-alias-spacing-xs)',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              color: 'var(--ds-mapped-text-placeholder)',
            }}
          >
            {isDark ? 'Dark' : 'Light'}
          </span>
          <button
            type="button"
            onClick={toggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              padding: `var(--ds-alias-spacing-xxs) var(--ds-alias-spacing-xs)`,
              borderRadius: 'var(--ds-alias-border-radius-lg)',
              border: '1px solid var(--ds-mapped-border-default)',
              backgroundColor: 'var(--ds-mapped-surface-default)',
              color: 'var(--ds-mapped-text-body)',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            {isDark ? '☀ Light' : '☾ Dark'}
          </button>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: 'var(--ds-alias-spacing-lg)', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  )
}
