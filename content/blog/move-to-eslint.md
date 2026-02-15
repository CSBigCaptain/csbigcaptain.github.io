---
title: ESLint, Why or Not?
date: 2025-11-29
description: Some thoughts on why we moved from Prettier to ESLint
short: 从 Prettier 迁移到 ESLint 的一些思考
---

今天，我用了一下午的时间，把我博客项目的代码格式化工具从 Prettier 迁移到了 ESLint。

在这么做之前我的内心其实是纠结的，这意味着项目的代码又要产生一个很大改动。这次 Commit 足足有 70 多个文件被修改了，上次进行这种大规模的修改还是因为引入了 Prettier ，统一格式化了一次代码。

但是经过了一番心理斗争，我还是狠下心来，切换到了 ESLint。因为我看了看我曾经写的各种 Vue 组件，有的 `<template>` 标签写在顶上，有的 `<script>` 标签写在顶上，虽然项目不是很大，但是我感觉已经很乱了。

前几天在准备个人简历时，Fork 了一下[纸鹿](https://zhilu.cyou/)的在线简历项目。在修改时，我只是轻轻地按了一下 Prettier 的格式化快捷键，就被编辑器页面上满屏的黄色管家打断了双腿。我复制代码警告问了一下 AI 才知道，原来这是 ESLint 的功能，它能够保证项目代码的格式一致性，简而言之就是“统一码风”，对于多人项目而言，这无疑是非常重要的。

对于 ESLint 的配置，我个人用了 `@antfu/eslint-config` 这个预配置好的包，对于你的一些具体需求，我的建议是全交给 AI 就行了：提供需求、坐和放宽、Ctrl CV，一气呵成！另外如果你的项目是纯 Vue + TS 的 Nuxt 加 Nuxt Content 项目的话，我认为 [zhilu-blog-v3](https://github.com/L33Z22L11/blog-v3/blob/main/eslint.config.mjs) 项目的配置文件很有参考价值，我也参考了他的一些配置。

另外我在配置 ESLint 的过程中，也遇到了很多配置错误导致 ESLint 运行失败，我都是把错误复制发送给 AI 让它来修改的。虽然 ESLint 的配置较为繁琐，但是对于项目的可读性以及长期维护方面，我认为这些牺牲是值得的。
