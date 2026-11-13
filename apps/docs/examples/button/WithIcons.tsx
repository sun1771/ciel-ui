import { Button } from '@acme/ui'
import { ArrowRight, Plus } from '@acme/icons'

export default function WithIcons() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button iconLeft={<Plus size={20} />}>Add trip</Button>
      <Button variant="outline" iconRight={<ArrowRight size={20} />}>
        Continue
      </Button>
      <Button isLoading>Saving</Button>
    </div>
  )
}
