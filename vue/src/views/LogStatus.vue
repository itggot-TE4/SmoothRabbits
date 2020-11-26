<template>
    <v-container>
        <v-card class="pa-7 mb-12">
            <h1 style="mb-12;font-weight:normal;">Your Students</h1>
            <br>
            <br>
            <YourLogDataTable />
        </v-card>


        <v-card class="pa-7 mt-12">
            <h1 style="font-weight:normal;">All Other Students</h1>
            <br>
            <br>
            <OtherLogDataTable />

        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import YourLogDataTable from '../components/YourLogDataTable.vue'
import OtherLogDataTable from '../components/OtherLogDataTable.vue'
export default Vue.extend({
    name: 'LogStatus',

    components: {
        YourLogDataTable,
        OtherLogDataTable
    }
})
</script>