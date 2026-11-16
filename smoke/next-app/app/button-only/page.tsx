// Imports a single component: used to check tree-shaking (no AIChat code in this route's JS).
import { Button } from '@cielui/react'

export default function ButtonOnly() {
  return <Button>Only a button</Button>
}
