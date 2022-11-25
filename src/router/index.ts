import TheDoggiesVue from "@/components/TheDoggies.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheDoggiesVue,
    },
  ],
});

export default router;
