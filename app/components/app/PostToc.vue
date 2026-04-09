<script lang="ts" setup>
import 'mdui/components/button'

const props = defineProps(['post'])
const { activeHeadings, updateHeadings } = useScrollspy()

const nuxtApp = useNuxtApp()

nuxtApp.hooks.hook('page:loading:end', () => {
  const headings = Array.from(
    document.querySelectorAll('.prose-h4-container, .prose-h3, .prose-h2-container'),
  )
  updateHeadings(headings)
})
nuxtApp.hooks.hook('page:transition:finish', () => {
  const headings = Array.from(
    document.querySelectorAll('.prose-h4-container, .prose-h3, .prose-h2-container'),
  )
  updateHeadings(headings)
})

interface TocLink {
  id: string
  text?: string
  children?: TocLink[]
}

function flattenLinks(links: TocLink[]): TocLink[] {
  return links.flatMap(link => [link, ...(link.children ? flattenLinks(link.children) : [])])
}
const indicatorStyle = computed(() => {
  if (!activeHeadings.value?.length) {
    return
  }

  const flatLinks = flattenLinks(props.post?.body?.toc?.links ?? [])
  const activeIndex = flatLinks.findIndex(link => activeHeadings.value.includes(link.id))

  return {
    height: `${26 * activeHeadings.value.length}px`,
    top: `${activeIndex * 26}px`,
  }
})
</script>

<template>
  <div class="contents" variant="filled">
    <mdui-button class="topic-btn" variant="tonal">
      <Icon slot="icon" name="ic:outline-article" />
      On this page
    </mdui-button>
    <div class="content pl-4 max-h-[60vh] overflow-y-auto overscroll-contain">
      <div class="indicator relative bg-surface-container-highest">
        <div
          class="absolute left-0 w-full bg-primary duration-200"
          :style="indicatorStyle"
        />
      </div>
      <ul class="text-md pl-4">
        <li v-for="item in props.post.body.toc.links" :key="item.id">
          <NuxtLink
            :to="`#${item.id}`"
            class="link"
            :class="{ active: activeHeadings.includes(item.id) }"
          >
            {{ item.text }}
          </NuxtLink>
          <ul v-if="item.children?.length">
            <li v-for="child in item.children" :key="child.id">
              <NuxtLink
                :to="`#${child.id}`"
                class="link"
                :class="{ active: activeHeadings.includes(child.id) }"
              >
                {{ child.text }}
              </NuxtLink>
              <ul v-if="child.children?.length">
                <li v-for="grand in child.children" :key="grand.id">
                  <NuxtLink
                    :to="`#${grand.id}`"
                    class="link"
                    :class="{ active: activeHeadings.includes(grand.id) }"
                  >
                    {{ grand.text }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topic-btn::part(button) {
  justify-content: flex-start;
}

.content {
  display: grid;
  grid-template-columns: 2px minmax(0, 1fr);
  align-items: stretch;
}

ul {
  // 覆盖 Prose 组件设置的 margin
  margin: 0;

  & ul {
    padding-left: 1em;
  }
  & .link {
    display: block;
    height: 26px;
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
</style>
