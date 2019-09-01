<template>
  <h1 v-show="text" class="b-output">{{text}}</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OutputOfTable",
  computed: {
    ...mapState({
      text: state => {
        return state.letter.text;
      }
    })
  },
  created() {
    this.$store.dispatch("letter");
  }
};
</script>

<style scoped>
.b-output {
  background-color: lightyellow;
}
</style>
