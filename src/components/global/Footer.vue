<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.to"
      >
        {{ link.label }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Blog",
        to: "/blog",
      },
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Help",
        to: "/help",
      },
    ],
  }),
  name: "footerView",
};
</script>
