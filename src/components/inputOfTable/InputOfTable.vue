<template>
  <div class="b-input">
    <h1 class="input__title">I will be an input</h1>
    <input @change="changeText" type="text" />
    <button @click="alertText">Alert</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "InputOfTable",
  data() {
    return {
      inputText: ""
    };
  },
  computed: mapState({
    text: state => state.text
  }),
  methods: mapActions("letter", ["alertText", "changeText"]),
  created() {
    // console.log("123");
  }
};
</script>

<style scoped>
.b-input {
  background-color: red;
}
</style>
