<template>
  <footer class="footer">
    <div class="container">
      <div class="main">
        <div class="more-info">
          <ul Line1>
            <li>
              <NuxtLink
                to="https://qr61.cn/oQkUx4/qAfZWE6"
                target="_blank"
                @click="confirmNavigation"
                >看看我们的微信公众号?</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="https://github.com/CSBigCaptain/csbigcaptain.github.io"
                target="_blank"
                >项目地址</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="https://github.com/CSBigCaptain/csbigcaptain.github.io/issues"
                target="_blank"
                >建言献策</NuxtLink
              >
            </li>
          </ul>
          <ul Line2>
            <li>
              <NuxtLink
                to="https://space.bilibili.com/606574672"
                target="_blank"
                >Bilibili</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="https://github.com/csbigcaptain" target="_blank"
                >Github</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="other-info">
          <div class="copyright">
            Copyright © 2024 - {{ year }} by
            <NuxtLink to="https://github.com/CSBigCaptain" target="_blank"
              >CSBigCaptain</NuxtLink
            >. All rights reserved.
          </div>
          <div class="build-info">
            Build at 2025-05-27. Look at
            <NuxtLink
              to="https://github.com/CSBigCaptain/csbigcaptain.github.io/commit/HEAD"
              target="_blank"
              >Changelog</NuxtLink
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear());

const confirmNavigation = (event: Event) => {
  event.preventDefault();
  const userConfirmed = confirm(
    "受微信平台限制，即将前往草料二维码，请在此下载二维码并使用微信扫码进入\n" +
      "请允许此网站弹出窗口和重定向以正确加载网页"
  );
  if (userConfirmed) {
    window.open("https://qr61.cn/oQkUx4/qAfZWE6", "_blank");
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.footer {
  display: flex;
  justify-content: center;
  background-color: rgb(var(--mdui-color-surface-variant));

  .container {
    width: 85%;
    padding: 15px;
  }
}

.main {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  .more-info {
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
  }
  .other-info {
    padding: 15px;
    font-size: 0.75rem;
  }
}

ul {
  list-style: none;
  padding: 0 50px 0 0;
  li {
    padding: 3px 0;
  }
}

a,
a:hover,
a:visited {
  color: var(--body-primary-color);
  text-decoration: none;
}

// footer 外链图标样式
a[target="_blank"]::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  transform: translateY(-0.15em);
  background-image: url("/public/icons/link.svg");
  background-size: 0.8em 0.8em;
  display: inline-block;
}

.footer > div {
  padding: 3px 0;
}

@media (max-width: 767px) {
  .footer {
    .container {
      width: 100%;
    }
  }
}
</style>
