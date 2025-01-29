<template>
  <div class="footer">
    <div class="moreInfo">
      <ul>
        <li>
          <a
            href="https://github.com/CSBigCaptain/csbigcaptain.github.io/issues"
            target="_blank"
            >我们需要您的建议</a
          >
        </li>
      </ul>
    </div>
    <div class="copyright">
      Copyright © 2024 - {{ year }} by
      <a href="https://github.com/CSBigCaptain" target="_blank">CSBigCaptain</a
      >. All rights reserved.
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = ref(new Date().getFullYear())
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.footer {
  width: 100%;
  height: auto;
  padding: 10px 0;
  .copyright {
    font-size: 15px;
  }
}

ul {
  list-style: none;
  padding: 0;
}

a,
a:hover,
a:visited {
  color: var(--bar-text-color);
  text-decoration: none;
}

// footer 外链图标样式
a[target="_blank"]::after {
  content: "";
  width: 10px;
  height: 10px;
  margin-left: 3px;
  margin-right: 5px;
  transform: translateY(-4px);
  background-image: url("/public/icons/link.svg");
  background-size: 10px 10px;
  display: inline-block;
}

.footer > div {
  padding: 8px 0;
}
</style>
