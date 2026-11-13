'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { TripOnChatIcon, ArrowLeft, ArrowRight } from '@acme/icons'
import { ButtonIcon, ButtonIconSwitching } from '../../primitives/Button'
import { ChatInput } from './ChatInput'
import type { AIChatProps } from './types'
import styles from './AIChat.module.css'

/**
 * AIChat — the assembled chat panel (Figma node 3814:5013).
 * Composes the full conversational UI:
 *   Header (TripOn sparkle + title + collapse arrow)
 *   → Conversation area (UserBubble / AgentBubble children, scrollable)
 *   → ChatInput (bottom-attached)
 *
 * Figma "State" property → `state`:
 *   - 'default'   (320px)  full panel
 *   - 'wide'      (708px)  full panel, wider
 *   - 'collapsed' (60px)   logo-only rail; the ButtonIconSwitching logo reveals
 *                          an expand arrow on hover and calls `onExpand`
 *
 * Reuses ButtonIcon (header controls), ButtonIconSwitching (collapsed logo),
 * and the ChatInput / UserBubble / AgentBubble pieces.
 *
 * @see design-system/figma.md → AI Chat
 * @see docs/components.md for usage examples
 */
export const AIChat = React.forwardRef<HTMLDivElement, AIChatProps>(
  (
    {
      state = 'default',
      title = 'TripOn Agent',
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
      ...props
    },
    ref
  ) => {
    const isCollapsed = state === 'collapsed'

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
                label="Expand chat"
                icon={<TripOnChatIcon size={20} />}
                hoverIcon={<ArrowRight size={20} />}
                onClick={onExpand}
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
            <ButtonIcon
              variant="transparent"
              size="lg"
              label="TripOn Agent"
              icon={<TripOnChatIcon size={20} />}
            />
            <p className={styles.headerTitle}>{title}</p>
            <ButtonIcon
              variant="transparent"
              size="lg"
              label="Collapse chat"
              icon={<ArrowLeft size={20} />}
              onClick={onCollapse}
            />
          </div>
        </div>

        <div className={styles.chatContainer}>
          <div className={styles.conversation}>{children}</div>
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
        />
      </div>
    )
  }
)

AIChat.displayName = 'AIChat'
