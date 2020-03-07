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
                            <el-avatar :src="userinfo.headPortraitImg"></el-avatar>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>用户名</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.username"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>昵称</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>性别</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.gender"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>年龄</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.age"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>手机号</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>身份</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.identity"></el-input>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>认证</span>
                            <el-input class="width-50" :disabled="isDisabled"
                                      :value="userinfo.isAuthenticated"></el-input>

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
                <el-card :body-style="{ padding: '0px' }">
                    <el-image
                            class="image"
                            :src="image_url"
                            :fit="fit">

                    </el-image>
                    <div class="al-flex-container-center-vh al-flex-direction-col al-m-bottom-20px">

                        <div style="padding: 14px;">
                            <div @click="drawer = true" class="block">
                                <el-avatar :size="100" :src="user_face"></el-avatar>
                            </div>
                        </div>

                        <div>
                            <span class="al-font-weight-100 al-fontsize-50px">{{userinfo.nickname}}</span>
                        </div>

                        <!--<el-button @click="goPage('/index')">返回主页</el-button>-->
                    </div>

                </el-card>
            </el-col>
        </el-row>


        <!-- 下半部分-->

        <el-row>
            <el-col :span="3">
                <pre> </pre>
            </el-col>
            <el-col :span="18">
                <el-tabs stretch v-model="activeName" @tab-click="handleClick">

                    <el-tab-pane label="我的约拍" name="first">
<!--                        {{this.appointment}}-->
                        <div v-for="item in this.appointment" class="al-box-shadow-radius al-p-10px al-m-top-20px">
                            <DescText :plain-text="item"/>
                            <el-image :src="item.image"
                                      class="al-width-50 al-m-20px" ></el-image>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="相册" name="second">
<!--                        {{album}}-->

                    </el-tab-pane>

                    <el-tab-pane label="作品" name="third">
                        <div>

                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="文章" name="fourth">
                        <div>
                            <el-row>
                                <el-col :span="24" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                             class="article-image">
                                        <div style="padding: 14px;">
                                            <span>好吃的汉堡</span>
                                            <div class="bottom clearfix">
                                                <time class="time">{{ currentDate }}</time>
                                                <el-button type="text" class="button">操作按钮</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>

                </el-tabs>
            </el-col>
            <el-col :span="3">
                <pre> </pre>
            </el-col>
        </el-row>


    </div>
</template>


<script>

    import {request} from "../../util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import DescText from "@/pages/appointment/component/DescText";
    import {APPOINTMENT_GET_BY_USER_ID} from "@/util/network/api/appointment/api-appointment";
    import {WORKS_GET_BY_USER_ID} from "@/util/network/api/works/api-works";
    import {USER_GET_ALBUM} from "@/util/network/api/user/api-user";


    export default {
        components: {DescText, AvatarNickname, HeaderTop},
        data() {
            return {
                isDisabled: true,
                drawer: false,
                direction: 'rtl',
                activeName: 'first',
                fit: 'cover',
                cityLogin: 'https://www.mdyuepai.com/public/static/index/img/common/city.png',
                user_face: 'https://hbimg.huabanimg.com/666a1a1f72c5eae973ca0f0977adca58b89a119f236a1-3vh1WC_fw658',
                image_url: 'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
                currentDate: new Date(),
                userinfo: [],
                works: [],
                appointment: [],
                album: []
            };
        },
        created() {

        },
        mounted() {
            this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
            this.user_face = this.userinfo.headPortraitImg;
            // console.log(this.userinfo);
            this.getWorks();
            this.getAppointmentByUserId(this.userinfo.id);
            this.getAlbum(this.userinfo.id);
        },
        methods: {
            goPage: function (path) {
                this.gotoPage(path);
            },
            getUserInfo: function () {
                //this.userinfo = var_userinfo;
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
            getWorks() {
                request({
                    method: 'get',
                    url: WORKS_GET_BY_USER_ID + this.userinfo.id,
                }).then(res => {
                    // console.log(res);
                    this.works = res.data.data;
                    // console.log(this.works)
                }).catch(err => {
                    console.log(err);
                })
            },

            getAppointmentByUserId(uid){
                request({
                    url:APPOINTMENT_GET_BY_USER_ID + uid,
                    method:'get',
                    headers:{}
                }).then(res => {
                    // console.log(res);
                    this.appointment = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            },

            getAlbum(uid){
                request({
                    url: USER_GET_ALBUM + uid,
                    method:'get',
                }).then(res => {
                    console.log(res);
                    this.album = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            }

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


<style>

</style>
