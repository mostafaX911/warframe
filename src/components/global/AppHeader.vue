<template>
  <div class="header">
    <div class="logo">Elzero vue</div>
    <ul>
      <router-link to="/" tag="li" exact><a href="">Home</a></router-link>
      <router-link to="/blog" tag="li"><a href="">Blog</a></router-link>
      <router-link to="/about" tag="li"><a href="">About</a></router-link>
      <router-link to="/help" tag="li"><a href="">Help</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }
  ul {
    margin: 0;
    .router-link-active {
      a {
        color: red;
      }
    }
    float: left;
    width: calc(100% - 200px);
    li {
      padding: 20px;
      display: inline-block;
      font-size: 18px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
