<template>
    <div>
        <header-top/>

        <div style="width: auto" class="al-box-shadow-radius al-m-20px"
             v-for="appointment in allAppointment"
        >
            <AvatarNickname
                    :avatar="appointment.tuser.headPortraitImg"
                    :nickname="appointment.tuser.username"
                    :desc="appointment.tuser.identity"/>

            <div class="al-p-left-20px ">

                <h2>{{appointment.title}}</h2><br>

                <span class="
                    al-text-color-light-black
                    al-p-right-10px
                    al-line-height-10px
                ">
                    描述
                </span>
                <span>{{appointment.ask}}</span><br>

                <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">费用</span>
                <span>{{appointment.fee}}</span><br>

                <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">开始时间</span>
                <span>{{appointment.startDatetime}}</span><br>

                <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">发布时间</span>
                <span>{{appointment.date}}</span><br>
            </div>

            <div class="al-width-30 al-p-20px ">
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
    import AvatarNickname from "@/components/public/AvatarNickname";

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
            AvatarNickname,
            HeaderTop
        },
        methods: {
            getAllAppointment: function () {
                request({
                    url: '/appointment/get/apt-user'
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
