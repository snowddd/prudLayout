export default [
  {
    path: "/changeAddress",
    name: "changeAddress",
    component: () => import("@/pages/ChangeAddress/ChangeAddress")
  },
  {
    path: "/changeAddress2",
    name: "changeAddress2",
    component: () => import("@/pages/ChangeAddress/ChangeAddress2")
  },
  {
    path: "/changeAddress3",
    name: "changeAddress3",
    component: () => import("@/pages/ChangeAddress/ChangeAddress3")
  }
];
