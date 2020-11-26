<template>
    <v-card
        class="mx-auto my-10"
        elevation="1"
        max-width="300px">
        
      <v-card-text
        class="d-flex justify-center align-center flex-column"
      >
      <p class ="text--primary font-weight-black mb-0">
      Monday Week 48</p>
      </v-card-text>

      <v-card
      elevation="0"
      class="d-flex justify-center align-center"
      >
        <v-radio-group
          v-model="radios"
          row
        >
          <v-radio
            label="Once at a Time"
            value="radio-1"
          ></v-radio>
          <v-radio
            label="All at Once"
            value="radio-2"
          ></v-radio>
        </v-radio-group>  
      </v-card>

      <v-card-actions class="d-flex justify-center align-center">
        <v-btn
          text
          @click="reveal = true">
            &lt;
        </v-btn>

        <p class="text--primary font-weight-medium ma-0">
          Jacob Sandström
        </p>

        <v-btn
        text
        @click="reveal = true">
          &gt;
        </v-btn>
      </v-card-actions>

  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default {
  name: "Bladder2",

};
</script>