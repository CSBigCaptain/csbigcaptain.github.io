<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top'>,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <span class="main">
    <NuxtLink
      class="text-primary underline decoration-dotted underline-offset-3"
      :to="props.href" :target="props.target"
    >
      <slot />
    </NuxtLink>
  </span>
</template>
