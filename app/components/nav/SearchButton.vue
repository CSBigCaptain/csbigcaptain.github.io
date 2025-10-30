<script setup lang="ts">
const { toggleSearchStatus } = useLayoutStatus()
</script>

<template>
  <mdui-button-icon @click="toggleSearchStatus()">
    <mdui-icon-search></mdui-icon-search>
  </mdui-button-icon>
</template>

<style scoped></style>
