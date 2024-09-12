<template>
  <div class="footer">
    <div class="inner">
      <div class="moreInfo">
        <ul>
          <li><a href="https://github.com/CSBigCaptain/csbigcaptain.github.io/issues"
                 target="_blank">我们需要您的建议</a></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="copyright">
        Copyright © 2024 by <a href="https://github.com/CSBigCaptain" target="_blank">CSBigCaptain</a>. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.footer {
  width: 100%;
  height: auto;
  padding: var(--inline-padding);
  .inner {
    width: var(--inline-width);
    .moreInfo {
      padding: var(--inline-padding);
    }
    .copyright {
      font-size: 15px;
      padding: var(--inline-padding);
    }
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

a[target="_blank"]::after {
  content: '';
  width: 13px;
  height: 13px;
  margin-left: 5px;
  margin-right: 5px;
  background-image: url("public/icons/link.svg");
  background-size: 13px 13px;
  display: inline-block;
}
</style>