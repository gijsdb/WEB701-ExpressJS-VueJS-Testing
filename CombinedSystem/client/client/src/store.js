import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
  },
});
