<template>
  <div class="b-input">
    <h1 class="input__title">I will be an input</h1>
    <input v-model="text" type="text">
    <button @click="alertText(text)">Alert</button>
  </div>
</template>

<script>
export default {
  name: "InputOfTable",
  data() {
    return {
      text: ""
    }
  },
  methods: {
    alertText(text) {
      alert(this.text);
    }
  }
};
</script>

<style scoped>
.b-input {
  background-color: red;
}
</style>
