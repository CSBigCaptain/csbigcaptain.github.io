<template>
  <h3 class="prose-h3"><slot /></h3>
</template>

<script lang="ts" setup>
// 可以添加一些组件逻辑，比如点击事件、动画效果等
</script>

<style scoped>
.prose-h3 {
  margin: 1.5rem 0 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: rgb(var(--mdui-color-on-surface));
  position: relative;
  padding-left: 1.22rem;
  border-left: 3px solid rgb(var(--mdui-color-secondary));
}

.prose-h3:hover {
  color: rgb(var(--mdui-color-primary));
  transition: color 0.5s ease;
  cursor: pointer;
}
</style>
