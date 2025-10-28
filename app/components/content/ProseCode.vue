<template>
  <code class="inline-code"><slot /></code>
</template>

<style scoped>
.inline-code {
  background-color: rgb(var(--mdui-color-surface-container-highest));
  border-radius: 4px;
  padding: 0.1em 0.4em;
  margin: 0 0.1em;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: rgb(var(--mdui-color-on-surface));
  display: inline;
  border: 1px solid rgba(var(--mdui-color-outline), 0.2);
}
</style>
