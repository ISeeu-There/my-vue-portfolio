import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../components/BlogPage.vue"),
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: () => import("../components/BlogPostPages.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
