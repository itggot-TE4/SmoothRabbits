<template>
    <v-container>

        <v-card 
        elevation="5"
        class="pb-1"
        >

            <!-- QUESTION CARD -->
            <h1 class="ma-10">Log Book</h1>

            <!-- <v-card elevation="4" class="ma-15 pa-5">

                <h2
                class="font-weight-light"
                >question?</h2>

                <v-textarea
                solo
                label="Answer"
                ></v-textarea>

            </v-card> -->

            <!-- SAVE BUTTON -->
            <v-card elevation="0" class="ma-10 d-flex align-end flex-column">
                <v-btn
                color="success"
                >SAVE ANSWERS</v-btn>
            </v-card>

        </v-card>

    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SignInPage",

  components: {

  }
});
</script>
