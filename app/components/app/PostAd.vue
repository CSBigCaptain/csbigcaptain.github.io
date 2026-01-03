<script lang="ts" setup>
import type { Card } from 'mdui/components/card'
import type { AnchorHTMLAttributes } from 'vue'
import 'mdui/components/card'
// @keep-sorted
const props = defineProps<{
  clickable: Card['clickable']
  desc: string
  target: AnchorHTMLAttributes['target']
  title: string
  to: AnchorHTMLAttributes['href']
  variant: Card['variant']
}>()
</script>

<template>
  <NuxtLink class="main" :to="props.to" :target="props.target">
    <mdui-card :variant="props.variant" :clickable="props.clickable">
      <div class="icon">
        <slot name="default" />
      </div>
      <div class="content">
        <h3 class="title">
          {{ props.title }}
        </h3>
        <div class="desc">
          {{ props.desc }}
        </div>
      </div>
      <div class="bg">
        AD
      </div>
    </mdui-card>
  </NuxtLink>
</template>

<style scoped lang="less">
.main {
  display: block;
  container-type: inline-size;
}
mdui-card {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 6px;
  position: relative;
}

.icon {
  flex: 0 0 56px;
  font-size: 40px;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
}

.content {
  flex: 1;
  min-width: 0;
}

.title {
  margin: 0;
  color: rgba(var(--mdui-color-secondary), 1);
  font-size: 1rem;
  font-weight: var(--bold-font-weight);
  line-height: 1.2;
}

.desc {
  margin-top: 6px;
  font-size: 0.9rem;
  color: rgba(var(--mdui-color-on-surface), 0.7);
  line-height: 1.4;
}

.bg {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 0.7rem;
  font-weight: var(--bold-font-weight);
  line-height: 1.2;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: rgba(var(--mdui-color-secondary), 0.1);
  color: rgba(var(--mdui-color-secondary), 1);
}

@container (max-width: 230px) {
  .icon {
    flex: 0 0 30px;
    font-size: 25px;
    width: 30px;
    height: 30px;
  }
  .title {
    font-size: 0.8rem;
  }
  .desc {
    font-size: 0.8rem;
  }
}
</style>
