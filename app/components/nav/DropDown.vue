<script setup lang="ts">
const props = defineProps([
  'trigger',
])
</script>

<template>
  <!-- 插槽与 mdui-drop-down 的相同 -->
  <mdui-dropdown placement="auto" :trigger="props.trigger">
    <slot name="default" />
  </mdui-dropdown>
</template>

<style scoped>

</style>