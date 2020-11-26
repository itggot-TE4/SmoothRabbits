<template>
  <v-row class="d-flex justify-center">
    <v-data-table style="width:98%" :headers="headers" :items="teachers">
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
export default Vue.extend({
  name: "TeacherRow",

  data: () => ({
    headers: [
      { text: "Email", align: "start", value: "email" },
      { text: "Name", value: "name" },
      { text: "", value: "password", sortable: false },
      { text: "", value: "resetbtn", sortable: false }
    ],
    teachers: [
      { email: "daniel.berg@ga.ntig.se", name: "Daniel Berg" },
      { email: "linus.styren@ga.ntig.se", name: "Linus Styren" },
      { email: "fredrik.kronhamn@ga.ntig.se", name: "Fredrik Kronhamn" },
      { email: "ola.lindgren@ga.ntig.se", name: "Ola Lindgren" }
    ]
  })
});
</script>
