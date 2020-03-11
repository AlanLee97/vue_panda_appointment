<template>
    <div>

        <div  class="al-flex-wrap " >
            <div v-for="item in dataSource" class="" >
                <div v-if="dataSource.length <= 1" class="al-overflow-hide">
                    <ALImage :fit="displayMode"
                              :src="item"
                              :preview-src-list="dataSource"
                              class="al-hover-img" ></ALImage>
                </div>
                <div v-else>
                    <ALImage :fit="displayMode"
                              :src="item"
                              :preview-src-list="dataSource"
                              class="al-hover-img al-box-size-200px al-m-5px" ></ALImage>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import ALImage from "@/components/public/ALImage";
    export default {
        name: "DisplayGridImage",
        components: {ALImage},
        props:{
            dataSource: Array | Object
        },

        data(){
            return {
                displayMode: "cover"
            }
        },

        mounted(){
            // console.log("DisplayGridImage===========");
            // console.log(this.dataSource);
        }
    }
</script>

<style scoped>


</style>
