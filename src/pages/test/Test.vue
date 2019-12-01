<template>
    <div>
        <center>
            <h1>测试页面</h1>

            <button @click="sendGet('/works/get/all')">发送get请求</button>






        </center>


    </div>
</template>

<script>

    import {request} from '../../util/network/request';

    export default {
        name: "Test",
        data:function(){
            return {
                result:''
            }
        },
        methods:{
            sendGet:function (path) {
                // let url = this.createUrl(path);
                // console.log("url:" + url);
                // this.requestGet(path);

                request({
                    url:path
                }).then(res => {
                    this.result = res;
                    console.log(res);
                    this.result = res.data.data;
                    console.log(this.result);

                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>