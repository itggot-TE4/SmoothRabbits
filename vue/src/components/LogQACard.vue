<template>
  <div>
    <v-card
    outlined
    >
      <v-card-title>{{ question }}</v-card-title>
      <v-card-subtitle>{{ answer }}</v-card-subtitle>
    </v-card>
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LogQACard",
  props: ["question", "answer"],
});
</script>
