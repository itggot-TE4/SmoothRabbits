<template>
    <div class="admin">
        <Studentcreate />
        <Teachercreate />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Studentcreate from "../components/Studentcreate.vue";
import Teachercreate from "../components/Teachercreate.vue";

export default Vue.extend({
    name: "admin",
    components: {
        Studentcreate,
        Teachercreate
    }
});
</script>