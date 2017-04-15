<template>
  <div class="hot_location">
    <div class="hot_container">
      <div class="title_con"><span class="h_title">热门好去处</span></div>
      <div class="hot_loc_contain">
        <el-row type="flex" class="row-bg" justify="center" :gutter="0">
          <el-col :span="5">
            <div class="h_contain">
              <img class="hot_img" src="../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../assets/img/guilin.jpg">
              <div class="hot_des">
                <p class="hot_name">乌镇</p><br>
                <p class="hot_rest">当前还剩3间</p>
              </div>
            </div>
          </el-col>
          <el-col :span="5" :offset="1">
            <div class="h_contain">
              <img class="hot_img" src="../../assets/img/guilin.jpg">
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
<style>
  .hot_location{
    background-color: #eeeeee;
  }
  .hot_container{
    padding: 20px 50px;
  }
  .title_con{
    width: 100%;
    height: 50px;
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
    width: 100%;
    height: 350px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding-top: 10px;
  }
  .hot_img{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hot_name{
    font-size: 16px;
    color: #666666;
    float: left;
  }
  .hot_rest {
    font-size: 14px;
    color: #aaaaaa;
    position: absolute;
    left: 8%;
    bottom: 15px;
  }
  .hot_des{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 80px;
    background-color: white;
    color: #aaaaaa;
    padding: 10px 8%;
  }
</style>
