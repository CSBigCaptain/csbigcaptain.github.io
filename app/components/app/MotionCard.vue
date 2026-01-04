<script setup lang="ts">
import { useScrollDir } from '~/composables/useScrollDir'

const dir = useScrollDir()
const initial = { opacity: 0, y: 34, scale: 0.985 }
const visibleBase = { opacity: 1, y: 0, scale: 1 }

const visible = computed(() => {
  if (dir.value === 'up') {
    return { ...visibleBase, transition: { duration: 0, delay: 0 } }
  }

  return {
    ...visibleBase,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 22,
      mass: 0.6,
    },
  }
})
</script>

<template>
  <div
    v-motion
    :initial="initial"
    :visible="visible"
    :visible-once="false"
  >
    <slot />
  </div>
</template>
