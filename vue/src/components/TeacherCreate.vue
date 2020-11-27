<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- HEADER -->
    <h1 class="text-subtitle-1 ma-3">Add New Teacher</h1>

    <!-- INPUT -->
    <div class="d-flex flex-row ma-5">
      <v-text-field v-model="email" label="Email" required></v-text-field>

      <v-text-field v-model="name" label="Name" required></v-text-field>

      <v-text-field v-model="password" label="Password" required></v-text-field>
    </div>

    <!-- BUTTON -->
    <div class="d-flex align-end flex-column ma-5">
      <v-btn color="success" @click="addTeacher()">CREATE</v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/index";

export default Vue.extend({
  name: "TeacherCreate",

  data: () => ({
    email: '',
    name: '',
    password: ''
  }),

    methods: {
      addTeacher() {
        store.dispatch("users/addTeacher", {
          name: this.name,
          password: this.password,
          email: this.email
        });
     }
    }
});
</script>
