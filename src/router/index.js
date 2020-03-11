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
import Spot from "@/pages/spot/Spot";
import Activity from "@/pages/activity/Activity";


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
        component:index,
        meta: {
            title: "熊猫约拍"
        }
    },
    {
        path:'/login',
        component:login,
        meta: {
            title: "登录"
        }
    },
    {
        path:'/register',
        component:register,
        meta: {
            title: "注册"
        }
    },
    {
        path:'/profile/:uid',
        component:profile,
        props: true,
        meta: {
            requireAuth: true,
            title: "个人主页"
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
        component:addAppointment,
        meta: {
            title: "发布约拍"
        }
    },
    {
        path:'/appointment/all',
        component:allAppointment,
        meta: {
            title: "约拍"
        }
    },
    {
        path:'/appointment/detail/:aptId',
        component:appointmentDetail,
        props: true,
        meta: {
            title: "约拍详情"
        }
    },
    {
        path:'/works/all',
        component:allWorks,
        meta: {
            title: "作品"
        }
    },
    {
        path:'/works/add',
        component:addWorks,
        meta: {
            title: "发布作品"
        }
    },
    {
        path:'/works/detail/:worksId',
        component:WorksDetail,
        props: true,
        meta: {
            title: "作品详情"
        }
    },
    {
        path:'/spot/all',
        component: Spot,
        meta: {
            title: "打卡点"
        }
    },
    {
        path:'/activity/all',
        component: Activity,
        meta: {
            title: "活动"
        }
    },
    {
        path:'/test/ui',
        component:testUI
    },
    {
        path:'/test/style',
        component: TestStyle
    }
];
const router = new VueRouter({
    routes,
    mode:'history'
});

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
};


router.beforeEach((to, from, next) => {
    // console.log("=============== beforeEach ==============");
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();

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

