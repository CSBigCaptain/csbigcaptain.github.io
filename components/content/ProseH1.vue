<template>
  <div class="main">
    <h1><slot /></h1>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--body-primary-color);
  background-color: var(--body-primary-container-color);
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  width: 100%;
  height: 200px;
}

.main h1 {
  font-size: 2rem;
  color: var(--body-on-primary-container-color);
}
</style>

<script lang="ts" setup>

</script>
