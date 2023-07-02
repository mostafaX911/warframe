<template>
  <div>
    <v-app-bar
      app
      color="#6A76AB"
      absolute
      dark
      shrink-on-scroll
      prominent
      src="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/12/warframe_new_war.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          position="20%"
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title><div class="logo">Warframe</div></v-app-bar-title>

      <v-spacer></v-spacer>
      <v-switch
        class="mt-3"
        v-model="$vuetify.theme.dark"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      <v-divider vertical></v-divider>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn icon>
        <v-icon>mdi-heart </v-icon>
      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab class="" to="/" exact>Home</v-tab>

          <v-divider vertical></v-divider>
          <v-tab to="/blog">Blog</v-tab>
          <v-divider vertical></v-divider>
          <v-tab to="/about">About</v-tab>
          <v-divider vertical></v-divider>
          <v-tab to="/help">Help</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      src="https://cdnb.artstation.com/p/assets/images/images/006/481/043/large/zeljko-duvnjak-warframe-orokin-moon-megastructure-a-01.jpg?1498924284"
      v-model="drawer"
      app
      dark
      absolute
      left
      temporary
    >
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/" exact>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item to="/blog">
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item to="/help">
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  mounted() {
    const mode = localStorage.mode === "true";
    this.$vuetify.theme.dark = mode;
  },

  watch: {
    group() {
      this.drawer = false;
    },
    "$vuetify.theme.dark"(v) {
      localStorage.setItem("mode", v);
    },
  },
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    margin: 0;
    .router-link-active {
      a {
        color: red;
      }
    }
    float: left;
    width: calc(100% - 200px);
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
<style lang="scss">
.v-navigation-drawer__image {
  left: 0;
  background-position: bottom;
}
</style>
