<template>
  <span class="main">
    <NuxtLink :to="props.href" :target="props.target">
      <slot />
    </NuxtLink>
  </span>
</template>

<style scoped>
.main a{
  text-decoration: none;
  box-sizing: content-box;
  padding: 0.1em 0.35em;
  margin: 0.1em 0;
  border-radius: 3px;
  transition: background-color 0.35s;
}

.main a:hover {
  background-color: rgb(var(--mdui-color-surface-container-highest));
}
</style>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>
