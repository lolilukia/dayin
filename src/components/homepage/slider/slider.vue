<template>
  <div class="slider upper">
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="container">
          <div class="slogan">
            <h1 class="slogan_title">大隐隐于市</h1>
          </div>
          <div class="carousel-caption">
            <div class="elrow_contain">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="6">
                  <div class="grid-content">
                    <div class="block">
                      <el-cascader
                        class="el_input"
                        size="large"
                        expand-trigger="hover"
                        :options="options"
                        v-model="selectedOptions2"
                        @change="handleChange">
                      </el-cascader>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <div class="block">
                      <el-date-picker
                        class="el_input"
                        size="large"
                        v-model="value7"
                        type="daterange"
                        align="right"
                        placeholder="选择入住日期区间"
                        :picker-options="pickerOptions2">
                      </el-date-picker>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content">
                    <el-select size="large" class="el_input" v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in people_number"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="elrow_contain">
              <el-row :gutter="20">
                <el-col :span="17" :offset="1">
                  <div class="grid-content">
                    <el-input
                      size="large"
                      placeholder="酒店名等关键词"
                      icon="search"
                      v-model="input2"
                      :on-icon-click="handleIconClick">
                    </el-input>
                  </div>
                </el-col>
                <el-col :span="4" :offset="1">
                  <div class="grid-content">
                    <button class="btn1 btn1--lg btn1--green">搜&nbsp;索</button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="item active">
          <img src="../../../assets/img/xm.jpeg" alt="">
        </div>
        <div class="item">
          <img src="../../../assets/img/hz.jpeg" alt="">
        </div>
        <div class="item">
          <img src="../../../assets/img/wuzhen.jpeg" alt="">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      var options = [];
      $.ajax({
        type : 'GET',
        dataType : 'json',
        url : 'http://localhost:8888/index.php?r=locate/dest',
        cache:false,
        async: false,
        data: {type: 'destination'},
        success : function (data) {
          options = data;
        }.bind(this),
        error:function(){
          console.log('error')
        }
      });
      return {
        options: options,
        selectedOptions: [],
        selectedOptions2: [],
        //Time selector
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        //Person number selector
        people_number: [{
          value: 'one',
          label: '1人'
        }, {
          value: 'second',
          label: '2人'
        }, {
          value: 'three',
          label: '3人'
        }, {
          value: 'four',
          label: '4人'
        }, {
          value: 'five',
          label: '5人'
        }],
        value: '',
        //search input
        input2: ''
      };
    },
    methods: {
      //
      handleChange(value) {
        console.log(value);
      },
      //search input
      handleIconClick(ev) {
        console.log(ev);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .el_input{
    width: 100%;
  }
  .slogan{
    absolute_layout(26%, 25%);
    right: 50%;
    color: white;
    size(50%, 300px);
    z-index: 10;
  }
  .slogan_title{
    font-size: 100px;
    font-weight: 600;
  }
  /* Carousel base class */
  #myCarousel{
    margin-top: -40px;
  }
  .carousel {
    position: relative;
    z-index: 9;
  }
  .carousel-control {
    height: 80px;
    margin-top: 0;
    font-size: 120px;
    text-shadow: 0 1px 1px rgba(0,0,0,.4);
    background-color: transparent;
    border: 0;
    z-index: 11;
  }

  .carousel .item {
    height: 500px;
  }
  .carousel img {
    absolute_layout(0, 0);
    min-width: 100%;
    height: 500px;
  }

  .carousel-caption {
    background-color: rgba(255,255,255,0.4) !important;
    margin: 0 auto;
    size(65%, 30%);
    z-index: 11;
    margin-bottom: 50px;
  }
  .carousel-caption {
    margin-top: 10px;
  }

  /* RESPONSIVE CSS
      -------------------------------------------------- */

  @media (max-width: 979px) {

    .container{
      margin-bottom: 0;
      width: auto;
    }

    .carousel .item {
      height: 500px;
    }
    .carousel img {
      size(auto, 500px);
    }
  }


  @media (max-width: 767px) {

    .carousel {
      margin-left: -20px;
      margin-right: -20px;
    }

    .carousel .item {
      height: 300px;
    }
    .carousel img {
      height: 300px;
    }
    .carousel-caption {
      width: 65%;
      padding: 0 70px;
      margin-top: 100px;
    }
    .carousel-caption h1 {
      font-size: 30px;
    }
    .carousel-caption {
      font-size: 18px;
    }
  }
  /* ELEMENT CSS
      -------------------------------------------------- */
  .grid-content {
    border-radius: 4px;
    min-height: 56px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: transparent;
  }
  .carousel{
    margin-bottom: -10px;
  }
</style>
