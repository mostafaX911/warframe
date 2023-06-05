<template>
  <div class="our-help">
    <h1>{{ PageName }}</h1>
    <p>{{ PageDesc }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      PageName: "Help",
      PageDesc: "This is Help Page",
    };
  },
  name: "helpView",
};
</script>
