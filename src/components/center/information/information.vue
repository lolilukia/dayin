<template>
  <div class="information">
    <div class="info">
      <el-row class="tac">
        <el-col :span="3" :offset="2">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
          </el-upload>
        </el-col>
        <el-col class="detail_block" :span="14" :offset="4">
          <div class="editInfo" v-on:click="isEdit=true">
            <el-button size="small" type="primary" icon="edit">修改</el-button>
          </div>
          <div v-if="!isEdit">
            <div class="detail" v-for="item in userInfo">
              <span class="detail_label">{{item.label}}</span><span class="detail_value">{{item.value}}</span>
            </div>
          </div>
          <div v-else>
            <div class="detail">
              <span class="detail_label">生日</span>
              <el-date-picker
                v-model="form.editBirth"
                size="small"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </div>
            <div class="detail">
              <span class="detail_label">性别</span>
              <el-radio class="sex" v-model="form.sex" label="1">男</el-radio>
              <el-radio class="sex" v-model="form.sex" label="2">女</el-radio>
            </div>
            <div class="detail_bg">
              <span class="detail_label">简介</span>
              <el-input type="textarea" :rows="2" v-model="form.intro"></el-input>
            </div>
            <div class="detail_btn">
              <span class="detail_label"></span>
              <el-button type="primary" @click="submitEdit">保存</el-button>
              <el-button @click="isEdit=false">取消</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'information',
    created(){
      $.ajax({
        type : 'GET',
        dataType : 'json',
        url : 'http://localhost:8888/index.php?r=info/info',
        data: {
          username: this.$store.state.username
        },
        success : function (data) {
          this.userInfo[0].value = this.$store.state.username;
          this.userInfo[1].value = data.birthday?data.birthday.substring(0, 10):'未设置';
          this.userInfo[2].value = data.gender?data.genderMap['data.gender']:'保密';
          this.userInfo[3].value = data.register_time.substring(0, 10);
          this.userInfo[4].value = data.introduction?data.introduction:'无';
        }.bind(this),
        error:function(){
          console.log('error')
        }
      });
    },
    data(){
      return{
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e7;
          }
        },
        imageUrl: '/static/img/c1.jpg',
        isEdit: false,
        genderMap: {'male':'男','female':'女'},
        userInfo: [
          {
            label: '用户名',
            value: ''
          },
          {
            label: '生日',
            value: ''
          },
          {
            label: '性别',
            value: ''
          },
          {
            label: '注册日期',
            value: ''
          },
          {
            label: '简介',
            value: ''
          },
        ],
        form: {
          editBirth: '',
          sex: '1',
          intro: ''
        },
      };
    },
    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitEdit(){
        var state = {};
        var name = this.$store.state.username;
        var birth = this.form.editBirth + ' 00:00:00';
        var gender = this.form.sex;
        var intro = this.form.intro;
        $.ajax({
          type : 'POST',
          dataType : 'json',
          url : 'http://localhost:8888/index.php?r=edit/edit',
          cache : false,
          async : false,
          data : {
              action: 'edit',
              username: name,
              birthday: birth,
              gender: gender,
              intro: intro
          },
          success : function (data) {
            state = data;
            console.log(data);
          }.bind(this),
          error:function(){
            console.log('error')
          }
        });
        if(state['state']==='success'){
          this.$message({
            showClose: true,
            message: '修改成功噜',
            type: 'success'
          });
          this.isEdit = false;
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../style/mixin.css';
  @import '../../../style/base.styl';
  .info{
    background: #f1f8fe;
    height: 250px;
    border: 1px solid #eeeeee;
    margin-bottom: 30px;
    position: relative;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 30px;
    size(178px, 178px);
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font_config(28px, #8c939d);
    size(178px, 178px);
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    size(178px, 178px);
    display: block;
  }
  .detail, .detail_bg, .detail_btn{
    line-height: 30px;
    width: 480px;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
  }
  .detail{
    height: 33px;
  }
  .detail_btn{
    padding-top: 15px;
  }
  .detail_block{
    margin-top: 35px;
  }
  .detail_label{
    display: inline-block;
    width: 90px;
  }
  .detail_value{
    font_config(14px, #8c939d);
    font-weight: 600;
  }
  .editInfo{
    position: absolute;
    right: 30px;
    top: 30px;
  }
  textarea{
    width: 300px !important;
  }
</style>
