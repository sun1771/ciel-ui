/** Site-wide settings for the Ciel UI docs. */
export const site = {
  name: 'Ciel UI',
  tagline: 'Accessible, themeable React components for real products.',
  description:
    'Ciel UI is a React 19 component library: 37 components and 47 icons, WCAG 2.2 AA in light and dark themes, Server Component ready, and tested in a real browser.',
  /** npm scope. Placeholder until the npm org exists (see README). */
  packages: { ui: '@acme/ui', icons: '@acme/icons', tokens: '@acme/tokens' },
  author: {
    name: 'Sanaz Khanali',
    links: [
      { label: 'Portfolio', href: 'https://www.sunnyk.net/' },
      { label: 'GitHub', href: 'https://github.com/sun1771' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanaz-khanali/' },
    ],
  },
  /** Set at deploy time; links are hidden while unset. */
  storybookUrl: process.env.NEXT_PUBLIC_STORYBOOK_URL ?? null,
  repoUrl: process.env.NEXT_PUBLIC_REPO_URL ?? 'https://github.com/sun1771/ciel-ui',
}
