<template>
    <div class="al-bg-color-white
            al-width-100
            al-z-index-9999"
         :class="getShadow" >

        <el-row class="al-flex-container-height-sub-el-match-parent" >
            <el-col :span="5" class="al-flex-container-center-vh">
                <div class="">
                    <img src="../../assets/pandalogo.png" alt="">
                </div>
            </el-col>

            <el-col :span="15" class="al-flex-container-center-v">
                <div class=" ">
                    <el-menu :default-active="activeIndex"
                             class="el-menu"
                             mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="1" @click="goPage('/index')">
                            <span class="al-title-h2">
                                主页
                            </span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="goPage('/appointment/all')">
                            <span class="al-title-h2">
                                约拍
                            </span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="goPage('/works/all')">
                            <span class="al-title-h2">
                                动态
                            </span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>

            <el-col :span="4" class="" >
                <div class="al-flex-container-center-vh al-height-100">
                    <div class="" v-if="isLogin !== true">
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
                            <a href="javascript:;" @click="goPage('/profile')">
                                <el-image
                                        class="al-box-radius-50 al-box-size-40px "
                                        :src="sessionUserInfo.headPortraitImg" />
                            </a>
                        </div>

                        <div>
                            <span class="al-p-10px ">
                                {{sessionUserInfo.username}}
                            </span>
                        </div>

                        <div>
                            <span> | </span>
                        </div>

                        <div class="">
                            <a href="javascript:;" class="al-p-10px" @click="logout()">退出</a>

                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: "HeaderTop",
        props:{
            enableShadow: Boolean,
            logoUrl: String
        },

        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
                isLogin:false,
            }
        },
        created(){
            this.getSessionUserInfo();
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
            },
            getSessionUserInfo:function () {

                this.sessionUserInfo = JSON.parse(localStorage.getItem("userinfo"));
                // this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
                this.isLogin = this.$store.state.isLogin;
                console.log(this.sessionUserInfo);
                console.log(this.isLogin);
            },
            logout:function () {

                localStorage.clear();
                this.sessionUserInfo = {};

                this.isLogin = false;
                this.$store.commit("setLoginState", false);
            },
            getLogo(url='../../assets/pandalogo.png') {
                console.log(url);
                return url;
            }
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
</style>
