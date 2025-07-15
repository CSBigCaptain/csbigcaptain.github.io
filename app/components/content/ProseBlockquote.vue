<template>
  <blockquote class="blockquote">
    <slot />
  </blockquote>
</template>

<style scoped>
.blockquote {
  margin: 0.5rem 0; /* 减小外边距 */
  padding: 0.5rem 1.5rem; /* 减小内边距 */
  background-color: rgb(var(--mdui-color-surface-container-high));
  border-left: 4px solid rgb(var(--mdui-color-primary));
  border-radius: 4px;
  color: rgb(var(--mdui-color-on-surface));
  font-style: italic;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  font-size: 0.9rem; /* 减小字体大小 */
  line-height: 1.4; /* 调整行高 */
}

</style>