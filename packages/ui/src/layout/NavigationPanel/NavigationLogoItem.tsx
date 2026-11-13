'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ButtonIcon, ButtonIconSwitching } from '../../primitives/Button'
import { Collapse, Expand } from '@acme/icons'
import type { NavigationLogoItemProps } from './types'
import { useNavigationPanel } from './NavigationPanel'
import styles from './NavigationPanel.module.css'

/**
 * NavigationLogoItem
 * The special logo menu item (Type=logo) that heads a NavigationPanel.
 *
 * - Expanded: the `logo` slot on the left and a transparent collapse ButtonIcon
 *   on the right.
 * - Collapsed: the logo becomes the toggle — it swaps to an expand arrow on
 *   hover/focus via ButtonIconSwitching.
 *
 * Both controls call the panel's `onToggle` (read from context).
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export function NavigationLogoItem({
  logo,
  collapsedLogo,
  collapseLabel = 'Collapse navigation',
  expandLabel = 'Expand navigation',
  className,
  ref,
  ...props
}: NavigationLogoItemProps & { ref?: React.Ref<HTMLDivElement> }) {
  const { isExpanded, onToggle } = useNavigationPanel()

  if (!isExpanded) {
    return (
      <div ref={ref} className={cn(styles.logoItemCollapsed, className)} {...props}>
        <ButtonIconSwitching
          label={expandLabel}
          icon={collapsedLogo ?? logo}
          hoverIcon={<Expand size={20} />}
          onClick={onToggle}
        />
      </div>
    )
  }

  return (
    <div ref={ref} className={cn(styles.logoItem, className)} {...props}>
      <span className={styles.logoMark}>{logo}</span>
      <ButtonIcon
        label={collapseLabel}
        icon={<Collapse size={20} />}
        variant="transparent"
        onClick={onToggle}
      />
    </div>
  )
}

NavigationLogoItem.displayName = 'NavigationLogoItem'
