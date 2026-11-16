import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

// Brand the Storybook sidebar: "Ciel UI" links back to the docs site.
// The base follows the system colour scheme, as Storybook's default does.
const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches

addons.setConfig({
  theme: create({
    base: dark ? 'dark' : 'light',
    brandTitle: 'Ciel UI',
    brandUrl: 'https://docs-ciel-ui.vercel.app',
    brandTarget: '_self',
  }),
})
