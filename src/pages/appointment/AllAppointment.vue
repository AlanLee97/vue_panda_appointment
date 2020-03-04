<template>
    <div>
        <HeaderTop :enable-shadow="true"/>

        <el-row>
            <el-col :span="2"><pre> </pre></el-col>
            <el-col :span="14">
                <div style="width: auto" class="al-box-shadow-radius al-m-20px"
                     v-for="appointment in allAppointment.list"
                >
                    <AvatarNickname
                            :avatar="appointment.tuser.headPortraitImg"
                            :nickname="appointment.tuser.username"
                            :desc="appointment.tuser.identity"/>

                    <DescText :plain-text="appointment"/>

                    <div class="al-width-30 al-p-20px ">
                        <el-image
                                :src="appointment.image"
                                :fit="imageFit"/>
                    </div>
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
                        page-size="3"
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
    import DescText from "@/components/appointment/DescText";
    import AppointmentType from "@/components/appointment/AppointmentType";

    export default {
        name: "AllAppointment",
        created() {
            this.getAllAppointment();
        },
        data() {
            return {
                allAppointment: null,
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
                    url: `http://localhost:8083/test/appointment/page?pageNum=${pageNum}&pageSize=${pageSize}`
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

</style>
