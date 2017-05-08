<template>
  <div class="nav_bar">
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand clear_link"><router-link to="/">大隐</router-link></a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="active"><a><router-link to="/">首页</router-link></a></li>
              <li><a class="clear_link"><router-link to="/about">关于</router-link></a></li>
              <li><a href="#contact">加入我们</a></li>
            </ul>
            <ul class="nav pull-right">
              <el-button class="register_btn" type="text" @click="dialogFormVisible = true">注册</el-button>
              <el-dialog title="注册账号" :modal-append-to-body="false" :visible.sync="dialogFormVisible">
                <el-form :model="registerForm" :rules="reg_rule" ref="registerForm" class="dialog">
                  <el-form-item label="用户名" prop="name" :label-width="formLabelWidth">
                    <el-input class="phone_inp" size="large" v-model="registerForm.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
                    <el-input  type="password" class="phone_inp" size="large" v-model="registerForm.password" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="验证密码" prop="check_pwd" :label-width="formLabelWidth">
                    <el-input  type="password" class="phone_inp" size="large" v-model="registerForm.check_pwd" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="resetForm('registerForm','register')">取 消</el-button>
                  <el-button type="primary" @click="submitForm('registerForm')">注 册</el-button>
                </div>
              </el-dialog>
              <el-button class="login_btn" type="text" @click="formVisible = true">登录</el-button>
              <el-dialog title="注册账号" :modal-append-to-body="false" :visible.sync="formVisible">
                <el-form :model="loginForm"  ref="loginForm" class="dialog">
                  <el-form-item label="用户名" prop="customer" :label-width="formLabelWidth">
                    <el-input class="phone_inp" size="large" v-model="loginForm.customer" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="pwd" :label-width="formLabelWidth">
                    <el-input  type="password" class="phone_inp" size="large" v-model="loginForm.pwd" auto-complete="off"></el-input>
                  </el-form-item>
                  <span class="error">{{loginError}}</span>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="resetForm('registerForm','login')">取 消</el-button>
                  <el-button type="primary" @click="login('loginForm')">登 录</el-button>
                </div>
              </el-dialog>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import homepage from '../homepage/homepage.vue';
  export default{
    components: {
      name: 'nav_bar'
    },
    data(){
      var checkname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          var p = /^[0-9a-zA-Z]*$/
          if (!p.test(value)) {
            callback(new Error('请输入仅包含数字和字母的组合'));
          } else {
            if (value.length > 12) {
              callback(new Error('用户名应小于12个字符'));
            } else {
              var state = {};
              $.ajax({
                type : 'POST',
                dataType : 'json',
                url : 'http://localhost:8888/index.php?r=login/reg',
                cache: false,
                async: false,
                data: {
                  regType: 'checkName',
                  username: value
                },
                success : function (data) {
                  state = data;
                }.bind(this),
                error:function(){
                  console.log('error')
                }
              });
              console.log(state);
              if(state['state']==='success'){
                callback();
              }
              else{
                callback(new Error('用户名已存在'));
              }
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.registerForm.check_pwd !== '') {
            this.$refs['registerForm'].validateField('check_pwd');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        dialogFormVisible: false,
        formVisible: false,
        formLabelWidth: '80px',
        registerForm: {
          password: this.password,
          check_pwd: this.check_pwd,
          name: this.name
        },
        loginForm: {
          customer: this.customer,
          pwd: this.pwd,
        },
        loginError: '',
        reg_rule: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          check_pwd: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkname, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var state = {};
            var customer_name = this.registerForm.name;
            var pwd = this.registerForm.password;
            this.$refs[formName].resetFields();
            this.dialogFormVisible = false;
            $.ajax({
              type : 'POST',
              dataType : 'json',
              url : 'http://localhost:8888/index.php?r=login/reg',
              cache:false,
              async: false,
              data: {
                regType: 'register',
                username: customer_name,
                password: pwd
              },
              success : function (data) {
                state = data;
              }.bind(this),
              error:function(){
                console.log('error')
              }
            });
            if(state['state']==='success'){
              this.$message({
                showClose: true,
                message: '注册成功噜',
                type: 'success'
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      login(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var name = this.loginForm.customer;
            var pwd = this.loginForm.pwd;
            var state = {};
            $.ajax({
              type : 'POST',
              dataType : 'json',
              url : 'http://localhost:8888/index.php?r=login/reg',
              cache : false,
              async : false,
              data : {
                regType: 'login',
                username: name,
                password: pwd
              },
              success : function (data) {
                state = data;
              }.bind(this),
              error:function(){
                console.log('error')
              }
            });
            if(state['state']==='success'){
              this.loginError = '';
              this.$refs[formName].resetFields();
              this.formVisible = false;
              this.$message({
                showClose: true,
                message: '登录成功噜',
                type: 'success'
              });
            }
            else if(state['state']==='nameError'){
              this.loginError = '用户名似乎不存在呢';
            }
            else{
              this.loginError = '用户名和密码不匹配噢';
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName,type) {
        this.$refs[formName].resetFields();
        if(type === 'register'){
          this.dialogFormVisible = false;
        }
        else{
          this.formVisible = false;
        }
      }
    }
  }
</script>
<style>
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
  @media (max-width: 979px) {
    .container{
      margin-bottom: 0;
      width: auto;
    }
    .navbar-inner {
      border-radius: 0;
      margin: -20px 0;
    }
  }
  @media (max-width: 767px) {
    .navbar-inner {
      margin: -20px;
    }
  }
  .dialog{
    margin: 0 auto;
    padding: 5% 10% !important;
  }
  .register_btn,.login_btn{
    color: white !important;
    margin: 0 5px !important;
  }
  .phone_inp{
    width: 350px !important;
  }
  .error{
    color: red;
  }
</style>
