// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: {
      semi: false,
      indent: 2,
      quotes: 'single',
    },
    formatters: false,
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/block-lang': ['error', {
        script: { lang: ['ts', 'tsx'] },
      }],
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.cache/',
      '.nuxt/',
      '.output/',
      '*.min.js',
      '*.min.css',
      '*.map',
      '*.log',
      'pnpm-lock.yaml',
    ],
    overrides: [
      {
        files: ['content/**'],
        rules: {
          'antfu/consistent-list-newline': 'off',
          'eqeqeq': 'off',
          'no-irregular-whitespace': 'off',
          'style/indent': 'off',
          'style/quotes': 'off',
          'style/semi': 'off',
        },
      },
      {
        files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
        excludes: ['content/**'],
        parser: 'jsonc-eslint-parser',
        rules: {
          'pnpm/json-enforce-catalog': 'off',
          'jsonc/no-comments': 'off',
          'style/eol-last': ['warn', 'never'],
        },
      },
    ],
  }),
)
