<template>
    <div>
        <header-top></header-top>

        <el-drawer
                title="个人信息"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">


            <el-row>
                <el-col :span="2">
                    <pre> </pre>
                </el-col>

                <el-col :span="20">
                    <div class="">
                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>头像</span>
                            <el-avatar :src="userInfo.headPortraitImg"></el-avatar>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>用户名</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.username"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>昵称</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>性别</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.gender"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>年龄</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.age"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>手机号</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>身份</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userInfo.identity"></el-input>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>认证</span>
                            <el-input class="width-50" :disabled="isDisabled"
                                      :value="userInfo.isAuthenticated"></el-input>

                        </div>
                    </div>
                </el-col>

                <el-col :span="2">
                    <pre> </pre>
                </el-col>
            </el-row>


        </el-drawer>


        <!--上半部分-->
        <el-row>
            <el-col :span="24">
                <div class="" >
                    <!-- 背景图 -->
                    <ALImage
                            class=""
                            :src="image_url"
                            :fit="fit">
                    </ALImage>

                    <el-row>
                        <el-col :span="2"><pre> </pre></el-col>
                        <el-col :span="20">
                            <!-- 头像与昵称 -->
                            <div class="al-flex-container-center-v al-box-pretty" >
                                <div style="padding: 14px;">
                                    <div @click="drawer = true" class="block">
                                        <el-avatar :size="100" :src="userInfo.headPortraitImg"></el-avatar>
                                    </div>
                                </div>

                                <div>
                                    <span class="al-font-weight-100 al-fontsize-50px">{{userInfo.nickname}}</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="2"><pre> </pre></el-col>
                    </el-row>


                </div>
            </el-col>
        </el-row>


        <!-- 下半部分-->

        <div>
            <el-row>
                <el-col :span="2"><pre> </pre></el-col>
                <el-col :span="20">
                    <el-menu
                            mode="horizontal"
                            default-active="1"
                            class="al-flex-justify-space-between al-box-pretty-no-bottom"
                            @select="handleSelect"
                            @open="handleOpen"
                            @close="handleCloseNav">
                        <el-menu-item index="1" class="">
                            <div>
                                <i class="el-icon-camera"></i>
                                <span slot="title">约拍</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item index="2" class="">
                            <div>
                                <i class="el-icon-document"></i>
                                <span slot="title">作品</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item index="3" class="">
                            <div>
                                <i class="el-icon-picture-outline-round"></i>
                                <span slot="title">相册</span>
                            </div>
                        </el-menu-item>
                        <el-menu-item index="4" class="">
                            <div>
                                <i class="el-icon-setting"></i>
                                <span slot="title">排期</span>
                            </div>
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="2"><pre> </pre></el-col>
            </el-row>

            <el-row class="al-overflow-scroll-hide-bar al-m-left-10px al-m-right-10px ">
                <el-col :span="2"><pre> </pre></el-col>
                <el-col :span="20" class="al-bg-color-white">
                    <div v-if="this.menuSelect == 1" class="">
                        <el-row>
                            <el-col :span="24">
                                <div class="al-flex-justify-space-between al-flex-wrap">
                                    <div v-for="item in this.appointment.list"
                                         class="">
                                        <div class="al-box-pretty al-cursor-pointer"
                                             style="width: 300px; height: 400px"
                                             @click="goPage('/appointment/detail/' + item.id)"
                                        >
                                            <DescText :plain-text="item"/>
                                            <ALImage :src="item.image"
                                                      fit="cover"
                                                      class="al-width-100 al-height-50 "></ALImage>
                                        </div>
                                    </div>
                                </div>

                                <div class="al-flex-container-center-h al-m-10px">
                                    <el-pagination
                                            background
                                            :page-size="appointment.pageSize"
                                            @next-click="getAppointmentByUserId(appointment.nextPage)"
                                            @prev-click="getAppointmentByUserId(appointment.prePage)"
                                            @current-change="handleCurrentChangeAppointment"
                                            layout="prev, pager, next"
                                            :total="appointment.total">
                                    </el-pagination>
                                </div>

                            </el-col>


                        </el-row>
                    </div>


                    <!-- 我的作品 -->
                    <div v-if="this.menuSelect == 2" >
                        <el-row>
                            <el-col :span="24">
                                <!-- 作品信息 -->
                                <div class="al-flex-wrap al-flex-justify-space-between"
                                     style="height: 100%; width: 100%;">
                                    <div class="al-box-pretty al-m-top-20px "
                                         style="width: 470px; "
                                         v-for="item in works.list">
                                        <!--显示作品信息-->
                                        <div class="al-cursor-pointer"
                                             @click="goPage('/works/detail/' + item.id)">
                                            <div class="">
                                                <div class="al-bg-color-light-white2 al-p-10px">
                                                    {{item.introduction}}
                                                </div>

                                                <div class=" al-m-top-20px">
                                                    <DisplayGridImage :data-source="item.images" />
                                                </div>

                                            </div>
                                        </div>



                                    </div>
                                </div>

                                <!--分页-->
                                <div class="al-flex-container-center-h">
                                    <el-pagination
                                            background
                                            :page-size="works.pageSize"
                                            @next-click="getWorks(works.nextPage)"
                                            @prev-click="getWorks(works.prePage)"
                                            @current-change="handleCurrentChangeWorks"
                                            layout="prev, pager, next"
                                            :total="works.total">
                                    </el-pagination>
                                </div>
                            </el-col>
                        </el-row>


                    </div>


                    <!-- 相册 -->
                    <div v-else-if="this.menuSelect == 3" >
                        <ImageWaterfall :data-source="album" style="height: 800px" />

                    </div>

                    <div v-else-if="this.menuSelect == 4">

                        <el-calendar >
                            <template
                                    slot="dateCell"
                                    slot-scope="{date, data}">
                                <div >
                                    {{ data.day.split('-').slice(1).join('-') }}

                                    <div v-for="item in calendarData.data.day">
                                        <span v-if="new Date() > new Date(item) ? pastTime = true : pastTime = false"></span>
                                        <div v-if="item == data.day" :class="pastTime ? 'is-selected-past' : 'is-selected'">
                                            ✔ 已有预约

                                        </div>
                                    </div>
                                </div>

                            </template>

                        </el-calendar >



                    </div>
                </el-col>
                <el-col :span="2"><pre> </pre></el-col>
            </el-row>
        </div>


    </div>
</template>


<script>

    import {request} from "../../util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import DescText from "@/pages/appointment/component/DescText";
    import {APPOINTMENT_GET_BY_USER_ID} from "@/util/network/api/appointment/api-appointment";
    import {WORKS_GET_BY_USER_ID} from "@/util/network/api/works/api-works";
    import {USER_GET_ALBUM, USER_GET_BY_ID} from "@/util/network/api/user/api-user";
    import ImageWaterfall from "@/components/public/ImageWaterfall";
    import DisplayGridImage from "@/components/public/DisplayGridImage";
    import ALImage from "@/components/public/ALImage";
    import {ORDER_GRT_BY_USER_ID, SCHEDULING_GRT_BY_USER_ID} from "@/util/network/api/order/api-order";


    export default {
        components: {
            ImageWaterfall,
            DescText,
            AvatarNickname,
            HeaderTop,
            DisplayGridImage,
            ALImage
        },

        props: {
            uid: String | Array
        },

        data() {
            return {
                isDisabled: true,
                drawer: false,
                direction: 'rtl',
                activeName: 'first',
                fit: 'cover',
                cityLogin: 'https://www.mdyuepai.com/public/static/index/img/common/city.png',
                image_url: 'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
                currentDate: new Date(),
                userInfo: {},
                works: [],
                appointment: [],
                album: [],
                menuSelect: 1,
                order:{},
                appointmentScheduling: [],
                calendarData:{
                    date: new Date(),
                    data: {
                        type: "current-month",
                        isSelected: true,
                        day: []
                    }
                },
                pastTime: false,
            };
        },
        created() {

        },
        mounted() {
            this.userInfo = this.getUserInfo(this.uid);
            // console.log(this.userInfo);
            this.getWorks(this.uid, 1);
            this.getAppointmentByUserId(this.uid, 1);
            this.getAlbum(this.uid);
            this.getOrderByUserId(this.uid);
            this.getSchedulingByUserId(this.uid);
        },
        methods: {
            goPage: function (path) {
                this.gotoPage(path);
            },
            handleCurrentChangeAppointment(pageNum){
                this.getAppointmentByUserId(this.$route.params.uid, pageNum);
            },

            handleCurrentChangeWorks(pageNum){
                this.getWorks(this.uid, pageNum);
            },

            handleClick(tab, event) {
                console.log(tab, event);
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },

            getUserInfo(uid){
                request({
                    url: USER_GET_BY_ID + uid
                }).then(res => {
                    console.log(res);
                    this.userInfo = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },

            getWorks(uid, pageNo = 1, pageSize=4) {
                request({
                    method: 'get',
                    url: WORKS_GET_BY_USER_ID + uid + `?pageNum=${pageNo}&pageSize=${pageSize}`,
                }).then(res => {
                    // console.log(res);
                    this.works = res.data.data;
                    // console.log(this.works)
                }).catch(err => {
                    console.log(err);
                })
            },

            getAppointmentByUserId(uid, pageNum=1, pageSize=6) {
                request({
                    url: APPOINTMENT_GET_BY_USER_ID + uid + `?pageNum=${pageNum}&pageSize=${pageSize}`,
                    method: 'get',
                    headers: {}
                }).then(res => {
                    // console.log(res);
                    this.appointment = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },

            getAlbum(uid) {
                request({
                    url: USER_GET_ALBUM + uid,
                    method: 'get',
                }).then(res => {
                    // console.log(res);
                    res.data.data.map(item => {
                        let temp = {};
                        temp.src = item;
                        temp.href = "";
                        this.album.push(temp);

                    });
                    console.log("新相册数组");
                    console.log(this.album);
                }).catch(err => {
                    console.log(err)
                })
            },

            getOrderByUserId(uid){
                request({
                    url: ORDER_GRT_BY_USER_ID + uid
                }).then(res => {
                    console.log(res);
                    this.order = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },

            //获取排期
            getSchedulingByUserId(uid){
                request({
                    url: SCHEDULING_GRT_BY_USER_ID + uid
                }).then(res => {
                    console.log(res);
                    this.appointmentScheduling = res.data.data;

                    for (let i = 0; i < this.appointmentScheduling.length; i++) {
                        this.calendarData.data.day.push(
                            this.appointmentScheduling[i].startDateTime.split(' ')[0]
                        );
                    }
                }).catch(err => {
                    console.log(err)
                })
            },


            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleCloseNav(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(index, indexPath) {
                console.log(index, indexPath);
                this.menuSelect = index;
            },

        },

        filters: {
            //时间戳显示格式为几天前、几分钟前、几秒前
            getTimeFormat(valueTime) {
                if (valueTime) {
                    // let newData = Date.parse(new Date() + '')
                    // let diffTime = Math.abs(newData - valueTime)
                    let diffTime = Math.abs(new Date().getTime() - new Date(valueTime).getTime())
                    if (diffTime > 7 * 24 * 3600 * 1000) {
                        let date = new Date(valueTime)
                        // let y = date.getFullYear()
                        let m = date.getMonth() + 1
                        m = m < 10 ? ('0' + m) : m
                        let d = date.getDate()
                        d = d < 10 ? ('0' + d) : d
                        let h = date.getHours()
                        h = h < 10 ? ('0' + h) : h
                        let minute = date.getMinutes()
                        let second = date.getSeconds()
                        // console.log(second)
                        minute = minute < 10 ? ('1' + minute) : minute
                        second = second < 10 ? ('0' + second) : second
                        return m + '-' + d + ' ' + h + ':' + minute
                    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
                        // //注释("一周之内");
                        // var time = newData - diffTime;
                        let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
                        return dayNum + '天前'
                    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
                        // //注释("一天之内");
                        // var time = newData - diffTime;
                        let dayNum = Math.floor(diffTime / (60 * 60 * 1000))
                        return dayNum + '小时前'
                    } else if (diffTime < 3600 * 1000 && diffTime > 0) {
                        // //注释("一小时之内");
                        // var time = newData - diffTime;
                        let dayNum = Math.floor(diffTime / (60 * 1000))
                        return dayNum + '分钟前'
                    }
                }
            }
        },
    }
</script>


<style scoped>
    .is-selected {
        color: #00ffae;
    }

    .is-selected-past {
        color: #C0C4CC;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        box-sizing: border-box;
    }


    li.el-menu-item{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
