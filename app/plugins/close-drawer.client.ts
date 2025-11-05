const { closeAll } = useLayoutStatus()

export default defineNuxtPlugin((nuxtApp) => {
  const { toggleDrawerStatus } = useLayoutStatus()
  const router = useRouter()

  // Ensure closed on initial client mount
  nuxtApp.hook('app:mounted', () => {
    closeAll()
  })

  // Close after each navigation (only when actual path changes)
  router.afterEach((to, from) => {
    if (to.path !== from.path) {
      closeAll()
    }
  })
})
