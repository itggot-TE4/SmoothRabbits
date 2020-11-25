<template>
  <v-app-bar id="header">
    <v-col cols="9">
      <router-link style="text-decoration: none; color:black;" to="/">
        <h2 class="ma-auto ml-10 font-weight-medium">Log-o-matic</h2>
      </router-link>
    </v-col>

    <v-divider vertical></v-divider>
    <v-col
      cols="1"
      class="pa-0 d-flex justify-center align-center"
      style="height:100%"
    >
      <router-link
        style="text-decoration: none; color:black; height:100%; width:100%"
        to="/admin"
      >
        <v-btn
          style="border-radius: 0px; height:100%; width:100%"
          elevation="0"
        >
          <v-icon class="mr-2">
            mdi-cog
          </v-icon>
          Admin
        </v-btn>
      </router-link>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col
      cols="1"
      class="pa-0 d-flex justify-center align-center"
      style="height:100%"
    >
      <v-btn style="border-radius: 0px; height:100%; width:100%" elevation="0">
        <v-icon class="mr-2">
          mdi-format-list-bulleted
        </v-icon>
        Logs
      </v-btn>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col
      cols="1"
      class="pa-0 d-flex justify-center align-center"
      style="height:100%"
    >
      <router-link
        style="text-decoration: none; color:black; height:100%; width:100%;"
        to="/signin"
      >
        <v-btn
          style="border-radius: 0px; height:100%; width:100%"
          elevation="0"
        >
          <v-icon class="mr-2">
            mdi-lock-open
          </v-icon>
          Login
        </v-btn>
      </router-link>
    </v-col>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  name: "NavBar"

  // methods: {
  //     Submit (value) {

  //     }
  // }
};
</script>

<style>
#header .v-toolbar__content {
  padding: 0;
}
</style>
