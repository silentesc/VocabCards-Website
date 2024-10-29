import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AccountView from '@/views/AccountView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import HomeView from '@/views/HomeView.vue'
import CollectionsView from '@/views/app/CollectionsView.vue'
import CollectionView from '@/views/app/CollectionView.vue'
import LearnView from '@/views/app/LearnView.vue'
import SettingsView from '@/views/app/SettingsView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/app/collections',
        name: 'CollectionsView',
        component: CollectionsView,
        meta: { requiresAuth: true }
    },
    {
        path: '/app/collections/:id',
        name: 'CollectionView',
        component: CollectionView,
        meta: { requiresAuth: true }
    },
    {
        path: '/app/learn',
        name: 'LearnView',
        component: LearnView,
        meta: { requiresAuth: true }
    },
    {
        path: '/app/settings',
        name: 'SettingsView',
        component: SettingsView,
        meta: { requiresAuth: true }
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
