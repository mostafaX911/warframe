<template>
  <div class="our-blog">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      PageName: "Blog",
      PageDesc: "This is Blog Page",
    };
  },
  name: "BlogView",
};
</script>
