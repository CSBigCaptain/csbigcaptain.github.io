<script lang="ts" setup>
const year = ref(new Date().getFullYear())

function confirmNavigation(event: Event) {
  event.preventDefault()
  // eslint-disable-next-line no-alert
  const userConfirmed = confirm(
    '受微信平台限制，即将前往草料二维码，请在此下载二维码并使用微信扫码进入\n'
    + '请允许此网站弹出窗口和重定向以正确加载网页',
  )
  if (userConfirmed) {
    window.open('https://qr61.cn/oQkUx4/qAfZWE6', '_blank')
  }
}
</script>

<template>
  <footer class="bg-color-surface-variant">
    <nav class="py-7 border-b border-surface-container out">
      <ul class="container flex flex-wrap *:pe-16 *:pt-4 leading-8">
        <li>
          <ul>
            <li>
              <NuxtLink
                to="https://qr61.cn/oQkUx4/qAfZWE6"
                target="_blank"
                @click="confirmNavigation"
              >
                看看我们的微信公众号?
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="https://github.com/CSBigCaptain/csbigcaptain.github.io"
                target="_blank"
              >
                项目地址
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="https://github.com/CSBigCaptain/csbigcaptain.github.io/issues"
                target="_blank"
              >
                建言献策
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <NuxtLink to="https://space.bilibili.com/606574672" target="_blank">
                Bilibili
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://github.com/csbigcaptain" target="_blank">
                GitHub
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://qm.qq.com/q/c2bJHbwTDy" target="_blank">
                QQ 交流群
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="other-info out">
      <div class="py-5 container text-sm tracking-tight relative">
        <p>
          Copyright © 2024 - {{ year }} by
          <NuxtLink to="https://github.com/CSBigCaptain" target="_blank">
            CSBigCaptain
          </NuxtLink>
          . All rights reserved.
        </p>
        <p>
          本站源码基于 MIT License 开源。但本站博客除另有声明外，均在
          <NuxtLink to="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            CC BY-NC-SA 4.0
          </NuxtLink> 协议下授权。
        </p>
        <picture class=" md:absolute right-6 lg:right-8 bottom-5">
          <NuxtLink class="after:hidden" to="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            <img src="https://prts.wiki/resources/assets/licenses/cc-by-nc-sa.png" alt="CC BY-NC-SA 4.0"></NuxtLink>
        </picture>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
a:any-link {
  color: var(--color-secondary);
}

a:hover {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
// footer 外链图标样式
a[target='_blank']::after {
  content: '';
  width: 0.7em;
  height: 0.7em;
  transform: translateY(-0.2em);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23828181' d='M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1'/%3E%3C/svg%3E");
  background-size: 0.7em 0.7em;
  display: inline-flex;
}

a[target='_blank']:has(img)::after {
  display: none;
}
</style>
