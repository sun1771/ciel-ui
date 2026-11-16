'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { useControllableState } from '../../lib/useControllableState'
import { Menu } from '../Menu'
import { SelectButton } from '../SelectButton'
import styles from './SelectMenu.module.css'
import type { SelectMenuProps } from './types'

/**
 * SelectMenu — a SelectButton that opens a Menu of options (the WAI-ARIA menu
 * button pattern). Pass MenuItems with a `value`; the selected item's text
 * becomes the button text.
 *
 * Behaviour:
 * - click, Enter, Space or ArrowDown on the button opens the menu and moves
 *   focus to the selected item (ArrowUp: the last item)
 * - arrows, Home and End move through the items; Enter or click picks one,
 *   closes the menu and returns focus to the button
 * - Escape closes it and returns focus to the button; Tab or a click
 *   outside closes it
 */
export function SelectMenu({
  children,
  value: valueProp,
  defaultValue,
  onValueChange,
  placeholder = 'Select',
  open: openProp,
  onOpenChange,
  'aria-label': ariaLabel,
  variant = 'outline',
  size = 'lg',
  disabled = false,
  className,
  menuClassName,
  ref,
  ...props
}: SelectMenuProps & { ref?: React.Ref<HTMLDivElement> }) {
  const [value, setValue] = useControllableState<string | undefined>({
    value: valueProp,
    defaultValue,
    onChange: onValueChange as ((v: string | undefined) => void) | undefined,
  })
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: false,
    onChange: onOpenChange,
  })
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const focusOnOpen = React.useRef<'selected' | 'last'>('selected')
  const menuId = React.useId()
  React.useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement, [])

  const isOpen = open && !disabled

  const selectedLabel = React.Children.toArray(children).find(
    (child): child is React.ReactElement<{ value?: string; children?: React.ReactNode }> =>
      React.isValidElement(child) &&
      (child.props as { value?: string }).value !== undefined &&
      (child.props as { value?: string }).value === value
  )?.props.children

  const close = React.useCallback(
    (refocus: boolean) => {
      setOpen(false)
      if (refocus) buttonRef.current?.focus()
    },
    [setOpen]
  )

  // Move focus into the menu when it opens.
  React.useEffect(() => {
    if (!isOpen) return
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLElement>('[role^="menuitem"]:not(:disabled)') ?? []
    )
    const target =
      focusOnOpen.current === 'last'
        ? items[items.length - 1]
        : (items.find((el) => el.getAttribute('aria-checked') === 'true') ?? items[0])
    target?.focus()
  }, [isOpen])

  // Click outside closes.
  React.useEffect(() => {
    if (!isOpen) return
    function onPointerDown(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) close(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [isOpen, close])

  function openWith(focus: 'selected' | 'last') {
    focusOnOpen.current = focus
    setOpen(true)
  }

  return (
    <div ref={wrapperRef} className={cn(styles.wrapper, className)} {...props}>
      <SelectButton
        ref={buttonRef}
        variant={variant}
        size={size}
        disabled={disabled}
        isSelected={isOpen}
        aria-haspopup="menu"
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => (isOpen ? close(false) : openWith('selected'))}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
            openWith(e.key === 'ArrowUp' ? 'last' : 'selected')
          }
        }}
      >
        {selectedLabel ?? placeholder}
      </SelectButton>

      {isOpen && (
        <Menu
          ref={menuRef}
          id={menuId}
          size={size}
          aria-label={ariaLabel}
          value={value}
          onValueChange={(v) => {
            setValue(v)
            close(true)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault()
              close(true)
            } else if (e.key === 'Tab') {
              close(false)
            }
          }}
          className={cn(styles.menu, menuClassName)}
        >
          {children}
        </Menu>
      )}
    </div>
  )
}

SelectMenu.displayName = 'SelectMenu'
