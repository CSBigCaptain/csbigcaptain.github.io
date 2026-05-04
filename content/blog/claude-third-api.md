---
title: Claude APP 也能用第三方 API 了？！
description: 本文简要介绍了在 Claude APP 中不登录 Anthropic 账号，而使用第三方 API 的方法。
date: 2026-04-29
categories: [教程]
tags: [Claude, AI 工具]
isFeatured: true
---

之前我写过一篇 [手把手教你配好 Claude Code](/blog/claude-code)，讲的是怎么在 Claude Code 里配第三方 API。

不仅仅是 Claude Code，Claude 桌面客户端也是一个非常不错的 AI Agent 工具。与 Claude Code 一样，Claude APP 在国内不仅需要科学上网，还需要登录 Anthropic 账号才能使用。

事实上，与 Claude Code 一样，Claude APP 也支持使用第三方 API，这样就不需要登录 Anthropic 账号了。

## 下载 Claude APP

前往 Claude 官网下载桌面客户端：https://claude.com/download 。对于 macOS 用户，可以使用 `brew install claude` 命令安装。**此步骤需要科学上网。**

> 注意：笔者写稿时，通过 winget 安装的 Claude APP 无法使用其核心的 Cowork 模式，因此不建议从 winget 安装。

## 启用开发者模式

打开软件，不需要登录。

- 对于 Windows 版，找到软件左上角的三横线按钮，点击后会显示软件工具菜单。
- 对于 macOS 版，软件工具菜单就在屏幕顶部的菜单栏。

找到 “Help” 一栏，点击 “Trouble Shooting”，点击里面的“Enable Developer Mode” 选项。在弹出的提示中点击 “Enable” 即可启用开发者模式。

完成后软件会自动重新启动，并进入开发者模式。

## 配置第三方 API

软件重启后，再次找到软件的工具菜单。找到新出现的 “Developer” 一栏，点击 “Configure Third-Party Inference...” 选项，进入第三方 API 配置界面。

在 “Connection” 选项卡中，填写第三方 API 的相关信息。

- 类别选择 “Gateway”
- Gateway Base URL 填写第三方 API 的 Base URL
- API Key 填写第三方 API 的 Key
- Gateway auth scheme 使用默认的 “Bearer”，Gateway Extra Headers 不填
- Model List 填写模型列表，如果你的模型支持百万上下文，则勾选 Offer 1M-context variant 选项，这样你就可以使用百万上下文模式的模型了。如果你不确定，可以不选
- 其他的选项不用修改

修改完成之后，点击 Apply locally 按钮保存配置，软件会自动重启。

此外，如果你有多个第三方 API 端点，你可以在右上角的下拉菜单中管理多个 API 配置。
