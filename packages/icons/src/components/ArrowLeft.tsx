import React from 'react'
import type { IconProps } from '../types'

export function ArrowLeft({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M12.6666 7.99998L3.33325 7.99998M3.33325 7.99998L7.99992 12.6666M3.33325 7.99998L7.99992 3.33331" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M15.8332 9.99996L4.1665 9.99996M4.1665 9.99996L9.99984 15.8333M4.1665 9.99996L9.99984 4.16663" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M18.9998 11.9999L4.99976 11.9999M4.99976 11.9999L11.9998 18.9999M4.99976 11.9999L11.9998 4.99994" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M25.3332 15.9999L6.6665 15.9999M6.6665 15.9999L15.9998 25.3333M6.6665 15.9999L15.9998 6.6666" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
