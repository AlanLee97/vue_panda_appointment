<template>
    <div class="al-m-top-20px">
<!--        {{appointmentType}}-->
        <div v-for="(item, index) in this.appointmentType"
             class="al-m-bottom-10px">
            <el-card :body-style="{padding: '0px'}">
                <el-image :src="item.cover_url"
                          fit="cover"
                          style="height:150px; width:100%"></el-image>
                <div class="al-flex-container-center-h">{{item.type}}</div>
            </el-card>

        </div>
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import {USER_GET_ALL_COMMON} from "@/util/network/api/user/api-user";
    import {APPOINTMENT_TYPE_GET_ALL} from "@/util/network/api/appointment/api-appointment";

    export default {
        name: "AppointmentType",
        data(){
            return {
                appointmentType:[],
                cover_url: [
                    'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/apt-type/putongpaizhao.jpg',
                    'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/apt-type/biyezhao2.jpg',
                    'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/apt-type/hunshazhao.jpg',
                    'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/apt-type/dianshangmote.jpg',
                    ''
                ],
            }
        },

        mounted(){
            this.getAppointmentType();

            this.getUserRecommend(1);
            this.getUserRecommend(2);


        },

        methods:{
            getAppointmentType(){
                request({
                    url: APPOINTMENT_TYPE_GET_ALL,
                }).then(res => {
                    console.log(res);
                    this.appointmentType = res.data.data;
                    this.appointmentType.map((item, index) => {
                        item.cover_url = this.cover_url[index]
                    });
                }).catch(err => {
                    console.log(err);
                })
            },

            getUserRecommend(identity){
                let headers = {
                    // 'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
                let data = {
                    identity: identity
                };

                request({
                    url: USER_GET_ALL_COMMON + "/" + identity,
                    method: 'post',
                    data: this.qsParam(data),
                    headers
                }).then(res => {
                    if (identity === 1){
                        console.log("==============摄影师用户信息");
                        console.log(res);
                        this.photographerRecommend = res.data.data;
                    }else if(identity === 2){
                        console.log("==============模特用户信息");
                        console.log(res);
                        this.modelRecommend = res.data.data;
                    }
                }).catch(err => {
                    console.log(err)
                });
            }
        }
    }
</script>

<style scoped>

</style>
