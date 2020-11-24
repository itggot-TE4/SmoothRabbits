<template>
    <v-container class="mt-9 d-flex justify-center">
        <v-card width="500px">
            <div class="v-card__title pl-8 pt-8 pb-0">
                <h1 style="font-weight:normal">Sign In</h1>
                
            </div>

            <v-form class="pa-10" ref="form" v-model="valid" >

                <v-col class="d-flex">
                    <v-icon>mdi-account-circle</v-icon>
                    <v-text-field 
                    class="ml-2" 
                    v-model="email" 
                    :rules="emailRules" 
                    label="E-mail" 
                    required 
                    autocomplete=off
                    >
                    </v-text-field>
                </v-col>

                <v-col class="d-flex">
                    <v-icon>mdi-lock</v-icon>
                    <v-text-field 
                    class="ml-2" 
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordRules.required]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    counter
                    @click:append="show1 = !show1"
                    >
                    </v-text-field>

                </v-col>

        

            </v-form>

            <v-divider></v-divider>
            
            <v-container class="d-flex flex-row-reverse">
                <v-btn :disabled="!valid" color="success" class="mr-4">Sign In</v-btn>
            </v-container>


        </v-card>

    </v-container>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

    data: () => ({

        valid: false,
        email: '',
        emailRules: [
            (v:string) => !!v || 'E-mail is required',
            (v:string) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        show1: false,
        password: '',
        passwordRules: {
          required: (value : string) => !!value || 'Required.',
        },
    })



    

    
})
</script>