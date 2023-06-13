<template>
  <div class="about">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>
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
