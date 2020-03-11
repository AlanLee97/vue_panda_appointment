<template>
    <div class="al-m-top-20px">
<!--        {{appointmentType}}-->
        <div v-for="(item, index) in this.appointmentType"
             class="al-m-bottom-10px">
            <el-card :body-style="{padding: '0px'}">
                <ALImage :src="item.cover_url"
                          fit="cover"
                          style="height:150px; width:100%"></ALImage>
                <div class="al-flex-container-center-h">{{item.type}}</div>
            </el-card>

        </div>
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import {USER_GET_ALL_COMMON} from "@/util/network/api/user/api-user";
    import {APPOINTMENT_TYPE_GET_ALL} from "@/util/network/api/appointment/api-appointment";
    import ALImage from "@/components/public/ALImage";

    export default {
        name: "AppointmentType",
        components: {ALImage},
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
            getAppointmentType(pageNum=1){
                request({
                    url: APPOINTMENT_TYPE_GET_ALL + `?pageNum=${pageNum}&pageSize=0`,
                }).then(res => {
                    console.log(res);
                    this.appointmentType = res.data.data.list;
                    this.appointmentType.map((item, index) => {
                        item.cover_url = this.cover_url[index]
                    });
                }).catch(err => {
                    console.log(err);
                })
            },

        }
    }
</script>

<style scoped>

</style>
