<template>
  <table>
    <slot />
  </table>
</template>

<style scoped>
table {
  width: 100%;
  margin: 25px auto;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 20px;
  border: rgb(var(--mdui-color-primary)) 2px solid;
}
</style>
