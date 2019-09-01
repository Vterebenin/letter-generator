<template>
  <div id="app">
    <header>
      <v-toolbar class="main-toolbar">
        <v-toolbar-title>Letter-generator</v-toolbar-title>
        <v-toolbar-items>
          <v-btn>why</v-btn>
          <v-btn>about</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <section>
      <div class="main-wrapper">
        <InputOfTable />
        <OutputOfTable />
      </div>
    </section>
  </div>
</template>

<script>
import InputOfTable from "./components/inputOfTable/InputOfTable.vue";
import OutputOfTable from "./components/outputOfTable/OutputOfTable.vue";
import store from "./store";
export default {
  name: "app",
  store,
  components: {
    InputOfTable,
    OutputOfTable
  }
};
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
section {
  flex: 1 0 50%;
}
.main-toolbar .v-toolbar__content {
  display: flex;
  justify-content: space-between;
}
.main-wrapper {
  display: flex;
  justify-content: space-around;
  height: 100%;
}

</style>
