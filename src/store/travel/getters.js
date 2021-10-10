
export function isLoggedIn (state) {
  if (!state.userToken || state.userToken === null || state.userToken === "null") {
    return false
  } else {
    return true
  }
}
