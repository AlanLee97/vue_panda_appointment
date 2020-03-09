<template>
    <div class="al-bg-color-white
            al-width-100
            al-z-index-9999"
         :class="getShadow" >

        <el-row class="al-flex-container-align-item-stretch" >
            <el-col :span="5" class="al-flex-container-center-vh">
                <div class="">
                    <img src="../../assets/pandalogo.png" alt="">
                </div>
            </el-col>

            <el-col :span="15" class="al-flex-container-center-v">
                <div class=" ">
                    <el-menu
                             class="el-menu"
                             mode="horizontal"
                             active-text-color="#000000"
                             :default-active="activeNav"
                             @select="handleSelect">
                        <el-menu-item
                                index="1"
                                @click="goPage('/index')">
                            <span class="al-title-h2">
                                主页
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="2"
                                @click="goPage('/appointment/all')">
                            <span class="al-title-h2">
                                约拍
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="3"
                                @click="goPage('/works/all')">
                            <span class="al-title-h2">
                                动态
                            </span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>

            <el-col :span="4" class="" >
                <div class="al-flex-container-center-vh al-height-100">
                    <div class="" v-if="isLogin != true">
                        <a href="javascript:;"
                                @click="goPage('/register')"
                                class="al-p-10px">注册</a>
                                /
                        <a href="javascript:;"
                                @click="goPage('/login')"
                                class="al-p-10px">登录</a>
                    </div>

                    <div class="al-flex-container-center-vh" v-else>
                        <div class="">
                            <div @click="goPage('/profile/' + localUserInfo.id)">
                                <img
                                        class="al-box-radius-50 al-box-size-40px al-cursor-pointer"
                                        :src="this.localUserInfo.headPortraitImg" />
                            </div>
                        </div>

                        <div>
                            <span
                                    @click="goPage('/profile/' + localUserInfo.id)"
                                    class="al-p-10px al-cursor-pointer">
                                {{localUserInfo.username}}
                            </span>
                        </div>

                        <div>
                            <span> | </span>
                        </div>

                        <div class="">
                            <div class="al-p-10px al-cursor-pointer" @click="logout()">退出</div>

                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>

    </div>

</template>

<script>
    import store from "@/store";
    import ALImage from "@/components/public/ALImage";

    export default {
        name: "HeaderTop",
        components: {ALImage},
        props:{
            enableShadow: Boolean,
            logoUrl: String
        },

        data(){
            return {
                isLogin:false,
                activeNav: '',
                localUserInfo: {},
            }
        },
        mounted(){
            this.activeNav = sessionStorage.getItem("activeNav");
            this.getLocalUserInfo();
        },
        computed:{
            getShadow: function () {
                return this.enableShadow? 'al-box-shadow' : '';
            },
        },



        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            handleSelect(key, keyPath) {
                console.log('handleSelect==============');
                console.log(key, keyPath);
                this.activeNav = keyPath[0];
                sessionStorage.setItem("activeNav",keyPath[0]);

            },

            logout() {

                localStorage.setItem("isLogin", "no");
                localStorage.removeItem("userinfo");
                this.localUserInfo = {};

                this.isLogin = false;
                this.$store.commit("setLoginState", false);

                this.goPage('/index')
            },

            getLocalUserInfo() {

                this.localUserInfo = JSON.parse(localStorage.getItem("userinfo"));
                //this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
                //console.log("=========HeaderTop：登录状态" + store.state.storeIsLogin);
                this.isLogin = store.state.storeIsLogin;
                // console.log(this.localUserInfo);
                // console.log(this.isLogin);
            },



        }

    }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: #5f5f5f;
    }

    .el-menu{
        border-bottom: 0;
    }

    li.el-menu-item.is-active{
        border-bottom: 0;
    }
</style>
