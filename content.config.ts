import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '1.blog/**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
});
