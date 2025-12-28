import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          date: z.coerce.date(),
          update: z.coerce.date(),
          short: z.string(),
        }),
      }),
    ),
    indexActions: defineCollection({
      type: 'data',
      source: 'data/index/actions.yml',
      schema: z.object({
        body: z.array(z.object({
          text: z.string(),
          link: z.string(),
          variant: z.string(),
          icon: z.string(),
          endIcon: z.string(),
        })),
      }),
    }),
    indexMain: defineCollection({
      type: 'data',
      source: 'data/index/main.yml',
      schema: z.object({
        name: z.string(),
        text: z.string(),
      }),
    }),
    indexAdvs: defineCollection({
      type: 'data',
      source: 'data/index/advs.yml',
      schema: z.object({
        body: z.array(z.object({
          title: z.string(),
          detail: z.string(),
        })),
      }),
    }),
    navigationDrawerList: defineCollection({
      type: 'data',
      source: 'data/navigation-drawer/list.yml',
      schema: z.object({
        body: z.array(z.object({
          text: z.string(),
          icon: z.string(),
          link: z.string(),
        })),
      }),
    }),
  },
})
