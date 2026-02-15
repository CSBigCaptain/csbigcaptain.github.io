<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <section class="z-field">
    <h2 class="z-field-label text-2xl font-bold">
      <slot name="label">
        {{ label }}
      </slot>
    </h2>
    <div>
      <slot />
    </div>
  </section>
</template>

<style lang="less" scoped>
.z-field {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem 1.5rem;
  margin: 2em 0 1em;

  > .z-field-label {
    margin: 0;
    text-align: end;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    > .z-field-label {
      text-align: start;
    }
  }
}
</style>
