<template>
  <li content>
    <slot />
  </li>
</template>

<style lang="less" scoped>
li {
  line-height: var(--content-line-height);
  padding-inline-start: calc(var(--inline-padding) * .4);
  margin-block: var(--content-li-margin-block);
}
</style>
