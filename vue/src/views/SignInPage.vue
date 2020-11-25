<template>
  <div>
    <SignInForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SignInForm from "../components/SignInForm.vue";

export default Vue.extend({
  name: "SignInPage",

  components: {
    SignInForm
  }
});
</script>
