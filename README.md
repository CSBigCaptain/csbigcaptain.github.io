# CSBigCaptain Blog

![GitHub License](https://img.shields.io/github/license/csbigcaptain/csbigcaptain.github.io) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fcsbigcaptain.github.io) ![Node Current](https://img.shields.io/node/v/nuxt) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/csbigcaptain/csbigcaptain.github.io)

本项目是 [CSBigCaptain](https://github.com/csbigcaptain) 的个人博客的仓库。使用 Nuxt 3 开发构建，使用 Material Design 设计风格，并使用 [Nuxt Content](https://content.nuxtjs.org/) 来作为本地基于文件的 CMS 系统。

虽然是静态博客系统，但是仍然具有以下优势：

- Markdown 以及 LaTeX 公式支持
- 极速的搜索功能：博客预渲染时自动生成优化文件，搜索时可以体验毫秒级响应的速度！
- 完备的 SEO SSR 以及 SMO

## 预览 & 修改项目

### Node

推荐使用 [Node Version Manager](https://github.com/nvm-sh/nvm) 来安装 Node ，以便于随时切换系统中 Node 的版本。

本项目使用 Node 20 版本构建，也建议使用此版本来构建项目。

### 包管理器

本项目使用 [pnpm](https://pnpm.io/) 作为包管理器，也建议使用 pnpm 作为包管理器。

下载 pnpm:

```shell
npm install -g pnpm
```

### 安装依赖

> [!WARNING]
> 由于本项目使用了依赖 better-sqlite3 模块，该模块是一个 Node.js 的原生模块，安装时会编译底层的 C++ 代码 (native bindings) 。因此需要拥有 C/C++ 编译环境。

安装依赖：

```shell
pnpm install
```

另外，如果你使用的是 pnpm ， pnpm 出于安全考虑默认会组织某些包的构建脚本自动执行，你需要在 pnpm 中允许 better-sqlite3 执行构建脚本。

```shell
pnpm approve-builds
```
