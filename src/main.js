// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './common/reset.css'; // 引入 reset.css

// element-ui
import {
  Button,
  InputNumber
} from 'element-ui';
Vue.use(Button);
Vue.use(InputNumber);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
