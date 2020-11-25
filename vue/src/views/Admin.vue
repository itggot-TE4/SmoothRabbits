<template>
    <div class="admin">
        <StudentCreate />
        <TeacherCreate />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import StudentCreate from "../components/StudentCreate.vue";
import TeacherCreate from "../components/TeacherCreate.vue";

export default Vue.extend({
    name: "admin",
    components: {
        StudentCreate,
        TeacherCreate
    }
});
</script>