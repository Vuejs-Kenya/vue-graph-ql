import Vue from 'vue'
import VueRouter, {RouteConfig} from "vue-router";
import App from "@/App.vue";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
    {
        path: '/',
        name: "Home",
        component: App
    },
];

const router: VueRouter = new VueRouter({
    mode: 'history',
    routes
});

// Todo:: define middlewares incase we get time for auth


export default router