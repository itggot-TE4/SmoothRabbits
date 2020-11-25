<template>
  <v-row>
    <v-col class="d-flex justify-center">
      <v-col cols="auto" class="d-flex justify-center align-center">
        <h3>example@example.com</h3>
      </v-col>

      <v-col cols="auto" class="d-flex justify-center align-center">
        <h3>Example Name</h3>
      </v-col>

      <v-col
        cols="auto"
        class="d-flex justify-center align-center"
        style="max-width: 192px;"
      >
        <v-select name="selectTeacher" :items="SelectableTeachers"></v-select>
      </v-col>

      <v-col cols="4" class="d-flex justify-center align-center">
        <v-text-field v-model="password" label="Password" size="36">
        </v-text-field>
      </v-col>

      <v-col cols="auto" class="d-flex justify-center align-center">
        <v-btn elevation="1" color="primary">RESET </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    show1: false,
    password: "",
    SelectableTeachers: [
      "Daniel Berg",
      "Linus Styren",
      "Fredrik Kronhamn",
      "Ola Lindgren"
    ]
  })
});
</script>
