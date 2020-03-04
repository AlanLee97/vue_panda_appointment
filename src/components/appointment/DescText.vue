<template>
    <div>
        <div class="al-p-left-20px " >

            <h2>{{plainText.title}}</h2>

            <span  class="
                    al-text-color-light-black
                    al-p-right-10px
                ">
                    描述
                </span>
            <span>{{plainText.ask}}</span><br>

            <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">费用</span>
            <span>{{plainText.fee}}</span><br>

            <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">开始时间</span>
            <span>{{plainText.startDatetime}}</span><br>

            <span class="
                    al-text-color-light-black
                    al-p-right-10px
                ">发布时间</span>
            <span>{{plainText.date}}</span><br>
        </div>


    </div>
</template>

<script>
    export default {
        name: "DescText",
        props:{
            plainText: Array | Object,
        },

        mounted(){

        }
    }
</script>

<style scoped>

</style>
