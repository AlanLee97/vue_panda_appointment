<template>
    <div class="al-m-top-20px">
<!--        {{appointmentType}}-->
        <div v-for="(item, index) in this.appointmentType"
             class="al-m-bottom-10px"
             :key="item">
            <el-card :body-style="{padding: '0px'}">
                <el-image :src="item.cover_url"
                          fit="cover"
                          style="height:150px; width:100%"/>
                <div class="al-flex-container-center-h">{{item.type}}</div>
            </el-card>

        </div>
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import {APPOINTMENT_TYPE_GET_ALL} from "@/util/network/APIPATH";

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
            }
        }
    }
</script>

<style scoped>

</style>
