import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from "uuid";
import store from "@/store/index";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    namespaced: true,
    test: "testldkajsd",
    users: [
      {
        id: "1",
        type: "admin",
        email: "a@a",
        name: "admin",
        password: "a"
      },
      {
        id: "2",
        type: "student",
        email: "s@s",
        name: "Student",
        password: "s",
        teacherId: 4
      },
      {
        id: "3",
        type: "student",
        email: "Sebbe@elev.ga.ntig.se",
        name: "Sebbe",
        password: "sand",
        teacherId: 4
      },
      {
        id: "4",
        type: "teacher",
        email: "daniel@se",
        name: "Daniel",
        password: "sand"
      },
      {
        id: "5",
        type: "teacher",
        email: "hyra@damp.swe",
        name: "Alexander",
        password: "sand"
      }
        {
        id: '6'
        type: "teacher"
        email: "t@t",
        name: "teacher",
        password: "t"
      }
    ]
  },
  mutations: {
    addUser(state: any, data: User) {
      state.users.push(data)
      data.id = uuid();

      console.log(data)
    }
  },
  actions: {
    addTeacher(state: any, data: User) {
      data.type = 'teacher'

      store.commit("users/addUser", data);
    },
    addStudent(state: any, data: User) {
      data.type = 'student'

      store.commit("users/addUser", data);
    }

  },
  getters: {
    getStudents(state: any) {
      return state.users.filter(function(x: any) {
        return x.type == "student";
      });
    },
    getTeachers(state: any) {
      return state.users.filter(function(x: any) {
        return x.type == "teacher";
      });
    },
    getAdmins(state: any) {
      return state.users.filter(function(x: any) {
        return x.type == "admin";
      });
    },
    getById: (state: any) => (id: number) => {
      return state.users.filter((x: any) => x.id == id)[0];
    },
    getByEmail: (state: any) => (email: string) => {
      return state.users.filter((x: any) => x.email == email)[0];
    },


  }
};
