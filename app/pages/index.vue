<script lang="ts" setup>
import blogConfig from '~~/blog.config'
import 'mdui/components/card'
import 'mdui/components/button'

useSeoMeta({
  title: `${blogConfig.author.name}(${blogConfig.author.realName})`,
  ogTitle: `${blogConfig.author.name}(${blogConfig.author.realName})`,
  description: 'The introduction to CSBigCaptain Blog.',
  ogDescription: 'The introduction to CSBigCaptain Blog.',
  ogUrl: 'https://csbigcaptain.github.io/',
})

const { data: actions } = await useAsyncData('indexActions', () => {
  return queryCollection('indexActions').first()
})
const { data: posts } = await useAsyncData('featuredPosts', () => {
  return queryCollection('blog').where('isFeatured', '=', true).order('date', 'DESC').all()
})
const { data: advs } = await useAsyncData('indexAdvs', () => {
  return queryCollection('indexAdvs').first()
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>
      首页
    </template>
    <main>
      <picture class="avator">
        <img :src="blogConfig.author.avatar" alt="author-avatar">
      </picture>
      <section aria-label="Introduction" class="intro">
        <AppField class="name">
          <template #label>
            <span style="font-size: 4rem;">🥳</span>
          </template>
          <h1>
            <span class="large-text">{{ blogConfig.author.name }}</span>
            <br>
            <span class="small-text">{{ blogConfig.author.realName }}</span>
          </h1>
          <div class="actions">
            <NuxtLink v-for="item in actions?.body" :key="item.text" :href="item.link">
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
        <AppField label="介绍">
          <p>我是一名食品科学与工程专业的学生，正在钻研前端技术 & <del>准备考研</del>。目前正在研究 Nuxt 企业级应用开发和 Monorepo 项目。</p>
          <p>Nuxt 是我使用最多的 JavaScript 框架。此外，我对 Vue 3 有一定的了解。</p>
          <p>在学习之外，我喜欢玩一些网游，偶尔会玩一些独立游戏。此外，我曾研究过摄影技术，不过现在这些设备已经吃灰了。</p>
          <p>CSBigCaptain 昵称的来历是我初中时玩游戏用的名字“陈帅哥大队长”，注册 Steam 账号的时候就翻译成英文填进去了。Yeshang Ji（姬夜殇）这个名字源自我初中读的唐家三少的小说《酒神》。</p>
          <p>如果你在沙🍐读书，那么我们可能会有很多共同话题，欢迎来联系我！</p>
        </AppField>
      </section>
      <section area-label="Blogs" class="blogs">
        <AppField label="精选文章">
          <menu>
            <li v-for="post in posts?.slice(0, 3)" :key="post.id">
              <AppFeaturedCard :description="post.description" :link="post.path" :title="post.title" :short="post.short" :date="post.date" />
            </li>
          </menu>
        </AppField>
      </section>
      <section aria-label="Why CSBigCaptain Blog" class="why">
        <h2>Why CSBigCaptain Blog?</h2>
        <p>本博客代码已在 Github 开源，欢迎部署体验！</p>
        <menu>
          <li v-for="item in advs?.body" :key="item.title">
            <AppMotionCard class="motion-card">
              <mdui-card variant="filled">
                <h3 class="title">
                  {{ item.title }}
                </h3>
                <div class="detail">
                  {{ item.detail }}
                </div>
              </mdui-card>
            </AppMotionCard>
          </li>
        </menu>
        <AppMotionCard class="link">
          <NuxtLink to="https://github.com/CSBigCaptain/csbigcaptain.github.io" target="_blank">
            <mdui-button>
              <Icon slot="icon" name="mdi:github" />
              View Source Code
              <Icon slot="end-icon" name="mdi:open-in-new" />
            </mdui-button>
          </NuxtLink>
        </AppMotionCard>
      </section>
    </main>
  </NuxtLayout>
</template>

<style lang="less" scoped>
main {
  width: 80%;
  margin: 0 auto;
  min-height: 80vh;
  padding: 15px;
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
  .name {
    .large-text {
      font-size: 3rem;
      line-height: 1.5;
      font-weight: var(--bold-font-weight);
      background: linear-gradient(
        45deg,
        rgba(var(--mdui-color-tertiary), 0.8),
        rgba(var(--mdui-color-primary), 0.8)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .small-text {
      font-size: 1.5rem;
      line-height: 1.5;
      font-weight: var(--thin-font-weight);
    }

    .actions {
      display: flex;
      gap: 20px;
      margin-top: 10px;
    }
  }
}

.blogs {
  padding-bottom: 20px;

  menu {
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
  }
}

.why {
  min-height: 100vh;
  padding: 10% 0 0;
  h2 {
    font-size: 2rem;
    text-align: center;
    line-height: 1.3;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
  }
  menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 20px 0 0;
    gap: 20px;

    .motion-card {
      height: 100%;

      mdui-card {
        width: 100%;
        height: 100%;
        padding: 20px;

        .title {
          font-size: 1.4rem;
          margin: 0 0 0.6rem;
          font-weight: bold;
        }
      }
    }
  }
  .link {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.why ~ section {
  scroll-snap-align: start;
  scroll-margin-top: 8vh;
}

@media (max-width: 1079px) {
  main {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .intro {
    .name {
      .large-text {
        font-size: 2.3rem;
        line-height: 1;
      }
      .small-text {
        font-size: 1rem;
      }
    }
  }
  .blogs {
    menu {
      grid-template-columns: 1fr;
    }
  }
}
</style>
