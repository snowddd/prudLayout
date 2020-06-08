export default [
  {
    path: "/ForgetAccount",
    name: "ForgetAccount",
    component: () => import("@/pages/ForgetAccount/ForgetAccount"),
    meta: { requireAuth: true }
  },
  {
    path: "/ForgetAccount2",
    name: "ForgetAccount2",
    component: () => import("@/pages/ForgetAccount/ForgetAccount2"),
    meta: { requireAuth: true }
  }
];
