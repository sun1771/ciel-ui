'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Mic, Pause, ArrowUp } from '@cielui/icons'
import { ButtonIcon } from '../../primitives/Button'
import { Tag } from '../../primitives/Tag'
import type { ChatInputLabels, ChatInputProps, ChatInputStatus } from './types'
import styles from './AIChat.module.css'

const DEFAULT_LABELS: ChatInputLabels = {
  input: 'Chat input',
  voiceInput: 'Voice input',
  send: 'Send message',
  stop: 'Stop generating',
}

/**
 * ChatInput — `.AI Chat Piece / Chat input` (Figma node 1263:537).
 * Bottom-attached input with a send/mic/pause action button (reused ButtonIcon)
 * and an optional dismissible Tag pill (visible when filled).
 *
 * Figma variants → props:
 *   Status=default/filled/selected/thinking → `status` (auto-derived if omitted)
 *   Status=disabled                          → `disabled`
 *   Size=sm/lg                               → `size`
 *
 * @see design-system/figma.md → AI Chat
 */
export function ChatInput({
  status,
  disabled = false,
  size = 'sm',
  showTag = false,
  tagLabel,
  onRemoveTag,
  labels,
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Ask anything…',
  className,
  ref,
  ...props
}: ChatInputProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [isFocused, setIsFocused] = React.useState(false)

  const effectiveStatus: ChatInputStatus = React.useMemo(() => {
    if (status !== undefined) return status
    if (value && value.trim().length > 0) return 'filled'
    if (isFocused) return 'selected'
    return 'default'
  }, [status, value, isFocused])

  const isFilled = effectiveStatus === 'filled'
  const isThinking = effectiveStatus === 'thinking'

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (isFilled && onSubmit) onSubmit(value)
    }
  }

  const handleButtonClick = () => {
    if (isFilled && onSubmit) onSubmit(value)
  }

  const statusClass = disabled
    ? styles.statusDisabled
    : effectiveStatus === 'selected'
      ? styles.statusSelected
      : effectiveStatus === 'filled'
        ? styles.statusFilled
        : effectiveStatus === 'thinking'
          ? styles.statusThinking
          : styles.statusDefault

  const sizeClass = size === 'lg' ? styles.containerLg : styles.containerSm

  const buttonIcon = isThinking ? (
    <Pause size={20} />
  ) : isFilled ? (
    <ArrowUp size={20} />
  ) : (
    <Mic size={20} />
  )

  const buttonLabel = isThinking ? l.stop : isFilled ? l.send : l.voiceInput

  return (
    <div ref={ref} className={cn(styles.container, sizeClass, statusClass, className)} {...props}>
      <div className={styles.chatField}>
        <textarea
          rows={1}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled || isThinking}
          aria-label={l.input}
          aria-multiline="true"
          className={styles.textarea}
        />
        <div className={styles.bottomRow}>
          <div className={styles.tagContainer}>
            {isFilled && showTag && tagLabel != null && (
              <Tag size="sm" onDismiss={onRemoveTag}>
                {tagLabel}
              </Tag>
            )}
          </div>
          <ButtonIcon
            variant={isFilled ? 'default' : 'outline'}
            size="lg"
            label={buttonLabel}
            icon={buttonIcon}
            disabled={disabled}
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

ChatInput.displayName = 'ChatInput'
