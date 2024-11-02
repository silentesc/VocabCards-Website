import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AccountView from '@/views/AccountView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import HomeView from '@/views/HomeView.vue'
import CollectionsView from '@/views/app/collections/CollectionsView.vue'
import CollectionView from '@/views/app/collections/CollectionView.vue'
import LearnView from '@/views/app/learn/LearnView.vue'
import SettingsView from '@/views/app/settings/SettingsView.vue'
import VocabularyItemView from '@/views/app/collections/VocabularyItemView.vue'

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
        path: '/app/collections/:collectionId/vocabulary-items',
        name: 'CollectionView',
        component: CollectionView,
        meta: { requiresAuth: true }
    },
    {
        path: '/app/collections/:collectionId/vocabulary-items/:vocabularyItemId',
        name: 'VocabularyItemView',
        component: VocabularyItemView,
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
