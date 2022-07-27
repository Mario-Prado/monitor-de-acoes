import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acoesDisponiveis: [{ sigla: 'VALE3', preco: 69.21 },
      { sigla: 'PETR3', preco: 29.33 },
      { sigla: 'BBDC4', preco: 17.05 },
      { sigla: 'ITUB4', preco: 23.26 },
      { sigla: 'MGLU3', preco: 2.86 }],
    saldo: 7890.49
  },
  getters: {
    getAcoes (state) {
      return state.acoesDisponiveis
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
