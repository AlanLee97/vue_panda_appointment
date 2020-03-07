<template class="">
    <el-container class="al-width-100 page-login" direction="vertical">


        <el-row class="" style="margin: 10% 0 10% 0">
            <el-col :span="14" class="">
                <pre> </pre>
            </el-col>
            <el-col :span="8" class="-border-blue">
                <div style="width:360px" class="
             al-z-index-99
             al-p-20px
             al-box-shadow-radius
             al-ma-center">
                    <div class="al-flex-container-center-h">
                        <img src="../../assets/pandalogo.png">

                    </div>

                    <div>
                        <div class="al-title-h1  al-flex-container-center-h">熊猫约拍</div>
                    </div>
                    <br>
                    <el-form
                            :model="ruleForm"
                            status-icon
                            :rules="rules"
                            ref="ruleForm"
                            label-width="140px"
                            class="demo-ruleForm al-m-top-60px">
                        <el-form-item label="帐号" class="">
                            <el-input class="al-float-left al-width-60" v-model="ruleForm.username" placeholder="请输入账号">

                            </el-input>
                        </el-form-item>

                        <el-form-item  label="密码" prop="pass">
                            <el-input class="al-float-left al-width-60" type="password"
                                      v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码">
                            </el-input>
                        </el-form-item>

                        <!--            <el-form-item label="确认密码" prop="checkPass">-->
                        <!--                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
                        <!--            </el-form-item>-->

                        <div class="al-flex-container-center-h">
                            <div class="al-d-il-blk al-ma-center">
                                <el-button class="" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                                <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </div>
                        </div>

                    </el-form>
                </div>
            </el-col>
            <el-col :span="2" class=""><div></div></el-col>
        </el-row>

    </el-container>
</template>


<script>
    import {request} from "@/util/network/request";
    import {USER_LOGIN} from "@/util/network/api/user/api-user";

    export default {

        name:'login',
        data() {

            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };

            return {
                bg: 'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/isux/20171122191603_896cd9.jpg',

                ruleForm: {
                    username:'',
                    password: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    // checkPass: [
                    //     { validator: validatePass2, trigger: 'blur' }
                    // ],
                }
            };
        },
        methods: {
            logoUrl() {
              return '../../assets/panda.png'
            },

            goPage:function(path){
                this.gotoPage(path);
            },

            //发送请求
            sendRequest:function(path, data){
                let url = this.createUrl(path);
                let headers = {
                    // 'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                let res = this.request('post', url, data, headers);
                console.log(res);
            },

            submitForm(formName) {
                let data = {
                  username : this.ruleForm.username,
                  password : this.ruleForm.password
                };

                console.log(data);

                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        // this.sendRequest('/user/login', data);

                        request({
                            method:'post',
                            url: USER_LOGIN,
                            data: this.qsParam(data),
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(res => {
                            console.log(res);
                            res = res.data;
                            console.log(res);
                            if (res.code == 200){

                                console.log("登录页面：");
                                console.log(res.data);

                                this.$message('登录成功');
                                localStorage.setItem("userinfo", JSON.stringify(res.data));
                                localStorage.setItem("isLogin", "yes");

                                this.$store.commit("setLoginState", true);
                                console.log('userinfo');
                                this.goPage('/profile');
                            }else {
                                this.$message('登录失败');
                            }
                        }).catch(err => {
                            console.log(err);
                        })

                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .page-login{
        /*background-color: #000000;*/
        background-image: url("https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/isux/VVCmQ2CrXWhP8QyGND5lps2nD6BSLXBcNXhUA3HANRt.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        background-attachment: fixed;
    }







</style>
