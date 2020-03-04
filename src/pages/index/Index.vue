<template>
    <div>
        <HeaderTop :enable-shadow="true" />

        <!--内容（上） content_top 开始-->
        <el-row class="content_top">
            <el-col :span="24">
                <div class="grid-content">
                    <!------------------ 顶部轮播图 开始------------------>
                    <el-carousel :interval="4000" height="600px">
                        <el-carousel-item v-for="item in carouselImage" :key="item">
                            <h3 class="medium">
                                <el-image :fit="fit" :src="item.imgUrl" style="width:100%; height: 600px">

                                </el-image>
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
                                <el-col v-for="(item, index) in newestAppointment" :key="item" :span="8" class="al-m-top-10px">
                                    <div class="al-d-blk" @click="goPage('/appointment/detail/' + item.id)">
                                        <el-card :body-style="{ padding: '0px' }">
                                            <el-image :src="item.image" style="height: 200px" fit="cover" />
                                            <div style="padding: 14px;">
                                                <span>{{item.title}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>


                    <!--打卡点推荐-->
                    <div class="">
                        <TitleNode title-text="打卡点推荐"/>

                        <el-row type="flex" justify="space-around" class="al-flex-wrap">
                            <el-col v-for="(item, index) in spot" :key="item" :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class=" ">
                                        <img :src="item.img_src" class="image">
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
                            <el-col v-for="(item, index) in modelRecommend" :key="item" :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class=" ">
                                        <el-image :src="item.headPortraitImg" style="width: 300px" />
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
                            <el-col v-for="(item, index) in photographerRecommend" :key="item" :span="5.5" class="al-m-top-10px">
                                <div class="al-d-blk">
                                    <el-card :body-style="{ padding: '0px' }" class=" ">
                                        <el-image :src="item.headPortraitImg" style="width: 300px" />
                                        <div style="padding: 14px;">
                                            <span>{{item.nickname}}</span>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
                    </div>


                    <!-- 文章推荐 -->
                    <div>
                        <TitleNode title-text="文章推荐" />
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
    import {USER_GET_ALL_MODEL} from "@/util/network/APIPATH";

    export default {
        components: {
            TitleNode,
            HeaderTop
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
        },

        methods: {
            goPage:function (path) {
                this.gotoPage(path);
            },
            getCarousel: function () {
                request({
                    url: '/carousel/get/all'
                }).then(res => {
                    console.log(res);
                    this.carouselImage = res.data.data;
                }).catch(err => {
                    console.log(err);
                });
            },

            getNewestAppointment(){
                request({
                    url: 'appointment/get/newest'
                }).then(res => {
                    console.log(res);
                    this.newestAppointment = res.data.data;
                }).catch(err => {
                    console.log(err)
                });
            },

            getSpot() {
                request({
                    url: 'http://localhost:8081/data/mafengwo.json'
                }).then(res => {
                    console.log(res);
                    this.spot = res.data.data;
                }).catch(err => {
                    console.log(err)
                });
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
                    url: USER_GET_ALL_MODEL,
                    method: 'post',
                    data: this.qsParam(data),
                    headers
                }).then(res => {
                    if (identity === 1){
                        this.photographerRecommend = res.data.data;
                    }else if(identity === 2){
                        this.modelRecommend = res.data.data;
                    }
                }).catch(err => {
                    console.log(err)
                });
            }



        }

    }
</script>

<style >
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .header {
        height: 80px;
        background-color: #e4e4e4;
    }

    .content_top {
        height: 420px;
        background-color: #fcfcfc;
    }

    .content_top1 {
        height: 50px;
    }

    .content_center_top {
        height: 300px;
    }

    .content_center_top1 {
        height: 300px;
        background-color: #f9fafc;
    }

    .content_center_top11 {
        height: 200px;
        background-color: #99a9bf;
    }

    .content_center_top12 {
        height: 200px;
        background-color: #8c939d;
    }

    .content_center_center {
        height: 600px;
        background-color: #fcfcfc;
    }

    .content_center_center1 {

        height: 600px;
    }

    .content_center_center2 {
        height: 600px;
    }

    .content_center_center23 {
        height: 400px;
    }

    .content_bottom {
        height: 300px;
    }

    .foot {
        height: 100px;
    }

    .img1 {
        width: 100%;
        height: 150px;
    }

    .img2 {
        width: 100px;
        height: 100px;
    }

    .img3 {
        width: 300px;
        height: 250px;
    }

    .image {
        width: 100%;
        height: 220px;
        display: block;
    }

    .div_auto {
        min-height: 250px;
        overflow-y: auto;
        max-height: 600px;
    }


</style>
