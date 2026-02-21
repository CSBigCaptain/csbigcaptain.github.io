<template>
  <ol class="leading-normal ps-4 my-4">
    <slot />
  </ol>
</template>

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

ol ol, ol ul {
  margin-block: 0.25rem;
}

ol li[content]::marker {
  color: var(--color-outline);
}
</style>
