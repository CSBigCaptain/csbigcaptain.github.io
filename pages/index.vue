<script setup lang="js">
useHead({
  title: "首页 - CSBigCaptain Blog",
});

const {data: main} = await useAsyncData('indexMain', () => {
  return queryCollection('indexMain').all();
});
const {data: actions} = await useAsyncData('indexActions', () => {
  return queryCollection('indexActions').all();
});
const {data: advs} = await useAsyncData('indexAdvs', () => {
  return queryCollection('indexAdvs').all();
});

const data = {
  main: main.value[0].meta.body,
  actions: actions.value[0].meta.body,
  advs: advs.value[0].meta.body,
 };
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>首页</template>
    <main>
      <div class="welcome">
        <div class="main">
          <h1>
            <span class="name">{{ data.main.name }}</span>
            <span class="text">{{ data.main.text }}</span>
          </h1>
          <div class="actions">
            <mdui-button
              v-for="item in data.actions"
              :key="item.text"
              :href="item.link"
              :variant="item.variant"
              :icon="item.icon"
              :end-icon="item.endIcon"
              >{{ item.text }}</mdui-button
            >
          </div>
        </div>
      </div>
      <div class="advs">
        <div class="container">
          <div class="items" v-for="item in data.advs">
            <mdui-card variant="filled">
              <div class="box">
                <h2 class="title">{{ item.title }}</h2>
                <div class="detail">{{ item.detail }}</div>
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
  --box-title-font-size: 1.2rem;
  --box-detail-font-size: 1rem;

  @media (width <= 1024px) {
    --h1-font-size: 2.5rem;
    --box-title-font-size: 1.1rem;
    --box-detail-font-size: 0.9rem;
  }

  @media (width <= 768px) {
    --h1-font-size: 2rem;
    --box-title-font-size: 1rem;
    --box-detail-font-size: 0.8rem;
  }

  @media (width <= 425px) {
    --h1-font-size: 1.8rem;
    --box-title-font-size: 0.9rem;
    --box-detail-font-size: 0.7rem;
  }

  .welcome {
    width: 100%;
    padding: 15px;

    h1 {
      display: flex;
      flex: 1;
      flex-direction: column;
      font-size: var(--h1-font-size);
      font-weight: bold;
      margin: 0;
      padding: 2rem 0;

      .name {
        background: linear-gradient(
          45deg,
          rgb(var(--mdui-color-primary)),
          rgb(var(--mdui-color-on-primary))
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .text {
        color: rgb(var(--mdui-color-secondary));
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
      display: flex;
      flex-wrap: wrap;
    }

    .items {
      box-sizing: border-box;
      width: 25%;
      height: 220px;
      padding: 8px;

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
            margin: 0.8rem 0 0;
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    .advs {
      .container {
        .items {
          width: 50%;
          height: 190px;
        }
      }
    }
  }
}
</style>
