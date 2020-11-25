<template>
  <v-app>
    <v-main>
      <Bladder />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Bladder from "./components/Bladder.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    Bladder
  },

  data: () => ({
    //
  })
});
</script>
