import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../pages/Main/Main.vue";
import Category from "../pages/Category/Category.vue";
import MyPage from "../pages/MyPage/MyPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/category/:category",
      component: Category,
    },
    {
      path: "/mypage",
      component: MyPage,
    },
  ],
});
