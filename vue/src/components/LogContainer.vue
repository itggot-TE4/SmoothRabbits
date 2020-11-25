<template>
  <v-container>
    <v-card>
      <LogQACard
        v-for="qA in questionsAndAnswers"
        :key="qA['q']"
        :question="qA['q']"
        :answer="qA['a']"
      />
      <CommentBox :comments="comments" />
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LogQACard from "@/components/LogQACard.vue";
import CommentBox from "@/components/CommentBox.vue";
export default Vue.extend({
  name: "LogContainer",
  components: {
    LogQACard,
    CommentBox
  },
  data() {
    return {
      // placeholder data
      questionsAndAnswers: [
        { q: "vad har du gjort under dagen?", a: "nada" },
        { q: "vad har du lärt dig?", a: "mucho" }
      ],

      comments: [
        { name: "jacob", content: "lorem ipsum dolor" },
        { name: "jacasdasdob", content: "lorem dolor" },
        { name: "Alex", content: "ipsum dolor" }
      ]
    };
  }
});
</script>
