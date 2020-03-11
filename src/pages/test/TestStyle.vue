<template>
    <div>
        <div class="al-position-rela container al-show-border-blue">
            <ALImage
                    class="al-position-abs "
                    style="height: 500px"
                    :src="image_url"
                    alt="图片"
                    fit="contain" />

            <!-- 遮罩 -->
            <div class="al-position-abs al-mask-black-10 al-show-border-blue" style="height: 500px; width: 100%"></div>

            <div class="al-position-abs al-flex-container-center-vh" style="height: 500px; width: 100%"><div>hh</div></div>
<!--            <div class="al-box-size-200px al-bg-color-light-green al-z-index-9999">hh</div>-->
<!--            <div class="al-box-size-200px al-bg-color-light-yellow al-z-index-9999">hh</div>-->
        </div>


    </div>
</template>

<script>
    import vueWaterfallEasy from "vue-waterfall-easy";
    import ImageWaterfall from "@/components/public/ImageWaterfall";
    import ALImage from "@/components/public/ALImage";

    export default {
        name: "TestStyle",
        components: {
            ALImage,
            ImageWaterfall,
            vueWaterfallEasy
        },

        data(){
            return {
                image_url: 'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
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
                ]
            }
        }
    }
</script>

<style scoped>
    #content{
        position: absolute;    /*必须*/
        top:32px;              /*top必须，大小可控制*/
        bottom:0;              /*bottom必须，一直延申到当前块底部*/
        width:100%;
    }

    .container {
        display: flex;  /*定义弹性布局*/
        flex-direction: column; /*排列方向*/
        align-items: center; /*item在垂直方向的排列效果*/
        justify-content: space-between; /*item在水平方向上的排列方式*/
        padding: 10px 0;
        box-sizing: border-box;
    }
</style>
