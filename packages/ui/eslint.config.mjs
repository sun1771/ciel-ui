import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: { react },
    rules: {
      // Catches `// comment` written as JSX children, which renders as visible text.
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-key': 'error',
      'react/no-unescaped-entities': 'error',
    },
  },
  {
    rules: {
      // Destructuring a prop out of `...rest` so it isn't forwarded to the DOM is intentional.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
    },
  }
)
