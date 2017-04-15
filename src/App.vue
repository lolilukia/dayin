<template>
  <div id="app">
    <nav_bar></nav_bar>
    <slider></slider>
    <commend></commend>
    <hot_location></hot_location>
    <download></download>
    <dfooter></dfooter>
  </div>
</template>

<script>
import nav_bar from './components/nav_bar/nav_bar.vue';
import slider from './components/slider/slider.vue';
import commend from './components/commend/commend.vue';
import hot_location from './components/hot_location/hot_location.vue';
import download from './components/download/download.vue';
import dfooter from './components/dfooter/dfooter.vue';
export default {
  name: 'app',
  components: {
    nav_bar: nav_bar,
    slider: slider,
    commend: commend,
    hot_location: hot_location,
    download: download,
    dfooter: dfooter
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
