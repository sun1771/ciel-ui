import React from 'react'
import type { IconProps } from '../types'

export function ArrowDown({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M7.99992 3.33329V12.6666M7.99992 12.6666L3.33325 7.99996M7.99992 12.6666L12.6666 7.99996" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M9.99984 4.16662V15.8333M9.99984 15.8333L4.1665 9.99995M9.99984 15.8333L15.8332 9.99995" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M11.9998 4.99994V18.9999M11.9998 18.9999L4.99976 11.9999M11.9998 18.9999L18.9998 11.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M15.9996 6.66659V25.3333M15.9996 25.3333L6.66626 15.9999M15.9996 25.3333L25.3329 15.9999" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
