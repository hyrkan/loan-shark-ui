import { createRouter, createWebHistory } from "vue-router";
import Main from "@/layout/Main.vue";
import Dashboard from "@/Views/Dashboard.vue";
import NotFound from "@/Views/NotFound.vue";

const routes = [

    {
        path: "/",
        name: "main",
        component: Main,

        children: [
            {
                path: "",
                name: "dashboard",
                component: Dashboard
            }
        ],


    },

    {
        path: "/:pathMatch(.*)",
        name: "not found",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;