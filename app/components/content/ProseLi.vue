<template>
  <li><slot /></li>
</template>

<style scoped>
li {
  line-height: var(--content-line-height);
  padding-inline-start: var(--inline-padding);
}

ul > li::marker {
  color: rgb(var(--mdui-color-primary));
  content: '•';
  font-size: 1.2em;
  font-weight: bold;
}

ol > li::marker {
  color: rgb(var(--mdui-color-primary));
  font-size: 1.2em;
  font-weight: bold;
}
</style>
