<template>
  <div id="app">
    <nav_bar></nav_bar>
    <router-view></router-view>
    <dfooter></dfooter>
  </div>
</template>

<script>
import nav_bar from './components/nav_bar/nav_bar.vue';
import homepage from './components/homepage/homepage.vue';
import dfooter from './components/dfooter/dfooter.vue';
import about from './components/about/about.vue';
import display from './components/display/display.vue';
import center from './components/center/center.vue';
export default {
  name: 'app',
  components: {
    nav_bar: nav_bar,
    homepage: homepage,
    display: display,
    about: about,
    dfooter: dfooter,
    center: center
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
