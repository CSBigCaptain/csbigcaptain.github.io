<script setup lang="ts">
import {} from '~/composables/battery-helper'



</script>

<template>
  <!-- 插槽与 mdui-drop-down 的相同 -->
  <mdui-dropdown placement="auto" trigger="hover" open-delay="200" close-delay="200">
    <slot name="default" />
  </mdui-dropdown>
</template>

<style scoped>

</style>