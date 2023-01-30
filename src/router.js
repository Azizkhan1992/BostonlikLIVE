import Vue from "vue";
import VueRouter from "vue-router";

// import TokenService from "./services/TokenService";


import MainDashboardLayout from '@/components/admin/MainDashboardLayout.vue'


Vue.use(VueRouter);

const routes = [
            {
                path: '/',
                component: MainDashboardLayout,
                children: [
                    {
                        path: '/dashboard',
                        name: 'dashboard-app',
                        component: ()=> import('./views/Dashboard.vue'),
                    }
                ]
            },
            {
                path: '/my-profile',
                name: 'profile',
                component: ()=> import('./views/profile/MyProfile.vue'),
                meta: {layout: 'MainDashboard'}

            },
            {
                path: '/settings',
                name: 'settings',
                component: ()=> import('./views/settings-live/ProfileSettings.vue'),
                meta: { layout: 'MainDashboard'},
            },
            {
                path: '/user-settings',
                name: 'user-settings',
                component: ()=> import('./views/settings-live/UserSettings.vue'),
                meta: { layout: 'MainDashboard'}
            },
            {
                path: '/user-setting-item/:id?',
                name: 'user-setting-item',
                component: ()=> import('./views/settings-live/UserSettingItem.vue'),
                meta: { layout: 'MainDashboard'}
            },
            {
                path: '/add-new-user',
                name: 'add-user',
                component: ()=> import('./views/settings-live/AddNewUser.vue'),
                meta: { layout: 'MainDashboard'}
            },
            
            {
                path: '/opened-requests',

                name: 'requests',
                component: ()=> import('./views/requests/RequestBlog.vue'),
                meta: {
                    layout: 'MainDashboard'
                },
                
            },
            {
                path: '/request-blog-item/:id?',
                name: 'request-blog-item',
                component: ()=> import('./views/requests/requestItems/RequestBlogItem.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },
            {
                path: '/closed-requests',
                name: 'closed-requests',
                component: ()=> import('./views/requests/ClosedRequests.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },
            {
                path: '/closed-blog-item/:id?',
                name: 'closed-blog-item',
                component: ()=> import('./views/requests/requestItems/ClosedBlogItem.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },
            {
                path: '/sentenses/:id?',
                name: 'sentenses',
                component: ()=> import('./views/sentenses/Sentenses.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },
            {
                path: '/sentenses-blog-item/:id',
                name: 'sentenses-blog-item',
                component: ()=> import('./views/sentenses/SentensesBlogItem.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },

            {
                path: '/statistics',
                name: 'statistics',
                component: ()=> import('./views/statistics/Statistics.vue'),
                meta: {
                    layout: 'MainDashboard'
                }
            },

    {
        path: '/login',
        name: 'login',
        component: ()=> import('./views/reglog/Login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});



// router.beforeEach((to,from,next)=>{
//     if(TokenService.getToken()){
//         if(to.path === '/login' || to.path === '/register'){
//             next({path: '/dashboard'})
//         }
//         else next();
//     }else{
//         if(
//             to.path === "/login"
//         ){
//             next();
//         }
//         else{
//             next('/login')
//         }
//     }
// })


export default router;