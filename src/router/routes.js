const VButtonPage = () => import('@/views/button')
import A from '@/views/a'
const B = () => import('@/views/b')
import Detail from '@/views/detail'
// const A = () => import("@/views/a");
/* 
const C = () => import("@/views/c");
const D = () => import("@/views/d"); */
// const Detail = () => import('@/views/detail')

export default [
  {
    path: '/',
    name: 'VButtonPage',
    component: VButtonPage
  },
  {
    path: '/a',
    name: 'A',
    component: A,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/b',
    name: 'B',
    component: B,
    meta: {
      keepAlive: true
    }
  }
  /*  
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
]
