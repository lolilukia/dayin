// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import iView from 'iview'
import VueRouter from 'vue-router'
import './assets/libs/jquery-3.2.1.min'
import './assets/libs/bootstrap/css/bootstrap.min.css'
import './assets/libs/bootstrap/js/bootstrap.min'
import 'element-ui/lib/theme-default/index.css'
import './assets/libs/pushy-buttons.min.css'
import 'iview/dist/styles/iview.css'
import './style/reset.css';
import homepage from './components/homepage/homepage.vue';
import about from './components/about/about.vue';
import display from './components/display/display.vue';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(iView);
Vue.use(VueRouter);
let app = Vue.extend(app);
const routes = [
  { path: '/', component: homepage },
  { path: '/about', component: about },
  { path: '/display', component: display}  //only for test
];
const router = new VueRouter({ routes:routes});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
});
