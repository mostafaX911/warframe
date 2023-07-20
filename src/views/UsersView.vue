<template>
  <v-row>
    <v-col v-for="user in users" :key="user.id" cols="12" lg="3" md="4">
      <v-card class="mx-auto" max-width="344">
        <div class="d-flex align-center flex-column justify-center ma-2">
          <v-img
            class="rounded-circle"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            height="150px"
            width="150px"
          ></v-img>
        </div>
        <div>name:{{ user.name }}</div>
        <div>phone number:{{ user.phoneNumber }}</div>
        <div>E-mail:{{ user.email }}</div>
        <div>Age:{{ user.age }}</div>
        <div>Gender:{{ user.gender }}</div>
      </v-card>
    </v-col>
  </v-row>
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
    this.$eventHub.$on("usercreated", this.getUsers);
  },
  created() {},
  destroyed() {
    this.$eventHub.$off("usercreated");
  },
};
</script>
