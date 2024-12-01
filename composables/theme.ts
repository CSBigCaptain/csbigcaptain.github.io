import { setTheme } from "mdui"
import { setColorScheme } from "mdui"
import type { Theme } from "mdui/internal/theme"

const defaultThemeColor: string = "#478384"
let mduiDark
let nuxtDark
let toggleDark

/**
 * @description 获取当前页面主题，传到变量 theme 中，并设置默认的颜色主题
 */
const getPagesTheme = () => {
  if (import.meta.client) {
    mduiDark = useDark({
      selector: "html",
      attribute: "class",
      valueDark: "mdui-theme-dark",
      valueLight: "mdui-theme-light",
    })
    nuxtDark = useDark({
      selector: "html",
      attribute: "class",
      valueDark: "dark",
      valueLight: "light",
    })
    toggleDark = [useToggle(mduiDark), useToggle(nuxtDark)]
    setColorScheme(defaultThemeColor, { target: "html" })
  }
}

/**
 * @description 更改页面深浅
 * @param theme 深浅或者跟随系统
 * @param target 目标，默认是 html
 */
const setDarkTheme = (theme: Theme, target: string = "html") => {
  if (import.meta.client) {
    setTheme(theme, target)
  }
}

/**
 * @description 设置主题颜色
 * @param color
 * @param target 更改的HTML元素，默认直接用 html 元素
 */
const setColorTheme = (color: string, target: string = "html") => {
  setColorScheme(color, {
    target: target,
  })
}

export {
  theme,
  mduiDark,
  toggleDark,
  defaultThemeColor,
  getPagesTheme,
  setDarkTheme,
  setColorTheme,
}
