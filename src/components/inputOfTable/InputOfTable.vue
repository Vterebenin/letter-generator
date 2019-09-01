<template>
  <div class="b-input">
    <textarea class="input__content" type="text" />
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
  mounted() {
    const textarea = document.body.querySelectorAll(
      ".b-input .input__content"
    )[0];
    console.log(textarea);
    textarea.onkeypress = e => {
      const code = e.keyCode ? e.keyCode : e.which;
      const text = e.target.value
      console.log(code);
      if ((code == 10) && (e.ctrlKey)) {
        //Enter keycode
        this.changeText(text)
      }
      console.log(CharacterData, e);
    };
  }
};
</script>

<style scoped>
.b-input {
  background-color: red;
  flex: 1 0 50%;
}
.b-input .input__content {
  background: #222;
  color: #fff;
  width: 100%;
  height: 100%;
}
.b-input .input__content:focus {
  outline: none;
}
</style>
