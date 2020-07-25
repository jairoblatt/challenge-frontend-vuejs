import axios from 'axios'
import router from '@/router'


const HTTPClient = axios.create({
  baseURL: process.env.VUE_APP_URL || 'https://vue-flix-backend.herokuapp.com',
  headers: {
    'Content-type': 'application/json'
  }
})
// Resquest interceptor
HTTPClient.interceptors.request.use(config => {
  
  //start bar animation loading
  router.app.$loading.start();
  return config;
}), (error => {
  return Promise.reject(error);
})


// Response interceptor
HTTPClient.interceptors.response.use(response => {

  //ending bar animation loading
  router.app.$loading.finish()
  return response;
}), (error => {
  return Promise.reject(error);
})

export default HTTPClient

