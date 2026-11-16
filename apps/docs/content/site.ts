/** Site-wide settings for the Ciel UI docs. */
export const site = {
  name: 'Ciel UI',
  tagline: 'Accessible, themeable React components for real products.',
  description:
    'Ciel UI is a React 19 component library: 38 components and 48 icons, WCAG 2.2 AA in light and dark themes, Server Component ready, and tested in a real browser.',
  /** npm package names. */
  packages: { ui: '@cielui/react', icons: '@cielui/icons', tokens: '@cielui/tokens' },
  author: {
    name: 'Sanaz Khanali',
    links: [
      { label: 'Portfolio', href: 'https://www.sunnyk.net/' },
      { label: 'GitHub', href: 'https://github.com/sun1771' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanaz-khanali/' },
    ],
  },
  /** Override with NEXT_PUBLIC_STORYBOOK_URL, e.g. for a preview deploy. */
  storybookUrl: process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'https://storybook-ciel-ui.vercel.app',
  repoUrl: process.env.NEXT_PUBLIC_REPO_URL ?? 'https://github.com/sun1771/ciel-ui',
}
