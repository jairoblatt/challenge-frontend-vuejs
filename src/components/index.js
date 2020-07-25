import Vue from 'vue'
import Child from './Child'
import CardLoading from '../components/Card/CardLoading'

//Load dynamic components
[
  Child,
  CardLoading
].forEach(Component => {
    Vue.component(Component.name, Component)
})