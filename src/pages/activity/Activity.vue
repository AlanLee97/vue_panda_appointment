<template>
    <div>
        <HeaderTop :enable-shadow="true" />

        活动页面

        <vue-markdown>

        </vue-markdown>
    </div>
</template>

<script>
    import HeaderTop from "@/components/public/HeaderTop";
    import VueMarkdown from "vue-markdown";


    export default {
        name: "Activity",
        components: {HeaderTop, VueMarkdown},
        data(){
            return {
                msg : ''
            }
        }
    }
</script>

<style scoped>

</style>
