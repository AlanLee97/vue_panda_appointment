<template>
	<div>

		<div>发布约拍页面</div>

		<el-row>
			<el-col :span="4"><pre> </pre></el-col>
			<el-col :span="16">
				<div class="al-box-shadow-radius al-p-20px al-m-20px">
					<div class="al-box-bg-fcfcfc al-p-20px m-20px">
						<span class="al-d-il-blk">标题</span>
						<el-input v-model="sendData.title"></el-input>
					</div>

					<div class="al-box-bg-fcfcfc al-p-20px al-m-20px">
						说明
						<el-input v-model="sendData.content"></el-input>
					</div>

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

					<el-button type="primary" @click="sendRequest">发表</el-button>


				</div>



			</el-col>
			<el-col :span="4"><pre> </pre></el-col>
		</el-row>


	</div>
</template>

<script>
    import {request} from "@/util/network/request";

    export default {
        name: "Publish",
	    data(){
            return {
                url:'http://localhost:8083/testoss/uploadImg',
                result:'',
                imageUrl: '',
	            sendData:{
                    uid:1,
                    content :'',
                    imgUrl:''
	            }
            }
	    },
	    methods:{
            sendRequest:function() {
                console.log(this.sendData);
                request({
                    method:'post',
	                url:'/works/add',
	                headers:{
	                    "content-type": "application/x-www-form-urlencoded"
	                },
                    data: this.qsParam(this.sendData),

                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.sendData.imgUrl = res;
                console.log(res);
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

</style>
