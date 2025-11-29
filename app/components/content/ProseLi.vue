<template>
  <li><slot /></li>
</template>

<style lang="less" scoped>
li {
  line-height: var(--content-line-height);
  padding-inline-start: var(--inline-padding);
}
</style>

<style lang="less">
div[data-content-id] ul > li::marker {
  color: rgb(var(--mdui-color-primary));
  content: '•';
  font-size: 1.2em;
  font-weight: bold;
}

div[data-content-id] ol > li::marker {
  color: rgb(var(--mdui-color-primary));
  font-size: 1.2em;
  font-weight: bold;
}
</style>
