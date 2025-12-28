import type { NuxtConfig } from 'nuxt/schema'

type AdditionalScript = NonNullable<NonNullable<NuxtConfig['app']>['head']>['script']
type AdditionalCss = NuxtConfig['css']

interface Author {
  name: string
  realName?: string
  avatar: string
  email: string
  homepage?: string
}

interface Copyright {
  abbr: string
  name: string
  url: string
}

/** 博客的私有配置 */
interface BasicConfig {
  title: string
  subtitle?: string
  description?: string
  author: Author
  copyright?: Copyright
  favicon: string
  language: string
  timeEstablished: string
  timezone: string
  defaultCategory: string
  additionalCss: AdditionalCss
  additionalScripts: AdditionalScript
}

/** 建议此处写私有的 nuxt.config.ts 配置，这里继承 NuxtConfig，运行时会注入到配置文件中 */
export interface CommonConfig extends Partial<NuxtConfig> {}

/** blog.config.ts 中的博客配置 */
export interface BlogConfig extends BasicConfig, CommonConfig {
  commonConfig?: CommonConfig
}

export const defineBlogConfig = <T extends BlogConfig>(config: T) => config
