<template>
  <IndexNav>
    <template #topic><slot name="topic" /></template>
  </IndexNav>
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
