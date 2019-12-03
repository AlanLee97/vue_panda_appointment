<template>
    <div>
        <h4>个人资料页</h4>


        <el-row>
            <el-col :span="4">
                <pre> </pre>
            </el-col>

            <el-col :span="16">
                <div class="box-shadow-radius-bgwhite-p20-m20">
                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>头像</span>
                        <el-avatar :src="userinfo.headPortraitImg"></el-avatar>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>用户名</span>
                        <span>{{userinfo.username}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>昵称</span>
                        <span>{{userinfo.nickname}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>性别</span>
                        <span>{{userinfo.gender}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>年龄</span>
                        <span>{{userinfo.age}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>手机号</span>
                        <span>{{userinfo.nickname}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>身份</span>
                        <span>{{userinfo.identity}}</span>
                    </div>

                    <div class="m-20px p-20px box-bg-fcfcfc">
                        <span>认证</span>
                        <span>{{userinfo.isAuthenticated}}</span>
                    </div>
                </div>
            </el-col>

            <el-col :span="4">
                <pre> </pre>
            </el-col>
        </el-row>




    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data(){
            return{
                userinfo:{

                }
            }
        },
        methods:{

        },
        mounted:function () {
            this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
        }
    }
</script>

<style scoped>

</style>