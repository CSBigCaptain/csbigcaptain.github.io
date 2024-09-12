<script setup lang="ts">
import CardsHub from "~/components/CardsHub.vue";
</script>

<template>
<div class="main">
  <div class="topic">
    <h1>My Works</h1>
  </div>
  <cards-hub />
</div>
</template>
<style scoped lang="less">
* {
  box-sizing: border-box;
}

.main {
  height: auto;
  padding: var(--inline-padding);
  .topic {
    h1 {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>