<template class="">
    <div class="login">

        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
            <el-col :span="8">
                <div class="al-box-shadow-radius al-bg-color-white  al-m-20px al-p-20px">
                    <div class="grid-content bg-purple-light">

                        <center>
                            <div>
                                <img src="../../assets/pandalogo.png">
                                <h1>登录</h1>
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

                                <el-form-item label="密码" prop="pass">
                                    <el-input class="al-float-left al-width-60" type="password"
                                              v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码">
                                    </el-input>
                                </el-form-item>

                                <!--            <el-form-item label="确认密码" prop="checkPass">-->
                                <!--                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
                                <!--            </el-form-item>-->

                                <div class="">
                                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </div>

                            </el-form>



                        </center>
                    </div>


                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
        </el-row>



    </div>
</template>


<script>
    import {request} from "@/util/network/request";

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
                            url: '/user/login',
                            data: this.qsParam(data),
                            headers:{
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(res => {
                            console.log(res);
                            res = res.data;
                            console.log(res);
                            if (res.code == 200){
                                this.$message('登录成功');
                                sessionStorage.setItem("userinfo", JSON.stringify(res.data));
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

<style>
    .page{
        background-color: #000000;
    }

</style>
