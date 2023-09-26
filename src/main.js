import Vue from 'vue'
import App from './App.vue'
// import {MyDirectives} from '@/directives'
// import MyPlugins from '@/plugins/MyPlugins'

// Vue.use(MyPlugins)




import router from '@/router'

Vue.config.productionTip = false

// Vue.directive('my-directives',MyDirectives)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
