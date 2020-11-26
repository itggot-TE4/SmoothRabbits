<template>
  <v-app>
    <v-main>
      <NavBar />
      <p>Logged in as: {{ currentUser }}</p>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "./store/index";

import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavBar
  },
  beforeMount: function() {
    console.log("here");
    store.dispatch("auth/authorize");
  },
  computed: {
    currentUser() {
      return store.getters["auth/getUser"];
    }
  },

  data: () => ({
    //
  })
});
</script>

<style></style>
