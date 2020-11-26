import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import journals from "./modules/journals";
import users from "./modules/users";
import auth from "./modules/auth";

// import interfaces from "./interfaces";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: users,
    auth: auth,
    journals: journals
  }
  // plugins: [createPersistedState()]
});
