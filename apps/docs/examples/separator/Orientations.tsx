import { Separator } from '@cielui/react'

export default function Orientations() {
  return (
    <div style={{ display: 'grid', gap: 16, width: 280 }}>
      <Separator />
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', height: 24 }}>
        <span>Hotels</span>
        <Separator orientation="vertical" />
        <span>Flights</span>
        <Separator orientation="vertical" />
        <span>Cars</span>
      </div>
    </div>
  )
}
