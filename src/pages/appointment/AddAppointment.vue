<template>
    <div class="bg-img">
        <!--        <HeaderTop :enable-shadow="true" />-->

        <el-page-header
                @back="goPage('/appointment/all')"
                content="发布约拍"
                class="al-p-20px">

        </el-page-header>

        <el-row class="al-m-top-10px">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <pre> </pre>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="al-box-pretty ">
                    <el-form :model="apt"
                             :rules="rules"
                             ref="apt"
                             label-width="100px"
                             class="al-m-20px">

                        <el-form-item label="标题" prop="title">
                            <el-input v-model="apt.title" placeholder="请简述你约拍主题" type="textarea"></el-input>
                        </el-form-item>

                        <el-form-item label="约拍要求" prop="ask">
                            <el-input type="textarea" v-model="apt.ask"
                                      placeholder="例如摄影师的性别、年龄、摄影特长或者对模特的身高、年龄、风格、着装等"></el-input>
                        </el-form-item>

                        <el-form-item label="地点" prop="apt_site">
                            <el-input v-model="apt.apt_site" placeholder="请输入你的约拍地点（尽量详细，建议添加地标建筑进行描述）"
                                      type="textarea"></el-input>
                        </el-form-item>

                        <el-form-item label="约拍类型" prop="apt_type" align="left">
                            <el-select v-model="apt.apt_type" placeholder="请选择约拍类型">
                                <el-option label="普通拍照" value="1"></el-option>
                                <el-option label="毕业照" value="2"></el-option>
                                <el-option label="婚纱照" value="3"></el-option>
                                <el-option label="电商模特" value="4"></el-option>
                            </el-select>
                        </el-form-item>

                        {{apt.apt_type}}


                        <el-form-item label="开始时间" prop="apt_date">
                            <!--                            <el-input v-model="apt.apt_date" placeholder="请输入你的约拍时间（例如：2019年12月31日早上8点）" type="textarea"></el-input>-->

                            <div class="block">
                                <el-date-picker
                                        type="datetime"
                                        v-model="apt.apt_date"
                                        placeholder="选择日期"
                                        format="yyyy-MM-dd HH:mm">
                                </el-date-picker>
                            </div>
                        </el-form-item>


                        <el-form-item label="费用" prop="apt_fee">
                            <el-input v-model="apt.apt_fee"
                                      class="al-width-60"
                                      placeholder="请输入你的费用（例如：200，100-200，详谈等）"></el-input>
                        </el-form-item>

                        <el-form-item label="上传图片" prop="apt_image">

                            <div class="al-box-bg-fcfcfc al-p-20px al-box-radius">
                                <el-upload
                                        ref="uploadImg"
                                        :data="uploadData"
                                        :action="uploadImgUrl"
                                        :on-success="uploadSuccess"
                                        list-type="picture-card"
                                        multiple
                                        :auto-upload="false">
                                    <i slot="default" class="el-icon-plus"></i>
                                    <div slot="file" slot-scope="{file}">
                                        <img
                                                class="el-upload-list__item-thumbnail"
                                                :src="file.url" alt=""
                                        >
                                        <span class="el-upload-list__item-actions">
                                        <span
                                                class="el-upload-list__item-preview"
                                                @click="handlePictureCardPreview(file)"
                                        >
                                          <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleDownload(file)"
                                        >
                                          <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                                v-if="!disabled"
                                                class="el-upload-list__item-delete"
                                                @click="handleRemove(file)"
                                        >
                                          <i class="el-icon-delete"></i>
                                        </span>
                                      </span>
                                    </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>

                            </div>

                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary"
                                       @click="submitForm('apt')">
                                立即发布
                            </el-button>
                            <el-button @click="resetForm('apt')">
                                清空
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <pre> </pre>
                </div>
            </el-col>
        </el-row>

    </div>
</template>


<script>
    import {request} from "@/util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import {APPOINTMENT_ADD} from "@/util/network/api/appointment/api-appointment";
    import {GMTToStr2} from "@/util/time/TimeUtils";

    export default {
        components: {HeaderTop},
        data() {
            return {
                value1: '',
                uploadData: {//上传图片时需要用户id
                    uid: this.$store.state.storeUserInfo.id
                },
                uploadImgUrl: this.createUrl('/upload/return-url'),  //图片上传的地址

                dialogImageUrl: '',
                dialogVisible: false,
                apt: {
                    userId: this.$store.state.storeUserInfo.id,
                    title: '',
                    ask: '',
                    apt_type: '',
                    apt_site: '',
                    apt_date: null,
                    apt_fee: 0,
                    apt_image: ''
                },
                rules: {
                    title: [
                        {type: 'string', required: true, message: '请输入标题', trigger: 'change'}
                    ],
                    apt_type: [
                        {type: 'string', required: true, message: '请选择类型', trigger: 'change'}
                    ],
                    apt_site: [
                        {type: 'string', required: true, message: '请输入地点', trigger: 'change'}
                    ],
                    apt_date: [
                        {type: 'date', required: true, message: '请输入时间', trigger: 'change'}
                    ],
                    ask: [
                        {type: 'string', required: true, message: '请输入要求', trigger: 'change'}
                    ],
                }
            };
        },


        mounted: function () {

            //上传图片时需要用户id


        },

        methods: {
            goPage(path) {
                this.gotoPage(path);
            },

            //开始图片上传
            startUpload: function () {
                this.$refs.uploadImg.submit();
            },

            //图片上传成功后的回调函数
            uploadSuccess(res, file, fileList) {
                console.log(res);
                this.apt.apt_image = res;


                console.log("图片上传成功");

                //发送发表约拍的请求
                this.send();

            },


            //发送发表约拍的请求
            send() {
                this.apt.apt_date = GMTToStr2(this.apt.apt_date);
                console.log(this.apt);

                request({
                    method:'post',
                    url: this.createUrl('/appointment/add'),
                    data:this.qsParam(this.apt),
                    headers:{
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }).then(res => {
                    console.log(res);
                    this.$message.success("发表成功");
                    this.goPage('/appointment/all');
                }).catch(err => {
                    console.log(err);
                    this.$message.error("发表失败");
                });



            },

            //提交表单
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {

                    //验证表单是否有效
                    if (valid) {
                        //开始上传图片
                        this.startUpload();


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            GMTToStr(time) {
                GMTToStr2(time);
            }


        },

        watch: {}
    }
</script>

<style>

    .bg-img {
        background-image: url("https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/assert/%E6%8B%8D%E7%85%A7.png");
        background-repeat: no-repeat;
        background-size: 25%;
    }
</style>
