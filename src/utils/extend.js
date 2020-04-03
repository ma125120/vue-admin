import { Message } from "element-ui";
import Vue from "vue";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const toast = async (msg, type = "success", time = 1000) => {
  Message({
    type,
    message: msg
  });
  await delay(time);
  return;
};

Vue.prototype.$toast = toast;

Vue.prototype.$dt = function(...args) {
  return this.$store.dispatch(...args);
};
