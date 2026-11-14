import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('joins truthy class names and skips falsy ones', () => {
    expect(cn('a', false, null, undefined, 'b', { c: true, d: false })).toBe('a b c')
  })
})
