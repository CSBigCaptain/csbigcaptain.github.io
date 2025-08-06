<template>
  <div class="prose-h2-container">
    <h2 class="prose-h2"><slot /></h2>
  </div>
</template>

<script lang="ts" setup>
// 可以添加组件逻辑，如锚点链接、动画效果等
</script>

<style scoped>
.prose-h2-container {
  margin: 2rem 0 1.2rem;
  position: relative;
}

.prose-h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--mdui-color-on-surface));
  position: relative;
  padding-left: 1.2rem;
  border-left: 4px solid rgb(var(--mdui-color-primary));
  line-height: 1.4;
}

.prose-h2:hover {
  color: rgb(var(--mdui-color-primary));
  transition: color 0.5s ease;
  cursor: pointer;
}
</style>
