<template>
  <h1 v-show="outputText" class="b-output">{{ outputText }}</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OutputOfTable",
  computed: {
    ...mapState({
      outputText: state => {
        return state.letter.text;
      }
    })
  },
  created() {
  }
};
</script>

<style scoped>
.b-output {
  flex: 1 0 50%;
  background-color: lightyellow;
}
</style>
