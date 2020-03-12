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

                        <DescText class="al-m-left-20px" :plain-text="this.appointment"/>
                        <ALImage :src="this.appointment.image"
                                  class="al-width-50 al-m-20px" ></ALImage>

                        <el-divider class="al-m-top-20px">

                            <div v-if="appointment.userId != this.$store.state.storeUserInfo.id">
                                <el-button :type="addedOrder == true ? 'danger' : 'primary'"
                                           @click="addOrder(appointment.userId, $store.state.storeUserInfo.id, appointment.id, appointment.image)">
                                    {{this.addedOrder ? "取消预约" : "预约TA"}}
                                </el-button>
                            </div>

                        </el-divider>

                    </div>
                </el-col>

                <el-col :span="6">

                    <div class="al-m-left-20px">
                        <TitleNode title-text="推荐约拍" />
                        <div v-for="(item, index) in newestAppointment">
                            <div @click="goPage('/appointment/detail/' + item.id)">
                                <el-card

                                        :body-style="{padding: '0px'}"
                                        class="al-m-top-10px">
                                    <ALImage :src="item.image"
                                             class="al-cursor-pointer"
                                             style="height: 150px"
                                             fit="cover"></ALImage>
                                    <div class="al-flex-container-center-h">
                                        {{item.title}}
                                    </div>
                                </el-card>
                            </div>

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
    import ALImage from "@/components/public/ALImage";
    import {ORDER_ADD, ORDER_IS_ADDED} from "@/util/network/api/order/api-order";
    import store from "@/store";

    export default {
        name: "AppointmentDetail",
        components: {ALImage, TitleNode, AvatarNickname, DescText, HeaderTop},
        props:{
            aptId: String | Number
        },
        data(){
            return{
                appointment: {},
                userinfo: {},
                newestAppointment:{},
                addedOrder: false
            }
        },

        mounted(){


            this.getAppointment(this.aptId);

            this.getNewestAppointment();

            console.log(this.appointment);



            // console.log("全局的用户id：" + this.$store.state.storeUserInfo.id);

        },

        methods:{
            goPage(path) {
                this.gotoPage(path);
            },

            getAppointment(aptId){
                request({
                    url: APPOINTMENT_GET_BY_APTID + aptId,
                }).then(res => {
                    console.log(res);
                    this.appointment = res.data.data;

                    this.getUserInfo(this.appointment.userId);

                    this.isAdded(this.appointment.userId, this.$store.state.storeUserInfo.id, this.aptId);



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

            getUserInfo(uid){
                request({
                    url: USER_GET_BY_ID + uid,
                }).then(res => {
                    console.log(res);
                    this.userinfo = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },


            /**
             * 添加约拍（订单）
             * @param pubUid 发布约拍者的id
             * @param acptUid 接单者的id
             * @param aptId 约拍信息的id
             */
            addOrder(pubUid, acptUid, aptId, image=''){
                let param = {
                    pub_uid : pubUid,
                    acpt_uid : acptUid,
                    apt_id : aptId,
                    image: image
                };
                request({
                    url:ORDER_ADD,
                    method:'post',
                    data: this.qsParam(param),
                }).then(res => {
                    console.log(res);
                    if (res.data.code == 200){
                        this.$message.success("预约成功");
                        this.addedOrder = true;
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error("预约失败, 请稍候重试");
                })
            },


            //判断是否添加过约拍
            isAdded(pub_uid, acpt_uid, apt_id){
                request({
                    url: ORDER_IS_ADDED + `${pub_uid}/${acpt_uid}/${apt_id}`,
                }).then(res => {
                    // console.log(res);
                    if (res.data.data == true){
                        this.addedOrder = true;
                    }else {
                        this.addedOrder = false;
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
