import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lunch from "../views/Lunch.vue";
import VideoViewer from "../views/VideoViewer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lunch",
    name: "Lunch",
    component: Lunch,
  },
  {
    path: "/video_viewer",
    name: "VideoViewer",
    component: VideoViewer,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
