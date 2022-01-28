import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lunch from "../views/Lunch.vue";
import VideoViewer from "../views/VideoViewer.vue";
import PDFViewer from "../views/PDFViewer";
import AudioViewer from "../views/AudioViewer";
import Grade from "../views/Grade";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lunch",
    name: "Lunch",
    component: Lunch
  },
  {
    path: "/grade",
    name: "Grade",
    component: Grade,
  },
  {
    path: "/video_viewer",
    name: "VideoViewer",
    component: VideoViewer
  },
  {
    path: "/audio_viewer",
    name: "AudioViewer",
    component: AudioViewer
  },
  {
    path: "/pdf_viewer",
    name: "PDFViewer",
    component: PDFViewer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
