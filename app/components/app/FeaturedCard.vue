<script lang="ts" setup>
import 'mdui/components/tooltip'
import 'mdui/components/card'

// @keep-sorted
const props = defineProps<{
  date: string
  description: string
  link: string
  short?: string
  title: string
}>()
</script>

<template>
  <NuxtLink class="a" :to="props.link">
    <mdui-tooltip variant="rich" placement="top">
      <mdui-card variant="filled" clickable>
        <h3 class="title">
          {{ props.title }}
        </h3>
        <div class="content">
          {{ props.description }}
        </div>
      </mdui-card>
      <ClientOnly>
        <div slot="headline">
          <h3 class="popup-title">
            {{ props.title }}
          </h3>
        </div>
        <div slot="content" class="popup-content">
          <p>{{ props.description }}</p>
          <div class="date">
            {{ useDateFormat(props.date, 'YYYY-MM-DD') }}
          </div>
        </div>
      </ClientOnly>
    </mdui-tooltip>
  </NuxtLink>
</template>

<style lang="less" scoped>
mdui-tooltip::part(popup) {
  min-width: 250px;
  background: rgb(var(--mdui-color-surface-container));
}
mdui-tooltip::part(headline) {
  font-size: 1em;
  text-align: center;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 700;
  color: rgba(var(--mdui-color-primary), 0.7);
}
mdui-tooltip::part(content) {
  font-size: .75em;
}

.popup-title {
  margin: 10px 0 0;
}
.popup-content {
  width: 100%;
  color: rgba(var(--mdui-color-on-surface), 0.8);
  position: relative;

  .date {
    position: absolute; right: 0; bottom: 0;
    font-size: 3em;
    color: rgba(var(--mdui-color-on-surface), 0.1);
    pointer-events: none;
    user-select: none;
  }
}

.a {
  width: 100%;
  height: 100%;

  mdui-card {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px 20px;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      margin: 0;
      font-size: 1.2em;
      text-align: center;
      color: rgba(var(--mdui-color-primary), 0.7);
    }

    .content {
      margin: 0;
      font-size: .9em;
      color: rgba(var(--mdui-color-on-surface), 1);
    }
  }
}
</style>
