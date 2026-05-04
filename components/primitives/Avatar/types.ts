import type React from 'react'

export type AvatarSize = 'lg' | 'md' | 'sm'
export type AvatarType = 'icon' | 'image' | 'initials'

/** Props for the Avatar display component. Root element is a <div>. */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual size of the avatar circle: lg=64px, md=48px, sm=32px */
  size?: AvatarSize
  /** Content type displayed inside the circle */
  type?: AvatarType
  /** Initials text shown when type="initials". Default: "SK" */
  initials?: string
  /** Image URL — required when type="image" */
  src?: string
  /** Alt text for the image — required when type="image" for accessibility */
  alt?: string
  /** Applied to the outer wrapper div */
  className?: string
}
