<template>
  <v-dialog v-model="dialog" persistent max-width="390">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> delete user </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        are you sure you want to delete your account?
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="deleteUser"> yes </v-btn>
        <v-btn color="green darken-1" text @click="dialog = false"> no </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "DeleteUser",
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteUser() {
      await this.$store.dispatch("deleteUser", this.id);
      this.$emit("deleteUser", this.id);
      this.dialog = false;
    },
  },
};
</script>
<style></style>
