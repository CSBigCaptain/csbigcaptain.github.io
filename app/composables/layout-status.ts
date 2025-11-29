const [drawerStatus, toggleDrawerStatus] = useToggle(false)
const [searchStatus, toggleSearchStatus] = useToggle(false)

function closeAll() {
  drawerStatus.value = false
  searchStatus.value = false
}

export function useLayoutStatus() {
  return {
    drawerStatus,
    toggleDrawerStatus,
    searchStatus,
    toggleSearchStatus,
    closeAll,
  }
}
