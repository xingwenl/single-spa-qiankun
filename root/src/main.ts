import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import './registerApp';
Vue.prototype.test = 'sdf'
new Vue({
  router,
  store,
  data() {
    return {
      sdf: 'sdfsd'
    }
  },
  render: h => h(App)
}).$mount("#app");
