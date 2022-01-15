import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover:
    "https://github.com/u3u.pnghttps://images.unsplash.com/photo-1460036521480-ff49c08c2781?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bXVzaWN8fHx8fHwxNjQyMTg0ODIw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  productionTip: true,
});
Vue.use(VideoPlayer);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api_base =
  process.env.NODE_ENV === "development"
    ? "/api"
    : "https://bdfzres.lexuewang.cn:5002";

new Vue({
  router,
  axios,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
