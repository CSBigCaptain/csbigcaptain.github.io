<script setup lang="ts">
const props = defineProps(["append"])
</script>

<template>
  <index-nav>
    <template #topic>
      Blog{{ props.append ? ` ${props.append}` : "" }}
    </template>
  </index-nav>
  <div class="full-width">
    <slot name="full-width" />
  </div>
  <div class="outer">
    <div class="container">
      <slot />
    </div>
  </div>
  <div class="outer footer">
    <div class="container">
      <FooterDefault />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url("/assets/css/global.less");

.full-width {
  width: 100%;
}

.outer {
  background-color: var(--body-bg-color);
  display: flex;
  justify-content: center;
  .container {
    width: 90%;
    min-width: 370px;
    max-width: 2160px;
    padding: var(--inline-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
}

.footer {
  // 变量定义在全局 less 文件中
  background-color: var(--bar-bg-color);
}
</style>
