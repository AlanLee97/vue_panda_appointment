<template>
    <div>
        <HeaderTop :enable-shadow="true"/>

        <el-row>
            <el-col :span="2"><pre> </pre></el-col>
            <el-col :span="14">
                <div style="width: auto" class="al-box-shadow-radius al-m-20px"
                     v-for="appointment in allAppointment.list"
                >
                    <el-card :body-style="{padding: '0px'}">
                        <div class="al-flex-container-center-vh al-overflow-hide">
                            <el-image
                                    style="height: 400px"
                                    class="apt-img al-z-index-999"
                                    :src="appointment.image"
                                    :fit="imageFit"></el-image>
                        </div>
                        <el-row class="al-height-100">
                            <el-col :span="8">
                                <AvatarNickname
                                        class="al-p-10px"
                                        :avatar="appointment.tuser.headPortraitImg"
                                        :nickname="appointment.tuser.username"
                                        :desc="appointment.tuser.identity"/>
                            </el-col>

                            <el-col :span="8" class="al-height-100">
                                <div class="al-height-100  al-show-border">
                                    标题
                                </div>
                            </el-col>
                            <el-col :span="8">时间</el-col>
                        </el-row>
                    </el-card>


<!--                    <DescText :plain-text="appointment"/>-->


                </div>

            </el-col>
            <el-col :span="6">
                <AppointmentType />
            </el-col>
            <el-col :span="2"><pre> </pre></el-col>
        </el-row>

        <el-row>
            <el-col :span="4"><pre> </pre></el-col>
            <el-col :span="16">
                <el-pagination
                        background
                        :page-size="allAppointment.pageSize"
                        @next-click="getAllAppointment(allAppointment.nextPage)"
                        @prev-click="getAllAppointment(allAppointment.prePage)"
                        layout="prev, pager, next"
                        :total="allAppointment.total">
                </el-pagination>
            </el-col>
            <el-col :span="4"><pre> </pre></el-col>
        </el-row>
    </div>

</template>

<script>
    import {request} from "@/util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import DescText from "@/pages/appointment/component/DescText";
    import AppointmentType from "@/pages/appointment/component/AppointmentType";

    export default {
        name: "AllAppointment",
        created() {
            this.getAllAppointment();
        },
        data() {
            return {
                allAppointment: {},
                imageFit: 'cover'
            }
        },
        components: {
            AppointmentType,
            DescText,
            AvatarNickname,
            HeaderTop
        },
        methods: {
            getAllAppointment: function (pageNum=1, pageSize=3) {
                request({
                    url: `/appointment/get/page/${pageNum}/${pageSize}`
                }).then(res => {
                    console.log(res);
                    this.allAppointment = res.data.data;

                }).catch(err => {
                    console.log(err);

                });
            }
        }
    }
</script>

<style scoped>

    .apt-img:hover{
        cursor: pointer;
        transform: scale(1.1);
        transition-duration: 1.0s;
    }

</style>
