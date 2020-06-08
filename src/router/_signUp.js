export default [
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("@/pages/SignUp/SignUp.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/signUp2",
    name: "signUp2",
    component: () => import("@/pages/SignUp/SignUp2.vue"),
    meta: { requireAuth: true }
  },
  {
    path: "/signUp3",
    name: "signUp3",
    component: () => import("@/pages/SignUp/SignUp3.vue"),
    meta: { requireAuth: true }
  }
];
