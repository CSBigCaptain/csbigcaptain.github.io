<script setup lang="ts">
import type { Dropdown } from 'mdui/components/dropdown'
import 'mdui/components/dropdown'

const props = defineProps<{
  trigger: Dropdown['trigger']
}>()
</script>

<template>
  <!-- 插槽与 mdui-drop-down 的相同 -->
  <mdui-dropdown placement="auto" :trigger="props.trigger">
    <slot name="default" />
  </mdui-dropdown>
</template>

<style lang="less" scoped></style>
