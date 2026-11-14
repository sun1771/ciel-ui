import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useControllableState } from './useControllableState'

describe('useControllableState', () => {
  it('uncontrolled: starts at defaultValue, updates itself and notifies', () => {
    const onChange = vi.fn()
    const { result } = renderHook(() =>
      useControllableState({ value: undefined, defaultValue: 1, onChange })
    )
    expect(result.current[0]).toBe(1)
    act(() => result.current[1](2))
    expect(result.current[0]).toBe(2)
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('controlled: reflects `value` only and never updates on its own', () => {
    const onChange = vi.fn()
    const { result, rerender } = renderHook(
      ({ value }) => useControllableState({ value, defaultValue: 0, onChange }),
      { initialProps: { value: 5 } }
    )
    act(() => result.current[1](6))
    expect(result.current[0]).toBe(5) // parent hasn't accepted the change
    expect(onChange).toHaveBeenCalledWith(6)
    rerender({ value: 6 })
    expect(result.current[0]).toBe(6)
  })
})
