<template>
    <div>


        <el-drawer
                title="个人信息"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">


            <el-row>
                <el-col :span="2">
                    <pre> </pre>
                </el-col>

                <el-col :span="20">
                    <div class="">
                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>头像</span>
                            <el-avatar :src="userinfo.headPortraitImg"></el-avatar>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>用户名</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.username"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>昵称</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>性别</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.gender"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>年龄</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.age"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>手机号</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.nickname"></el-input>

                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>身份</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.identity"></el-input>
                        </div>

                        <div class="box-shadow-radius-bgwhite-p20-m20">
                            <span>认证</span>
                            <el-input class="width-50" :disabled="isDisabled" :value="userinfo.isAuthenticated"></el-input>

                        </div>
                    </div>
                </el-col>

                <el-col :span="2">
                    <pre> </pre>
                </el-col>
            </el-row>


        </el-drawer>


        <!--上半部分-->
        <el-row>
            <el-col :span="24" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image
                            class="image"
                            :src="image_url"
                            :fit="fit">

                    </el-image>
                    <div style="padding: 14px;">
                        <div @click="drawer = true" class="block"><el-avatar :size="50" :src="user_face" ></el-avatar></div>
                        <span>{{userinfo.nickname}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>



        <!-- 下半部分-->

        <el-row>
            <el-col :span="4">
                <pre> </pre>
            </el-col>
            <el-col :span="16">
                <el-tabs stretch="true" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="动态" name="first" >


                        <div>
                            <el-row>
                                <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                        <div style="padding: 14px;">
                                            <span>好吃的汉堡</span>
                                            <div class="bottom clearfix">
                                                <time class="time">{{ currentDate }}</time>
                                                <el-button type="text" class="button">操作按钮</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>

                        </div>

                    </el-tab-pane>


                    <el-tab-pane label="相册" name="second">
                        <div class="demo-image__lazy">
                            <el-image
                                    v-for="url in album"
                                    :key="url"
                                    :src="url"
                                    :preview-src-list="album"
                                    lazy>

                            </el-image>
                        </div>

                    </el-tab-pane>
                    <el-tab-pane label="作品" name="third">
                        <div>
                            <el-row>
                                <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                                        <div style="padding: 14px;">
                                            <span>好吃的汉堡</span>
                                            <div class="bottom clearfix">
                                                <time class="time">{{ currentDate }}</time>
                                                <el-button type="text" class="button">操作按钮</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>

                        </div>


                    </el-tab-pane>
                    <el-tab-pane label="文章" name="fourth">

                        <div>
                            <el-row>
                                <el-col :span="24" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 0">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="article-image">
                                        <div style="padding: 14px;">
                                            <span>好吃的汉堡</span>
                                            <div class="bottom clearfix">
                                                <time class="time">{{ currentDate }}</time>
                                                <el-button type="text" class="button">操作按钮</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </el-col>
                            </el-row>

                        </div>


                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="4">
                <pre> </pre>
            </el-col>
        </el-row>


    </div>
</template>



<script>
    // let var_userinfo = sessionStorage.getItem("userinfo");

    export default {
        data() {
            return {
                isDisabled:true,
                drawer: false,
                direction: 'rtl',
                activeName: 'second',
                fit:'cover',
                user_face:'https://hbimg.huabanimg.com/666a1a1f72c5eae973ca0f0977adca58b89a119f236a1-3vh1WC_fw658',
                image_url:'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
                currentDate: new Date(),
                album: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
                userinfo:{}
            };
        },
        methods:{
            goPage:function(path){
                this.gotoPage(path);
            },
            getUserInfo:function(){
                // this.userinfo = var_userinfo;
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },

            handleClose(done) {
                this.$confirm('确认关闭？')
                        .then(_ => {
                            done();
                        })
                        .catch(_ => {});
            }
        },
        mounted:function () {
            this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
            this.user_face = this.userinfo.headPortraitImg;
            console.log(this.userinfo);
        }
    }
</script>


<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        /*height: 500px;*/
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .width-100{
        width: 100%;
    }

    .article-image{
        height: 400px;
    }
</style>