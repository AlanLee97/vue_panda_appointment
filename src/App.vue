<template>
    <div id="app">

        <router-view>

        </router-view>

    </div>
</template>

<script>
    // import Index from './components/Index.vue'

    import {request} from "@/util/network/request";
    import store from "@/store";

    export default {
        name: 'app',
        component: {},

        data(){
            return {
                globalLocalUserInfo:{},
                isLogin:false,
            }
        },
        created() {
            console.log(localStorage.getItem("isLogin"));

            this.getLocalUserInfo();

            if ("yes" === localStorage.getItem("isLogin")){
                this.isLogin = true;
                this.$store.commit("setLoginState", true);
                this.$store.commit("setStoreUserInfo", this.globalLocalUserInfo);

            }



        },
        methods: {
            getLocalUserInfo:function () {
                this.globalLocalUserInfo = JSON.parse(localStorage.getItem("userinfo"));
            },

        }

    }
</script>

<style>
    @import "assets/css/al-css.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        line-height: 1.8em;
        /*margin-top: 60px;*/
        /*background-color: #fcfcfc;*/
    }

    *{
        margin: 0;
        padding: 0;
    }

    html, body{
        background-color: #fcfcfc;
        height: 100%;
    }


    .test{
        right: 0;
    }



</style>
