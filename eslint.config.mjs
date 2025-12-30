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
      'nuxt/nuxt-config-keys-order': 'off', // 禁用有 bug 的规则
      'vue/no-deprecated-slot-attribute': 'off', // Web Components 需要使用 slot 属性
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
  }),
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
    files: ['**/*.json'],
    ignores: ['content/**'],
    rules: {
      'pnpm/json-enforce-catalog': 'off',
      'style/eol-last': ['warn', 'never'],
    },
  },
)
