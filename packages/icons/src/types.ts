import type React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 16 | 20 | 24 | 32
  color?: string
  className?: string
}
