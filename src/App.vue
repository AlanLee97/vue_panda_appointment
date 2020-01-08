<template>
    <div id="app">

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
            getSessionUserInfo:function () {

                this.sessionUserInfo = JSON.parse(sessionStorage.getItem("userinfo"));
                this.isLogin = JSON.parse(sessionStorage.getItem("isLogin"));
                console.log(this.sessionUserInfo);
                console.log(this.isLogin);
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
