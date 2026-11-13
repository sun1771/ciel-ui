import React from 'react'
import type { IconProps } from '../types'

export function ArrowUp({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M7.99992 12.6666V3.33331M7.99992 3.33331L3.33325 7.99998M7.99992 3.33331L12.6666 7.99998" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M9.99984 15.8333V4.16663M9.99984 4.16663L4.1665 9.99996M9.99984 4.16663L15.8332 9.99996" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M12 19V4.99997M12 4.99997L5 12M12 4.99997L19 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M15.9998 25.3333V6.66663M15.9998 6.66663L6.6665 16M15.9998 6.66663L25.3332 16" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
