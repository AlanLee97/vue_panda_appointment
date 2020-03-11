<template>
    <div>
        <HeaderTop :enable-shadow="true"/>

        <el-row>
            <el-col :span="2"><pre> </pre></el-col>

            <!--显示约拍信息-->
            <el-col :span="14">
                <div style="width: auto"
                     class="al-box-shadow-radius al-m-20px"
                     v-for="appointment in allAppointment.list"
                >

                    <div @click="goPage('/appointment/detail/' + appointment.id)">
                        <el-card
                                :body-style="{padding: '0px'}">
                            <div class="al-flex-container-center-vh al-overflow-hide">
                                <ALImage
                                        @click="goPage('/appointment/detail/' + appointment.id)"
                                        style="height: 400px"
                                        class="al-hover-img al-z-index-999 al-width-100 "
                                        :src="appointment.image"
                                        fit="cover"
                                        />
                            </div>
                            <el-row class="al-height-100">
                                <el-col :span="8">
                                    <AvatarNickname
                                            class="al-p-10px"
                                            :avatar="appointment.tuser.headPortraitImg"
                                            :nickname="appointment.tuser.username"
                                            :desc="appointment.tuser.identity"/>
                                </el-col>

                                <el-col :span="8" class="">

                                    <div style="height: 78px" class="al-flex-container-center-vh">

                                        <div class="al-title-h3-bold">{{appointment.title}}</div>
                                    </div>

                                </el-col>
                                <el-col :span="8">
                                    <div style="height: 78px" class="al-flex-container-center-v al-float-right al-m-right-10px">
                                        <div class="">{{appointment.date}}</div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                    </div>





<!--                    <DescText :plain-text="appointment"/>-->


                </div>

            </el-col>


            <!--侧边栏-->
            <el-col :span="6">
                <div @click="goPage('/appointment/add')" class="al-cursor-pointer">
                    <el-card class="al-m-top-20px">
                        <ALImage
                                class="al-width-100 al-height-100 al-hover-img"
                                src="https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/assert/%E6%8B%8D%E7%85%A7.png" />

                        <div class="al-flex-container-center-h">
                            快来发布你的约拍吧！
                        </div>
                    </el-card>
                </div>
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
    import ALImage from "@/components/public/ALImage";

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
            ALImage,
            AppointmentType,
            DescText,
            AvatarNickname,
            HeaderTop
        },
        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            getAllAppointment: function (pageNum=1, pageSize=3) {
                request({
                    url: `/appointment/get/page/${pageNum}/${pageSize}`
                }).then(res => {
                    // console.log(res);
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
