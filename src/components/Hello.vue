<template>
  <div class="hello">
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#">Project name</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="divider"></li>
                  <li class="nav-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form pull-right">
              <input class="span2" type="text" placeholder="Email">
              <input class="span2" type="password" placeholder="Password">
              <button type="submit" class="btn">Sign in</button>
            </form>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
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
                    <button class="btn1 btn1--df btn1--green">搜索</button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="item active">
          <img src="../assets/img/xm.jpeg" alt="">
        </div>
        <div class="item">
          <img src="../assets/img/hz.jpeg" alt="">
        </div>
        <div class="item">
          <img src="../assets/img/wuzhen.jpeg" alt="">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
    </div><!-- /.carousel -->
    <div class="popular">
      <ul class="nav nav-pills">
        <li class="active"><a href="#">最新</a></li>
        <li><a href="#">最热</a></li>
      </ul>
      <div class="row-fluid">
        <div class="span4">
          <div class="p_contain">
            <img src="">
            <div class="">
              <span></span>

            </div>
          </div>
        </div>
        <div class="span4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
        <div class="span4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <p><a class="btn" href="#">View details &raquo;</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//级联菜单
export default {
  data() {
    return {
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
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
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.el_input{
  width: 100%;
}
.slogan{
  position: absolute;
  left: 25%;
  right: 50%;
  top: 26%;
  color: white;
  width: 50%;
  height: 300px;
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
  margin-bottom: 60px;
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
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 500px;
}

.carousel-caption {
  background-color: rgba(255,255,255,0.4);
  margin: 0 auto;
  width: 65%;
  height: 130px;
  z-index: 11;
  margin-bottom: 50px;
}
.carousel-caption h1,
.carousel-caption .lead {
  margin: 0;
  line-height: 1.25;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0,0,0,.4);
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
  .navbar-inner {
    border-radius: 0;
    margin: -20px 0;
  }

  .carousel .item {
    height: 500px;
  }
  .carousel img {
    width: auto;
    height: 500px;
  }
}


@media (max-width: 767px) {

  .navbar-inner {
    margin: -20px;
  }

  .carousel {
    margin-left: -20px;
    margin-right: -20px;
  }
  .carousel .container {

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
  .carousel-caption .lead,
  .carousel-caption .btn {
    font-size: 18px;
  }
  .featurette .lead {
    font-size: 18px;
    line-height: 1.5;
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
/* ELEMENT CSS
    -------------------------------------------------- */
.popular{
  background-color: #dddddd;
  padding: 20px 30px;
}
.carousel{
  margin-bottom: 0;
}
</style>
