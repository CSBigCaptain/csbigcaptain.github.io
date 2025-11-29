<script setup lang="ts">
import 'mdui/components/card'
import 'mdui/components/button'

interface MainData {
  name: string
  text: string
}

interface ActionItem {
  text: string
  link: string
  variant: string
  icon?: string
  endIcon?: string
}

interface AdvItem {
  title: string
  detail: string
}

const titleaa = '首页 - CSBigCaptain Blog'
const descriptionaa = 'The introduction to CSBigCaptain Blog.'

useSeoMeta({
  title: titleaa,
  ogTitle: titleaa,
  description: descriptionaa,
  ogDescription: descriptionaa,
  ogUrl: 'https://csbigcaptain.github.io/',
})
defineOgImageComponent('Nuxt', {
  title: 'CSBigCaptain Blog',
  headline: 'WELCOME TO',
  description: 'A open-source Git-CMS blog system driven by Nuxt 4.',
})

const { data: main } = await useAsyncData('indexMain', () => {
  return queryCollection('indexMain').all()
})
const { data: actions } = await useAsyncData('indexActions', () => {
  return queryCollection('indexActions').all()
})
const { data: advs } = await useAsyncData('indexAdvs', () => {
  return queryCollection('indexAdvs').all()
})

const data = {
  main: main.value?.[0]?.meta?.body as MainData,
  actions: actions.value?.[0]?.meta?.body as ActionItem[],
  advs: advs.value?.[0]?.meta?.body as AdvItem[],
}
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>
      首页
    </template>
    <main>
      <div class="welcome">
        <h1>
          <span class="name">{{ data.main.name }}</span>
          <span class="text">{{ data.main.text }}</span>
        </h1>
        <div class="actions">
          <NuxtLink
            v-for="item in data.actions"
            :key="item.text"
            :href="item.link"
          >
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
      </div>
      <div class="advs">
        <div class="container">
          <div v-for="item in data.advs" :key="item.title" class="items">
            <mdui-card variant="filled">
              <div class="box">
                <h2 class="title">
                  {{ item.title }}
                </h2>
                <div class="detail">
                  {{ item.detail }}
                </div>
              </div>
            </mdui-card>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
main {
  min-height: 100vh;

  --h1-font-size: 3rem;
  --h1-subtitle-font-size: 2.7rem;
  --box-title-font-size: 1.2rem;
  --box-detail-font-size: 1rem;

  @media (width <= 1024px) {
    --h1-font-size: 2.5rem;
    --h1-subtitle-font-size: 2.2rem;
    --box-title-font-size: 1.1rem;
    --box-detail-font-size: 0.9rem;
  }

  @media (width <= 768px) {
    --h1-font-size: 2rem;
    --h1-subtitle-font-size: 1.7rem;
    --box-title-font-size: 1rem;
    --box-detail-font-size: 0.8rem;
  }
  @media (width <= 425px) {
    --h1-font-size: 1.7rem;
    --h1-subtitle-font-size: 1.4rem;
  }

  .welcome {
    width: 100%;
    padding: 15px;

    h1 {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-weight: bold;
      margin: 0;
      padding: 2rem 0;

      @media (width <= 1024px) {
        padding-top: 0;
      }

      .name {
        font-weight: 600;
        letter-spacing: var(--compact-letter-spacing);
        background: linear-gradient(
          45deg,
          rgb(var(--mdui-color-primary)),
          rgb(var(--mdui-color-on-primary))
        );
        font-size: var(--h1-font-size);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .text {
        color: rgb(var(--mdui-color-secondary));
        font-size: var(--h1-subtitle-font-size);
      }
    }

    .actions {
      display: flex;
      flex-wrap: wrap;

      mdui-button {
        margin-right: 0.75rem;
      }
    }
  }

  .advs {
    padding: 50px 15px 150px;

    .container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;

      @media (width <= 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
      }
      @media (width <= 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (width <= 425px) {
        grid-template-columns: 1fr;
      }
    }

    .items {
      mdui-card {
        width: 100%;
        height: 100%;
        padding: 20px;

        .box {
          .title {
            font-size: var(--box-title-font-size);
            font-weight: bold;
            margin: 0;
          }

          .detail {
            font-size: var(--box-detail-font-size);
            line-height: var(--content-line-height);
            margin: 0.8rem 0 0;
          }
        }
      }
    }
  }
}
</style>
