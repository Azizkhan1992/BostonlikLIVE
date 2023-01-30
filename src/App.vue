<template>
  <div id="app">
    <component :is="getLayout"></component>
  </div>
</template>

<script>
import MainDashboardLayout from './components/admin/MainDashboardLayout.vue'
import noLayout from './views/layouts/noLayout.vue'

import './assets/styles/menu-style.css'
import './assets/styles/content-style.css'
import './assets/styles/additional-style.css'
import './assets/styles/statistics-style.css'
import './assets/styles/request-blog.css'
import './assets/styles/sentenses-style.css'

export default {
  name: 'App',
  components: {
    MainDashboardLayout,
    noLayout
  },
  data(){
    return{
      isLayout: false
    }
  },
  computed:{
    getLayout(){

      if(this.$route.meta.layout === 'MainDashboard'){
        // this.isLayout = true
        return MainDashboardLayout
      }
      else{
        return noLayout
      }
      
    }
  }
}
</script>

<style>
</style>
