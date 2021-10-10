import {LocalStorage} from "quasar";
export function setUserToken (state, token) {
  if(token == "null") {
    token = null
  }
  LocalStorage.set('userToken', token)
  state.userToken = token
}

export function setUser(state, user) {
  if(user == "null") {
    user = null
  }
  LocalStorage.set('user', user)
  state.user = user
}