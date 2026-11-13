'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { User } from '@acme/icons'
import type { AvatarProps } from './types'
import styles from './Avatar.module.css'

/**
 * Avatar
 * Circular display component showing a user icon, photo, or initials.
 * Non-interactive — no hover, focus, or disabled states.
 *
 * @see design-system/figma.md for Figma mapping (node 814:1333)
 * @see docs/components.md for usage examples
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      size = 'lg',
      type = 'icon',
      initials = 'SK',
      src,
      alt,
      className,
      ...props
    },
    ref,
  ) => {
    const iconSize = size === 'lg' ? 32 : size === 'md' ? 24 : 20

    return (
      <div
        ref={ref}
        className={cn(
          styles.avatar,
          styles[size],
          type === 'image' && styles.image,
          className,
        )}
        role="img"
        aria-label={
          type === 'image'
            ? (alt ?? 'User avatar')
            : type === 'initials'
              ? `${initials} avatar`
              : 'User avatar'
        }
        {...props}
      >
        {type === 'icon' && (
          <User size={iconSize} aria-hidden="true" />
        )}

        {type === 'image' && src && (
          <img
            src={src}
            alt={alt ?? ''}
            className={styles.img}
          />
        )}

        {type === 'initials' && (
          <span className={styles.initialsText} aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'
