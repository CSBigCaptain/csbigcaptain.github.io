<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<script lang="ts" setup></script>

<style scoped>
blockquote {
  display: block;
  padding-block-start: 1em;
  padding-block-end: 1em;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
  margin: 0;
  border-inline-start: 2px solid var(--body-secondary-color);
  background-color: var(--body-secondary-container-color);
  unicode-bidi: isolate;
}

blockquote * {
  color: var(--body-on-secondary-container-color);
}
</style>
