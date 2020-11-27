<template>
    <v-row 
    class="d-flex justify-center"
    >
        <v-data-table
        style="width:98%"
        :headers="headers"
        :items="students"
        hide-default-footer
        disable-pagination
        >
      <template v-slot:item.teacherName="props">
        <v-select
          style="max-width:192px"
          v-model="props.item.teacherName"
          name="selectTeacher"
          :items="SelectableTeachers"
        ></v-select>
      </template>
      <template v-slot:item.password="props">
        <v-text-field
          v-model="props.item.password"
          label="Password"
        ></v-text-field>
      </template>
      <template v-slot:item.resetbtn="props">
        <v-btn v-model="props.item.resetbtn" elevation="1" color="primary" tile
          >RESET</v-btn

        >
      </template>
    </v-data-table>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/index";
export default Vue.extend({
  data: () => ({
    SelectableTeachers: [
      "Daniel Berg",
      "Linus Styren",
      "Fredrik Kronhamn",
      "Ola Lindgren"
    ],
    headers: [
      { text: "Email", align: "start", value: "email" },
      { text: "Name", value: "name" },
      { text: "Teacher", value: "teacherName" },
      { text: "", value: "password", sortable: false },
      { text: "", value: "resetbtn", sortable: false }
    ],
  }),
  computed: {
    students() {
      return store.getters["users/getStudents"];
    }
  }
});
</script>
