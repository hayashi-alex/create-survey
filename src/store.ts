import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forms: [],
  },
  mutations: {
    setForms: (state, payload) => {
      state.forms = payload.forms
    }
  },
  actions: {
    updateForms: ({commit}, forms) => {
      commit('updateForms', { forms })
    }
  },
});
