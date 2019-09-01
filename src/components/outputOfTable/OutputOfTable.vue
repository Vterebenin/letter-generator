<template>
  <h1 class="b-output">{{output}}</h1>
</template>

<script>
export default {
  name: "OutputOfTable",
  data() {
    return {
      output: "I will be an output"
    }
  }
};
</script>

<style scoped>
.b-output {
  background-color: lightyellow;
}
</style>
