<script lang="ts" setup>
import blogConfig from '~~/blog.config'
import 'mdui/components/card'
import 'mdui/components/button'

useSeoMeta({
  title: 'Yeshang Ji(@CSBigCaptain)',
  ogTitle: 'Yeshang Ji(@CSBigCaptain)',
  description: 'The introduction to CSBigCaptain Blog.',
  ogDescription: 'The introduction to CSBigCaptain Blog.',
  ogUrl: 'https://csbigcaptain.github.io/index-dev',
})

const { data } = await useAsyncData('indexActions', () => {
  return queryCollection('indexActions').all()
})

const actions = data.value?.[0]?.meta?.body as {
  text: string
  link: string
  variant: string
  icon?: string
  endIcon?: string
}[]
</script>

<template>
  <NuxtLayout name="default">
    <main>
      <picture class="avator">
        <img :src="blogConfig.author.avatar" alt="author-avatar">
      </picture>
      <section area-label="Introduction" class="intro">
        <AppField class="name">
          <template #label>
            <span style="font-size: 4rem;">🥳</span>
          </template>
          <h1>
            <span class="large-text ">{{ blogConfig.author.name }}</span>
            <br>
            <span class="small-text">{{ blogConfig.author.realName }}</span>
          </h1>
          <div class="actions">
            <NuxtLink v-for="item in actions" :key="item.text" :href="item.link">
              <mdui-button
                :variant="item.variant"
                :icon="item.icon"
                :end-icon="item.endIcon"
              >
                <Icon v-if="item.icon" slot="icon" :name="item.icon" />
                <Icon v-if="item.endIcon" slot="end-icon" :name="item.endIcon" />
                {{ item.text }}
              </mdui-button>
            </NuxtLink>
          </div>
        </AppField>
        <AppField label="介绍" class="intro-1">
          <p>这个人很懒，什么都没有写</p>
        </AppField>
        <AppField label="团队" class="intro-1 team">
          <div class="team-card">
            <mdui-card variant="filled" clickable href="https://youth.sdut.edu.cn" target="_blank">
              Youthol
            </mdui-card>
            <mdui-card variant="filled" clickable href="https://lgwindow.sdut.edu.cn" target="_blank">
              SDUT CMC
            </mdui-card>
          </div>
        </AppField>
      </section>
    </main>
  </NuxtLayout>
</template>

<style lang="less" scoped>
main {
  width: 80%;
  margin: 0 auto;
  min-height: 80vh;
}

.avator {
  font-size: min(100vw, 60vh);
  margin-right: -0.15em;
  opacity: 0.2;
  position: fixed;
  right: 19vw;
  top: 25px;
  z-index: -1;

  img {
    width: .8em;
    height: .8em;
    border-radius: 50%;
    object-fit: cover;
  }
}

.intro {
  --intro-font-size: 1.1rem;
  --intro-title-size: calc(var(--intro-font-size) * 3);
  --intro-subtitle-size: calc(var(--intro-font-size) * 1.5);

  font-size: var(--intro-font-size);

  .name {
    .large-text {
      font-size: var(--intro-title-size);
      line-height: 1.5;
      font-weight: var(--bold-font-weight);
      background: linear-gradient(
        45deg,
        rgb(var(--mdui-color-primary)),
        rgb(var(--mdui-color-on-primary))
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .small-text {
      font-size: var(--intro-subtitle-size);
      line-height: 1.5;
      font-weight: var(--thin-font-weight);
    }

    .actions {
      display: flex;
      gap: 20px;
      margin-top: 10px;
    }
  }

  .intro-1 {
    p {
      font-size: calc(var(--intro-font-size) * 1.1);
    }
    .team-card {
      width: 250px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      > mdui-card {
        width: 100%;
        height: 40px;
        padding: 10px 16px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    --intro-font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    --intro-font-size: 0.75rem;
  }
}
</style>
