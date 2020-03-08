<template>
    <div>
        <div id="content">
            <vue-waterfall-easy :imgsArr="dataSource" ></vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
    // import TestStyle from "@/pages/test/TestStyle";
    import vueWaterfallEasy from "vue-waterfall-easy";

    export default {
        name: "ImageWaterfall",
        components: {vueWaterfallEasy},
        props: {
            dataSource: Array
        },

        data(){
            return {
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
        top:10px;              /*top必须，大小可控制*/
        bottom:0;              /*bottom必须，一直延申到当前块底部*/
        width:100%;
    }
</style>
