import { useStorage } from '@vueuse/core'
import { setColorScheme } from 'mdui/functions/setColorScheme'

const userThemeSettings = useStorage<{
  preferredColor: string
}>(
  'user-settings',
  {
    preferredColor: '#478384',
  },
  undefined,
  { mergeDefaults: true },
)

const mduiDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'mdui-theme-dark',
  valueLight: 'mdui-theme-light',
})

/** Shiki 代码块深浅模式 */
const nuxtDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})

const toggleDark = [useToggle(mduiDark)]

/**
 * @description 设置主题颜色，并更新本地 Storage
 * @param color 颜色值，默认使用本地 Storage 里的首选颜色
 * @param target 更改的HTML元素，默认直接用 html 元素
 */
function setColorTheme(color: string = userThemeSettings.value.preferredColor, target: string = 'html') {
  setColorScheme(color, { target })
  userThemeSettings.value.preferredColor = color
}

/**
 * @description 设置主题颜色为随机的颜色
 * @returns color 设置的颜色
 */
function setRandomColor(): string {
  const color = getRandomColor()
  setColorTheme(color)
  return color
}

export function useTheme() {
  return {
    userThemeSettings,
    mduiDark,
    nuxtDark,
    toggleDark,
    setColorTheme,
    setRandomColor,
  }
}
