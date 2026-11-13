import React from 'react'
import type { IconProps } from '../types'

export function Pause({ size = 24, color = 'currentColor', className, ...props }: IconProps) {
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
        <path d="M12.5866 4.83024C12.5866 4.05137 11.9552 3.41998 11.1763 3.41998H4.83018C4.05131 3.41998 3.41992 4.05137 3.41992 4.83024V11.1764C3.41992 11.9552 4.05131 12.5866 4.83018 12.5866H11.1763C11.9552 12.5866 12.5866 11.9552 12.5866 11.1764V4.83024Z" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 20 && (
        <path d="M15.7332 6.03781C15.7332 5.06423 14.944 4.27499 13.9704 4.27499H6.03772C5.06414 4.27499 4.2749 5.06423 4.2749 6.03781V13.9705C4.2749 14.9441 5.06414 15.7333 6.03772 15.7333H13.9704C14.944 15.7333 15.7332 14.9441 15.7332 13.9705V6.03781Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 24 && (
        <path d="M18.8799 7.24538C18.8799 6.07709 17.9328 5.13 16.7645 5.13H7.24526C6.07697 5.13 5.12988 6.07709 5.12988 7.24538V16.7646C5.12988 17.9329 6.07697 18.88 7.24526 18.88H16.7645C17.9328 18.88 18.8799 17.9329 18.8799 16.7646V7.24538Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      {size === 32 && (
        <path d="M25.1731 9.6605C25.1731 8.10278 23.9104 6.84 22.3526 6.84H9.66035C8.10263 6.84 6.83984 8.10278 6.83984 9.6605V22.3528C6.83984 23.9105 8.10263 25.1733 9.66035 25.1733H22.3526C23.9104 25.1733 25.1731 23.9105 25.1731 22.3528V9.6605Z" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      )}
    </svg>
  )
}
