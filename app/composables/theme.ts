import { setTheme } from 'mdui/functions/setTheme'
import { setColorScheme } from 'mdui/functions/setColorScheme'
import type { Theme } from 'mdui/internal/theme'
import { useStorage } from '@vueuse/core'

const defaultThemeColor: string = '#478384'
let mduiDark: any
let nuxtDark: any
let toggleDark: any

const userSettings = useStorage('user-settings', {
  preferredColor: defaultThemeColor,
})

const preferredColor = userSettings.value.preferredColor

/**
 * @description 获取当前页面主题，传到变量 theme 中，并设置默认的颜色主题
 */
const getPagesTheme = () => {
  if (import.meta.client) {
    // 网页主题
    mduiDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: 'mdui-theme-dark',
      valueLight: 'mdui-theme-light',
    })
    // Shiki 代码块主题使用此
    nuxtDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: 'light',
    })
    toggleDark = [useToggle(mduiDark)]
    setColorScheme(userSettings.value.preferredColor, { target: 'html' })
  }
}

/**
 * @description 更改页面深浅
 * @param theme 深浅或者跟随系统
 * @param target 目标，默认是 html
 */
const setDarkTheme = (theme: Theme, target: string = 'html') => {
  if (import.meta.client) {
    setTheme(theme, target)
  }
}

/**
 * @description 生成随机的 HEX 色彩
 * @returns color 随机的字符串类型十六进制 RGB 颜色
 */
const getRandomColor = (): string => {
  let color: string = '#'
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16)
  }
  return color
}

/**
 * @description 设置主题颜色
 * @param color
 * @param target 更改的HTML元素，默认直接用 html 元素
 */
const setColorTheme = (color: string, target: string = 'html') => {
  setColorScheme(color, {
    target: target,
  })
  userSettings.value.preferredColor = color
}

/**
 * @description 设置主题颜色为随机的颜色
 * @returns color 设置的颜色
 */
const setRandomColor = (): string => {
  const color = getRandomColor()
  setColorTheme(color)
  return color
}

const checkHexColor = (hex: string, withAlpha = false): boolean => {
  const re = withAlpha
    ? /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
    : /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
  return re.test(hex.trim())
}

export const useTheme = () => {
  return {
    mduiDark,
    toggleDark,
    defaultThemeColor,
    preferredColor,
    getPagesTheme,
    setDarkTheme,
    setColorTheme,
    setRandomColor,
    checkHexColor,
  }
}
