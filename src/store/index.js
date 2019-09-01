import Vue from "vue";
import Vuex from "vuex";
import letter from "./modules/letter.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    letter
  }
})