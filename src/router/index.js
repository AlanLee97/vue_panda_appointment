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
import allWorks from '../pages/works/allWorks'
import message from '../pages/user/Message'
import addWorks from '../pages/works/AddWorks'
import testUI from '../pages/test/TestUI'


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
        component:profile
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
        path:'/addAppointment',
        component:addAppointment
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
        path:'/test/ui',
        component:testUI
    }
];
const router = new VueRouter({
    routes,
    mode:'history'
});

//3.将路由对象传入到Vue实例
export default router

