import Vue from 'vue'
import VueRouter from 'vue-router'

//导入页面
import test from '../pages/test/Test'
import index from '../pages/index/Index'
import login from '../pages/user/Login'
import register from '../pages/user/Register'
import profile from '../pages/user/Profile'
import userinfo from '../pages/user/UserInfo'
import addAppointment from '../pages/appointment/AddAppointment'
import allAppointment from '../pages/appointment/AllAppointment'
import appointmentDetail from '../pages/appointment/AppointmentDetail'
import allWorks from '../pages/works/AllWorks'
import addWorks from '../pages/works/AddWorks'
import message from '../pages/user/Message'
import testUI from '../pages/test/TestUI'
import store from "@/store";
import TestStyle from "@/pages/test/TestStyle";
import WorksDetail from "@/pages/works/WorksDetail";
import ImageWaterfall from "@/components/public/ImageWaterfall";


//1.使用插件
Vue.use(VueRouter);

//2.创建VueRouter对象
const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/test',
        component:test
    },
    {
        path:'/index',
        component:index
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/register',
        component:register
    },
    {
        path:'/profile',
        component:profile,
        meta: {
            requireAuth: true
        }
    },
    {
        path:'/userinfo',
        component:userinfo
    },
    {
        path:'/message',
        component:message
    },
    {
        path:'/appointment/add',
        component:addAppointment
    },
    {
        path:'/appointment/all',
        component:allAppointment
    },
    {
        path:'/appointment/detail/:aptId',
        component:appointmentDetail,
        props: true
    },
    {
        path:'/works/all',
        component:allWorks
    },
    {
        path:'/works/add',
        component:addWorks
    },
    {
        path:'/works/detail/:worksId',
        component:WorksDetail,
        props: true
    },
    {
        path:'/test/ui',
        component:testUI
    },
    {
        path:'/test/style',
        component: TestStyle
    },
    {
        path:'/test/waterfall',
        component: ImageWaterfall
    }
];
const router = new VueRouter({
    routes,
    mode:'history'
});


router.beforeEach((to, from, next) => {
    // console.log("=============== beforeEach ==============");
    if (to.matched.some(record => {return record.meta.requireAuth})){
        // console.log("========== 判断前：登录状态" + store.state.storeIsLogin);
        if ("no" === localStorage.getItem("isLogin")){
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }else {
            next();
        }

    }else {
        next();
    }
});

//3.将路由对象传入到Vue实例
export default router

