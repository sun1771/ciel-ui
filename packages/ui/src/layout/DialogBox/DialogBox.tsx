'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { cn } from '../../lib/utils'
import { X } from '@acme/icons'
import type { DialogBoxProps } from './types'
import styles from './DialogBox.module.css'

/**
 * DialogBox
 * Modal dialog with heading, body, and action bar. Renders in a portal.
 * Traps focus, closes on Escape, and restores focus on unmount.
 *
 * @see design-system/figma.md for Figma mapping
 * @see docs/components.md for usage examples
 */
export function DialogBox({
  isOpen,
  title,
  icon,
  showClose = true,
  onClose,
  children,
  primaryLabel = 'Confirm',
  onPrimary,
  showSecondary = false,
  secondaryLabel = 'Cancel',
  onSecondary,
  className,
}: DialogBoxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)

  const handleSecondary = useCallback(() => {
    if (onSecondary) {
      onSecondary()
    } else {
      onClose?.()
    }
  }, [onSecondary, onClose])

  useEffect(() => {
    if (!isOpen) return

    triggerRef.current = document.activeElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
        return
      }

      if (e.key !== 'Tab') return

      const dialog = dialogRef.current
      if (!dialog) return

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        )
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      'button:not(:disabled), [href], input:not(:disabled), [tabindex]:not([tabindex="-1"])'
    )
    firstFocusable?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen && triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus()
      triggerRef.current = null
    }
  }, [isOpen])

  if (!isOpen || typeof document === 'undefined') return null

  return ReactDOM.createPortal(
    <div
      className={styles.backdrop}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={cn(styles.dialog, className)}
      >
        {/* Heading */}
        <div className={styles.heading}>
          <div className={styles.headingContent}>
            {icon && (
              <span className={styles.headingIcon} aria-hidden="true">
                {icon}
              </span>
            )}
            <p id="dialog-title" className={styles.title}>
              {title}
            </p>
          </div>
          {showClose && (
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close dialog"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Body */}
        <div className={styles.body}>{children}</div>

        {/* Action Bar */}
        <div className={styles.actionBar}>
          {showSecondary && (
            <button type="button" className={styles.secondaryButton} onClick={handleSecondary}>
              {secondaryLabel}
            </button>
          )}
          <button type="button" className={styles.primaryButton} onClick={onPrimary}>
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

DialogBox.displayName = 'DialogBox'
