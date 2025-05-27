<template>
  <NuxtLayout name="default">
    <template #topic-text>搜索</template>
    <main class="main">
      <div style="padding: 15px;">
        <mdui-chip>Back</mdui-chip>
      </div>
      <div class="main-topic">
        <h1 style="margin: 0;">搜索<mdui-badge style="margin: 5px">测试中</mdui-badge></h1>
      </div>
      <div class="input">
        <mdui-text-field
          :value="query"
          @input="query = $event.target.value"
          placeholder="Search..."
          clearable
        ></mdui-text-field>
      </div>
      <div v-if="query" class="results">
        <div class="topic"><h2>结果</h2></div>
        <ul class="container">
          <li v-for="item in results" :key="item.item.id">
            <mdui-card variant="filled" :href="item.item.id">
              <div class="upper">
                <template v-for="(i, index) in item.item.titles" :key="index">
                  <div class="titles">
                    {{ i }}
                  </div>
                  <mdui-icon-chevron-right
                    size="small"
                  ></mdui-icon-chevron-right>
                </template>
                <div
                  class="title"
                  v-html="highlightMatch(item.item.title, item.matches as any[], 'title')"
                ></div>
              </div>
              <div
                class="lower"
                v-html="highlightMatch(item.item.content, item.matches as any[], 'content')"
              ></div>
            </mdui-card>
          </li>
        </ul>
      </div>
      <div v-else class="random">
        <div class="topic"><h2>随便看看</h2></div>
        <ul class="container">
          <li v-for="item in randomPosts" :key="item.id">
            <mdui-card variant="filled" :href="item.id">
              <div class="upper">
                <template v-for="(i, index) in item.titles" :key="index">
                  <div class="titles">
                    {{ i }}
                  </div>
                  <mdui-icon-chevron-right
                    size="small"
                  ></mdui-icon-chevron-right>
                </template>
                <div class="title">{{ item.title }}</div>
              </div>
              <div class="lower">{{ item.content?.slice(0, 80) }}...</div>
            </mdui-card>
          </li>
        </ul>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useFuse } from "@vueuse/integrations/useFuse";
import "@mdui/icons/chevron-right";

useHead({
  title: "搜索 - CSBigCaptain Blog",
});

const query = ref("g");

const { data } = await useAsyncData("search-data", () =>
  queryCollectionSearchSections("blog", {
    ignoredTags: ["header", "footer"],
  })
);

const { results } = useFuse(query, data.value || [], {
  fuseOptions: {
    keys: ["title", "content", "titles"],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
  },
  resultLimit: 20,
});

const randomPosts = ref<any[]>([]);

onMounted(() => {
  if (data.value) {
    randomPosts.value = [...data.value]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }
});

// 添加高亮函数
const highlightMatch = (text: string, matches: any[], key: string) => {
  // 如果没有文本或匹配信息，直接返回原文本
  if (!text || !matches) return text;

  // 查找对应字段的匹配信息
  const match = matches.find((m) => m.key === key);
  if (!match || !match.indices || !match.indices.length) return text;

  // 根据匹配索引构建高亮文本
  let result = "";
  let lastIndex = 0;

  // 按顺序处理每个匹配区间
  match.indices.forEach(([start, end]: [number, number]) => {
    // 添加匹配前的文本
    result += text.substring(lastIndex, start);
    // 添加带高亮的匹配文本
    result += `<span class="highlight">${text.substring(
      start,
      end + 1
    )}</span>`;
    // 更新上次处理位置
    lastIndex = end + 1;
  });

  // 添加最后一个匹配后的文本
  result += text.substring(lastIndex);

  return result;
};
</script>

<style scoped lang="less">
main {
  width: 100%;
  height: auto;

  .main-topic {
    padding: 15px;
  }

  .input {
    width: 100%;
    height: auto;
    padding: 15px;
  }
  .results {
    width: 100%;
    height: auto;
    min-height: 500px;
    padding: 15px;

    .container {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin-block: 0;
      margin-inline: 0;
      margin: 0 auto;

      li {
        width: 100%;
        padding: 5px 0px;

        mdui-card {
          width: 100%;

          .upper {
            width: 100%;
            height: 2rem;
            display: flex;
            align-items: center;
            overflow: hidden;

            .titles,
            .title {
              height: 100%;
              line-height: 1.5rem;
              font-size: 1.1rem;
              padding: 0.25rem;
              font-weight: bold;
            }
          }

          .lower {
            width: 100%;
            height: auto;
            padding: 0.25rem;
            font-size: 0.85rem;
            line-height: 1.25rem;
          }
        }
      }
    }
  }

  .random {
    width: 100%;
    height: auto;
    min-height: 500px;
    padding: 15px;

    .container {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin-block: 0;
      margin-inline: 0;
      margin: 0 auto;

      li {
        width: 100%;
        padding: 5px 0px;

        mdui-card {
          width: 100%;

          .upper {
            width: 100%;
            height: 2rem;
            display: flex;
            align-items: center;

            .titles,
            .title {
              height: 100%;
              line-height: 1.5rem;
              font-size: 1.1rem;
              padding: 0.25rem;
              font-weight: bold;
            }
          }

          .lower {
            width: 100%;
            height: auto;
            padding: 0.25rem;
            font-size: 0.85rem;
            line-height: 1.25rem;
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
.highlight {
  color: rgb(var(--mdui-color-primary));
  background: rgb(var(--mdui-color-on-primary));
  font-weight: bold;
}
</style>
