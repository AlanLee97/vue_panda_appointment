<template>
    <div>
        <div class="
        al-flex-container-center-v
        al-bg-color-white
        al-flex-container">
            <el-avatar :size="60"
                       :src="avatar"
                       @error="errorHandler">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>

            <div class="al-d-il-blk al-m-left-20px">
                <div class="">{{nickname}}</div>
                <div class="">{{desc}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AvatarNickname",
        props:{
            avatar:String,
            nickname: String,
            desc:String | Number

        },
        data () {
            return {
                // nickname:this.nickname,
                // desc:this.desc
            }
        },

        methods: {
            errorHandler() {
                return true
            }
        },

    }
</script>

<style scoped>

</style>
