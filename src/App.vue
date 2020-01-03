<template>
    <div id="app">

        <el-menu :default-active="activeIndex"
                 class="el-menu-demo "
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1" @click="goPage('/index')">主页</el-menu-item>

            <el-menu-item index="2" @click="goPage('/addAppointment')">约拍</el-menu-item>

            <el-menu-item index="3" @click="goPage('/works/all')">动态</el-menu-item>

<!--            <el-menu-item index="4" @click="goPage('/message')">消息中心</el-menu-item>-->

<!--            <el-menu-item index="4" @click="goPage('/login')">登录</el-menu-item>-->
<!--            <el-menu-item index="5" @click="goPage('/register')">注册</el-menu-item>-->
            <el-menu-item index="4" @click="goPage('/profile')">个人主页</el-menu-item>
            <el-menu-item index="5" @click="goPage('/works/add')">发表作品</el-menu-item>


            <div class="al-position-abs  al-right-0 ">
                <el-menu-item >
                    <div v-if="isLogin !== true">
                        <span
                                @click="goPage('/register')"
                                class="al-p-10px">注册</span>
                        /
                        <span
                                @click="goPage('/login')"
                                class="al-p-10px">登录</span>
                    </div>

                    <div v-else>
                        <el-image
                                @click="goPage('/profile')"
                                class="al-box-radius-50 al-box-size-40px"
                                  :src="sessionUserInfo.headPortraitImg" />
                        <span class="al-p-10px">
                            {{sessionUserInfo.username}}
                        </span>

                        <span class="">|</span>

                        <span class="al-p-10px" @click="logout()">
                            退出
                        </span>
                    </div>
                </el-menu-item>

            </div>

        </el-menu>




        <router-view>

        </router-view>
    </div>
</template>

<script>
    // import Index from './components/Index.vue'

    export default {
        name: 'app',
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
                sessionUserInfo:{},
                isLogin:false,
            }
        },
        mounted(){
            this.getSessionUserInfo();
        },
        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getSessionUserInfo:function () {

                this.sessionUserInfo = JSON.parse(sessionStorage.getItem("userinfo"));
                this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
                console.log(this.sessionUserInfo);
                console.log(this.isLogin);
            },
            logout:function () {

                sessionStorage.clear();
                this.sessionUserInfo = {};

                this.isLogin = false;
            }
        }

    }
</script>

<style>
    @import "assets/css/al-css.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
        /*background-color: #fcfcfc;*/
    }

    *{
        margin: 0;
        padding: 0;
    }

    html{
        background-color: #fcfcfc;
    }

    .test{
        right: 0;
    }



</style>
