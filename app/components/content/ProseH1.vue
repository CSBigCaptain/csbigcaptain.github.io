<template>
  <div class="prose-h1">
    <div class="content">
      <h1><slot /></h1>
      <div class="underline"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.prose-h1 {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3rem 0 2.5rem 0;
  margin: 1rem 0 2rem 0;
  background: rgb(var(--mdui-color-surface-container-highest));

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 0 2rem;

    h1 {
      margin: 0;
      cursor: pointer;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      color: rgb(var(--mdui-color-on-surface));
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        color: rgb(var(--mdui-color-primary));
        & + .underline {
          width: 100%;
          opacity: 1;
        }
      }
    }

    .underline {
      position: relative;
      width: 50px;
      height: 3px;
      margin-top: 1rem;
      background: rgb(var(--mdui-color-primary));
      border-radius: 2px;
      opacity: 0.7;
      transition: all 0.3s ease;
    }
  }
}
</style>

<script lang="ts" setup></script>
