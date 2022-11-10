import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MyExample",
    component: () => import("../modules/example/pages/HomePage.vue"),
  },
  {
    path: "/dynamicComponent",
    name: "DynamicComponent",
    component: () => import("../modules/example/pages/DynamicComponent.vue"),
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () =>
      import("../modules/example/pages/ReservationComponent.vue"),
  },
  {
    path: "/lazyLoadComponent",
    name: "LazyLoadComponent",
    component: () => import("../modules/example/pages/LazyLoadComponent.vue"),
  },
  {
    path: "/namespacedComponents",
    name: "NamespacedComponents",
    component: () =>
      import("../modules/example/pages/NamespacedComponents.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/example/pages/MyDashboard.vue"),
  },
  {
    path: "/steps",
    name: "Steps",
    component: () => import("../modules/example/pages/MySteps.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
