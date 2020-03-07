<template>
    <div>
        <HeaderTop :enable-shadow="true" />
<!--        详情页{{this.appointment}}-->

<!--        用户信息{{this.userinfo}}-->

        <div>
            <el-row >
                <el-col :span="2"><pre> </pre></el-col>
                <el-col :span="14">
                    <div class="al-box-shadow-radius al-p-10px al-m-top-20px">
                        <AvatarNickname
                                :desc="userinfo.identity"
                                :avatar="this.userinfo.headPortraitImg"
                                :nickname="this.userinfo.nickname"/>

                        <el-divider class="al-m-top--20px"></el-divider>

                        <DescText :plain-text="this.appointment"/>
                        <el-image :src="this.appointment.image"
                                  class="al-width-50 al-m-20px" ></el-image>
                    </div>
                </el-col>

                <el-col :span="6">

                    <div class="al-m-left-20px">
                        <TitleNode title-text="推荐约拍" />
                        <div v-for="(item, index) in newestAppointment">
                            <el-card

                                    :body-style="{padding: '0px'}"
                                     class="al-m-top-10px">
                                <el-image :src="item.image"
                                          style="height: 150px"
                                          fit="cover"></el-image>
                                <div @click="goPage('/appointment/detail/' + item.id)"
                                        class="al-flex-container-center-h">
                                    {{item.title}}
                                </div>
                            </el-card>
                        </div>
                    </div>

                </el-col>
                <el-col :span="2"><pre> </pre></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import DescText from "@/pages/appointment/component/DescText";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import TitleNode from "@/components/public/TitleNode";
    import {APPOINTMENT_GET_BY_APTID, APPOINTMENT_GET_NEWEST} from "@/util/network/api/appointment/api-appointment";
    import {USER_GET_BY_ID} from "@/util/network/api/user/api-user";

    export default {
        name: "AppointmentDetail",
        components: {TitleNode, AvatarNickname, DescText, HeaderTop},
        props:{
            aptId: String | Number
        },
        data(){
            return{
                appointment: {},
                userinfo:{},
                newestAppointment:{},
            }
        },

        mounted(){
            this.getAppointment(this.aptId);

            this.getNewestAppointment();
        },

        methods:{
            goPage:function (path) {
                this.gotoPage(path);
            },

            getAppointment(aptId){
                request({
                    url: APPOINTMENT_GET_BY_APTID + '/' + aptId,
                }).then(res => {
                    console.log(res);
                    this.appointment = res.data.data;

                    request({
                        url:USER_GET_BY_ID + "/" + res.data.data.userId,
                    }).then(res => {
                        // console.log(res);
                        this.userinfo = res.data.data;
                    }).catch(err => {
                        console.log(err)
                    })


                }).catch(err => {
                    console.log(err)
                })
            },

            getNewestAppointment(){
                request({
                    url: APPOINTMENT_GET_NEWEST
                }).then(res => {
                    // console.log(res);
                    this.newestAppointment = res.data.data;
                }).catch(err => {
                    console.log(err)
                });
            },

        }
    }
</script>

<style scoped>

</style>
