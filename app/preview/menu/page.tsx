'use client'

import React from 'react'
import { Menu, MenuItem } from '@/components/ui/Menu'
import { ArrowRight } from '@/design-system/icons/components/ArrowRight'
import { MapPin } from '@/design-system/icons/components/MapPin'
import { Settings } from '@/design-system/icons/components/Settings'
import { User } from '@/design-system/icons/components/User'
import { Search } from '@/design-system/icons/components/Search'

/* ─── Shared scaffolding styles ─────────────────────────────────────────────── */
const pageWrap: React.CSSProperties = {
  maxWidth: '900px',
}

const pageHeader: React.CSSProperties = {
  marginBottom: '48px',
  paddingBottom: '24px',
  borderBottom: '1px solid var(--ds-mapped-border-default)',
}

const h1Style: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
  fontSize: '32px',
  fontWeight: 600,
  color: 'var(--ds-mapped-text-heading)',
  margin: 0,
}

const subtitleStyle: React.CSSProperties = {
  fontSize: '16px',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '8px',
  fontFamily: 'var(--ds-brand-font-family-body), sans-serif',
}

const monoStyle: React.CSSProperties = {
  fontSize: '13px',
  color: 'var(--ds-mapped-text-placeholder)',
  marginTop: '4px',
  fontFamily: 'monospace',
}

const sectionStyle: React.CSSProperties = {
  marginBottom: '64px',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'var(--ds-brand-font-family-heading), sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  color: 'var(--ds-mapped-text-heading)',
  marginBottom: '24px',
}

const h3Style: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 500,
  color: 'var(--ds-mapped-text-placeholder)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  marginBottom: '16px',
}

const rowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap' as const,
  gap: '24px',
  alignItems: 'flex-start',
  marginBottom: '32px',
}

const itemLabelStyle: React.CSSProperties = {
  marginTop: '8px',
  fontFamily: 'monospace',
  fontSize: '11px',
  color: 'var(--ds-mapped-text-placeholder)',
}

const tokenBoxStyle: React.CSSProperties = {
  marginTop: '24px',
  padding: '16px',
  background: 'var(--ds-mapped-surface-default)',
  border: '1px solid var(--ds-mapped-border-default)',
  borderRadius: 'var(--ds-alias-border-radius-lg)',
  fontSize: '13px',
  color: 'var(--ds-mapped-text-placeholder)',
  fontFamily: 'monospace',
  lineHeight: '1.8',
}

function ItemWrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {children}
      <div style={itemLabelStyle}>{label}</div>
    </div>
  )
}

export default function MenuPreviewPage() {
  return (
    <div style={pageWrap}>
      {/* Page header */}
      <div style={pageHeader}>
        <h1 style={h1Style}>Menu</h1>
        <p style={subtitleStyle}>
          Figma: PRIMITIVES / Menu — nodes 282:1143 (.menuitem) / 1748:4388 (Menu)
        </p>
        <p style={monoStyle}>
          import &#123; Menu, MenuItem &#125; from &apos;@/components/ui/Menu&apos;
        </p>
      </div>

      {/* ─── Section 1 — MenuItem variants (lg) ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>MenuItem</h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>States — lg size</h3>
          <div style={{ width: '280px', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', overflow: 'hidden' }}>
            <MenuItem size="lg">
              Default
            </MenuItem>
            <MenuItem size="lg" isSelected>
              Selected
            </MenuItem>
            <MenuItem size="lg" disabled>
              Disabled
            </MenuItem>
            <MenuItem size="lg" isSelected disabled>
              Selected + Disabled
            </MenuItem>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>States — sm size</h3>
          <div style={{ width: '220px', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', overflow: 'hidden' }}>
            <MenuItem size="sm">
              Default
            </MenuItem>
            <MenuItem size="sm" isSelected>
              Selected
            </MenuItem>
            <MenuItem size="sm" disabled>
              Disabled
            </MenuItem>
            <MenuItem size="sm" isSelected disabled>
              Selected + Disabled
            </MenuItem>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>With icon left — lg</h3>
          <div style={{ width: '280px', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', overflow: 'hidden' }}>
            <MenuItem size="lg" iconLeft={<User size={20} />}>
              My Profile
            </MenuItem>
            <MenuItem size="lg" iconLeft={<Settings size={20} />} isSelected>
              Settings (selected)
            </MenuItem>
            <MenuItem size="lg" iconLeft={<MapPin size={20} />} disabled>
              Location (disabled)
            </MenuItem>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>With icon left + icon right — lg</h3>
          <div style={{ width: '280px', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', overflow: 'hidden' }}>
            <MenuItem
              size="lg"
              iconLeft={<User size={20} />}
              iconRight={<ArrowRight size={20} />}
            >
              My Profile
            </MenuItem>
            <MenuItem
              size="lg"
              iconLeft={<Settings size={20} />}
              iconRight={<ArrowRight size={20} />}
              isSelected
            >
              Settings (selected)
            </MenuItem>
            <MenuItem
              size="lg"
              iconLeft={<MapPin size={20} />}
              iconRight={<ArrowRight size={20} />}
              disabled
            >
              Location (disabled)
            </MenuItem>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={h3Style}>Icon right only — sm</h3>
          <div style={{ width: '220px', border: '1px solid var(--ds-mapped-border-default)', borderRadius: 'var(--ds-alias-border-radius-lg)', overflow: 'hidden' }}>
            <MenuItem size="sm" iconRight={<ArrowRight size={16} />}>
              Navigate
            </MenuItem>
            <MenuItem size="sm" iconRight={<ArrowRight size={16} />} isSelected>
              Navigate (selected)
            </MenuItem>
          </div>
        </div>
      </section>

      {/* ─── Section 2 — Menu container ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Menu container</h2>

        <div style={rowStyle}>
          <ItemWrap label='size="lg" showScrollbar={false}'>
            <Menu size="lg" style={{ width: '260px' }}>
              <MenuItem iconLeft={<User size={20} />} iconRight={<ArrowRight size={20} />}>
                My Profile
              </MenuItem>
              <MenuItem iconLeft={<Search size={20} />} iconRight={<ArrowRight size={20} />} isSelected>
                Search
              </MenuItem>
              <MenuItem iconLeft={<Settings size={20} />} iconRight={<ArrowRight size={20} />}>
                Settings
              </MenuItem>
              <MenuItem iconLeft={<MapPin size={20} />} iconRight={<ArrowRight size={20} />}>
                Locations
              </MenuItem>
              <MenuItem iconLeft={<User size={20} />} iconRight={<ArrowRight size={20} />} disabled>
                Disabled item
              </MenuItem>
            </Menu>
          </ItemWrap>

          <ItemWrap label='size="sm" showScrollbar={false}'>
            <Menu size="sm" style={{ width: '200px' }}>
              <MenuItem iconLeft={<User size={16} />} iconRight={<ArrowRight size={16} />}>
                My Profile
              </MenuItem>
              <MenuItem iconLeft={<Search size={16} />} iconRight={<ArrowRight size={16} />} isSelected>
                Search
              </MenuItem>
              <MenuItem iconLeft={<Settings size={16} />} iconRight={<ArrowRight size={16} />}>
                Settings
              </MenuItem>
              <MenuItem iconLeft={<MapPin size={16} />} iconRight={<ArrowRight size={16} />}>
                Locations
              </MenuItem>
              <MenuItem iconLeft={<User size={16} />} iconRight={<ArrowRight size={16} />} disabled>
                Disabled item
              </MenuItem>
            </Menu>
          </ItemWrap>
        </div>

        <div style={rowStyle}>
          <ItemWrap label='size="lg" showScrollbar={true} (overflow-y: auto)'>
            <Menu size="lg" showScrollbar style={{ width: '260px', maxHeight: '180px' }}>
              <MenuItem iconLeft={<User size={20} />}>Item 1</MenuItem>
              <MenuItem iconLeft={<Search size={20} />} isSelected>Item 2 (selected)</MenuItem>
              <MenuItem iconLeft={<Settings size={20} />}>Item 3</MenuItem>
              <MenuItem iconLeft={<MapPin size={20} />}>Item 4</MenuItem>
              <MenuItem iconLeft={<User size={20} />}>Item 5</MenuItem>
              <MenuItem iconLeft={<Search size={20} />}>Item 6</MenuItem>
            </Menu>
          </ItemWrap>

          <ItemWrap label="No icons — text only">
            <Menu size="lg" style={{ width: '260px' }}>
              <MenuItem>Option One</MenuItem>
              <MenuItem isSelected>Option Two (selected)</MenuItem>
              <MenuItem>Option Three</MenuItem>
              <MenuItem disabled>Option Four (disabled)</MenuItem>
            </Menu>
          </ItemWrap>
        </div>
      </section>

      {/* ─── Token reference ─── */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Token reference</h2>
        <div style={tokenBoxStyle}>
          <strong>Tokens used by MenuItem + Menu:</strong>
          <br /><br />
          {[
            '--ds-alias-border-radius-lg       → menu corner radius (8px)',
            '--ds-alias-border-width-md        → focus ring thickness (2px)',
            '--ds-alias-border-width-sm        → menu border + item bottom border (1px)',
            '--ds-alias-spacing-sm             → item padding lg (12px)',
            '--ds-alias-spacing-xs             → item padding sm + icon gap (8px)',
            '--ds-brand-font-family-body       → Inter',
            '--ds-brand-font-weight-regular    → 400',
            '--ds-effect-shadow-overlay-light  → menu box shadow',
            '--ds-mapped-border-action         → selected bottom-border',
            '--ds-mapped-border-action-hover   → hover bottom-border',
            '--ds-mapped-border-default        → default bottom-border + menu border',
            '--ds-mapped-border-disabled       → disabled bottom-border',
            '--ds-mapped-border-focus          → focus ring color',
            '--ds-mapped-surface-action        → selected background',
            '--ds-mapped-surface-action-hover  → selected hover background',
            '--ds-mapped-surface-action-hover-light → unselected hover background',
            '--ds-mapped-surface-default       → default background + menu background',
            '--ds-mapped-surface-disabled      → disabled+selected background',
            '--ds-mapped-text-action-hover     → hover text (unselected)',
            '--ds-mapped-text-body             → default text',
            '--ds-mapped-text-disabled         → disabled text',
            '--ds-mapped-text-on-action        → selected text (white)',
            '--ds-typography-body-md-font-size → lg font size (16px)',
            '--ds-typography-body-md-line-height → lg line height (20px)',
            '--ds-typography-body-sm-font-size → sm font size (14px)',
            '--ds-typography-body-sm-line-height → sm line height (20px)',
          ].map((t) => (
            <span key={t} style={{ display: 'block' }}>{t}</span>
          ))}
        </div>
      </section>
    </div>
  )
}
