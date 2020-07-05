import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showrev: false
  },
  mutations: {
    showrev_m(state, theval) {
      state.showrev = theval
    },
  },
  actions: {
    showrev_a (context, theval) {
      context.commit('showrev_m', theval)
    },
  },
  modules: {
  }
})
