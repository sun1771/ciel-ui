import React from 'react'

/** Selection shared by a TabBar with TabItems that have a `value`. */
export const TabBarContext = React.createContext<{
  value: string | undefined
  select: (value: string) => void
} | null>(null)
