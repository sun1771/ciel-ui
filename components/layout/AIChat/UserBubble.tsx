'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Copy, Edit } from '@/icons'
import { ButtonIcon } from '@/components/primitives/Button'
import type { UserBubbleProps } from './types'
import styles from './AIChat.module.css'

/**
 * UserBubble — `.AI Chat Piece / User Bubble` (Figma node 2132:1446).
 * A right-aligned user message in a light-blue speech bubble (flat bottom-right
 * corner) with a Copy / Edit action bar below. Each action is a reused
 * ButtonIcon (transparent, sm).
 *
 * Both Figma "Size" values fill their container, with a 48px (spacing/xxl) left
 * indent so the message is offset from the left edge. `lg` additionally caps the
 * bubble at 400px so it doesn't span end-to-end in the wide (708px) panel.
 *
 * @see design-system/figma.md → AI Chat
 */
export const UserBubble = React.forwardRef<HTMLDivElement, UserBubbleProps>(
  ({ size = 'sm', children, showActions = true, onCopy, onEdit, className, ...props }, ref) => {
    return (
      <div ref={ref} data-size={size} className={cn(styles.userBubble, className)} {...props}>
        <div className={cn(styles.userBubbleBox, size === 'lg' && styles.userBubbleBoxLg)}>
          <p className={styles.userBubbleText}>{children}</p>
        </div>

        {showActions && (
          <div className={styles.reactionBar}>
            <ButtonIcon
              variant="transparent"
              size="sm"
              label="Copy"
              icon={<Copy size={16} />}
              onClick={onCopy}
            />
            <ButtonIcon
              variant="transparent"
              size="sm"
              label="Edit"
              icon={<Edit size={16} />}
              onClick={onEdit}
            />
          </div>
        )}
      </div>
    )
  },
)

UserBubble.displayName = 'UserBubble'
