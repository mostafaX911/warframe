<template>
  <div class="about">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      PageName: "About Us",
      PageDesc: "This is About us Page",
    };
  },
  name: "AboutView",
};
</script>
