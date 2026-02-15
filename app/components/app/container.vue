<script lang="ts" setup></script>

<template>
  <div class="out">
    <div class="container flex">
      <slot name="left" />
      <div class="main">
        <slot />
      </div>
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  flex: 1;
  min-width: 0;
}
</style>
