<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >

        <!-- HEADER -->
        <h1
            class="text-subtitle-1 ma-3"
        >Add New Student</h1>

        <!-- INPUT -->
        <div class="d-flex flex-row ma-5">

            <v-text-field
                v-model="Email"
                label="Email"
                required
            ></v-text-field>

            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>
            
            <v-select
                v-model="select"
                :items="items"
                label="Teacher"
                data-vv-name="select"
                required
            ></v-select>
            
            <v-text-field
                v-model="password"
                label="Password"
                required
            ></v-text-field>
            
        </div>

        <!-- BUTTON -->
        <div class="d-flex align-end flex-column ma-5" >
            <v-btn
                color="success"
                @click="validate"
            >CREATE</v-btn>
        </div>

    </v-form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name:"StudentCreate",
})
</script>