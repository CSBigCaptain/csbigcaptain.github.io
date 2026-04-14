<script lang="ts" setup>
import 'mdui/components/card'
import 'mdui/components/button'

const props = defineProps<{
  title: string
  url: string
}>()

const cpySource = shallowRef(
  `${props.title} | ${useSite().name} \n${props.url}`,
)

const { copy, copied } = useClipboard({ source: cpySource })
</script>

<template>
  <mdui-card variant="filled" class="w-full px-8 py-8">
    <div class="text-xl font-semibold pb-1">
      {{ props.title }}
    </div>
    <NuxtLink class="text-secondary" :to="props.url">
      {{ props.url }}
    </NuxtLink>
    <div class="flex mt-3 gap-3">
      <mdui-button variant="filled" @click="copy()">
        <span v-if="!copied">复制分享链接</span>
        <span v-else>已成功复制</span>
      </mdui-button>
    </div>
  </mdui-card>
</template>

<style>

</style>
