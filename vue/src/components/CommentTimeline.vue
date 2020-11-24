<template>
    <v-timeline>
        <v-timeline-item
        color="red lighten-2"
        large
        >
            <template v-slot:opposite>
                <span>{{ name }}</span>
            </template>
            <v-card class="elevation-2">
                <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
            </v-card>
        </v-timeline-item>


        <v-timeline-item
        color="red lighten-2"
        large
        >
            <template v-slot:opposite>
                <span>{{ name2 }}</span>
            </template>
            <v-card class="elevation-2">
                <v-card-text>
                    Sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando. Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
    
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
     data: () => ({
        name: 'Daniel Berg',
        name2: 'LynWood Satterfield'
    })
})
</script>