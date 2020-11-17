import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../pages/Main/Main.vue";
import MyPage from "../pages/MyPage/MyPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/mypage",
      component: MyPage,
    },
  ],
});
