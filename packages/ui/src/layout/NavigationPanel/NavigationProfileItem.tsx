'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { ButtonIcon } from '../../primitives/Button'
import { Avatar } from '../../primitives/Avatar'
import { Settings } from '@cielui/icons'
import type { NavigationProfileItemProps } from './types'
import { useNavigationPanel } from './NavigationPanel'
import styles from './NavigationPanel.module.css'

/**
 * NavigationProfileItem
 * The "Setting and Profile" row that sits at the bottom of a NavigationPanel.
 * It behaves differently from a standard NavigationMenuItem:
 *
 * - Expanded: the user's Avatar + name on the left, a Settings ButtonIcon on
 *   the right (justify-between).
 * - Collapsed: the Settings ButtonIcon stacked on top of the Avatar.
 *
 * Composes the Avatar and ButtonIcon primitives — nothing is hardcoded.
 *
 * @see design-system/figma.md → NavigationPanel
 * @see docs/components.md for usage examples
 */
export function NavigationProfileItem({
  userName = 'User',
  avatarSrc,
  avatarInitials,
  avatarAlt,
  settingsLabel = 'Settings',
  profileLabel,
  onSettingsClick,
  onProfileClick,
  className,
  ref,
  ...props
}: NavigationProfileItemProps & { ref?: React.Ref<HTMLDivElement> }) {
  const { isExpanded } = useNavigationPanel()

  const avatarType = avatarSrc ? 'image' : avatarInitials ? 'initials' : 'icon'
  const avatar = (
    <Avatar
      size="sm"
      type={avatarType}
      src={avatarSrc}
      initials={avatarInitials}
      alt={avatarAlt ?? userName}
    />
  )

  const settingsButton = (
    <ButtonIcon
      label={settingsLabel}
      icon={<Settings size={20} />}
      variant="transparent"
      onClick={onSettingsClick}
    />
  )

  if (!isExpanded) {
    return (
      <div ref={ref} className={cn(styles.profileItemCollapsed, className)} {...props}>
        {settingsButton}
        {onProfileClick ? (
          <button
            type="button"
            className={styles.profileAvatarButton}
            aria-label={profileLabel ?? userName}
            onClick={onProfileClick}
          >
            {avatar}
          </button>
        ) : (
          avatar
        )}
      </div>
    )
  }

  const profileCluster = onProfileClick ? (
    <button
      type="button"
      className={styles.profileCluster}
      aria-label={profileLabel ?? userName}
      onClick={onProfileClick}
    >
      {avatar}
      <span className={styles.profileName}>{userName}</span>
    </button>
  ) : (
    <div className={styles.profileCluster}>
      {avatar}
      <span className={styles.profileName}>{userName}</span>
    </div>
  )

  return (
    <div ref={ref} className={cn(styles.profileItem, className)} {...props}>
      {profileCluster}
      {settingsButton}
    </div>
  )
}

NavigationProfileItem.displayName = 'NavigationProfileItem'
