import {getTheme, setTheme} from "mdui";
import {setColorScheme} from 'mdui';
import type {Theme} from "mdui/internal/theme";

const defaultThemeColor: string = '#478384'
let theme

/**
 * @description 获取当前页面主题，传到变量 theme 中，并设置默认的颜色主题
 */
const getPagesTheme = () => {
    if (import.meta.client) {
        theme = getTheme('.webMain')
        setColorScheme(defaultThemeColor, {target: '.webMain'});
    }
}

/**
 * @description 更改页面深浅
 * @param theme 深浅或者跟随系统
 * @param target 目标，默认是 .webMain
 */
const setDarkTheme = (theme: Theme, target: string = '.webMain') => {
    if(import.meta.client) {
        setTheme(theme, target)
    }
}

/**
 * @description 设置主题颜色
 * @param color
 * @param target 更改的HTML元素，默认直接用 .webMain 元素
 */
const setColorTheme = (color: string, target: string = '.webMain') => {
    setColorScheme(color, {
        target: target,
    });
}

export {
    theme,
    defaultThemeColor,
    getPagesTheme,
    setDarkTheme,
    setColorTheme,
}