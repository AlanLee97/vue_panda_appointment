<template>
    <div>
        <center>
            <h1>测试页面</h1>
            <br>
            <br>
        </center>
            <el-button type="primary" @click="sendGet('/works/get/all')">发送get请求</el-button>

            <div class="">
                <el-row>
                    <el-col :span="8"><div class="grid-content bg-purple">-</div></el-col>
                    <el-col :span="8">
                        <div class="box-shadow box-bg-white box-radius m-20px p-20px">
                            <h3>返回数据</h3>

                            <div class="box-bg-fcfcfc m-20px p-20px box-radius">
                                {{result}}
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">-</div></el-col>
                </el-row>

            </div>







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