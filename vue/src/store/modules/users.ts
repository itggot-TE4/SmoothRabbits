import Vue from "vue";
import Vuex from "vuex";
import store from "@/store/index";

Vue.use(Vuex);


export default {
  namespaced: true,
  state: {
    namespaced: true,
    test: "testldkajsd",
    users: [
      {
        id: 1,
        type: "admin",
        email: "admin@admin.se",
        name: "admin",
        password: "sand"
      },
      {
        id: 2,
        type: "student",
        email: "jacob@elev.ga.ntig.se",
        name: "Jacob",
        password: "sand",
        teacherId: 4
      },
      {
        id: 3,
        type: "student",
        email: "Sebbe@elev.ga.ntig.se",
        name: "Sebbe",
        password: "sand",
        teacherId: 4
      },
      {
        id: 4,
        type: "student",
        email: "daniel@elev.ga.ntig.se",
        name: "Daniel",
        password: "sand"
      },
    ]
  },
  actions: {
  },
  getters: {
    getStudents(state : any) {
      return state.users.filter(function(x : any) { return x.type == "student"; });
    },
    getTeachers(state : any) {
      return state.users.filter(function(x : any) { return x.type == "teacher"; });
    },
    getAdmins(state : any) {
      return state.users.filter(function(x : any) { return x.type == "admin"; });
    },
    getById: (state: any) => (id: number) => {
      return state.users.filter((x : any) => x.id == id )[0];
    }

  }
};
