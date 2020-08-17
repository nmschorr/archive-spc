import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gHomeKeyCount: 0,
    gShowHomeBool: false,
    gShowAllrevs: false,
  },
  mutations: {
    gHomeKeyCountMut(state, theval) {
      state.gHomeKeyCount = theval
    },
    gShowHomeBoolMut(state, theval) {
      state.gShowHomeBool = theval
    },
    gShowAllrevsMut(state, theval) {
      state.gShowAllrevs = theval
    },  
  },
  getters: {
    getgShowAllrevs: state => state.gShowAllrevs,
  },
  actions: {
    gHomeKeyCountAct(context, theval) {
      context.commit('gHomeKeyCountMut', theval)
    },    
    gShowHomeBoolAct(context, theval) {
      context.commit('gShowHomeBoolMut', theval)
    },
    gShowAllrevsAct(context, theval) {
      context.commit('gShowAllrevsMut', theval)
    },
  },
  modules: {
  }
})
