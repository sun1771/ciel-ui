import React from 'react'
import type { IconProps } from '../types'

export function Search({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M14 14L10.6734 10.6734M12.1667 7.08333C12.1667 9.89078 9.89078 12.1667 7.08333 12.1667C4.27589 12.1667 2 9.89078 2 7.08333C2 4.27589 4.27589 2 7.08333 2C9.89078 2 12.1667 4.27589 12.1667 7.08333Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M17.5002 17.5L13.342 13.3418M15.2086 8.85417C15.2086 12.3635 12.3637 15.2083 8.85441 15.2083C5.3451 15.2083 2.50024 12.3635 2.50024 8.85417C2.50024 5.34486 5.3451 2.5 8.85441 2.5C12.3637 2.5 15.2086 5.34486 15.2086 8.85417Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M21.0002 21L16.0104 16.0102M18.2502 10.625C18.2502 14.8362 14.8364 18.25 10.6252 18.25C6.41407 18.25 3.00024 14.8362 3.00024 10.625C3.00024 6.41383 6.41407 3 10.6252 3C14.8364 3 18.2502 6.41383 18.2502 10.625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M28.0002 28L21.3471 21.3469M24.3336 14.1667C24.3336 19.7816 19.7818 24.3333 14.1669 24.3333C8.55202 24.3333 4.00024 19.7816 4.00024 14.1667C4.00024 8.55177 8.55202 4 14.1669 4C19.7818 4 24.3336 8.55177 24.3336 14.1667Z" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
