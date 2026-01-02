<script lang="ts" setup>
import 'mdui/components/tooltip'

// @keep-sorted
const props = defineProps<{
  author?: string
  comment?: string
  date: string
  desc?: string
  feed?: string
  icon: string
  nick?: string
  title: string
  to: string
}>()
</script>

<template>
  <NuxtLink class="a" :to="props.to" target="_blank">
    <mdui-tooltip variant="rich" placement="top">
      <mdui-card clickable variant="filled">
        <div class="avatar">
          <img :src="props.icon" :alt="props.title" aria-hidden="true" loading="lazy">
        </div>
        <div class="content">
          <div class="title">
            {{ props.author || props.title }}
          </div>
          <div class="nick">
            {{ props.nick }}
          </div>
        </div>
      </mdui-card>
      <ClientOnly>
        <div slot="headline">
          {{ props.title || props.desc }}
        </div>
        <div slot="content" class="popup-content">
          <p class="content-desc" v-text="props.desc || 'undefined'" />
          <p v-if="props.comment" v-text="props.comment" />
          <div class="date">
            {{ props.date }}
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
  line-height: 1.6;
  font-weight: 700;
  color: rgba(var(--mdui-color-tertiary), 0.7);
}
mdui-tooltip::part(content) {
  font-size: .75em;
}

.popup-content {
  width: 100%;
  position: relative;

  .content-desc {
    color: rgba(var(--mdui-color-on-surface), 1);
  }
  .date {
    position: absolute; right: 0; bottom: 0;
    font-size: 3em;
    color: rgba(var(--mdui-color-on-surface), 0.1);
    pointer-events: none;
    user-select: none;
  }
  p {
    margin: 3px 0;
  }
}

.a {
  display: block;
  container-type: inline-size;
  container-name: card-root;
  width: 100%;
  height: 100%;
}

mdui-card {
  width: 100%;
  height: 60px;
  padding: 5px 12px;
  display: flex;
  align-items: center;

  .avatar {
    flex-shrink: 0;
    width: 42px;
    height: 42px;
    margin-right: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .title {
      width: 100%;
      font-size: .9em;
      line-height: 1.4;
    }
    .nick {
      width: 100%;
      font-size: .8em;
      color: rgba(var(--mdui-color-secondary), 0.7);
    }
  }
}

@container card-root (max-width: 200px){
  mdui-card {
    height: 100%;
    flex-direction: column;
    padding: 12px 5px;

    .avatar {
      margin-right: 0;
      margin-bottom: 8px;
    }

    .content {
      width: 100%;
      font-size: .9em;
      text-align: center;
    }
  }
}
</style>
