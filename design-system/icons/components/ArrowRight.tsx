import React from 'react'
import type { IconProps } from '../types'

export function ArrowRight({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M3.33325 7.99998L12.6666 7.99998M12.6666 7.99998L7.99992 3.33331M12.6666 7.99998L7.99992 12.6666" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M4.1665 9.99996L15.8332 9.99996M15.8332 9.99996L9.99984 4.16663M15.8332 9.99996L9.99984 15.8333" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M4.99976 12L18.9998 12M18.9998 12L11.9998 4.99997M18.9998 12L11.9998 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M6.66626 16L25.3329 16M25.3329 16L15.9996 6.66663M25.3329 16L15.9996 25.3333" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
