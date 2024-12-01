<script setup lang="ts"></script>

<template>
  <NuxtLayout name="blog" append="Detail">
    <main>
      <mdui-chip href="/blog">Return to List</mdui-chip>
      <ContentDoc v-slot="{ doc }">
        <article>
          <div class="info">
            <h1>{{ doc.title }}</h1>
            <small>日期： {{ doc.date }}</small>
          </div>
          <ContentRenderer class="content" :value="doc" />
        </article>
      </ContentDoc>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
main {
  width: 100%;
  min-height: 500px;
}

main .info {
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 0 0 50px 0;
  h1 {
    font-size: 2.2rem;
    margin: 1.5rem 0;
  }
}
</style>

<style lang="less">
// content 中的样式

.content h1 {
  display: none;
}

.content code {
  background-color: rgb(var(--mdui-color-surface-dim));
  padding: 0.3rem 0.28rem;
  border-radius: 20%;
  font-family: 'JetBrains Mono', monospace;
}
.content pre {
  background-color: rgb(var(--mdui-color-surface-dim));
  height: auto;
  padding: 10px 15px;
  margin: 2rem 0;
  border-radius: 5px;
  overflow-x: auto;
  code {
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: inherit;
  }
}

.content h2 a,
.content h3 a,
.content h4 a,
.content h5 a,
.content h6 a {
  color: inherit;
  text-decoration: none;
}

.content blockquote {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  unicode-bidi: isolate;
  padding: 0.1rem 0rem 0.1rem 2rem;
  border-left: 3px solid rgb(var(--mdui-color-secondary));
}
</style>
