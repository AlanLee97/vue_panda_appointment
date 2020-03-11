<template>
    <div>
        <HeaderTop :enable-shadow="true" />

        <div class="al-box-pretty container">
            <div class="al-m-10px">
                <el-radio-group v-model="radio" size="medium">
                    <el-radio-button label="北京" ></el-radio-button>
                    <el-radio-button label="上海"></el-radio-button>
                    <el-radio-button label="广州"></el-radio-button>
                    <el-radio-button label="深圳"></el-radio-button>
                </el-radio-group>
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
        </div>

    </div>
</template>

<script>
    import HeaderTop from "@/components/public/HeaderTop";
    import {request} from "@/util/network/request";
    import ALImage from "@/components/public/ALImage";



    export default {

        name: "Spot",
        components: {ALImage, HeaderTop},

        data(){
            return {
                spot: {},
                radio: '广州',
            }
        },

        mounted(){
            this.getSpot();
            console.log(this.spot)
        },

        methods: {
            getSpot() {
                let _this = this;

                request({
                    url: 'http://localhost:8081/data/mafengwo.json'
                }).then(res => {
                    // console.log(res);
                    console.log(this);
                    _this.spot = res.data.data;
                }).catch(err => {
                    console.log(err)
                });
            },
        },
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        box-sizing: border-box;
    }

    .container2 {
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        box-sizing: border-box;
    }
</style>
