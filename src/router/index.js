import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Page1 from "../views/Page1.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Главная",
    },
  },
  {
    path: "/page1",
    name: "page1",
    component: Page1,
    meta: {
      title: "Страница1",
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   document.title = `${
//     to.params.state
//       ? `${to.params.city}, ${to.params.state}`
//       : to.meta.title
//   } | The Local Weather`;
//   next();
// });

export default router;
