<template>
  <div class="dayLog mt-15">
    <Bladder2 />
    <LogContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LogContainer from "@/components/LogContainer.vue";
import Bladder2 from "@/components/Bladder2.vue";

export default Vue.extend({
  name: "WeekLog",

  components: {
    LogContainer,
    Bladder2
  }
});
</script>
