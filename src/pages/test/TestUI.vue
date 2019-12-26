<template>
    <div class="">
        <div>测试UI页面</div>

        <div class="p-20px">

            <!-- 第一行 -->
            <el-row >
                <!-- 分割线 -->
                <el-col :span="1">
                    <pre> </pre>
                </el-col>
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">分割线</h4>

                    <div class="al-p-20px">
                        <div class="">黑色</div>
                        <div class="al-divide-line-black"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>淡黑色</div>
                        <div class="al-divide-line-light-black"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>蓝色</div>
                        <div class="al-divide-line-blue"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡蓝色</div>
                        <div class="al-divide-line-light-blue"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>绿色</div>
                        <div class="al-divide-line-green"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡绿色</div>
                        <div class="al-divide-line-light-green"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>红色</div>
                        <div class="al-divide-line-red"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡红色</div>
                        <div class="al-divide-line-light-red"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>黄色</div>
                        <div class="al-divide-line-yellow"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡黄色</div>
                        <div class="al-divide-line-light-yellow"></div>
                    </div>





                </el-col>

                <!-- 盒子大小 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">

                    <h4 class="al-font-weight-200 al-p-20px">盒子大小</h4>

                    <div class="al-m-20px">
                        1px
                        <div class="al-box-size-1px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        5px
                        <div class="al-box-size-5px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        10px
                        <div class="al-box-size-10px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        20px
                        <div class="al-box-size-20px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        30px
                        <div class="al-box-size-30px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        40px
                        <div class="al-box-size-40px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        50px
                        <div class="al-box-size-50px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                </el-col>

                <!-- 背景颜色 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">背景颜色</h4>
                    <div class="al-m-20px">
                        <div class="al-bg-color-white">白色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-white">淡白色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-black">黑色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-black">淡黑色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-blue">蓝色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-blue">淡蓝色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-green">绿色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-green">淡绿色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-red">红色背景</div>
                    </div>
                    <div class="al-m-20px ">
                        <div class="al-bg-color-light-red">淡红色背景</div>
                    </div>

                </el-col>

                <!-- 字体颜色 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">字体颜色</h4>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-white al-text-color-white">白色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-white">淡白色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-black">黑色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-black">淡黑色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-blue">蓝色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-blue">淡蓝色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-green">绿色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-green">淡绿色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-red">红色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-red">淡红色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-yellow">黄色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-yellow">淡黄色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-purple">紫色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-purple">淡紫色字体</div>
                    </div>

                </el-col>

                <el-col :span="1">
                    <pre> </pre>
                </el-col>

            </el-row>


            <!-- 第二行 -->
            <el-row >
                <!-- 分割线 -->
                <el-col :span="1">
                    <pre> </pre>
                </el-col>
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">分割线</h4>

                    <div class="al-p-20px">
                        <div class="">黑色</div>
                        <div class="al-divide-line-black"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>淡黑色</div>
                        <div class="al-divide-line-light-black"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>蓝色</div>
                        <div class="al-divide-line-blue"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡蓝色</div>
                        <div class="al-divide-line-light-blue"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>绿色</div>
                        <div class="al-divide-line-green"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡绿色</div>
                        <div class="al-divide-line-light-green"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>红色</div>
                        <div class="al-divide-line-red"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡红色</div>
                        <div class="al-divide-line-light-red"></div>
                    </div>

                    <div class="al-p-20px">
                        <div>黄色</div>
                        <div class="al-divide-line-yellow"></div>
                    </div>
                    <div class="al-p-20px">
                        <div>淡黄色</div>
                        <div class="al-divide-line-light-yellow"></div>
                    </div>





                </el-col>

                <!-- 盒子大小 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">

                    <h4 class="al-font-weight-200 al-p-20px">盒子大小</h4>

                    <div class="al-m-20px">
                        1px
                        <div class="al-box-size-1px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        5px
                        <div class="al-box-size-5px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        10px
                        <div class="al-box-size-10px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        20px
                        <div class="al-box-size-20px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        30px
                        <div class="al-box-size-30px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        40px
                        <div class="al-box-size-40px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                    <div class="al-m-20px">
                        50px
                        <div class="al-box-size-50px al-bgcolor-grey-f1f1f1"></div>
                    </div>

                </el-col>

                <!-- 背景颜色 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">背景颜色</h4>
                    <div class="al-m-20px">
                        <div class="al-bg-color-white">白色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-white">淡白色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-black">黑色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-black">淡黑色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-blue">蓝色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-blue">淡蓝色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-green">绿色背景</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-green">淡绿色背景</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-bg-color-red">红色背景</div>
                    </div>
                    <div class="al-m-20px ">
                        <div class="al-bg-color-light-red">淡红色背景</div>
                    </div>

                </el-col>

                <!-- 字体颜色 -->
                <el-col :span="5" class="al-box-shadow-radius al-m-10px">
                    <h4 class="al-font-weight-200 al-p-20px">字体颜色</h4>
                    <div class="al-m-20px">
                        <div class="al-bg-color-light-white al-text-color-white">白色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-white">淡白色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-black">黑色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-black">淡黑色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-blue">蓝色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-blue">淡蓝色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-green">绿色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-green">淡绿色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-red">红色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-red">淡红色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-yellow">黄色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-yellow">淡黄色字体</div>
                    </div>

                    <div class="al-m-20px">
                        <div class="al-text-color-purple">紫色字体</div>
                    </div>
                    <div class="al-m-20px">
                        <div class="al-text-color-light-purple">淡紫色字体</div>
                    </div>

                </el-col>

                <el-col :span="1">
                    <pre> </pre>
                </el-col>

            </el-row>

        </div>
    </div>
</template>

<script>
    export default {
        name: "TestUI"
    }
</script>

<style scoped>

</style>
