import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

/* function scrollBehavior(to, from, savedPosition) {
  if (savedPosition || typeof savedPosition === "undefined") {
    from.meta.isKeepAlive =
      typeof from.meta.isKeepAlive === "undefined" ? undefined : false;
    to.meta.isKeepAlive =
      typeof to.meta.isKeepAlive === "undefined" ? undefined : true;
    if (savedPosition) {
      return savedPosition;
    }
  } else {
    from.meta.isKeepAlive =
      typeof from.meta.isKeepAlive === "undefined" ? undefined : true;
    to.meta.isKeepAlive =
      typeof to.meta.isKeepAlive === "undefined" ? undefined : false;
  }
}
 */
export default new VueRouter({
  mode: "hash",

  routes

  // scrollBehavior
});
