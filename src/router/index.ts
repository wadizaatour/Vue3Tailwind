import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MyExample",
    component: () => import("../modules/example/pages/MyExample.vue")
  },
  {
    path: "/dynamicComponent",
    name: "DynamicComponent",
    component: () => import("../modules/example/pages/DynamicComponent.vue")
  },
  {
    path: "/lazyLoadComponent",
    name: "LazyLoadComponent",
    component: () => import("../modules/example/pages/LazyLoadComponent.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/MyAbout.vue")
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../modules/example/pages/MyTable.vue")
  },
  {
    path: "/steps",
    name: "Steps",
    component: () => import("../modules/example/pages/MySteps.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router