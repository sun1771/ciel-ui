'use client'

import React, { useCallback, useEffect, useId, useRef } from 'react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import styles from './Popover.module.css'
import type { PopoverProps } from './types'

/**
 * Popover — a trigger plus a floating, non-modal panel anchored below it.
 *
 * Behaviour:
 * - the trigger toggles the panel (`aria-expanded`, `aria-controls`)
 * - Escape closes it and returns focus to the trigger
 * - a pointer press outside closes it
 * - `open` can be controlled, or left uncontrolled with `defaultOpen`
 *
 * You render the trigger yourself via the `trigger` render prop; FieldPicker
 * is a ready-made field-style trigger built on this.
 */
export function Popover({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  trigger,
  panelLabel,
  panelClassName,
  children,
  className,
  ref,
  ...props
}: PopoverProps & { ref?: React.Ref<HTMLDivElement> }) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  React.useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement, [])

  const close = useCallback(() => setOpen(false), [setOpen])

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) close()
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close()
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, close])

  const isOpen = open && !disabled

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)} {...props}>
      {trigger(
        {
          ref: triggerRef,
          type: 'button',
          'aria-haspopup': 'dialog',
          'aria-expanded': isOpen,
          'aria-controls': isOpen ? panelId : undefined,
          disabled,
          onClick: () => {
            if (!disabled) setOpen(!open)
          },
        },
        { open: isOpen }
      )}

      {isOpen && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label={panelLabel}
          className={cn(styles.panel, panelClassName)}
        >
          {typeof children === 'function' ? children({ close }) : children}
        </div>
      )}
    </div>
  )
}

Popover.displayName = 'Popover'
