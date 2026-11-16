import { ProgressBar, ProgressCircle } from '@cielui/react'

export default function Basic() {
  return (
    <div style={{ display: 'grid', gap: 20, maxWidth: 360 }}>
      <ProgressBar value={60} showLabel label="Upload progress" />
      <div style={{ display: 'flex', gap: 16 }}>
        <ProgressCircle value={25} showLabel label="Step 1 of 4" />
        <ProgressCircle value={75} size="sm" label="Profile completion" />
      </div>
    </div>
  )
}
