<template>
  <div class="about">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>

    <div class="text-center">
      <v-dialog v-model="dialog" width="300">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" rounded dark v-bind="attrs" v-on="on">
            Rate My Project
          </v-btn>
        </template>

        <v-card class="elevation-16 mx-auto" width="300">
          <v-card-title class="text-h5"> Rate My Project </v-card-title>
          <v-card-text>
            <div class="text-center mt-12">
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
              ></v-rating>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-between">
            <v-btn text> No Thanks </v-btn>
            <v-btn color="primary" text> Rate Now </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-divider class="ma-5"></v-divider>

    <v-btn color="primary" rounded to="/">return to home page</v-btn>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      PageName: "About Us",
      PageDesc: "This is About us Page",
      loading: false,
      dialog: false,
      rating: "4.5",
    };
  },
  name: "AboutView",
  methods: {
    async remove() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 3000));
      this.loading = false;
    },
  },
};
</script>
