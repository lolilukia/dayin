<template>
  <div class="display upper">
    <selector></selector>
    <elements></elements>
  </div>
</template>
<script>
  import selector from '../display/selector/selector.vue';
  import elements from '../display/elements/elements.vue';
  export default{
    name: 'display',
    components: {
      selector: selector,
      elements: elements
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../style/mixin.css';
  @import '../../style/base.styl';

</style>
