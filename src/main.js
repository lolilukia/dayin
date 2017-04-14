// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import iView from 'iview'
import './assets/libs/jquery-3.2.1.min'
import './assets/libs/bootstrap/css/bootstrap.min.css'
import './assets/libs/bootstrap/js/bootstrap.min'
import 'element-ui/lib/theme-default/index.css'
import './assets/libs/pushy-buttons.min.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
