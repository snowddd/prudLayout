export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/Login.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/pages/index")
  },
  {
    path: "*",
    component: () => import("@/pages/index")
  }
];
