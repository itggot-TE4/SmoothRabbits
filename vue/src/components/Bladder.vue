<template>
  <v-card
    class="mx-auto"
    max-width="300px">
    <v-card-text 
        class="d-flex justify-center align-center flex-column">
        <p class ="text--primary font-weight-bold">
        WEEK 48</p>
        <p class="text--primary justify-center font-weight-bold">
        Jacob Sandström
        </p>
      
    </v-card-text>
  

    <v-card-actions class="d-flex justify-space-between align-center">
        <v-btn 
            text
            @click="reveal = true">
            &lt;
        </v-btn>
        <p class="text--secondary">
        monday
      </p>
        <v-btn 
            text
            @click="reveal = true">
            &gt;
        </v-btn>
    </v-card-actions>
  </v-card>
</template> 