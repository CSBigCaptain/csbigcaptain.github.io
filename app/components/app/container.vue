<script lang="ts" setup></script>

<template>
  <div class="page-outer">
    <slot name="left" />
    <div class="main">
      <slot />
    </div>
    <slot name="right" />
  </div>
</template>

<style lang="less" scoped>
.main {
  flex: 1;
  min-width: 0;
}
</style>
