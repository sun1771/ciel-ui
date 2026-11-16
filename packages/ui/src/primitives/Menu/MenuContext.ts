import React from 'react'

/** Selection shared by a Menu with MenuItems that have a `value`. */
export const MenuContext = React.createContext<{
  value: string | undefined
  select: (value: string) => void
} | null>(null)
