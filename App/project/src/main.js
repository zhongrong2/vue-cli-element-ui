// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from "vuex";
import App from './App'
import router from './router/index.js'

Vue.config.productionTip = false;
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;

Vue.use(ElementUI)

Vue.use(Vuex);
let store=new Vuex.Store({
  state:{
    nav:1
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
