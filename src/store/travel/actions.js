import Axios from 'axios';
import {Loading, LocalStorage, Notify} from "quasar";
export async function sendRequest (context, data) {
  return await Axios.request({
    method: data.method,
    url: data.url,
    data: data.data,
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(response => {
  	if (typeof data.success === 'function') {
      data.success(response, this.$router)
    }
    return response
  }).catch(error => {
    if (error.response !== undefined && error.response.data !== undefined && error.response.data.errors !== undefined) {
      for (const [key, err] of Object.entries(error.response.data.errors)) {
        Notify.create({
          color: 'negative',
          position: 'top',
          message: key + ': ' + err[0],
          icon: 'report_problem'
        })
      }
    }
    let message = error.message
    if (error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined) {
      message = error.response.data.message
    }
    Notify.create({
      color: 'negative',
      position: 'top',
      message: 'Something went wrong: ' + message,
      icon: 'report_problem'
    })
    console.log(error)
  })
}
export async function sendApiRequest (context, data) {
  data.url = process.env.API_URL  + '/api/' + data.url
  Loading.show()
  const res =  await context.dispatch('sendRequest', data)
  Loading.hide()
  return res
}


export async function sendLoginLink (context, data) {
  return await context.dispatch('sendApiRequest', {
    method: 'POST',
    url: 'login',
    data: data,
    success: function (response, router) {
      if (response.status === 200) {
        Notify.create({
          color: 'green',
          position: 'top',
          message: response.data.message,
          icon: 'check'
        })
      } else {
        Notify.create({
          color: 'negative',
          position: 'top',
          message: 'Something went wrong: ' + response.data.message,
          icon: 'report_problem'
        })
      }
    }
  })
}
export async function verifiyToken (context, data) {
  return await context.dispatch('sendApiRequest', {
    method: 'GET',
    url: 'verify-login/'+ data.token,
    data: data,
    success: function (response, router) {
      if (response.status === 200) {
      	context.commit('setUserToken', response.data.data.token.plainTextToken)
        context.commit('setUser', response.data.data.user)
        Notify.create({
          color: 'green',
          position: 'top',
          message: response.data.message,
          icon: 'check'
        })
      } else {
        Notify.create({
          color: 'negative',
          position: 'top',
          message:response.data.message,
          icon: 'report_problem'
        })
      }
    }
  })
}