<template>
  <v-col cols="12" lg="3" md="4">
    <v-card
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      class="mx-auto d-flex flex-column justify-center"
      max-width="344"
    >
      <v-img
        class="rounded-circle"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
        width="200px"
      ></v-img>
      <div>name:{{ name }}</div>
      <div>phone number:</div>
      <div>E-mail:</div>
      <div>Age:</div>
      <div>Gender:</div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    show: false,
    users: [],
  }),
  methods: {
    async getUsers() {
      const response = await this.$store.dispatch("getUsers");
      this.users = response.items;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
