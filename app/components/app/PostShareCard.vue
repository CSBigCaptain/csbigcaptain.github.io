<script lang="ts" setup>
import 'mdui/components/card'
import 'mdui/components/button'

const props = defineProps<{
  title: string
  url: string
  description: string
}>()

const link = shallowRef(`${props.url}`)
const full = shallowRef(
  `${props.title} | ${useSite().name} \n\n${props.url}\n\n${props.description}`,
)

const { copy: copyLink, copied: copiedLink } = useClipboard({ source: link })
const { copy: copyFull, copied: copiedFull } = useClipboard({ source: full })
</script>

<template>
  <mdui-card variant="filled" class="w-full px-8 py-8">
    <div class="pb-1 text-xl font-semibold">
      {{ props.title }}
    </div>
    <NuxtLink class="text-secondary" :to="props.url">
      {{ props.url }}
    </NuxtLink>
    <div class="mt-3 flex gap-3">
      <mdui-button variant="filled" @click="copyLink()">
        <Transition name="fade" mode="out-in">
          <span v-if="!copiedLink" key="link">复制链接</span>
          <span v-else key="copied-link" class="w-[4em]">已复制</span>
        </Transition>
      </mdui-button>
      <mdui-button @click="copyFull()">
        <Transition name="fade" mode="out-in">
          <span v-if="!copiedFull" key="content">复制完整内容</span>
          <span v-else key="copied-content" class="w-[6em]">已复制</span>
        </Transition>
      </mdui-button>
    </div>
  </mdui-card>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
