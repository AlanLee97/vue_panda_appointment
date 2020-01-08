<template>
    <div>
        <header-top/>
        <div class="al-box-shadow-radius al-p-20px al-m-20px"
            v-for="appointment in allAppointment"
        >
            <span>{{appointment.title}}</span><br>
            <span>{{appointment.ask}}</span><br>
            <span>{{appointment.fee}}</span><br>
            <span>{{appointment.startDatetime}}</span><br>
            <span>{{appointment.date}}</span><br>
            <div class="al-width-50 al-p-20px al-m-20px">
                <el-image
                        :src="appointment.image"
                        :fit="imageFit"/>
            </div>
        </div>

    </div>

</template>

<script>
    import {request} from "@/util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";

    export default {
        name: "AllAppointment",
        created(){
            this.getAllAppointment();
        },
        data(){
            return {
                allAppointment:null,
                imageFit:'cover'
            }
        },
        components:{
            HeaderTop
        },
        methods:{
            getAllAppointment:function () {
                request({
                    url:'/appointment/get/apt-user'
                }).then(res => {
                    console.log(res);
                    this.allAppointment = res.data.data;
                }).catch(err => {

                });
            }
        }
    }
</script>

<style scoped>

</style>
