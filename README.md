# CSBigCaptain Blog v1

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
