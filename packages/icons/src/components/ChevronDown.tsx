import React from 'react'
import type { IconProps } from '../types'

export function ChevronDown({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {size === 16 && (
        <path d="M4 6L8 10L12 6" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M5 7.5L10 12.5L15 7.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M8 12L16 20L24 12" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
