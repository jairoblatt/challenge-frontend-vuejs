<template>
  <div id="app">
    <loading ref="loading" />
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)
const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

import Loading from '@/components/Loading'
import router from '@/router'
export default {
  el: '#app',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default',
    isLoading:false
  }),

  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {

    //Set the application layout.
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }
      this.layout = layouts[layout]
    }
    
  }

}
</script>
