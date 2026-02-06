---
title: 手把手教你配好 Claude Code
description: 本文将手把手教你如何配好Claude Code，重点介绍在VSCode中安装和配置Claude Code扩展，包括禁用登录功能的具体步骤，以便使用第三方API。
date: 2026-02-06
updated: 2026-02-06
categories: [教程]
tags: [Claude Code, AI 工具]
isFeatured: true
---

## VSCode 扩展

### 安装扩展

在 VSCode 的扩展市场中搜 **Claude Code for VS Code** 下载扩展。方便的同学可以直接访问这个链接 [Claude Code for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code)，点击 Install 按钮后浏览器会打开 VSCode 并完成安装。

### 配置：禁用登录功能

我们初次使用 Claude Code 扩展时，会被要求登录 Claude 账号，这是针对使用 [anthropic.com](http://anthropic.com/) 官方 API 的同学的。我们只是使用 Claude Code 调用第三方 API 的话，需要在 VSCode 设置中禁用扩展的登录功能：

> 禁用登录对应的设置ID： `claudeCode.disableLoginPrompt` ，启用此配置即可
> 

### 配置：调用第三方 API

> Claude Code 设置文档：[Claude Code 设置 - Claude Code Docs](https://code.claude.com/docs/zh-CN/settings)
> 

#### 配置文件的作用域及影响 

第三方 API 的配置在 Claude Code 的配置文件中，这个配置文件对于 VSCode 插件和 Claude Code  Cli 都是适用的：

Claude Code 的配置文件在 `~/.claude/settings.json` 如果没有找到的话需要新建一个。

- 如果想在所有的地方生效，可以使用**用户规则**：`%userprofile%/.claude/settings.json`
- 如果你的项目需要一些特殊配置，比如使用不一样的第三方 API 并希望同步到 Git 记录上，使用**项目规则**：`项目目录/.claude/settings.json`
- 如果你不希望你的配置同步到 Git ，使用**本地配置**： `项目目录/.claude/settings.local.json` （新增一个 `local` 后缀）

当在多个作用域中配置相同的设置时，更具体的作用域优先：

1. **命令行参数** - 临时会话设置的内容会短暂覆盖所有设置
2. **本地规则** - 覆盖项目和用户设置
3. **项目规则** - 覆盖用户设置
4. **用户规则**（最低）- 当没有其他内容指定设置时应用

#### 添加配置文件

在 `settings.json` 或者 `settings.local.json` 文件中添加这些：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "模型 API 地址",
    "ANTHROPIC_AUTH_TOKEN": "API KEY",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "默认 Opus 模型",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "默认 Sonnet 模型",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "默认 Haiku 模型",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

- Opus 模型是 Claude 中的旗舰模型，适合需要深度思考的问题，但是成本较高。建议在此处填写模型提供商提供的旗舰模型。
- Sonnet 模型在各方面都较为均衡。
- Haiku 模型速度快且成本低，但是困难问题的解决能力可能不及前者。建议在这里填写较为便宜的模型。
- 如果你当前可用的模型较少（DeepSeek 和小米只提供了 1 个模型），这三个选项可以填写同一个模型。

> TIPS：请确保模型的 API 支持 Authropic API 格式，具体需要参阅模型提供商提供的 Authropic API 或 Claude Code 的使用文档。
> 

## Claude Code Cli

### 安装

各个平台的安装教程：[Claude Code 概览 - Claude Code Docs](https://code.claude.com/docs/zh-CN/overview#30-%E7%A7%92%E5%86%85%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8)

> TIPS：对于国内用户，更建议使用 Winget 和 Homebrew 安装方式
> 

### 配置

配置部分和 VSCode 扩展的部分是相同的，API KEY 部分配置好之后会自动跳过登录。

## 更多文献

Claude Code 官网提供了非常详尽的文档教程，敬请参考：

- [VS Code 扩展与 Claude Code CLI](https://code.claude.com/docs/zh-CN/vs-code#vs-code-%E6%89%A9%E5%B1%95%E4%B8%8E-claude-code-cli)
- [常见工作流程 - Claude Code Docs](https://code.claude.com/docs/zh-CN/common-workflows)
- [快速入门 - Claude Code Docs](https://code.claude.com/docs/zh-CN/quickstart)