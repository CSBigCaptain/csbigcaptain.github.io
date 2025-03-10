<template>
  <NuxtImg
    :src="refinedSrc"
    :alt="props.alt"
    loading="lazy"
    style="display: block; max-width: 100%; max-height: 600px; margin: 0 auto"
  />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from "ufo";
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});

const refinedSrc = computed(() => {
  if (props.src?.startsWith("/") && !props.src.startsWith("//")) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL)
    );
    if (_base !== "/" && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>
