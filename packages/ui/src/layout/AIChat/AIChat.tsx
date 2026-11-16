'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Sparkle, ArrowLeft, ArrowRight } from '@cielui/icons'
import { ButtonIcon, ButtonIconSwitching } from '../../primitives/Button'
import { useControllableState } from '../../lib/useControllableState'
import { ChatInput } from './ChatInput'
import type { AIChatLabels, AIChatProps, AIChatState } from './types'
import styles from './AIChat.module.css'

const DEFAULT_LABELS: AIChatLabels = {
  expand: 'Expand chat',
  collapse: 'Collapse chat',
  input: 'Chat input',
  voiceInput: 'Voice input',
  send: 'Send message',
  stop: 'Stop generating',
}

/**
 * AIChat — the assembled chat panel (Figma node 3814:5013).
 * Composes the full conversational UI:
 *   Header (agent icon + title + collapse arrow)
 *   → Conversation area (UserBubble / AgentBubble children, scrollable)
 *   → ChatInput (bottom-attached)
 *
 * Figma "State" property → `state`:
 *   - 'default'   (320px)  full panel
 *   - 'wide'      (708px)  full panel, wider
 *   - 'collapsed' (60px)   logo-only rail; the ButtonIconSwitching logo reveals
 *                          an expand arrow on hover and calls `onExpand`
 *
 * The collapse arrow and the collapsed logo switch states on their own
 * (`defaultState`), returning to the width the panel had before; pass `state`
 * + `onStateChange` to control it instead. The conversation scrolls, starts
 * at the newest message, and follows new messages as they arrive.
 *
 * Reuses ButtonIcon (header controls), ButtonIconSwitching (collapsed logo),
 * and the ChatInput / UserBubble / AgentBubble pieces.
 *
 * @see design-system/figma.md → AI Chat
 * @see docs/components.md for usage examples
 */
export function AIChat({
  state: stateProp,
  defaultState = 'default',
  onStateChange,
  title = 'Assistant',
  icon = <Sparkle size={20} />,
  labels,
  onCollapse,
  onExpand,
  children,
  inputValue,
  onInputChange,
  onSubmit,
  inputStatus,
  inputDisabled = false,
  showTag = false,
  tagLabel,
  onRemoveTag,
  placeholder,
  className,
  ref,
  ...props
}: AIChatProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [state, setState] = useControllableState<AIChatState>({
    value: stateProp,
    defaultValue: defaultState,
    onChange: onStateChange,
  })
  const isCollapsed = state === 'collapsed'
  // The width to return to when the collapsed rail is expanded again.
  const lastOpenState = React.useRef<AIChatState>(state === 'wide' ? 'wide' : 'default')

  const collapse = () => {
    lastOpenState.current = state === 'wide' ? 'wide' : 'default'
    onCollapse?.()
    setState('collapsed')
  }
  const expand = () => {
    onExpand?.()
    setState(lastOpenState.current)
  }

  // Keep the newest message in view: jump there on first render, then glide
  // to it whenever the conversation changes.
  const conversationRef = React.useRef<HTMLDivElement>(null)
  const hasScrolled = React.useRef(false)
  React.useLayoutEffect(() => {
    const el = conversationRef.current
    if (!el) return
    const top = el.scrollHeight
    if (!hasScrolled.current || typeof el.scrollTo !== 'function') el.scrollTop = top
    else el.scrollTo({ top, behavior: 'smooth' })
    hasScrolled.current = true
  }, [children, isCollapsed])

  const panelClass =
    state === 'collapsed'
      ? styles.panelCollapsed
      : state === 'wide'
        ? styles.panelWide
        : styles.panelDefault

  if (isCollapsed) {
    return (
      <div ref={ref} className={cn(styles.panel, panelClass, className)} {...props}>
        <div className={cn(styles.header, styles.headerCollapsed)}>
          <div className={styles.headerInner} style={{ flex: '0 0 auto' }}>
            <ButtonIconSwitching
              variant="transparent"
              size="lg"
              label={l.expand}
              icon={icon}
              hoverIcon={<ArrowRight size={20} />}
              onClick={expand}
            />
          </div>
        </div>
        <div className={styles.chatContainer} />
      </div>
    )
  }

  return (
    <div ref={ref} className={cn(styles.panel, panelClass, className)} {...props}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.headerIcon} aria-hidden="true">
            {icon}
          </span>
          <p className={styles.headerTitle}>{title}</p>
          <ButtonIcon
            variant="transparent"
            size="lg"
            label={l.collapse}
            icon={<ArrowLeft size={20} />}
            onClick={collapse}
          />
        </div>
      </div>

      <div className={styles.chatContainer}>
        <div
          ref={conversationRef}
          className={styles.conversation}
          role="log"
          aria-label={title}
          // Focusable so keyboard users can scroll the conversation.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          {children}
        </div>
      </div>

      <ChatInput
        className={styles.containerFluid}
        status={inputStatus}
        disabled={inputDisabled}
        value={inputValue}
        onChange={onInputChange}
        onSubmit={onSubmit}
        showTag={showTag}
        tagLabel={tagLabel}
        onRemoveTag={onRemoveTag}
        placeholder={placeholder}
        labels={l}
      />
    </div>
  )
}

AIChat.displayName = 'AIChat'
