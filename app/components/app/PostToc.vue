<script lang="ts" setup>
import 'mdui/components/card'

const props = defineProps(['post'])
const { activeHeadings, updateHeadings } = useScrollspy()

const nuxtApp = useNuxtApp()

nuxtApp.hooks.hook('page:loading:end', () => {
  const headings = Array.from(document.querySelectorAll('.prose-h4-container, .prose-h3, .prose-h2-container'))
  updateHeadings(headings)
})
nuxtApp.hooks.hook('page:transition:finish', () => {
  const headings = Array.from(document.querySelectorAll('.prose-h4-container, .prose-h3, .prose-h2-container'))
  updateHeadings(headings)
})
</script>

<template>
  <mdui-card class="contents" variant="filled">
    <ul v-if="props.post?.body?.toc?.links?.length">
      <li v-for="item in props.post.body.toc.links" :key="item.id">
        <NuxtLink :to="`#${item.id}`" class="link" :class="{ active: activeHeadings.includes(item.id) }">
          {{ item.text }}
        </NuxtLink>
        <ul v-if="item.children?.length">
          <li v-for="child in item.children" :key="child.id">
            <NuxtLink :to="`#${child.id}`" class="link" :class="{ active: activeHeadings.includes(child.id) }">
              {{ child.text }}
            </NuxtLink>
            <ul v-if="child.children?.length">
              <li v-for="grand in child.children" :key="grand.id">
                <NuxtLink :to="`#${grand.id}`" class="link" :class="{ active: activeHeadings.includes(grand.id) }">
                  {{ grand.text }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else class="link">
      Oops...暂无目录
    </div>
  </mdui-card>
</template>

<style lang="less" scoped>
mdui-card {
  width: 100%;
  padding: var(--inline-padding);
}

.contents {
  ul {
    margin: 0;
    padding-left: 0;
    line-height: 1.6;
    & ul {
      padding-left: 1.5em;
    }
    & .link {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgba(var(--mdui-color-on-surface), 0.7);
    }
    & .active {
      color: rgba(var(--mdui-color-primary), 0.7);
    }
    & .link:hover {
      font-weight: var(--bold-font-weight);
      color: rgba(var(--mdui-color-secondary), 1);
    }
  }
}
</style>
