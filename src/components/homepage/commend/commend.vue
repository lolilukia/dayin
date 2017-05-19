<template>
 <div class="commend">
   <div class="popular">
     <el-tabs v-model="activeName">
       <el-tab-pane label="hottest" name="first">
         <el-row type="flex" class="row-bg" justify="space-between">
           <el-col :span="6" v-for="item in location" :offset="0">
             <el-card :body-style="{ padding: '0px' }">
               <img v-bind:src=item.img_src class="image">
               <div style="padding: 14px;">
                 <span class="name">{{item.hostelName}}</span>
                 <div class="bottom clearfix">
                   <span class="time">还剩{{item.restNumber}}间</span>
                   <span class="button">¥{{item.price}}</span>
                 </div>
               </div>
             </el-card>
           </el-col>
         </el-row>
       </el-tab-pane>
       <el-tab-pane label="newest" name="second"></el-tab-pane>
     </el-tabs>
   </div>
 </div>
</template>
<script>
  export default{
    data(){
      return{
        activeName: 'first',
        location: [
          {
            img_src: "/static/img/c1.jpg",
            hostelName: "青年旅社1",
            restNumber: "23",
            price: "65"
          },
          {
            img_src: "/static/img/c1.jpg",
            hostelName: "青年旅社2",
            restNumber: "25",
            price: "66"
          },
          {
            img_src: "/static/img/c1.jpg",
            hostelName: "青年旅社3",
            restNumber: "3",
            price: "55"
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .commend{
    margin-top: -20px;
  }
  .popular{
    background-color: #f6f8fa;
    padding: 20px 50px;
  }
</style>
