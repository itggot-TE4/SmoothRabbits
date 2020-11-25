<template>
  <div class="commentBox">
    <v-timeline :reverse="false" :dense="$vuetify.breakpoint.smAndDown">
      <CommentItem
        v-for="comment in comments"
        :key="comment['name']"
        :comment="comment['content']"
        :name="comment['name']"
      />
    </v-timeline>
    <v-textarea filled label="Comment" auto-grow class="ma-3"> </v-textarea>
    <div class="btnBox d-flex flex-row-reverse">
      <v-btn color="green" class="white--text ma-3">
        SEND COMMENT
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CommentItem from "@/components/CommentItem.vue";
export default Vue.extend({
  name: "CommentBox",
  props: ["comments"],
  components: {
    CommentItem
  }
});
</script>
