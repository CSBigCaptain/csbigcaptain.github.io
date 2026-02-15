import type { Theme } from 'mdui/internal/theme'
import { setTheme } from 'mdui/functions/setTheme'

/**
 * @description 更改页面深浅
 * @param theme 深浅或者跟随系统
 * @param target 目标，默认是 html
 */
export function setDarkTheme(theme: Theme, target: string = 'html') {
  if (import.meta.client) {
    setTheme(theme, target)
  }
}

/**
 * @description 生成随机的 HEX 色彩
 * @returns color 随机的字符串类型十六进制 RGB 颜色
 */
export function getRandomColor(): string {
  let color: string = '#'
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16)
  }
  return color
}

/**
 * @description 校验 HEX 颜色格式
 * @param hex 颜色值
 * @param withAlpha 是否支持透明度
 */
export function checkHexColor(hex: string, withAlpha = false): boolean {
  const re = withAlpha
    ? /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i
    : /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
  return re.test(hex.trim())
}

/**
 * @description HSL → HEX 转换函数
 * @param h 色相 (0-360)
 * @param s 饱和度 (0-100)
 * @param l 明度 (0-100)
 */
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100

  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const color
      = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }

  return `#${f(0)}${f(8)}${f(4)}`
}

/**
 * @description HEX → HUE 转换函数
 * @param hex HEX 颜色值
 * @returns 色相值 (0-360)
 */
export function hexToHue(hex: string): number {
  // 去掉 # 前缀
  const h = hex.replace('#', '')

  // 解析 RGB 值
  let r: number, g: number, b: number
  if (h.length === 3) {
    r = Number.parseInt(h.charAt(0) + h.charAt(0), 16) / 255
    g = Number.parseInt(h.charAt(1) + h.charAt(1), 16) / 255
    b = Number.parseInt(h.charAt(2) + h.charAt(2), 16) / 255
  }
  else {
    r = Number.parseInt(h.substring(0, 2), 16) / 255
    g = Number.parseInt(h.substring(2, 4), 16) / 255
    b = Number.parseInt(h.substring(4, 6), 16) / 255
  }

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let hue = 0
  if (delta !== 0) {
    if (max === r) {
      hue = ((g - b) / delta) % 6
    }
    else if (max === g) {
      hue = (b - r) / delta + 2
    }
    else {
      hue = (r - g) / delta + 4
    }
    hue = Math.round(hue * 60)
    if (hue < 0)
      hue += 360
  }

  return hue
}
