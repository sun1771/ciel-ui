'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Mic, Pause, ArrowUp } from '@/icons'
import { Tag } from '@/components/ui/Tag'
import type { AIChatProps, AIChatStatus } from './types'
import styles from './AIChat.module.css'

/**
 * AIChat — floating chat input panel.
 * Renders a bottom-attached input with a send/mic/pause button and optional tag chip.
 * Status controls border, shadow, and button icon. If status is omitted, it is
 * derived from textarea focus and value.
 *
 * @see design-system/figma.md → AI Chat
 * @see docs/components.md for usage examples
 */
export const AIChat = React.forwardRef<HTMLDivElement, AIChatProps>(
  (
    {
      status,
      disabled = false,
      size = 'sm',
      showTag = false,
      tagLabel = 'Flight',
      onRemoveTag,
      value = '',
      onChange,
      onSubmit,
      placeholder = "Let's plan a trip...",
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)

    const effectiveStatus: AIChatStatus = React.useMemo(() => {
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
        if (isFilled && onSubmit) {
          onSubmit(value)
        }
      }
    }

    const handleButtonClick = () => {
      if (isFilled && onSubmit) {
        onSubmit(value)
      }
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

    const buttonClass = disabled
      ? cn(styles.button, styles.buttonDisabled)
      : isFilled
      ? cn(styles.button, styles.buttonFilled)
      : styles.button

    const buttonIcon = isThinking
      ? <Pause size={20} />
      : isFilled
      ? <ArrowUp size={20} />
      : <Mic size={20} />

    const buttonLabel = isThinking
      ? 'Thinking — pause'
      : isFilled
      ? 'Send message'
      : 'Voice input'

    return (
      <div
        ref={ref}
        className={cn(styles.container, statusClass, className)}
        {...props}
      >
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
            aria-label="Chat input"
            aria-multiline="true"
            className={styles.textarea}
          />
          <div className={styles.bottomRow}>
            <div className={styles.tagContainer}>
              {isFilled && showTag && (
                <Tag size="sm" onDismiss={onRemoveTag}>
                  {tagLabel}
                </Tag>
              )}
            </div>
            <button
              type="button"
              className={buttonClass}
              onClick={handleButtonClick}
              disabled={disabled}
              aria-label={buttonLabel}
            >
              <span aria-hidden="true">
                {buttonIcon}
              </span>
            </button>
          </div>
        </div>
      </div>
    )
  }
)

AIChat.displayName = 'AIChat'
