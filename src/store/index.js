import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showrev: false,
    showprod: false,
    gshowtrue: true  // main page graphic
  },
  mutations: {
    showrev_m(state, theval) {
      state.showrev = theval
    },
    showprod_m(state, theval) {
      state.showprod = theval
    },
    gshowtrueMut(state, theval) {
      state.gshowtrue = theval
    },
  },
  getters: {
    getShowProd: state => state.showprod,
    getShowRev: state => state.showrev,
  },
  actions: {
    showrev_a(context, theval) {
      context.commit('showrev_m', theval)
    },
    showprod_a(context, theval) {
      context.commit('showprod_m', theval)
    },
    gshowtrueAct(context, theval) {
      context.commit('gshowtrueMut', theval)
    },
  },
  modules: {
  }
})
