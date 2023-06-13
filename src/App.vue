<template>
  <v-app>
    <app-header />
    <v-main>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container fluid>
          <router-view />
        </v-container>
      </v-sheet>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import AppHeader from "@/components/global/AppHeader.vue";
import Footer from "./components/global/Footer.vue";
export default {
  name: "app",
  components: {
    AppHeader,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
