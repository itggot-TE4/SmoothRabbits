import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/index";
import router from "@/router/index";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    namespaced: true,
    user: {},
    authorizationSettings: {
      all: ["/home", "/signin"],
      admin: ["/admin"],
      teacher: ["/logs", "/dayLog"],
      student: ["/logbook"]
    }
  },
  mutations: {
    setUser(state: any, user: User) {
      state.user = user;
    },
    unSetUser(state: any) {
      state.user = {};
    }
  },
  actions: {
    authenticate(state: any, credentials: Credentials) {
      const user = store.getters["users/getByEmail"](credentials.email);
      if (user != null) {
        if (user.password == credentials.pass) {
          store.commit("auth/setUser", user);

          switch (user.type) {
            case "admin":
              router.push("admin");
              break;
            case "teacher":
              router.push("logs");
              break;
            case "student":
              router.push("logbook");
              break;
            default:
              break;
          }
        }
      }
    },
    authorize(state: any) {
      const path = router.currentRoute.path;
      const user = state.user;
      // const user = store.getters["auth/getUser"];

      if (user == undefined) {
        router.push("/signin");
      } else {
        if (
          state.authorizationSettings[user.type].includes(path) ||
          state.authorizationSettings["all"].includes(path)
        ) {
          //  user is allowed in path
        } else {
          //  user not allowed to visit path
          router.push("/signin");
        }
      }
    },
    setUser(state: any, userId: number) {
      const user = store.getters["users/getById"](userId);
      store.commit("auth/setUser", user);
    }
  },
  getters: {
    getUser(state: any) {
      return state.user;
    }
  }
};
