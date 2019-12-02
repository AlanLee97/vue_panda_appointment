<template>
    <div>
        <!------------------ 顶部轮播图 开始------------------>
        <el-carousel :interval="4000" type="card" height="25%px">
            <el-carousel-item v-for="item in carousel_image" :key="item">
                <h3 class="medium">
                    <el-image :fit="fit" :src="item">

                    </el-image>
                </h3>
            </el-carousel-item>
        </el-carousel>
        <!--================ 顶部轮播图 结束==================-->



    </div>
</template>

<script>
    export default {
        data() {
            return {
                carousel_image:[
                    'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/UlS5cEY2AksTMvw9EWUDEx5p6yqFrhnj6oYrkpBcglk.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/2LtQ2KZEDOUFAcWfLEzL49EKXsDPVjeOv2NtsWFLbZP.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/DTb3l563tdj4oLwmdj6soz0oUN0WiIi6HTayN4oa8B3.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/IJMyc5AM3BV3KopTfIHaHF6nG56XGMJpcoZD9M5p2Gv.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/pDjZbClLEijaJBOw4VOrLajhjHGsXjq5QRKoOfe2ALA.jpg'
                ],
                activeIndex: '1',
                activeIndex2: '1',
                fit:'cover',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            goPage:function (path) {
                this.gotoPage(path);
            }
        }
    }
</script>

<style>


    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .carousel-image{
        height: 300px;

    }
</style>