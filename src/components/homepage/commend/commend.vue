<template>
 <div class="commend">
   <div class="popular">
     <Tabs size="small" value="newest">
       <Tab-pane label="newest" name="newest">
         <div class="row-fluid">
           <div class="span4">
             <div class="p_contain">
               <img class="commend_img" src="../../../assets/img/c1.jpg">
               <div class="commend_des">
                 <p class="commend_loc">地点1</p><br>
                 <p class="commend_name">青年旅舍</p><br>
                 <p class="commend_rest">当前还剩3间</p>
                 <span class="commend_pri">¥65</span>
               </div>
             </div>
           </div>
           <div class="span4">
             <div class="p_contain">
               <img class="commend_img" src="../../../assets/img/c1.jpg">
               <div class="commend_des">
                 <p class="commend_loc">地点1</p><br>
                 <p class="commend_name">青年旅舍</p><br>
                 <p class="commend_rest">当前还剩3间</p>
                 <span class="commend_pri">¥65</span>
               </div>
             </div>
           </div>
           <div class="span4">
             <div class="p_contain">
               <img class="commend_img" src="../../../assets/img/c1.jpg">
               <div class="commend_des">
                 <p class="commend_loc">地点1</p><br>
                 <p class="commend_name">青年旅舍</p><br>
                 <p class="commend_rest">当前还剩3间</p>
                 <span class="commend_pri">¥65</span>
               </div>
             </div>
           </div>
         </div>
       </Tab-pane>
       <Tab-pane label="hottest" name="hottest">
       </Tab-pane>
     </Tabs>
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
  .popular{
    background-color: #f6f8fa;
    padding: 20px 50px;
  }
  .p_contain{
    size(80%, 350px);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding-top: 10px;
  }
  .commend_img{
    width: 100%;
    absolute_layout(0, 0);
  }
  .commend_des{
    size(100%, 100px);
    absolute_layout_b(0, 0);
    background-color: white;
    color: #aaaaaa;
    padding: 10px 8%;
  }
  .commend_loc{
    font-size: 10px;
    float: left;
  }
  .commend_name{
    font-size: 16px;
    color: #666666;
    float: left;
  }
  .commend_rest {
    font-size: 14px;
    color: #aaaaaa;
    absolute_layout_b(8%, 15px);
  }
  .commend_pri {
    font-size: 24px;
    color: #ff0000;
    absolute_layout_b(8%, 10px);
  }
</style>
