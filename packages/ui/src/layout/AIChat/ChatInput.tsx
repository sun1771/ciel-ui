'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Mic, Pause, ArrowUp } from '@acme/icons'
import { ButtonIcon } from '../../primitives/Button'
import { Tag } from '../../primitives/Tag'
import type { ChatInputProps, ChatInputStatus } from './types'
import styles from './AIChat.module.css'

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
export const ChatInput = React.forwardRef<HTMLDivElement, ChatInputProps>(
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
    ref,
  ) => {
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

    const buttonLabel = isThinking
      ? 'Stop generating'
      : isFilled
        ? 'Send message'
        : 'Voice input'

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
  },
)

ChatInput.displayName = 'ChatInput'
