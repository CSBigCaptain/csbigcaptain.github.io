<template>
  <ul class="leading-normal ps-4">
    <slot />
  </ul>
</template>

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
  color: var(--color-outline);
}
</style>
