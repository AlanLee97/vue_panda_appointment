<template>
    <div>
        <el-row>
            <el-col :span="24" v-loading="showLoading">
                <div class="al-box-shadow-radius al-p-20px">
                    <div >
                        <span class="al-title-h3">发布我的作品</span>
                        <el-button
                                class="al-float-right"
                                type="primary"
                                   @click="sendRequest()">发布</el-button>

                    </div>

                    <div class="al-m-top-20px">
                        <el-input
                                type="textarea"
                                placeholder="请输入内容"
                                v-model="sendData.content"
                                maxlength="300"
                                show-word-limit
                                :autosize="{ minRows: 3}"
                        >
                        </el-input>
                    </div>

                    <div class="al-m-top-20px">
                        <el-upload
                                ref="upload2"
                                :action="url"
                                list-type="picture-card"
                                multiple
                                name="file"
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

                    </div>
                </div>



            </el-col>
        </el-row>


    </div>

</template>

<script>
    import {request} from "@/util/network/request";

    export default {
        name: "AddWorks",
        data() {
            return {
            	//上传图片的地址
	            url: this.createUrl('/upload/image/return-id'),
	            // url:'https://jsonplaceholder.typicode.com/posts/',

	            //要发送的数据
	            sendData: {
		            uid: 1,
		            content: '',
		            imgIds: ''
	            },

                dialogImageUrl: '',
                dialogVisible: false,

	            //保存上传后返回的图片id
                imgId: '',
                disabled: false,

	            //loading
	            showLoading:false


            }
        },

	    mounted:function(){

	    },

        methods: {
        	//页面跳转
        	goPage:function(path) {
        	    this.gotoPage(path);
	        },

	        //大小限制
            beforeAvatarUpload: function (file) {
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },

            submitUpload: function () {
                this.$refs.upload2.submit();
            },

	        //移除图片（暂未实现）
            handleRemove: function (file, fileList) {
                console.log(file, fileList);
            },

	        //图片预览
            handlePictureCardPreview: function (file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },


	        //发表按钮的点击事件
            sendRequest: function () {
        		//this.showLoading = true;
            	//图片上传
                this.submitUpload();
            },

	        //发送请求
	        startRequest:function(){
		        let userinfo = this.getUserInfo();
		        // this.sendData.uid = userinfo.id;

		        request({
			        method:'post',
			        url: '/works/add',
			        data: this.qsParam(this.sendData),
			        headers:{
				        'Content-Type': 'application/x-www-form-urlencoded'
			        }

		        }).then(res => {
			        console.log(res);
			        if (res.data.code == 200){
			        	this.$message.success("发表成功");
			        	setTimeout(function () {
							//this.showLoading = false;
					        this.goPage('/index');
				        }, 500);
			        }else {
				        this.$message.success("发表失败");
			        }
		        }).catch(err => {
			        console.log(err);
		        })
	        },

	        //图片上传成功的回调函数
            uploadSuccess: function (res, file, fileList) {
                console.log(res);
	            this.sendData.imgIds = this.imgId.concat(res + ";");
	            this.startRequest();
            },

        }


    }
</script>

<style scoped>

</style>
