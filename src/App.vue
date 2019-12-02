<template>
    <div id="app">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1" @click="goPage('/index')">主页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" >消息中心</el-menu-item>

            <el-menu-item index="4" @click="goPage('/login')">登录</el-menu-item>
            <el-menu-item index="5" @click="goPage('/register')">注册</el-menu-item>
            <el-menu-item index="6" @click="goPage('/profile')">个人主页</el-menu-item>

            <el-menu-item index="7" @click="goPage('/test')">测试</el-menu-item>

        </el-menu>

        <router-view>

        </router-view>
    </div>
</template>

<script>
    // import Index from './components/Index.vue'

    export default {
        name: 'app',
        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            }
        }

    }
</script>

<style>
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

    .show-border{
        border: solid 1px red;
    }

    .box-radius{
        border-radius: 20px;
    }

    .box-shadow{
        box-shadow: 3px 5px 16px #e4e4e4;
    }

    .box-bg-white{
        background-color: #ffffff;
    }

    .box-bg-fcfcfc{
        background-color: #fcfcfc;
    }

    .p-10px{
        padding: 10px;
    }

    .m-10px{
        margin: 10px;
    }

    .m-top-60px{
        margin-top: 60px;
    }

    .p-20px{
        padding: 20px;
    }

    .m-20px{
        margin: 20px;
    }

    .width-50{
        width: 50%;
    }

    .width-60{
        width: 60%;
    }

    .width-80{
        width: 80%;
    }

    .d-inline-block{
        display: inline-block;
    }

    .float-left{
        float: left;
    }

</style>
