<template>
    <div>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo "
                 mode="horizontal"
                 @select="handleSelect">
            <el-menu-item index="1" @click="goPage('/index')">主页</el-menu-item>
            <el-menu-item index="2" @click="goPage('/appointment/all')">约拍</el-menu-item>
            <el-menu-item index="3" @click="goPage('/works/all')">动态</el-menu-item>


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
                        <span @click="goPage('/profile')">
                            <el-image
                                    class="al-box-radius-50 al-box-size-40px"
                                    :src="sessionUserInfo.headPortraitImg" />
                            <span class="al-p-10px">
                                {{sessionUserInfo.username}}
                            </span>
                        </span>

                        <span class="">|</span>

                        <span class="al-p-10px" @click="logout()">
                            退出
                        </span>
                    </div>
                </el-menu-item>

            </div>

        </el-menu>


    </div>

</template>

<script>
    export default {
        name: "Header",
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
        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getSessionUserInfo:function () {

                this.sessionUserInfo = JSON.parse(sessionStorage.getItem("userinfo"));
                // this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
                this.isLogin = this.$store.state.isLogin;
                console.log(this.sessionUserInfo);
                console.log(this.isLogin);
            },
            logout:function () {

                sessionStorage.clear();
                this.sessionUserInfo = {};

                this.isLogin = false;
                this.$store.commit("setLoginState", false);
            }
        }

    }
</script>

<style scoped>

</style>
