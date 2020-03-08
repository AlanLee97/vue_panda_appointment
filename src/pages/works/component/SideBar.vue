<template>
    <div>
        <el-row>
            <div v-for="(item, index) in this.dataSource1"
                 class="al-m-bottom-10px">
                <el-card :body-style="{padding: '0px'}">
                    <div>
                        <ALImage class="al-img-circle al-width-60 al-height-60 al-flex-container-center-h"
                                  :src="item.headPortraitImg"  ></ALImage>
                    </div>
                    <div style="padding: 14px;">
                        <span class="al-flex-container-center-h">{{item.nickname}}</span>
                    </div>
                </el-card>
            </div>
        </el-row>

        <el-row>
            <div v-for="(item, index) in this.dataSource2"
                 class="al-m-bottom-10px">
                <el-card :body-style="{padding: '0px'}">
                    <div class="">
                        <ALImage class="al-img-circle al-width-60 al-height-60"
                                  :src="item.headPortraitImg" ></ALImage>
                    </div>
                    <div style="padding: 14px;">
                        <span class="al-flex-container-center-h">{{item.nickname}}</span>
                    </div>
                </el-card>
            </div>
        </el-row>
    </div>
</template>

<script>

    import ALImage from "@/components/public/ALImage";
    export default {
        name: "SideBar",
        components: {ALImage},
        props:{
            dataSource1: Array | Object,
            dataSource2: Array | Object,
        },

        data(){
            return {

            }
        },



    }
</script>

<style scoped>

</style>
