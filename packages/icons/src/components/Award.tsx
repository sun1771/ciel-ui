import React from 'react'
import type { IconProps } from '../types'

export function Award({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M4.66683 9.26593L4.71141 14.6666L8.04474 13L11.3781 14.6666L11.3335 9.26593M12.6668 5.99994C12.6668 8.57727 10.5775 10.6666 8.00016 10.6666C5.42283 10.6666 3.3335 8.57727 3.3335 5.99994C3.3335 3.42261 5.42283 1.33327 8.00016 1.33327C10.5775 1.33327 12.6668 3.42261 12.6668 5.99994Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M5.83341 11.5824L5.88914 18.3333L10.0558 16.25L14.2225 18.3333L14.1667 11.5824M15.8334 7.49994C15.8334 10.7216 13.2217 13.3333 10.0001 13.3333C6.77842 13.3333 4.16675 10.7216 4.16675 7.49994C4.16675 4.27828 6.77842 1.66661 10.0001 1.66661C13.2217 1.66661 15.8334 4.27828 15.8334 7.49994Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M7.00024 13.8989L7.06712 22L12.0671 19.5L17.0671 22L17.0002 13.8989M19.0002 8.99994C19.0002 12.8659 15.8662 15.9999 12.0002 15.9999C8.13425 15.9999 5.00024 12.8659 5.00024 8.99994C5.00024 5.13395 8.13425 1.99994 12.0002 1.99994C15.8662 1.99994 19.0002 5.13395 19.0002 8.99994Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M9.33366 18.5319L9.42282 29.3333L16.0895 26L22.7562 29.3333L22.667 18.5319M25.3337 11.9999C25.3337 17.1546 21.155 21.3333 16.0003 21.3333C10.8457 21.3333 6.66699 17.1546 6.66699 11.9999C6.66699 6.84528 10.8457 2.66661 16.0003 2.66661C21.155 2.66661 25.3337 6.84528 25.3337 11.9999Z" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
