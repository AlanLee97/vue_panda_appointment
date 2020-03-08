<template>
    <div>
        <HeaderTop :enable-shadow="true" />

        <div>
            <el-row>
                <el-col :span="2"><pre> </pre></el-col>
                <el-col :span="14">
                    <div class="al-box-pretty">
<!--                        {{works}}-->
                        <el-carousel
                            height="800px"
                            direction="vertical"
                            :autoplay="true">
                            <el-carousel-item v-for="item in works.images" :key="item">
                                <ALImage :src="item" fit="cover">

                                </ALImage>
                            </el-carousel-item>
                        </el-carousel>

                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="al-box-pretty">
                        <AvatarNickname :nickname="works.tuser.nickname"
                                        :desc="works.tuser.identity"
                                        :avatar="works.tuser.headPortraitImg"/>

                        <el-divider class="al-m-top--20px"></el-divider>

                        <div>
<!--                            {{userWorks}}-->
                        </div>
                        TA的作品集
                        <div v-for="item in userWorks.list" class="">
                            <ALImage :src="item.images[0]"
                                      fit="cover"
                                      style="width: 100%; height: 200px"></ALImage>
                        </div>

                        <div class="al-flex-container-center-h">
                            <el-button>查看更多</el-button>
                        </div>
                    </div>

                    <div class="al-box-pretty">
                        <AvatarNickname :nickname="works.tuser.nickname"
                                        :desc="works.tuser.identity"
                                        :avatar="works.tuser.headPortraitImg"/>

                        <el-divider class="al-m-top--20px"></el-divider>

                        TA的约拍
                    </div>

                </el-col>
                <el-col :span="2"><pre> </pre></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {request} from "@/util/network/request";
    import {WORKS_GET_BY_ID, WORKS_GET_BY_USER_ID} from "@/util/network/api/works/api-works";
    import HeaderTop from "@/components/public/HeaderTop";
    import AvatarNickname from "@/components/public/AvatarNickname";
    import ALImage from "@/components/public/ALImage";

    export default {
        name: "WorksDetail",
        components: {ALImage, AvatarNickname, HeaderTop},
        props: {
            worksId: String | Number
        },
        data(){
            return {
                works: {},
                userWorks: {},
            }
        },

        mounted() {
            this.getWorks(this.worksId);

        },

        methods:{
            getWorks(worksId){
                request({
                    url: WORKS_GET_BY_ID + worksId,
                }).then(res => {
                    // console.log("作品详情页==============");
                    // console.log(res);
                    this.works = res.data.data;

                    this.getWorksByUserId(res.data.data.tuser.id);

                }).catch(err => {
                    console.log(err)
                })
            },

            getWorksByUserId(uid){
                request({
                    url: WORKS_GET_BY_USER_ID + uid + "?pageNum=1&pageSize=3",
                }).then(res => {
                    // console.log("TA的约拍");
                    // console.log(res);
                    this.userWorks = res.data.data;

                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
