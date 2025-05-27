import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const blog = defineCollection({
  type: "page",
  source: "1.blog/**/*.md",
  schema: z.object({
    date: z.date(),
  }),
});

const indexActions = defineCollection({
  type: "data",
  source: "data/index/actions.yml",
  schema: z.object({
    text: z.string(),
    link: z.string(),
    variant: z.string(),
    icon: z.string(),
    endIcon: z.string(),
  }),
});

const indexMain = defineCollection({
  type: "data",
  source: "data/index/main.yml",
  schema: z.object({
    name: z.string(),
    text: z.string(),
  }),
});

const indexAdvs = defineCollection({
  type: "data",
  source: "data/index/advs.yml",
  schema: z.object({
    title: z.string(),
    detail: z.string(),
  }),
})

const navigationDrawerList = defineCollection({
  type: "data",
  source: "data/navigation-drawer/list.yml",
  schema: z.object({
    text: z.string(),
    icon: z.string(),
    link: z.string(),
  }),
});

export default defineContentConfig({
  collections: {
    blog,
    indexMain,
    indexActions,
    indexAdvs,
    navigationDrawerList,
  },
});
