import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.scss";
import ElementUI from "element-ui";

Vue.use(ElementUI);

import "./utils/extend";
import "./router/hook";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
