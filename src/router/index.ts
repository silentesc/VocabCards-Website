import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AccountView from '@/views/AccountView.vue'
import AppView from '@/views/app/AppView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView
    },
    {
        path: '/account',
        name: 'AccountView',
        component: AccountView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/app',
        name: 'AppView',
        component: AppView,
        meta: {
            requiresAuth: true
        }
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
        next({ name: "LoginView" });
    }
    else {
        next();
    }
});

export default router
