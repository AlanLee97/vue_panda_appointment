<template>
    <div>
        <center>
            <h1>测试页面</h1>
            <br>
            <br>
        </center>

        <AvatarNickname />

        <TitleNode title-text="约拍22"/>







    </div>
</template>

<script>

    import {request} from '../../util/network/request';
    import AvatarNickname from "@/components/public/AvatarNickname";
    import TitleNode from "@/components/public/TitleNode";

    export default {
        name: "Test",
        components: {TitleNode, AvatarNickname},
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
