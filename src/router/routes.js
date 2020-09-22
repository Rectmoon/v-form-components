import A from "@/views/a";
// const A = () => import("@/views/a");
const B = () => import("@/views/b");
const C = () => import("@/views/c");
const D = () => import("@/views/d");
const VButtonPage = () => import("@/views/button");
const Detail = () => import("@/views/detail");

export default [
  {
    path: "/",
    name: "VButtonPage",
    component: VButtonPage
  },
  {
    path: "/a",
    name: "A",
    component: A,
    meta: {
      isKeepAlive: true
    }
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    meta: {
      isKeepAlive: false
    }
  }
  /*   {
    path: "/b",
    name: "B",
    component: B,
    meta: {
      isKeepAlive: true
    }
  },
  {
    path: "/c",
    name: "C",
    component: C
  },
  {
    path: "/d",
    name: "D",
    component: D
  } */
];
