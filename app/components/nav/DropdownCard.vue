<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '200',
  },
})
</script>

<template>
  <mdui-card :style="{ width: `${props.width}px` }">
    <slot name="default" />
  </mdui-card>
</template>

<style lang="less" scoped>
mdui-card,
div {
  border: 1px solid rgba(var(--mdui-color-outline), 0.2);
  background-color: rgba(var(--mdui-color-surface), 0.85);
  padding: var(--inline-padding);
  -webkit-backdrop-filter: saturate(140%) blur(8px);
  backdrop-filter: saturate(140%) blur(8px);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 1px 3px rgba(0, 0, 0, 0.06);
}
</style>
