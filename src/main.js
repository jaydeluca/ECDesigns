import Vue from 'vue'

import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import PortfolioWeb from './components/PortfolioWeb.vue'
import PortfolioAds from './components/PortfolioAds.vue'
import PortfolioPrint from './components/PortfolioPrint.vue'
import PortfolioBranding from './components/PortfolioBranding.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '', component: Home },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio,
      children: [
        {
          path: '',
          redirect: '/portfolio/print'
        },
        {
          path: 'web',
          component: PortfolioWeb
        },
        {
          path: 'ads',
          component: PortfolioAds
        },
        {
          path: 'print',
          component: PortfolioPrint
        },
        {
          path: 'branding',
          component: PortfolioBranding
        }
      ]
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')