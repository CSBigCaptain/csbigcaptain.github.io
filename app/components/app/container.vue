<script lang="ts" setup>
</script>

<template>
  <div class="outer">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main page-container">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.outer {
  display: flex;
  justify-content: center;
}
</style>
