<template>
    <v-card class="pa-2">
        <h1>Teachers</h1>

        <v-divider class="my-7"></v-divider>
        <TeacherRow />

        
        <v-divider class="my-10"></v-divider>
        <TeacherCreate />
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import TeacherRow from "@/components/TeacherRow.vue";
import TeacherCreate from "@/components/TeacherCreate.vue";

export default Vue.extend({
    name: 'TeacherOverview',

    components: {
        TeacherRow,
        TeacherCreate
    },
})
</script>