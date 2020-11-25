<template>
    <v-container class="mt-5">
        <TeacherOverview />
        <StudentOverview />

    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

import TeacherOverview from "../components/TeacherOverview.vue";
import StudentOverview from "../components/StudentOverview.vue";


export default Vue.extend({
    name: "Admin",
    components: {
        TeacherOverview,
        StudentOverview
    }
});
</script>