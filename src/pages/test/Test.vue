<template>
    <div>
        <center>
            <h1>测试页面</h1>
            <br>
            <br>
        </center>
            <el-button type="primary" @click="sendGet('/works/get/all')">发送get请求</el-button>

            <div class="">
                <el-row>
                    <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                    <el-col :span="16">
                        <div class="box-shadow box-bg-white box-radius m-20px p-20px">
                            <h3>返回数据</h3>

                            <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                                {{result}}
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                </el-row>

            </div>



        <div class="">
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                <el-col :span="16">
                    <div class="box-shadow box-bg-white box-radius m-20px p-20px">
                        <h3>测试文件上传</h3>

                        <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                            <el-upload
                                    class="avatar-uploader"
                                    :action="url"
                                    name="file"
                                    :show-file-list="false"

                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus el-upload avatar-uploader-icon"></i>

                            </el-upload>

                        </div>
                    </div>
                </el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
            </el-row>

        </div>







    </div>
</template>

<script>

    import {request} from '../../util/network/request';

    export default {
        name: "Test",
        data:function(){
            return {
                url:'http://localhost:8083/testoss/uploadFile',
                result:'',
                imageUrl: ''
            }
        },
        methods:{
            sendGet:function (path) {
                request({
                    url:path
                }).then(res => {
                    this.result = res;
                    console.log(res);
                    this.result = res.data.data;
                    console.log(this.result);

                }).catch(err => {
                    console.log(err);
                })
            },


            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isPNG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isPNG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isPNG && isLt2M;
            },

            submitUpload() {
                this.$refs.upload.submit();
            },
        }
    }
</script>

<style scoped>

/*文件上传样式*/
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

</style>