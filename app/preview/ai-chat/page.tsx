'use client'

import React from 'react'
import { AIChat } from '@/components/layout/AIChat'

export default function AIChatPreviewPage() {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('Plan me a trip to Tokyo')
  const [tagVisible2, setTagVisible2] = React.useState(true)

  const sectionStyle: React.CSSProperties = { marginBottom: '48px' }
  const h2Style: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: 'var(--ds-mapped-text-heading)',
    marginBottom: '24px',
    fontFamily: 'var(--ds-brand-font-family-heading)',
  }
  const h3Style: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--ds-mapped-text-disabled)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '12px',
  }
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '24px',
  }
  const codeStyle: React.CSSProperties = {
    marginTop: '6px',
    fontFamily: 'monospace',
    fontSize: '11px',
    color: 'var(--ds-mapped-text-disabled)',
  }
  const wrapperStyle: React.CSSProperties = {
    maxWidth: '440px',
    width: '100%',
  }

  return (
    <div style={{ padding: '32px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '48px',
        paddingBottom: '24px',
        borderBottom: '1px solid var(--ds-mapped-border-default)',
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 600,
          color: 'var(--ds-mapped-text-heading)',
          margin: 0,
          fontFamily: 'var(--ds-brand-font-family-heading)',
        }}>
          AIChat
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--ds-mapped-text-body)',
          marginTop: '8px',
        }}>
          Figma: LAYOUT / AI Chat — node 1263:537
        </p>
        <p style={{
          fontSize: '12px',
          color: 'var(--ds-mapped-text-disabled)',
          marginTop: '4px',
          fontFamily: 'monospace',
        }}>
          {"import { AIChat } from '@/components/layout/AIChat'"}
        </p>
      </div>

      {/* Status variants */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Status variants</h2>

        <div style={rowStyle}>
          <div>
            <h3 style={h3Style}>default</h3>
            <div style={wrapperStyle}>
              <AIChat status="default" placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'status="default"'}</div>
          </div>

          <div>
            <h3 style={h3Style}>selected (focused)</h3>
            <div style={wrapperStyle}>
              <AIChat status="selected" placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'status="selected"'}</div>
          </div>

          <div>
            <h3 style={h3Style}>filled — controlled with value + showTag</h3>
            <div style={wrapperStyle}>
              <AIChat
                value={value2}
                onChange={e => setValue2(e.target.value)}
                status="filled"
                showTag={tagVisible2}
                tagLabel="Flight"
                onRemoveTag={() => setTagVisible2(false)}
                onSubmit={text => alert(`Submitted: ${text}`)}
              />
            </div>
            <div style={codeStyle}>{'status="filled" value="Plan me a trip to Tokyo" showTag tagLabel="Flight"'}</div>
          </div>

          <div>
            <h3 style={h3Style}>thinking</h3>
            <div style={wrapperStyle}>
              <AIChat status="thinking" placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'status="thinking"'}</div>
          </div>

          <div>
            <h3 style={h3Style}>disabled</h3>
            <div style={wrapperStyle}>
              <AIChat disabled placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'disabled'}</div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Sizes (default status)</h2>

        <div style={rowStyle}>
          <div>
            <h3 style={h3Style}>sm (default) — 320px reference width</h3>
            <div style={{ maxWidth: '320px' }}>
              <AIChat size="sm" placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'size="sm"'}</div>
          </div>

          <div>
            <h3 style={h3Style}>lg — 440px reference width</h3>
            <div style={{ maxWidth: '440px' }}>
              <AIChat size="lg" placeholder="Let's plan a trip..." />
            </div>
            <div style={codeStyle}>{'size="lg"'}</div>
          </div>
        </div>
      </section>

      {/* Auto-derived status (interactive demo) */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Auto-derived status (interactive)</h2>
        <p style={{ fontSize: '14px', color: 'var(--ds-mapped-text-body)', marginBottom: '16px' }}>
          Status derived from focus + value — no explicit status prop. Type something to see filled state.
        </p>
        <div style={{ maxWidth: '440px' }}>
          <AIChat
            value={value}
            onChange={e => setValue(e.target.value)}
            onSubmit={text => { alert(`Submitted: ${text}`); setValue('') }}
            showTag={value.toLowerCase().includes('flight')}
            tagLabel="Flight"
            onRemoveTag={() => setValue(value.replace(/flight/gi, '').trim())}
          />
        </div>
        <div style={codeStyle}>{'<AIChat value={value} onChange={...} onSubmit={...} />'}</div>
      </section>

      {/* Token reference */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Tokens used</h2>
        <div style={{
          padding: '16px',
          background: 'var(--ds-mapped-surface-action-hover-light)',
          borderRadius: '8px',
          fontSize: '12px',
          fontFamily: 'monospace',
          color: 'var(--ds-mapped-text-body)',
          lineHeight: '20px',
        }}>
          <div>--ds-mapped-surface-default — container + button bg</div>
          <div>--ds-mapped-surface-action — send button bg (filled)</div>
          <div>--ds-mapped-surface-action-hover — send button hover bg</div>
          <div>--ds-mapped-surface-action-hover-light — button hover bg (default)</div>
          <div>--ds-mapped-border-default — container + button border (default)</div>
          <div>--ds-mapped-border-action — container border (selected/filled)</div>
          <div>--ds-mapped-border-disabled — container + button border (disabled)</div>
          <div>--ds-mapped-text-body — input text + placeholder</div>
          <div>--ds-mapped-text-disabled — disabled text + placeholder</div>
          <div>--ds-mapped-icon-action — mic/pause icon color</div>
          <div>--ds-mapped-icon-on-action — arrow-up icon color (filled)</div>
          <div>--ds-mapped-icon-disabled — mic icon color (disabled)</div>
          <div>--ds-effect-shadow — shadow (default/thinking/disabled)</div>
          <div>--ds-effect-shadow-on — shadow (selected/filled)</div>
          <div>--ds-alias-border-radius-xl — top-left/right corner radius (16px)</div>
          <div>--ds-alias-border-radius-lg — button corner radius (8px)</div>
          <div>--ds-alias-border-width-md — top border thickness (2px)</div>
          <div>--ds-alias-border-width-sm — button border thickness (1px)</div>
          <div>--ds-alias-spacing-sm — container padding (12px)</div>
          <div>--ds-alias-spacing-xs — chatField gap + bottomRow gap + button padding (8px)</div>
          <div>--ds-brand-font-family-body — Inter</div>
          <div>--ds-brand-font-weight-regular — 400</div>
          <div>--ds-typography-body-sm-font-size — 14px</div>
          <div>--ds-typography-body-sm-line-height — 20px</div>
        </div>
      </section>
    </div>
  )
}
