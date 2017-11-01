<template>
  <ul class="nav pull-right">
    <el-dropdown menu-align="start" @command="handleCommand">
      <el-button class="login_btn" type="text" v-model="username">{{username}}
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="dropItem" command="userCenter">
          <router-link to="/center" class="link">个人中心</router-link>
        </el-dropdown-item>
        <el-dropdown-item class="dropItem">帮助中心</el-dropdown-item>
        <el-dropdown-item command="q" class="dropItem">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </ul>
</template>
<script>
  import unlogged from '../nav_bar/unlogged.vue';
  export default{
    name: 'logged',
    data(){
      return{
        cardShow: false,
        username: this.$store.state.username,
        isLogin: false
      };
    },
    methods:{
      handleCommand(command) {
        if(command==='q'){
          console.log('quit');
          this.isLogin = false;
          this.$emit('findLogin',this.isLogin,'');
          this.$store.commit('update', '');
        }
      }
    }
  }
</script>
<style>
  .dropItem{
    font-size: 14px;
    clear: both;
    display: block;
    text-align: center;
  }
  .link{
    color: #666666;
  }
</style>
