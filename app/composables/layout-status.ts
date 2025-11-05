const [drawerStatus, toggleDrawerStatus] = useToggle(false)
const [searchStatus, toggleSearchStatus] = useToggle(false)

const closeAll = () => {
  drawerStatus.value = false
  searchStatus.value = false
}

export const useLayoutStatus = () => {
  return {
    drawerStatus,
    toggleDrawerStatus,
    searchStatus,
    toggleSearchStatus,
    closeAll,
  }
}
