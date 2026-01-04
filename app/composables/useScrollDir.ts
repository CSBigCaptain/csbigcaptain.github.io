import { onBeforeUnmount, onMounted } from 'vue'

export type ScrollDir = 'down' | 'up'

export function useScrollDir() {
  const dir = useState<ScrollDir>('scrollDir', () => 'down')
  const inited = useState<boolean>('scrollDirInited', () => false)

  onMounted(() => {
    if (inited.value)
      return
    inited.value = true

    let lastY = window.scrollY
    const delta = 2

    const onScroll = () => {
      const y = window.scrollY
      if (y > lastY + delta)
        dir.value = 'down'
      else if (y < lastY - delta)
        dir.value = 'up'
      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
  })

  return dir
}
