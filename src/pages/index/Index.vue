<template>
    <div>
        <HeaderTop :enable-shadow="true" />

        <!--内容（上） content_top 开始-->
        <el-row class="content_top">
            <el-col :span="24">
                <div class="grid-content">
                    <!------------------ 顶部轮播图 开始------------------>
                    <el-carousel :interval="4000" height="600px">
                        <el-carousel-item v-for="item in carouselImage" >
                            <h3 class="medium">
                                <ALImage :fit="fit"
                                         :src="item.imgUrl"
                                         style="width:100%; height: 600px">

                                </ALImage>
                            </h3>
                        </el-carousel-item>
                    </el-carousel>
                    <!--================ 顶部轮播图 结束==================-->
                </div>
            </el-col>
        </el-row>
        <!--内容（上） content_top 结束-->

        <el-row>
            <el-row>
                <el-col :span="2"><pre> </pre></el-col>
                <el-col :span="20">
                    <!--最新约拍-->
                    <div>
                        <TitleNode title-text="最新约拍"/>

                        <div>
                            <el-row :gutter="20" type="flex" justify="space-around" class="al-flex-wrap">
                                <el-col v-for="(item, index) in newestAppointment"  :span="8" class="al-m-top-10px">
                                    <div class="al-d-blk al-cursor-pointer"
                                         @click="goPage('/appointment/detail/' + item.id)">
                                        <el-card :body-style="{ padding: '0px' }" >
                                            <ALImage :src="item.image" style="height: 200px" fit="cover" class=al-hover-img ></ALImage>
                                            <div style="padding: 14px;">
                                                <span>{{item.title}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>

                        <!-- 查看更多 -->
                        <el-divider content-position="right">
                            <div class="al-cursor-pointer" @click="goPage('appointment/all')">更多</div>
                        </el-divider>
                    </div>


                    <!--打卡点推荐-->
                    <div class="">
                        <TitleNode title-text="打卡点推荐"/>

                        <el-row type="flex" justify="space-around" class="al-flex-wrap">
                            <el-col v-for="(item, index) in spot"  :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class="al-overflow-hide">
                                        <ALImage
                                                :src="item.img_src"
                                                class="al-hover-img"/>
                                        <div style="padding: 14px;">
                                            <span>{{item.title}}</span>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>

                    </div>


                    <!-- 模特推荐 -->
                    <div class="">
                        <TitleNode title-text="模特推荐"/>
                        <el-row type="flex" justify="space-around" >
                            <el-col v-for="(item, index) in modelRecommend"  :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class=" ">
                                        <ALImage :src="item.headPortraitImg" style="width: 300px" ></ALImage>
                                        <div style="padding: 14px;">
                                            <span>{{item.nickname}}</span>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
                    </div>


                    <!-- 摄影师推荐 -->
                    <div class="">
                        <TitleNode title-text="摄影师推荐"/>
                        <el-row type="flex" justify="space-around" >
                            <el-col v-for="(item, index) in photographerRecommend"  :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class=" ">
                                        <ALImage :src="item.headPortraitImg" style="width: 300px" />
                                        <div style="padding: 14px;">
                                            <span>{{item.nickname}}</span>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
                    </div>


                    <!-- 作品展示 -->
                    <div>
                        <TitleNode title-text="作品展示" />

                        <!--显示作品-->
                        <div class="">
                            <div class="al-box-shadow-radius al-m-top-20px al-p-10px"
                                 v-for="item in this.works.list">
                                <!--显示作品信息-->
                                <div class="al-cursor-pointer"
                                     @click="goPage('/works/detail/' + item.id)">
                                    <AvatarNickname

                                            :avatar="item.tuser.headPortraitImg"
                                            :nickname="item.tuser.nickname"
                                            :desc="item.datetime"
                                    />
                                    <el-divider class="al-m-top--20px"></el-divider>
                                    <div class="item_info">
                                        <div>
                                            {{item.introduction}}
                                        </div>

                                        <div class=" al-m-top-20px">
                                            <DisplayGridImage :data-source="item.images" />
                                            <!--                                <el-image v-for="(img, index_img) in item.images" :src="img" />-->
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 查看更多 -->
                        <el-divider>
                            <el-button @click="goPage('works/all')">查看更多</el-button>
                        </el-divider>

                    </div>

                </el-col>
                <el-col :span="2"><pre> </pre></el-col>
            </el-row>
        </el-row>



        <!-- foot 开始-->

        <!--foot 结束-->
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import TitleNode from "@/components/public/TitleNode";
    import ALImage from "@/components/public/ALImage";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import DisplayGridImage from "@/components/public/DisplayGridImage";

    import {CAROUSEL_GET_ALL} from "@/util/network/api/carousel/api-carousel";
    import {USER_GET_ALL_COMMON} from "@/util/network/api/user/api-user";
    import {APPOINTMENT_GET_NEWEST} from "@/util/network/api/appointment/api-appointment";
    import {WORKS_GET_ALL_USER_PAGINATION} from "@/util/network/api/works/api-works";


    export default {
        components: {
            ALImage,
            TitleNode,
            HeaderTop,
            AvatarNickname,
            DisplayGridImage
        },
        data() {
            return {
                carouselImage: {},
                fit: 'cover',
                currentDate: new Date(),
                spot: {},
                newestAppointment:{},
                modelRecommend:{},
                photographerRecommend:{},
                works: {},
            }
        },

        mounted() {
            this.getCarousel();
            this.getNewestAppointment();
            this.getSpot();
            //摄影师推荐
            this.getUserRecommend(1);
            //模特推荐
            this.getUserRecommend(2);
            //作品展示
            this.getAllWorks();
        },

        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            getCarousel: function () {
                request({
                    url: CAROUSEL_GET_ALL
                }).then(res => {
                    // console.log("========轮播图json数据");
                    // console.log(res);
                    this.carouselImage = res.data.data;
                }).catch(err => {
                    console.log(err);
                });
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

            getSpot() {
                request({
                    url: 'http://localhost:8081/data/mafengwo.json'
                }).then(res => {
                    // console.log(res);
                    this.spot = res.data.data;
                }).catch(err => {
                    console.log(err)
                });
            },


            getUserRecommend(identity, pageNum=1, pageSize=0){

                request({
                    url: USER_GET_ALL_COMMON + identity + `?pageNum=${pageNum}&pageSize=${pageSize}`
                }).then(res => {
                    if (identity === 1){
                        // console.log("==============摄影师用户信息");
                        // console.log(res);
                        this.photographerRecommend = res.data.data.list;
                    }else if(identity === 2){
                        // console.log("==============模特用户信息");
                        // console.log(res);
                        this.modelRecommend = res.data.data.list;
                    }
                }).catch(err => {
                    console.log(err)
                });
            },


            getAllWorks(pageNum=1, pageSize=3) {
                request({
                    url: WORKS_GET_ALL_USER_PAGINATION + `?pageNum=${pageNum}&pageSize=${pageSize}`,
                    method:'get',
                    data:{},
                    headers:{}
                }).then(res => {
                    console.log(res);
                    this.works = res.data.data;
                }).catch(err => {
                    console.log(err)
                })
            }

        }

    }
</script>

<style scoped>

</style>
