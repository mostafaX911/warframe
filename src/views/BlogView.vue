<template>
  <div class="our-blog">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>
    <create-frame />
  </div>
</template>

<script>
import createFrame from "@/components/createFrame.vue";
export default {
  components: { createFrame },
  data: function () {
    return {
      PageName: "Blog",
      PageDesc: "This is Blog Page",
    };
  },
  name: "BlogView",
};
</script>
