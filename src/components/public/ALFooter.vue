<template>
    <div>
        <div class="footer ">

            <div class="al-flex-container-center-vh">
                <div class="al-flex-container-center-v al-flex-direction-col">
                    <div>
                        <img src="../../assets/pandalogo.png" alt="熊猫约拍">
                    </div>

                    <div class="al-title-h1 al-text-color-light-white">熊猫约拍</div>
                </div>

                <div class=" ">
                    <el-menu
                            class="al-bgcolor-transparent"
                            mode="horizontal"
                            active-text-color="#000000">
                        <el-menu-item
                                index="1"
                                @click="goPage('/index')">
                            <span class="al-title-h2">
                                主页
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="2"
                                @click="goPage('/appointment/all')">
                            <span class="al-title-h2">
                                约拍
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="3"
                                @click="goPage('/works/all')">
                            <span class="al-title-h2">
                                动态
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="4"
                                @click="goPage('/spot/all')">
                            <span class="al-title-h2">
                                打卡点
                            </span>
                        </el-menu-item>
                        <el-menu-item
                                index="5"
                                @click="goPage('/activity/all')">
                            <span class="al-title-h2">
                                活动
                            </span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </div>

            
            <el-divider></el-divider>

            <div class="al-flex-container-center-h al-text-color-light-white">
                Copyright©2019-2020 版权所有 NullPointerException Team 网站备案号 : 粤ICP备 000000000号
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ALFooter",

        methods: {
            goPage(path){
                this.gotoPage(path);
            }
        }
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 200px;
        margin-top: 20px;
        background-color: #222222;
    }

</style>
