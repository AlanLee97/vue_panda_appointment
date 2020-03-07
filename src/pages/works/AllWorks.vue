<template>
    <div>
        <HeaderTop :enable-shadow="true"/>
        <el-row class="al-m-top-20px">
            <el-col :span="2">
                <pre> </pre>
            </el-col>
            <el-col :span="14" class="">
                <!--发布作品-->
                <div>
                    <AddWorks></AddWorks>
                </div>

                <!--分割线-->
                <br>
                <el-divider content-position="center">
                    <span class="al-title-h3">看看其他用户的作品~</span>
                </el-divider>

                <!--显示作品-->
                <div class="">
                    <div class="al-box-shadow-radius al-m-top-20px al-p-10px"
                         v-for="item in allWorks.list">
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

                <!--分页-->
                <div>
                    <el-row class="al-m-top-20px">
                        <el-col :span="4"><pre> </pre></el-col>
                        <el-col :span="16">
                            <el-pagination
                                    background
                                    :page-size="allWorks.pageSize"
                                    @next-click="getAllWorks(allWorks.nextPage)"
                                    @prev-click="getAllWorks(allWorks.prePage)"
                                    layout="prev, pager, next"
                                    :total="allWorks.total">
                            </el-pagination>
                        </el-col>
                        <el-col :span="4"><pre> </pre></el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="6" class="al-m-left-20px">
                <!--标题节点-->
                <TitleNode title-text="摄影师 | 模特 推荐" />
                <br>

                <!--侧边栏-->
                <SideBar :data-source1="photographerRecommend"
                :data-source2="modelRecommend"
                />
            </el-col>
            <el-col :span="2">
                <pre> </pre>
            </el-col>
        </el-row>



    </div>
</template>

<script>
    import {request} from "../../util/network/request";
    import HeaderTop from "@/components/public/HeaderTop";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import SideBar from "@/pages/works/component/SideBar";
    import {USER_GET_ALL_COMMON} from "@/util/network/api/user/api-user";
    import {WORKS_GET_ALL_USER_PAGINATION} from "@/util/network/api/works/api-works";
    import DisplayGridImage from "@/components/public/DisplayGridImage";
    import AddWorks from "@/pages/works/AddWorks";
    import TitleNode from "@/components/public/TitleNode";

    export default {
        data() {
            return {

                allWorks: {},
                currentDate: new Date(),
                photographerRecommend: {},
                modelRecommend: {}
            }
        },
        mounted() {
            this.getAllWorks();

            //摄影师推荐
            this.getUserRecommend(1);
            //模特推荐
            this.getUserRecommend(2);
        },

        components: {
            TitleNode,
            AddWorks,
            DisplayGridImage,
            SideBar,
            AvatarNickname,
            HeaderTop
        },
        methods: {
            goPage(path) {
                this.gotoPage(path);
            },

            //获取所有用户动态
            getAllWorks(pageNum=1, pageSize=3) {
                request({
                    method: 'get',
                    url: WORKS_GET_ALL_USER_PAGINATION + `?pageNum=${pageNum}&pageSize=${pageSize}`,
                }).then(res => {
                    // console.log("================所有约拍数据");
                    this.allWorks = res.data.data;
                    // console.log(this.allWorks);
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
                        // console.log("==============摄影师用户信息");
                        // console.log(res);
                        this.photographerRecommend = res.data.data;
                    }else if(identity === 2){
                        // console.log("==============模特用户信息");
                        // console.log(res);
                        this.modelRecommend = res.data.data;
                    }
                }).catch(err => {
                    console.log(err)
                });
            }


        },

    }
</script>

<style>

</style>
