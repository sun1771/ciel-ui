'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { Copy, Edit } from '@acme/icons'
import { ButtonIcon } from '../../primitives/Button'
import type { UserBubbleLabels, UserBubbleProps } from './types'
import styles from './AIChat.module.css'

const DEFAULT_LABELS: UserBubbleLabels = { copy: 'Copy', edit: 'Edit' }

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
export function UserBubble({
  size = 'sm',
  children,
  showActions = true,
  labels,
  onCopy,
  onEdit,
  className,
  ref,
  ...props
}: UserBubbleProps & { ref?: React.Ref<HTMLDivElement> }) {
  const l = { ...DEFAULT_LABELS, ...labels }
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
            label={l.copy}
            icon={<Copy size={16} />}
            onClick={onCopy}
          />
          <ButtonIcon
            variant="transparent"
            size="sm"
            label={l.edit}
            icon={<Edit size={16} />}
            onClick={onEdit}
          />
        </div>
      )}
    </div>
  )
}

UserBubble.displayName = 'UserBubble'
