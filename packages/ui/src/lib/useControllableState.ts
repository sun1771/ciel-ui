'use client'

import { useCallback, useState } from 'react'

/**
 * State that can be either controlled (`value` provided) or uncontrolled
 * (internal, seeded from `defaultValue`). `onChange` fires in both modes.
 */
export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined
  defaultValue: T
  onChange?: (next: T) => void
}): [T, (next: T) => void] {
  const [internal, setInternal] = useState(defaultValue)
  const isControlled = value !== undefined
  const current = isControlled ? value : internal

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [current, setValue]
}
