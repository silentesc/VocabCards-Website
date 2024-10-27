import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/app/LoginView.vue'
import RegisterView from '@/views/app/RegisterView.vue'
import AccountView from '@/views/app/AccountView.vue'
import AppView from '@/views/app/AppView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/app/',
        name: 'AppView',
        component: AppView,
        meta: { requiresAuth: true }
    },
    {
        path: '/app/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/app/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/app/account',
        name: 'AccountView',
        component: AccountView,
        meta: { requiresAuth: true }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // TODO Check if logged in
        // next({ name: "LoginView" });
        next();
    }
    else {
        next();
    }
});

export default router
