<script lang="ts" setup>
import { useFuse } from '@vueuse/integrations/useFuse'
import 'mdui/components/card'
import 'mdui/components/text-field'

const query = ref('')

const { data } = await useAsyncData('search-data', () =>
  queryCollectionSearchSections('blog', {
    ignoredTags: ['header', 'footer'],
  }))

const { results } = useFuse(query, data.value || [], {
  fuseOptions: {
    keys: ['title', 'content', 'titles'],
    threshold: 0.4,
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,
  },
  resultLimit: 20,
})

// 添加高亮函数
function highlightMatch(text: string, matches: any[], key: string) {
  // 如果没有文本或匹配信息，直接返回原文本
  if (!text || !matches)
    return text

  // 查找对应字段的匹配信息
  const match = matches.find(m => m.key === key)
  if (!match || !match.indices || !match.indices.length)
    return text

  // 根据匹配索引构建高亮文本
  let result = ''
  let lastIndex = 0

  // 按顺序处理每个匹配区间
  match.indices.forEach(([start, end]: [number, number]) => {
    // 添加匹配前的文本
    result += text.substring(lastIndex, start)
    // 添加带高亮的匹配文本
    result += `<span class="highlight">${text.substring(start, end + 1)}</span>`
    // 更新上次处理位置
    lastIndex = end + 1
  })

  // 添加最后一个匹配后的文本
  result += text.substring(lastIndex)

  return result
}
</script>

<template>
  <div class="main">
    <div class="input">
      <mdui-text-field
        :value="query"
        placeholder="Search..."
        clearable
        @input="query = $event.target.value"
      />
    </div>
    <div v-if="query" class="results">
      <ul class="container">
        <li v-for="item in results" :key="item.item.id">
          <NuxtLink :to="item.item.id">
            <mdui-card variant="filled" clickable>
              <div class="upper">
                <div class="titles">
                  {{ item.item.titles[0] ? `${item.item.titles[0]} > ` : '' }}
                  {{ item.item.titles[-1] }}
                </div>
                <div
                  class="title"
                  v-html="
                    highlightMatch(
                      item.item.title,
                      item.matches as any[],
                      'title',
                    )
                  "
                />
              </div>
              <div
                v-if="item.item.content"
                class="lower"
                v-html="
                  highlightMatch(
                    item.item.content,
                    item.matches as any[],
                    'content',
                  )
                "
              />
            </mdui-card>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;

  .input {
    width: 100%;
    height: auto;
    padding-bottom: var(--inline-padding);
  }
  .results {
    width: 100%;
    height: auto;
    min-height: 500px;

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
          padding: var(--inline-padding);

          .upper {
            width: 100%;
            height: 2rem;
            display: flex;
            align-items: center;
            overflow: hidden;

            .titles {
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
