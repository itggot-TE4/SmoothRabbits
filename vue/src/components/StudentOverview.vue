<template>
  <v-card class="pa-2 mt-12">
    <h1>Students</h1>

    <v-divider class="my-7"></v-divider>
    <StudentRow />

    <v-divider class="my-10"></v-divider>
    <StudentCreate />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import StudentRow from "@/components/StudentRow.vue";
import StudentCreate from "@/components/StudentCreate.vue";

export default Vue.extend({
  name: "StudentOverview",

  components: {
    StudentRow,
    StudentCreate
  }
});
</script>
