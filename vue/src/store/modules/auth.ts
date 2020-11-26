import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/index";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    namespaced: true,
    user: {}
  },
  mutations: {
    setUser(state: any, user : User) {
      state.user = user
    }
  },
  actions: {
    // authenticate() {

    // },
    setUser(state: any, userId : number) {
      const user = store.getters["users/getById"](userId)
      store.commit("auth/setUser", user)
    }
  },
  getters: {
    getUser(state : any) {
      return state.user
    },
  }
};
