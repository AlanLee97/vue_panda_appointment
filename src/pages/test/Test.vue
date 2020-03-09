<template>
    <div>

        <el-calendar >
            <template
                    slot="dateCell"
                    slot-scope="{date, data}">
                <div >
                    {{ data.day.split('-').slice(1).join('-') }}

                    <div v-for="item in calendarData.data.day">

                        <span v-if="new Date() > new Date(item.split(' ')[0]) ? pastTime = true : pastTime = false"></span>
                        <div v-if="item == data.day" :class="pastTime ? 'is-selected-past' : 'is-selected'">
                            ✔ 已有预约

                        </div>
                    </div>
                </div>

            </template>

        </el-calendar>

<!--        <el-calendar>-->
<!--            -->
<!--        </el-calendar>-->

    </div>
</template>

<script>

    import {request} from '../../util/network/request';
    import AvatarNickname from "@/components/public/AvatarNickname";
    import TitleNode from "@/components/public/TitleNode";
    import {GMTToStr, strToGMT} from "@/util/time/TimeUtils";

    export default {
        name: "Test",
        components: {TitleNode, AvatarNickname},
        data:function(){
            return {
                calendarData:{
                    date: new Date(),
                    data: {
                        type: "current-month",
                        isSelected: true,
                        day: [ "2020-03-08", "2020-01-03", "2020-01-02", "2019-11-27" ]
                    }
                },
                pastTime: false,
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


            strToGMT(strTime){
                return strToGMT(strTime);
            },

            /**
             * @return {string}
             */
            GMTToStr(GMTTime){
                return GMTToStr(GMTTime);
            }
        }
    }
</script>

<style scoped>
    .is-selected {
        color: #00ffae;
    }

    .is-selected-past {
        color: #C0C4CC;
    }
</style>
