<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- HEADER -->
    <h1 class="text-subtitle-1 ma-3">Add New Student</h1>

    <!-- INPUT -->
    <div class="d-flex flex-row ma-5">
      <v-text-field v-model="email" label="Email" required></v-text-field>

      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-select
        v-model="select"
        label="Teacher"
        data-vv-name="select"
        :items="SelectableTeachers"
        required
      ></v-select>

      <v-text-field v-model="password" label="Password" required></v-text-field>
    </div>

    <!-- BUTTON -->
    <div class="d-flex align-end flex-column ma-5">
      <v-btn color="success" @click="addStudent()">CREATE</v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/index";

export default Vue.extend({
  name: "StudentCreate",

 data: () => ({
    email: '',
    name: '',
    SelectableTeachers: [
      { text: "Daniel Berg", teacherID: 4 },
    ],
    password: ''

  }),
  methods: {
    addStudent() {
      store.dispatch("users/addStudent", {
        teacherID: this.SelectableTeachers,
        name: this.name,
        password: this.password,
        email: this.email
      });
     }
    }


});
</script>
