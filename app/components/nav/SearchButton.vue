<script setup lang="ts">
const { toggleSearchStatus } = useLayoutStatus()
</script>

<template>
  <mdui-button-icon @click="toggleSearchStatus()">
    <Icon name="ic:round-search" />
  </mdui-button-icon>
</template>

<style lang="less" scoped></style>
