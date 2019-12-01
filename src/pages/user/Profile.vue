<template>
    <div>
        <center>
            <h1>
                用户主页
            </h1>

            <h4>{{username}}</h4>
        </center>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
            return {
                username:''
            }
        }
    }
</script>

<style scoped>

</style>