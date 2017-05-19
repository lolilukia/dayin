// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './assets/libs/jquery-3.2.1.min'
import './assets/libs/bootstrap/css/bootstrap.min.css'
import './assets/libs/bootstrap/js/bootstrap.min'
import 'element-ui/lib/theme-default/index.css'
import './assets/libs/pushy-buttons.min.css'
import 'iview/dist/styles/iview.css'
import './style/reset.css';
import homepage from './components/homepage/homepage.vue';
import about from './components/about/about.vue';
import center from './components/center/center.vue';
import display from './components/display/display.vue';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
let app = Vue.extend(app);
const routes = [
  { path: '/', component: homepage },
  { path: '/about', component: about },
  { path: '/center', component: center},
  { path: '/display', component: display}  //only for test
];
const router = new VueRouter({ routes:routes});
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    update(state, value){
      state.username = value;
      console.log(state.username);
    }
  }
});
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router: router
});
