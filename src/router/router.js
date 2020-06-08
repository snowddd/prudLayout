import Vue from "vue";
import Router from "vue-router";
import other from "./_other";
import changeAddress from "./_changeAddress";
import changePayMode from "./_changePayMode";
import forgetAccount from "./_forgetAccount";
import signUp from "./_signUp";
import policyLoan from "./_policyLoan";

Vue.use(Router);

let router = new Router({
  base: process.env.BASE_URL,
  routes: Array.prototype.concat(
    changeAddress,
    other,
    changePayMode,
    forgetAccount,
    signUp,
    policyLoan
  ),
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
// router.beforeEach((to, from, next) => {
//   if () {

//   }
//   next();
// });
// router.afterEach(to => {
//   func.refreshMenu(to.path);
// });

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (
    to.matched.some(record => record.meta.requireAuth || record.meta.homePages)
  ) {
    //路由元信息requireAuth:true，或者homePages:true，則不做登陸驗證
    next();
  } else {
    if (token) {
      //判斷用戶是否登入
      if (Object.keys(from.query).length === 0 && to.path === "/login") {
        next("/index");
      }
      if (Object.keys(from.query).length === 0) {
        //判斷路由是否有query 需要跳轉
        next();
      } else {
        let redirect = from.query.redirect; //如果有query
        if (to.path === redirect) {
          //解決頁面循環問題
          next();
        } else {
          next({ path: redirect }); //跳轉到儲存的路由
        }
      }
    } else {
      // console.log(from.query.redirect)
      // console.log(from.query)
      if (to.path === "/login") {
        next();
      } else if (to.query.token && to.query.href) {
        //假設通往舊系統的短網址上有token
        // store.dispatch("login/setToken", to.query.token);
        // store.dispatch("login/setHref", to.query.href);
        //跳轉頁面
        // next("/echange/passOld");
      } else if (to.query.token) {
        //假設取到query上有token要做的事情
        //基本上之後如果要用API驗證這邊要打API出去比對token的正確性
        localStorage.setItem("token", to.query.token);
        next({ path: to.path });
      } else {
        if (to.query.href) {
          // console.log(to.query.href);
          // store.dispatch("login/setHref", to.query.href);
        } else {
          // console.log("err");
        }

        next({
          path: "/login",
          query: { redirect: to.path } //把目標存進query的token
        });
      }
    }
  }
  return;
});
export default router;
