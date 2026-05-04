# CSBigCaptain Blog

![GitHub License](https://img.shields.io/github/license/csbigcaptain/csbigcaptain.github.io) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fcsbigcaptain.github.io) ![Node Current](https://img.shields.io/node/v/nuxt) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/csbigcaptain/csbigcaptain.github.io)

本项目是 [CSBigCaptain](https://github.com/csbigcaptain) 的个人博客的仓库。使用 Nuxt 4 开发构建，使用 Material Design 设计风格，并使用 [Nuxt Content](https://content.nuxtjs.org/) 来作为本地基于文件的 CMS 系统。

虽然是静态博客系统，但是仍然具有以下优势：

- Markdown 增强：开箱即用的 LaTeX 公式、Shiki 代码高亮支持
- 极速的搜索功能：博客预渲染时自动生成优化文件，搜索时可以体验毫秒级响应的速度！
- 完善的 SEO 优化：支持结构化数据，站点地图以及社交媒体优化

## 预览 & 修改项目

### Node

推荐使用 [Node Version Manager](https://github.com/nvm-sh/nvm) 等 Node 版本管理工具来安装 Node ，以便于随时切换系统中 Node 的版本。

本项目开发及构建均使用 Node 24，Node 22 和 26 理论上也没问题。

### 包管理器

本项目使用 [pnpm](https://pnpm.io/) 作为包管理器，也建议使用 pnpm 作为包管理器。

下载 pnpm:

```shell
npm install -g pnpm
```

### 安装依赖

安装依赖：

```shell
pnpm install
```

### 环境变量

#### 开发环境

在项目根目录创建 `.env` 文件：

```shell
# 站点名称
NUXT_SITE_NAME="Your Blog Name"
# 站点 URL（生产环境填写实际域名）
NUXT_SITE_URL="http://localhost:3000"
```

#### 生产环境

如果你的项目部署在服务器上或者是托管平台，此时不会读取 .env 文件，你需要在部署服务器或者托管平台的环境变量设置中设置这些环境变量。具体请参考[这里](https://nuxt.com/docs/4.x/directory-structure/env#production)

### 剔除原有数据

如果你想部署本项目使用，请删除 `/content` 目录下的文章，并修改 `/content/data/` 目录下的显示信息。否则会造成侵权。

### 开发服务器 & 构建

```shell
pnpm dev
```

```shell
pnpm generate
```

## 交流

由于本项目为个人博客，因此具有较高的定制程度，如有文档未尽之事宜可以添加[交流 QQ 群](https://qm.qq.com/q/c2bJHbwTDy)。
