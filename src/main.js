import Vue from "vue";
import App from "./app.vue";
import router from "./router/index.js";
import "@/assets/css/reset.css";
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import store from "./vuex/store.js";
import axios from "axios";
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$log = function (msg) {
  console.log(msg);
};

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});