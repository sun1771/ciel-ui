'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { X } from '@acme/icons'
import { ChevronRight } from '@acme/icons'
import styles from './Snackbar.module.css'
import type { SnackbarProps } from './types'

/**
 * Snackbar
 * Toast-style feedback notification with title, body, optional icon,
 * action link, close button, and animated progress bar.
 *
 * @see design-system/figma.md → Snackbar (node 852:286)
 * @see docs/components.md for usage examples
 */
export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      variant = 'default',
      icon,
      title,
      children,
      action,
      showClose = true,
      onClose,
      showProgress = false,
      progress = 100,
      className,
      ...props
    },
    ref
  ) => {
    const handleActionClick = (e: React.MouseEvent) => {
      if (action?.onClick) {
        e.preventDefault()
        action.onClick(e)
      }
    }

    const handleCloseKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((e.key === 'Enter' || e.key === ' ') && onClose) {
        e.preventDefault()
        onClose()
      }
    }

    const clampedProgress = Math.min(100, Math.max(0, progress ?? 100))

    return (
      <div
        ref={ref}
        role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
        aria-live={variant === 'error' || variant === 'warning' ? 'assertive' : 'polite'}
        className={cn(styles.base, styles[variant], className)}
        {...props}
      >
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}

        <div className={styles.content}>
          {title && (
            <p className={styles.title}>
              {title}
            </p>
          )}

          <p className={styles.message}>
            {children}
          </p>

          {action && (
            <div className={styles.actionRow}>
              {action.href ? (
                <a
                  href={action.href}
                  className={styles.actionLabel}
                  onClick={action.onClick ? handleActionClick : undefined}
                >
                  {action.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={styles.actionLabel}
                  onClick={action.onClick}
                >
                  {action.label}
                </button>
              )}
              <ChevronRight size={20} aria-hidden />
            </div>
          )}
        </div>

        {showClose && (
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Dismiss notification"
            onClick={onClose}
            onKeyDown={handleCloseKeyDown}
          >
            <X size={20} aria-hidden />
          </button>
        )}

        {showProgress && (
          <div
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={clampedProgress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        )}
      </div>
    )
  }
)

Snackbar.displayName = 'Snackbar'
