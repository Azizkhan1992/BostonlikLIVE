import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import PersonMenu from '@/views/PersonMenu'
import '@/utils/directives'
import vuetify from '@/plugins/vuetify'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'


import store from '@/plugins/store/store'


import axios from '@/plugins/axios'
Vue.component('person-menu', PersonMenu)
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  },
  installComponents: false
})


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  axios,

  render: h => h(App),
}).$mount('#app')
