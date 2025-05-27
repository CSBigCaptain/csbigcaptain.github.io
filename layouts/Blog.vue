<script setup lang="ts">
const props = defineProps(["append"])
</script>

<template>
  <DefaultNav>
    <template #topic>
      Blog{{ props.append ? ` ${props.append}` : "" }}
    </template>
  </DefaultNav>
  <div class="full-width">
    <slot name="full-width" />
  </div>
  <div class="outer">
    <div class="container">
      <slot />
    </div>
  </div>
  <FooterDefault />
</template>

<style lang="less" scoped>
.full-width {
  width: 100%;
}

.outer {
  background-color: var(--body-bg-color);
  display: flex;
  justify-content: center;
  .container {
    width: min(70%, 900px);
    min-width: 330px;
    padding: var(--inline-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }
}

@media (max-width: 767px) {
  .outer {
    .container {
      width: 100%;
    }
  }
}
</style>
