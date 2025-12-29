<template>
  <strong>
    <slot />
  </strong>
</template>

<style scoped>
strong {
  font-weight: var(--bold-font-weight);
  color: rgb(var(--mdui-color-primary));
}
</style>
