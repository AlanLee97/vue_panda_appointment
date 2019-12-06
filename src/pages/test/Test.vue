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
                                    action="http://localhost:8083/testoss/upload-one"
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


            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                <el-col :span="16">
                    <div class="box-shadow box-bg-white box-radius m-20px p-20px">
                        <h3>测试文件上传2</h3>

                        <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                            <el-upload
                                    action="#"
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
                        <h3>多文件上传</h3>

                        <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                            <el-upload
                                    :action="url"
                                    list-type="picture-card"
                                    multiple
                                    :on-success="handleAvatarSuccess"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>

                        </div>
                    </div>
                </el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
            </el-row>

        </div>


        <div>

            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                <el-col :span="16">
                    <div class="box-shadow box-bg-white box-radius m-20px p-20px">
                        <h3>测试文件手动上传</h3>

                        <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                            <el-upload
                                    ref="upload2"
                                    :action="url"
                                    list-type="picture-card"
                                    multiple
                                    :on-success="uploadSuccess"
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

                            <br><br>

                            <el-button type="primary" @click="startUpload()">上传</el-button>

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
                dialogImageUrl: '',
                dialogVisible: false,
                url:'http://localhost:8083/test/upload/return-id',
                // url:'https://jsonplaceholder.typicode.com/posts/',
                result:'',
                imageUrl: '',
                imgId:'',
                disabled:true
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


            handleAvatarSuccess:function(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                console.log(res);
            },
            beforeAvatarUpload:function(file) {
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },

            submitUpload:function() {
                this.$refs.upload.submit();
            },





            handleRemove:function(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview:function(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },

            startUpload:function () {
                this.$refs.upload2.submit();
            },

            uploadSuccess:function(res, file, fileList){
                console.log(res);
                this.imgId = this.imgId.concat(res + ",");

                console.log(this.imgId);

                console.log(file);
                console.log(fileList);
            },
        }
    }
</script>

<style scoped>

</style>