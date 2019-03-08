import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ApiPage from './ApiPage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: ApiPage
    }
  ]
})

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
