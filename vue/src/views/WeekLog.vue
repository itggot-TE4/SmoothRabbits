<template>
  <div class="weekLog">
    <Bladder/>
    <LogContainer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Bladder from "../components/Bladder.vue";
import LogContainer from "@/components/LogContainer.vue";

export default Vue.extend({
  name: "WeekLog",

  components: {
    Bladder,
    LogContainer
  }
});
</script>
