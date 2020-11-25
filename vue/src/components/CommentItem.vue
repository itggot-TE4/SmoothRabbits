<template>
  <v-timeline-item color="red lighten-2" large>
    <template v-slot:opposite>
      <span>{{ name }}</span>
    </template>
    <v-card class="elevation-2">
      <v-card-text>
        {{ comment }}
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CommentItem",
  props: ["name", "comment"]
});
</script>
