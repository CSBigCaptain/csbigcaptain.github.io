<script setup lang="ts">

</script>

<template>
  <index-nav><template #topic>博文</template></index-nav>
  <div class="body">
    <div class="bodyInner">
      <slot />
    </div>
  </div>
  <index-footer />
</template>

<style scoped>
.body {
  width: 100%;
  .bodyInner {
    width: var(--inline-width);
    margin: 0 auto;
  }
}
</style>