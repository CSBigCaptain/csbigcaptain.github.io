<template>
  <ol>
    <slot />
  </ol>
</template>

<style scoped>
ol {
  line-height: var(--content-line-height);
  padding-inline-start: var(--inline-padding);
}
</style>

<style lang="less">
ol > li[content] {
  list-style: decimal;

  & > ol > li[content] {
    list-style: lower-greek;

    & > ol > li[content] {
      list-style: lower-latin;

      & > ol > li[content] {
        list-style: upper-roman;

        & > ol > li[content] {
          list-style: decimal-leading-zero;

          & > ol > li[content] {
            list-style: trad-chinese-formal;
          }
        }
      }
    }
  }
}

ol li[content]::marker {
  color: rgb(var(--mdui-color-primary));
}
</style>
