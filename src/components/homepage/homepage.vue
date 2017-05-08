<template>
  <div class="homepage">
    <slider></slider>
    <commend></commend>
    <hot_location></hot_location>
    <download></download>
  </div>
</template>
<script>
  import slider from '../homepage/slider/slider.vue';
  import commend from '../homepage/commend/commend.vue';
  import hot_location from '../homepage/hot_location/hot_location.vue';
  import download from '../homepage/download/download.vue';
  export default{
    name: 'homepage',
    components: {
      slider: slider,
      commend: commend,
      hot_location: hot_location,
      download: download
    }
  }
</script>
<style>

</style>
