import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import './components'

require('./assets/css/bootstrap.css'); //BOOTSTRAP
require('./assets/css/style.css');// PERSON STYLE
require('./assets/css/all.min.css'); //FONT AWESOME 

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  ...App,
})
