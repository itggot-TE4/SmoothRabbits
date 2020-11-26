import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/index";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    test: "testldkajsd"
  },
  getters: {
    journals: (state: any) => (yearWeek: number) => {
      return state.test;
    }
  }
};
