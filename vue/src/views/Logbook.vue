<template>
    <v-container>

        <v-card 
        elevation="5"
        class="pb-1"
        >

            <!-- QUESTION CARD -->
            <h1 class="ma-10">Log Book</h1>

            <v-card v-for="item in items" v-bind:key="item" elevation="4" class="ma-15 pa-5">

                <h2 class="font-weight-light">
                    {{ item.question }}
                </h2>

                <v-textarea
                solo
                label="Answer"
                ></v-textarea>

            </v-card>

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
    name: "Logbook",
    
    data: () => ({
        items: [
            {question: "What did you do today?", answer:""},
            {question: "Do you want to learn something new?", answer:""},
            {question: "Anything to add?", answer:""},
        ]
    }),

});
</script>
