<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit.
          Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris
          cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo,
          vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
