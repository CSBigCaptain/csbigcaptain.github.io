import { defineConfig } from 'oxfmt'

export default defineConfig({
  singleQuote: true,
  semi: false,
  sortTailwindcss: {
    stylesheet: './app/assets/css/global.css',
  },
  quoteProps: 'preserve',
})
