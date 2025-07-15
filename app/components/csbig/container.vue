<script lang="ts" setup>
// csbig-container 组件：智能根据屏幕宽度控制正文的布局
</script>

<template>
  <div class="outer">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="main">
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
  .main {
    width: 85%;
    max-width: 1920px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    @media(width <= 425px) {
      width: 100%;
    }
  }
}
</style>
