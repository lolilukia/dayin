<template>
  <div class="hot_location">
    <div class="hot_container">
      <div class="title_con"><span class="h_title">热门好去处</span></div>
      <div class="hot_loc_contain">
        <el-row type="flex" class="row-bg" justify="center" :gutter="0">
          <el-col :span="5">
            <div class="h_contain">
              <img class="hot_img" src="../../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .hot_location{
    background-color: #eeeeee;
  }
  .hot_container{
    padding: 20px 50px;
  }
  .title_con{
    size(100%, 50%);
  }
  .hot_loc_contain{
    margin: 0 auto;
  }
  .h_title{
    float: left;
    color: #666666;
    font-size: 24px;
  }
  .h_contain{
    size(100%, 350px);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding-top: 10px;
  }
  .hot_img{
    width: 100%;
    absolute_layout(0, 0);
  }
  .hot_name{
    font-size: 16px;
    color: #666666;
    float: left;
  }
  .hot_rest {
    font-size: 14px;
    color: #aaaaaa;
    absolute_layout_b(8%, 15px);
  }
  .hot_des{
    size(100%, 80px);
    absolute_layout_b(0, 0);
    background-color: white;
    color: #aaaaaa;
    padding: 10px 8%;
  }
</style>
