import {LocalStorage} from "quasar";
export default function () {
  return {
    userToken: LocalStorage.getItem('userToken') ? LocalStorage.getItem('userToken') : null,
    user: LocalStorage.getItem('user') ? LocalStorage.getItem('user') : null,
  }
}
