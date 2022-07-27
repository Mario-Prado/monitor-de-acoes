import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import TelaAcoesDisponiveis from '../views/TelaAcoesDisponiveis.vue'
import TelaPortifolio from '../views/TelaPortifolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: TelaInicial
    // component: () => import(/* webpackChunkName: "inicio" */ './views/TelaAcoesDisponiveis.vue')
  },
  {
    path: '/acoes',
    name: 'TelaAcoesDisponiveis',
    component: TelaAcoesDisponiveis
  },
  {
    path: '/portifolio',
    name: 'TelaPortifolio',
    component: TelaPortifolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
