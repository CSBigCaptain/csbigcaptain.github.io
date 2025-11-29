<script lang="ts" setup>
// 可以添加组件逻辑，如需要
</script>

<template>
  <div class="prose-h4-container">
    <h4 class="prose-h4">
      <slot />
    </h4>
  </div>
</template>

<style lang="less" scoped>
.prose-h4-container {
  margin: 1.2rem 0 0.8rem;
  position: relative;
}

.prose-h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(var(--mdui-color-on-surface));
  position: relative;
  padding-left: 0.8rem;
  border-left: 2px solid rgb(var(--mdui-color-tertiary));
  line-height: 1.3;
}

.prose-h4:hover {
  color: rgb(var(--mdui-color-primary));
  transition: color 0.5s ease;
  cursor: pointer;
}
</style>
