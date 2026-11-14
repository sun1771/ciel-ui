import { ButtonIcon } from '@acme/ui'
import { Search, Settings, Share } from '@acme/icons'

export default function IconOnly() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <ButtonIcon label="Search" icon={<Search size={20} />} />
      <ButtonIcon label="Share" icon={<Share size={20} />} variant="outline" shape="round" />
      <ButtonIcon label="Settings" icon={<Settings size={20} />} variant="transparent" />
    </div>
  )
}
