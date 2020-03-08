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
                    <ALImage
                            class="image"
                            :src="image_url"
                            :fit="fit">

                    </ALImage>
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
<!--

        <el-row>
            <el-col :span="3">
                <pre> </pre>
            </el-col>
            <el-col :span="18">
                <el-tabs stretch v-model="activeName" @tab-click="handleClick">

                    <el-tab-pane label="我的约拍" name="first">
                        &lt;!&ndash;                        {{this.appointment}}&ndash;&gt;
                        <div v-for="item in this.appointment" class="al-box-shadow-radius al-p-10px al-m-top-20px">
                            <DescText :plain-text="item"/>
                            <ALImage :src="item.image"
                                      class="al-width-50 al-m-20px"></ALImage>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="相册" name="second">

&lt;!&ndash;                        <div v-for="item in album" >&ndash;&gt;
&lt;!&ndash;                            <div class="al-flex-wrap">&ndash;&gt;
&lt;!&ndash;                                <ALImage :src="item" class="al-box-size-200px"/>&ndash;&gt;
&lt;!&ndash;                            </div>&ndash;&gt;
&lt;!&ndash;                        </div>&ndash;&gt;



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
-->



        <div>
            <el-row class="al-overflow-scroll-hide-bar" style="height: 600px;">
                <el-col :span="4">
                    <el-menu
                            default-active="1"
                            class=""
                            style="height: 600px"
                            @select="handleSelect"
                            @open="handleOpen"
                            @close="handleCloseNav">
                        <el-menu-item index="1">
                            <i class="el-icon-camera"></i>
                            <span slot="title">我的约拍</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-document"></i>
                            <span slot="title">我的作品</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-picture-outline-round"></i>
                            <span slot="title">我的相册</span>
                        </el-menu-item>
<!--                        <el-menu-item index="4">-->
<!--                            <i class="el-icon-setting"></i>-->
<!--                            <span slot="title">导航四</span>-->
<!--                        </el-menu-item>-->
                    </el-menu>
                </el-col>

                <el-col :span="20" class="">
                    <div v-if="this.menuSelect == 1" class=""
                         style="height: 600px; overflow: scroll">
                        <el-row>
                            <el-col :span="24">
                                <div class="al-flex-wrap"
                                     style="height: 100%; width: 100%;">
                                    <div v-for="item in this.appointment"
                                         class="">
                                        <div class="al-box-pretty "
                                             style="width: 300px; height: 400px">
                                            <DescText :plain-text="item"/>
                                            <ALImage :src="item.image"
                                                      fit="cover"
                                                      class="al-width-100 al-height-50 "></ALImage>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>


                    <!-- 我的作品 -->
                    <div v-if="this.menuSelect == 2" class=""
                         style="height: 600px; overflow: scroll">
                        <el-row>
                            <el-col :span="24">
                                <div class="al-flex-wrap"
                                     style="height: 100%; width: 100%;">
                                    <div class="al-box-pretty al-m-top-20px "
                                         style="width: 470px"
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
                            </el-col>
                        </el-row>

                        <!--分页-->
                        <div class="al-width-100" style="bottom: 0;">
                            <el-row class="al-m-top-20px">
                                <el-col :span="4"><pre> </pre></el-col>
                                <el-col :span="16">
                                    <div class="al-flex-container-center-vh">
                                        <el-pagination
                                                background
                                                :page-size="works.pageSize"
                                                @next-click="getWorks(works.nextPage)"
                                                @prev-click="getWorks(works.prePage)"
                                                @current-change="handleCurrentChange"
                                                layout="prev, pager, next"
                                                :total="works.total">
                                        </el-pagination>
                                    </div>
                                </el-col>
                                <el-col :span="4"><pre> </pre></el-col>
                            </el-row>
                        </div>
                    </div>

                    <div v-else-if="this.menuSelect == 3" class="al-m-left--100px">
                        <ImageWaterfall :data-source="album" />

                    </div>

<!--                    <div v-else-if="this.menuSelect == 4">-->
<!--                        其他页面-->
<!--                    </div>-->
                </el-col>

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
    import {USER_GET_ALBUM} from "@/util/network/api/user/api-user";
    import ImageWaterfall from "@/components/public/ImageWaterfall";
    import DisplayGridImage from "@/components/public/DisplayGridImage";
    import ALImage from "@/components/public/ALImage";


    export default {
        components: {ImageWaterfall, DescText, AvatarNickname, HeaderTop, DisplayGridImage, ALImage},
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
                album: [],
                imgsArr: [
                    {
                        src: "https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/isux/QlOpWqTDznuWIOABg5djTreijHQs6WzUzsVu0rBHghN.jpg",
                        href: "index",
                    },
                    {
                        src: "https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/isux/QlOpWqTDznuWIOABg5djTreijHQs6WzUzsVu0rBHghN.jpg",
                        href: "index",
                    },
                    {
                        src: "https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/isux/QlOpWqTDznuWIOABg5djTreijHQs6WzUzsVu0rBHghN.jpg",
                        href: "index",
                    },
                ],

                menuSelect: 1,
            };
        },
        created() {

        },
        mounted() {
            this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
            this.user_face = this.userinfo.headPortraitImg;
            // console.log(this.userinfo);
            this.getWorks(1);
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
            getWorks(pageNo = 1) {
                request({
                    method: 'get',
                    url: WORKS_GET_BY_USER_ID + this.userinfo.id + `?pageNum=${pageNo}&pageSize=2`,
                }).then(res => {
                    // console.log(res);
                    this.works = res.data.data;
                    // console.log(this.works)
                }).catch(err => {
                    console.log(err);
                })
            },

            getAppointmentByUserId(uid) {
                request({
                    url: APPOINTMENT_GET_BY_USER_ID + uid,
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


<style>

</style>
