import { useStorage } from '@vueuse/core'
import { setColorScheme } from 'mdui/functions/setColorScheme'
import { hexToHue, hslToHex, nextHue } from '~/utils/theme'

const userThemeSettings = useStorage('user-settings', {
  preferredColor: '#478384',
  enableDynamicColor: true,
})

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

function useDynamicTheme() {
  const hue = ref(0)
  let timer: number | null = null // interval 的句柄
  /**
   * @param [interval] 颜色变化周期，默认 1000 毫秒
   * @param [step] 颜色变化步长，默认 1
   */
  const start = (interval: number = 1000, step: number = 1) => {
    if (!import.meta.client)
      return
    if (timer !== null)
      return // 防止重复启动
    hue.value = hexToHue(userThemeSettings.value.preferredColor)
    timer = window.setInterval(() => {
      hue.value = nextHue(hue.value, step)
      const color = hslToHex(hue.value, 70, 55)
      setColorScheme(color, { target: 'html' })
    }, interval)
  }
  const stop = () => {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
      setColorScheme(userThemeSettings.value.preferredColor, { target: 'html' })
    }
  }
  watch(
    () => userThemeSettings.value.enableDynamicColor,
    (enabled) => {
      enabled ? start() : stop()
    },
    { immediate: true },
  )

  return {
    hue,
    start,
    stop,
  }
}

export function useTheme() {
  return {
    userThemeSettings,
    mduiDark,
    nuxtDark,
    toggleDark,
    setColorTheme,
    setRandomColor,
    useDynamicTheme,
  }
}
