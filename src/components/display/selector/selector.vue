<template>
  <div class="selector">
    <div class="loc_img">
      <img class="header_img" src="../../../../static/img/shanghai.jpg"/>
      <div class="loc_des">
        <p class="loc_name">上海</p><br>
        <p class="loc_detail">有234家青旅，212家可订</p>
      </div>
      <div class="info_selector">
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
          <el-col :span="6">
            <div class="grid-content">
              <button class="btn1 btn1--lg btn1--green">搜&nbsp;索</button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
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
  .loc_img{
    size(100%, 350px);
    overflow: hidden;
    position: relative;
  }
  .header_img{
    width: 100%;
  }
  .loc_des{
    index-z: 5;
    absolute_layout_b(0, 0);
    padding: 10%;
  }
  .loc_name{
    font_config(45px, white);
    float: left;
  }
  .loc_detail{
    font_config(20px, white);
    float: left;
  }
  .info_selector{
    background-color: rgba(255,255,255,0.4);
    absolute_layout_b(0, 0);
    size(100%, 65px);
    padding: 0 10%;
  }
</style>
