<template>
    <div class="main_content">
        <div class="page">
            <el-row>
                <el-col :span="0"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
                <el-col :span="20"><el-form :model="apt" :rules="rules" ref="apt" label-width="100px" class="demo-apt">

                    <el-form-item align="left"><h1>发布约拍</h1></el-form-item>

                    <el-form-item label="标题" prop="title">
                        <el-input v-model="apt.title" placeholder="请简述你约拍主题" type="textarea"></el-input>
                    </el-form-item>

                    <el-form-item label="约拍类型" prop="apt_type" align="left">
                        <el-select v-model="apt.apt_type" placeholder="请选择约拍类型">
                            <el-option label="毕业照" value="graduatePhotograph"></el-option>
                            <el-option label="婚纱照" value="lifePhotograph"></el-option>
                            <el-option label="普通拍照" value="activePhotograph"></el-option>
                            <el-option label="电商模特" value="othersPhotograph"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="地点" prop="apt_site">
                        <el-input v-model="apt.apt_site" placeholder="请输入你的约拍地点（尽量详细，建议添加地标建筑进行描述）" type="textarea"></el-input>
                    </el-form-item>

                    <el-form-item label="开始时间" prop="apt_date">
                        <el-input v-model="apt.apt_date" placeholder="请输入你的约拍时间（例如：2019年12月31日早上8点）" type="textarea"></el-input>
                    </el-form-item>

                    <el-form-item label="约拍要求" prop="ask">
                        <el-input type="textarea" v-model="apt.ask" placeholder="例如摄影师的性别、年龄、摄影特长或者对模特的身高、年龄、风格、着装等"></el-input>
                    </el-form-item>

                    <el-form-item label="费用" prop="apt_fee">
                        <el-input v-model="apt.apt_fee" placeholder="请输入你的费用（例如：200，100-200，详谈等）" type="textarea"></el-input>
                    </el-form-item>

                    <el-form-item label="上传图片" prop="apt_image">
                        <div class="al-box-bg-fcfcfc al-m-20px al-p-20px al-box-radius">
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
                        <el-button type="primary" @click="submitForm('apt')">立即发布</el-button>
                        <el-button @click="resetForm('apt')">重置</el-button>
                    </el-form-item>
                </el-form>
                </el-col>
                <el-col :span="4"><div class="grid-content bg-purple"><pre> </pre></div></el-col>
            </el-row>
        </div>

    </div>
</template>


<script>
  import {request} from "@/util/network/request";

  export default {
    data() {
      return {
          uploadData:{//上传图片时需要用户id
              uid:1
          },
          uploadImgUrl:this.createUrl('/upload/return-url'),  //图片上传的地址
          flag:false,
        imgId:'',
        dialogImageUrl: '',
        dialogVisible: false,
        apt: {
            userId:0,
            title: '',
            ask: '',
            apt_type: '',
            apt_site: '',
            apt_date: '',
            apt_fee: '',
            apt_image: ''
        },
        rules: {
          title: [
            { type: 'string', required: true, message: '请输入标题', trigger: 'change' }
          ],
          apt_type: [
            { type: 'string', required: true, message: '请选择类型', trigger: 'change' }
          ],
          apt_site: [
            { type: 'string', required: true, message: '请输入地点', trigger: 'change' }
          ],
          apt_date: [
            { type: 'string', required: true, message: '请输入时间', trigger: 'change' }
          ],
          ask: [
            { type: 'string', required: true, message: '请输入要求', trigger: 'change' }
          ],
          apt_fee: [
            { type: 'string', required: true, message: '请输入费用', trigger: 'change' }
          ],
        }
      };
    },



    mounted:function(){
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        console.log(userinfo);
        this.apt.userId = userinfo.id;
        //上传图片时需要用户id
        this.uploadData.uid = userinfo.id;
        console.log(this.apt.userId);


    },

    methods: {
        //开始图片上传
        startUpload:function () {
            this.$refs.uploadImg.submit();
        },

        //图片上传成功后的回调函数
        uploadSuccess:function(res, file, fileList){
            console.log(res);
            this.apt.apt_image = res;
            this.flag = true;


            console.log("图片上传成功");

            //发送发表约拍的请求
            this.send();

        },


        //发送发表约拍的请求
        send:function(){
            console.log("发送发表约拍的请求");

            request({
                method:'post',
                url:'/appointment/add',
                data:this.qsParam(this.apt),
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(res => {
                console.log(res);
                this.$message.success("发表成功");
            }).catch(err => {
                console.log(err);
                this.$message.error("发表失败");

            });


            alert('发布成功!');
            console.log(this.apt);
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
      handlePictureCardPreview:function(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleRemove:function(file, fileList) {
        console.log(file, fileList);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


    }
  }
</script>

<style>
    .main_content{
        width: 1140px;
        margin: 0 auto;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
        padding: 120px 0 30px;
        padding-top: 120px;
        padding-right: 0px;
        padding-bottom: 30px;
        padding-left: 0px;
}
    .page{
        width: 900px;
        background: #ffffff;
        background-color: rgb(255, 255, 255);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-attachment: scroll;
        background-image: none;
        background-size: auto;
        background-origin: padding-box;
        background-clip: border-box;
        margin: 0 auto;
        margin-top: 0px;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
        padding: 30px 50px;
        padding-top: 30px;
        padding-right: 50px;
        padding-bottom: 30px;
        padding-left: 50px;
    }
    .page_navigation{
        height: 33px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(51,51,51,1);
        line-height: 33px;
    }
    .page_title{
        height: 22px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(51,51,51,1);
        line-height: 22px;
        align-items: center;
    }
</style>
