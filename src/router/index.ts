import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/Home.vue'
import Accounts from '@/views/Accounts.vue'
import Statistics from '@/views/Statistics.vue'
import Advanced from '@/views/Advanced.vue'
import Me from '@/views/Me.vue'
import NotFound from '@/views/NotFound.vue'
import Calculator from '@/components/Calculator.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/HomePage'
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/Accounts',
        component: Accounts
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/advanced',
        component: Advanced
    },
    {
        path: '/me',
        component: Me
    },
    {
        path: '/calculator',
        component: Calculator
    },
    {
        path: '*',
        component: NotFound
    }
    /* {
         path: '/',
         name: 'Home',
         component: Home
     },
     {
         path: '/about',
         name: 'About',
         // route level code-splitting
         // this generates a separate chunk (about.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
     }*/
];

const router = new VueRouter({
    routes
});

export default router;
