'use client'

import React from 'react'
import {
  AIChat,
  ChatInput,
  UserBubble,
  AgentBubble,
  AgentResponseMode,
  ResponseContent,
  ActionSuggestions,
  ResponseReactionBar,
} from '@acme/ui'

const SECTIONS = [
  { title: 'Flights', content: 'Round-trip from London to Tokyo, departing May 9.' },
  { title: 'Where to stay', content: 'Boutique hotel in Shinjuku, walkable to transit.' },
  { title: 'Day 1', content: 'Arrive, settle in, evening stroll through Omoide Yokocho.' },
]

const SUGGESTIONS = [
  { label: 'Add more days' },
  { label: 'Change hotel' },
  { label: 'Cheaper flights' },
  { label: 'Add activities' },
]

const THINKING_STEPS = [
  {
    title: 'Understanding the request',
    content: 'User wants a Tokyo trip; inferring ~5 days, mid-range budget.',
  },
  {
    title: 'Comparing options',
    content: 'Weighing Shinjuku vs Shibuya for transit access and nightlife.',
  },
  { title: 'Finalising', content: 'Picked Shinjuku — best rail links for the planned day trips.' },
]

export default function AIChatPreviewPage() {
  const [chatState, setChatState] = React.useState<'default' | 'collapsed' | 'wide'>('default')
  const [value, setValue] = React.useState('')
  const [filledValue, setFilledValue] = React.useState('Plan me a trip to Tokyo')
  const [tagVisible, setTagVisible] = React.useState(true)
  const [thinkingExpanded, setThinkingExpanded] = React.useState(false)

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
  const codeStyle: React.CSSProperties = {
    marginTop: '6px',
    fontFamily: 'monospace',
    fontSize: '11px',
    color: 'var(--ds-mapped-text-disabled)',
  }
  const panelFrame: React.CSSProperties = { height: '640px' }
  const pieceFrame: React.CSSProperties = {
    maxWidth: '320px',
    width: '100%',
    padding: '16px',
    border: '1px solid var(--ds-mapped-border-default)',
    borderRadius: '8px',
  }

  const conversation = (
    <>
      <UserBubble onCopy={() => {}} onEdit={() => {}}>
        Generate my travel package
      </UserBubble>
      <AgentBubble sections={SECTIONS} suggestions={SUGGESTIONS} />
    </>
  )

  return (
    <div style={{ padding: '32px' }}>
      {/* Header */}
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
          AIChat
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--ds-mapped-text-body)', marginTop: '8px' }}>
          Figma: AI Chat set — node 1250:2549 (panel 3814:5013)
        </p>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--ds-mapped-text-disabled)',
            marginTop: '4px',
            fontFamily: 'monospace',
          }}
        >
          {"import { AIChat, ChatInput, UserBubble, AgentBubble, ... } from '@acme/ui'"}
        </p>
      </div>

      {/* Assembled panel — states */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>AI Chat panel — State</h2>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {(['default', 'wide', 'collapsed'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setChatState(s)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                border: '1px solid var(--ds-mapped-border-default)',
                background:
                  chatState === s
                    ? 'var(--ds-mapped-surface-action-hover-light)'
                    : 'var(--ds-mapped-surface-default)',
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <div style={panelFrame}>
          <AIChat
            state={chatState}
            title="Trip Planner"
            placeholder="Let's plan a trip..."
            inputValue={value}
            onInputChange={(e) => setValue(e.target.value)}
            onSubmit={(t) => {
              alert(`Submitted: ${t}`)
              setValue('')
            }}
            onCollapse={() => setChatState('collapsed')}
            onExpand={() => setChatState('default')}
          >
            {conversation}
          </AIChat>
        </div>
        <div style={codeStyle}>{`state="${chatState}"`}</div>
      </section>

      {/* Side-by-side default + wide */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Panel — default & wide</h2>
        <div style={{ display: 'flex', gap: '24px', height: '560px', alignItems: 'stretch' }}>
          <AIChat state="default">{conversation}</AIChat>
          <AIChat state="wide">{conversation}</AIChat>
        </div>
      </section>

      {/* User bubble */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>UserBubble — fills container, 48px left indent (both sizes)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ ...pieceFrame, maxWidth: '320px' }}>
            <h3 style={h3Style}>size=sm — in a 320px container</h3>
            <UserBubble size="sm" onCopy={() => {}} onEdit={() => {}}>
              Generate my travel package
            </UserBubble>
          </div>
          <div style={{ ...pieceFrame, maxWidth: '600px' }}>
            <h3 style={h3Style}>size=lg — in a 600px container</h3>
            <UserBubble size="lg" onCopy={() => {}} onEdit={() => {}}>
              Generate my travel package
            </UserBubble>
          </div>
        </div>
      </section>

      {/* Agent bubble */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>AgentBubble — Mode × Response Loaded</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={pieceFrame}>
            <h3 style={h3Style}>normal · loaded</h3>
            <AgentBubble sections={SECTIONS} suggestions={SUGGESTIONS} />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>normal · loading</h3>
            <AgentBubble responseLoaded={false} />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>thinking · loaded (toggle Show Thinking — final response stays)</h3>
            <AgentBubble
              mode="thinking"
              sections={SECTIONS}
              suggestions={SUGGESTIONS}
              thinkingExpanded={thinkingExpanded}
              onToggleThinking={() => setThinkingExpanded((v) => !v)}
              thinkingContent={<ResponseContent sections={THINKING_STEPS} />}
            />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>thinking · loading</h3>
            <AgentBubble mode="thinking" responseLoaded={false} />
          </div>
        </div>
      </section>

      {/* Agent response mode */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>AgentResponseMode</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={pieceFrame}>
            <h3 style={h3Style}>normal · loaded</h3>
            <AgentResponseMode />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>normal · loading</h3>
            <AgentResponseMode status="loading" />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>thinking · loaded</h3>
            <AgentResponseMode thinkingMode />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>thinking · loading</h3>
            <AgentResponseMode thinkingMode status="loading" />
          </div>
        </div>
      </section>

      {/* Response content / action suggestions / reaction bar */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>ResponseContent / ActionSuggestions / ResponseReactionBar</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={pieceFrame}>
            <h3 style={h3Style}>ResponseContent</h3>
            <ResponseContent sections={SECTIONS} />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>ActionSuggestions</h3>
            <ActionSuggestions suggestions={SUGGESTIONS} />
          </div>
          <div style={pieceFrame}>
            <h3 style={h3Style}>ResponseReactionBar</h3>
            <ResponseReactionBar
              onCopy={() => {}}
              onThumbsUp={() => {}}
              onThumbsDown={() => {}}
              onShare={() => {}}
              onMore={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Chat input — sizes */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>ChatInput — Size (sm 320px · lg 440px)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
          <div>
            <h3 style={h3Style}>size=sm — 320px</h3>
            <ChatInput size="sm" status="default" />
          </div>
          <div>
            <h3 style={h3Style}>size=lg — 440px</h3>
            <ChatInput size="lg" status="default" />
          </div>
        </div>
      </section>

      {/* Chat input piece */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>ChatInput — Status (size=lg)</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start',
          }}
        >
          <div>
            <h3 style={h3Style}>default</h3>
            <ChatInput size="lg" status="default" />
          </div>
          <div>
            <h3 style={h3Style}>selected</h3>
            <ChatInput size="lg" status="selected" />
          </div>
          <div>
            <h3 style={h3Style}>filled — value + showTag</h3>
            <ChatInput
              size="lg"
              value={filledValue}
              onChange={(e) => setFilledValue(e.target.value)}
              status="filled"
              showTag={tagVisible}
              tagLabel="Flight"
              onRemoveTag={() => setTagVisible(false)}
              onSubmit={(t) => alert(`Submitted: ${t}`)}
            />
          </div>
          <div>
            <h3 style={h3Style}>thinking</h3>
            <ChatInput size="lg" status="thinking" />
          </div>
          <div>
            <h3 style={h3Style}>disabled</h3>
            <ChatInput size="lg" disabled />
          </div>
        </div>
      </section>
    </div>
  )
}
