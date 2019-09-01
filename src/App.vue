<template>
  <div id="app" class="main-wrapper">
    <InputOfTable />
    <OutputOfTable />
  </div>
</template>

<script>
import InputOfTable from "./components/inputOfTable/InputOfTable.vue";
import OutputOfTable from "./components/outputOfTable/OutputOfTable.vue";

export default {
  name: "app",
  components: {
    InputOfTable,
    OutputOfTable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-wrapper {
  display: flex;
  justify-content: space-around;

}
</style>
