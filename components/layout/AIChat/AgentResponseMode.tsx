'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { TripOnChatIcon, ChevronDown } from '@/icons'
import { Separator } from '@/components/primitives/Separator'
import { Loader } from '@/components/feedback/Loader'
import type { AgentResponseModeProps } from './types'
import styles from './AIChat.module.css'

/**
 * AgentResponseMode — `.Agent Response Mode` (Figma node 2078:3215).
 * The agent identity row: the TripOn sparkle icon, plus — in thinking mode — a
 * "Show Thinking" disclosure (loaded) or a "Thinking…" loading status (loading).
 *
 * Figma variants → props:
 *   Thinking Mode=False/True → `thinkingMode`
 *   Status=loaded/loading    → `status`
 *
 * @see design-system/figma.md → AI Chat
 */
export const AgentResponseMode = React.forwardRef<HTMLDivElement, AgentResponseModeProps>(
  (
    {
      thinkingMode = false,
      status = 'loaded',
      thinkingExpanded = false,
      onToggleThinking,
      className,
      ...props
    },
    ref,
  ) => {
    const isLoading = status === 'loading'

    return (
      <div
        ref={ref}
        className={cn(
          styles.agentResponseMode,
          thinkingMode && styles.agentResponseModeThinking,
          className,
        )}
        {...props}
      >
        <div className={styles.responseModeRow}>
          <span className={styles.sparkle} aria-hidden="true">
            <TripOnChatIcon size={20} />
          </span>

          {isLoading && (
            <div className={styles.thinkingStatus}>
              <Loader size="xxs" label="Generating response" />
              {thinkingMode && <p className={styles.thinkingStatusText}>Thinking...</p>}
            </div>
          )}

          {thinkingMode && !isLoading && (
            <button
              type="button"
              className={styles.expander}
              aria-expanded={thinkingExpanded}
              onClick={onToggleThinking}
            >
              {thinkingExpanded ? 'Hide Thinking' : 'Show Thinking'}
              <span
                className={cn(
                  styles.expanderChevron,
                  thinkingExpanded && styles.expanderChevronOpen,
                )}
                aria-hidden="true"
              >
                <ChevronDown size={16} />
              </span>
            </button>
          )}
        </div>

        {thinkingMode && (
          <div className={styles.separatorWrap}>
            <Separator />
          </div>
        )}
      </div>
    )
  },
)

AgentResponseMode.displayName = 'AgentResponseMode'
