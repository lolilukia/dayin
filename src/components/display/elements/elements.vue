<template>
  <div class="elements">
    <div class="hostel_detail">
      <div class="img_contain">
        <img class="hostel_img" src="../../../assets/img/c1.jpg"/>
      </div>
      <div class="hostel_info">
        <span class="hostel_name">浦江精选酒店</span>
        <el-rate
          class="score"
          v-model="value5"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}">
        </el-rate>
        <div class="around">
          <p>距人民广场地铁站120米</p>
          <p>周边景点：外滩</p>
        </div>
        <span class="price">¥65</span>
        <div class="view">
          <el-button :plain="true" type="success" size="large">查&nbsp;看</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .elements{
    background-color: #eeeeee;
    padding: 30px 0;
  }
  .hostel_detail{
    size(80%, 250px);
    border: 1px solid #eeeeee;
    border-radius: 4px;
    margin: auto;
    background-color: white;
    margin-bottom: 30px;
    position: relative;
  }
  .img_contain{
    size(25%, 85%);
    overflow: hidden;
    border-radius: 4px;
    absolute_layout(6%, 2%);
  }
  .hostel_img{
    width: 100%;
  }
  .hostel_info{
    absolute_layout(6%, 32%);
    text-align: left;
    size(60%, 100%);
  }
  .hostel_name{
    font_config(30px, #666666);
  }
  .score{
    absolute_layout(18%, 0);
  }
  .around{
    font_config(16px, #888888);
    absolute_layout(30%, 0);
  }
  .price{
    absolute_layout_b(0, 10%);
    font_config(40px, #ff0000);
  }
  .view{
    absolute_layout_b(83%, 15%);
  }
</style>
