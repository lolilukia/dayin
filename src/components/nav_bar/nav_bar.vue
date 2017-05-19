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
            <logged @findLogin="getLogin" v-if="isLogin"></logged>
            <unlogged @getLogin="checkLogin" v-else></unlogged>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import unlogged from '../nav_bar/unlogged.vue';
  import logged from '../nav_bar/logged.vue';
  export default{
    name: 'nav_bar',
    components: {
      unlogged: unlogged,
      logged: logged
    },
    data(){
      return {
        isLogin: false,
      }
    },
    methods: {
      getLogin(listenData){
        this.isLogin = listenData;
        console.log(this.isLogin);
      },
      checkLogin(listenData){
        this.isLogin = listenData;
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
</style>
