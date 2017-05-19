<template>
  <div class="hot_location">
    <div class="hot_container">
      <div class="title_con"><span class="h_title">热门好去处</span></div>
      <div class="hot_loc_contain">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="5" v-for="item in hot_location" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src=item.img_src class="image">
              <div style="padding: 14px;">
                <span class="name">{{item.locationName}}</span>
                <div class="bottom clearfix">
                  <span class="time">还剩{{item.restNumber}}间</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        hot_location: [
          {
            img_src: "/static/img/guilin.jpg",
            locationName: "乌镇",
            restNumber: "23",
          },
          {
            img_src: "/static/img/guilin.jpg",
            locationName: "乌镇",
            restNumber: "25",
          },
          {
            img_src: "/static/img/guilin.jpg",
            locationName: "乌镇",
            restNumber: "3",
          },
          {
            img_src: "/static/img/guilin.jpg",
            locationName: "乌镇",
            restNumber: "3",
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .hot_location{
    background-color: #eeeeee;
  }
  .hot_container{
    padding: 30px 50px;
  }
  .title_con{
    size(100%, 40px);
  }
  .hot_loc_contain{
    margin: 0 auto;
  }
  .h_title{
    float: left;
    color: #666666;
    font-size: 24px;
  }
</style>
