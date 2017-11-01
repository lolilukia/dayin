<template>
  <div class="nav_bar">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/"><a class="brand clear_link">大隐</a></router-link>
          <div class="nav-collapse collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/"><a class="clear_link">首页</a></router-link></li>
              <li><router-link to="/about"><a class="clear_link">关于</a></router-link></li>
              <li><router-link to="/contact"><a class="clear_link">加入我们</a></router-link></li>
            </ul>
            <logged @findLogin="getLogin" v-if="isLogin"></logged>
            <unlogged @getLogin="checkLogin" v-else></unlogged>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </nav>
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
    text-decoration: none !important;
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
  .router-link-active{
    text-decoration: none;
  }
  .clear_link{
    color: Silver !important;
  }
</style>
