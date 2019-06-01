// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import'mint-ui/lib/style.css'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
import qs from 'qs';
Vue.prototype.$qs = qs;
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'
import VueResource from "vue-resource";
Vue.use(VueResource)

//完整引入所有组件
import MintUI from "mint-ui";
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
