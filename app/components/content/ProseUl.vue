<template>
  <ul>
    <slot />
  </ul>
</template>

<style scoped>
ul {
  line-height: var(--content-line-height);
  padding-inline-start: var(--inline-padding);
}
</style>

<style lang="less">
ul > li[content] {
  list-style: disc;

  & > ul > li[content] {
    list-style: circle;

    & > ul > li[content] {
      list-style: square;

      & > ul > li[content] {
        list-style: '*';

        & > ul > li[content] {
          list-style: lower-greek;

          & > ul > li[content] {
            list-style: lower-alpha;
          }
        }
      }
    }
  }
}

ul li[content]::marker {
  color: rgb(var(--mdui-color-primary));
}
</style>
