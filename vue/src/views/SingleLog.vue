<template>
  <div class="dayLog mt-15">
      <v-container style="text-align: center">
        <h1>{{name}} {{day}} Week {{week}}</h1>
      </v-container>
    <LogContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LogContainer from "@/components/LogContainer.vue";

export default Vue.extend({
  name: "WeekLog",

  components: {
    LogContainer
  }
  ,
  data: () => ({
      name: "Jacob Sandström",
      day: "Monday",
      week: 48
  })
});
</script>
