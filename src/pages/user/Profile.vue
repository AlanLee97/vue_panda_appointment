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
                <el-tabs stretch v-model="activeName" @tab-click="handleClick">

                    <el-tab-pane label="我的约拍" name="first" >
                        <div class="lists">
                            <div class="item al-box-shadow-radius" v-for="item in result">
                                <div class="item_info">
                                    <div class="item_info_top">
                                        <div class="item_info_user">
                                            <div class="item_info_user_type">
                                                <!--{{item.aptTypeId}} | -->
                                                费用:{{item.fee}}</div>
                                        </div>
                                        <div class="item_info_city">
                                            <p>约拍地点:</p>
                                            <img :src="cityLogin">
                                            <a>{{item.address}}</a>
                                        </div>
                                    </div>
                                    <div class="item_info_title" target="_blank" href="#">
                                        <div class="item_info_title1">要求:{{item.ask}}</div>
                                        <div class="item_info_title1">时间:{{item.startDatetime}}</div>
                                    </div>
                                    <p class="item_info_content" target="_blank" href="#">
                                        {{item.title}}
                                    </p>
                                    <a class="item_info_imgs" target="_blank" href="#">
                                        <img :src="item.image" class="img">
                                    </a>
                                    <div class="item_info_bottom">
                                        <div class="item_info_time"><p>{{item.date | getTimeFormat}}</p></div>
                                        <!--<div class="item_view_count">阅读 10086</div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="相册" name="second">
                        <div class="images">
                            <el-row>
                                <el-col :span="8" v-for="image in result">
                                    <el-card :body-style="{ padding: '0px' }">
                                        <img :src="image.image" class="image">
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="作品" name="third">
                        <div>
                            <div class="lists">
                                <div class="item al-box-shadow-radius" v-for="item in work">
                                    <div class="item_info">
                                        <div class="item_info_top">
                                            <p class="item_info_content" target="_blank" href="#">
                                                {{item.introduction}}
                                            </p>
                                            <div class="item_info_imgs" target="_blank" href="#">
                                                <img :src="item.images" class="img">
                                            </div>
                                            <div class="item_info_bottom">
                                                <div class="item_info_time"><p>{{item.datetime | getTimeFormat}}</p>
                                                    <a>删除</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

    import {request} from "../../util/network/request";

    export default {
        data() {
            return {
                isDisabled:true,
                drawer: false,
                direction: 'rtl',
                activeName: 'second',
                fit:'cover',
                cityLogin: 'https://www.mdyuepai.com/public/static/index/img/common/city.png',
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
                userinfo: [],
              result: [],
              work: [],
            };
        },
      created() {
        this.getWork()
      },
      methods:{
            goPage:function(path){
                this.gotoPage(path);
            },
            getUserInfo:function(){
                 //this.userinfo = var_userinfo;
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
            },
          //根据当前用户id请求发布的约拍
          getData() {
            request({
              method: 'get',
              url: '/appointment/get/uid?uid=' + this.userinfo.id,
            }).then(res => {
              this.result = res;
              console.log(res);
              this.result = res.data.data;
              console.log(this.result)
            }).catch(err => {
              console.log(err);
            })
          },
          getWork() {
            request({
              method: 'get',
              url: '/works/get/uid?uid=' + this.userinfo.id,
            }).then(res => {
              this.work = res;
              console.log(res);
              this.work = res.data.data;
              console.log(this.work)
            }).catch(err => {
              console.log(err);
            })
          },
        },
        mounted:function () {
            this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
            this.user_face = this.userinfo.headPortraitImg;
            console.log(this.userinfo);
            this.getData();
          this.getWork();
        },
      filters: {
        //时间戳显示格式为几天前、几分钟前、几秒前
        getTimeFormat (valueTime) {
          if (valueTime) {
            // let newData = Date.parse(new Date() + '')
            // let diffTime = Math.abs(newData - valueTime)
            let diffTime = Math.abs(new Date().getTime() - new Date(valueTime).getTime())
            if (diffTime > 7 * 24 * 3600 * 1000) {
              let date = new Date(valueTime)
              // let y = date.getFullYear()
              let m = date.getMonth() + 1
              m = m < 10 ? ('0' + m) : m
              let d = date.getDate()
              d = d < 10 ? ('0' + d) : d
              let h = date.getHours()
              h = h < 10 ? ('0' + h) : h
              let minute = date.getMinutes()
              let second = date.getSeconds()
              console.log(second)
              minute = minute < 10 ? ('1' + minute) : minute
              second = second < 10 ? ('0' + second) : second
              return m + '-' + d + ' ' + h + ':' + minute
            } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
              // //注释("一周之内");
              // var time = newData - diffTime;
              let dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
              return dayNum + '天前'
            } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
              // //注释("一天之内");
              // var time = newData - diffTime;
              let dayNum = Math.floor(diffTime / (60 * 60 * 1000))
              return dayNum + '小时前'
            } else if (diffTime < 3600 * 1000 && diffTime > 0) {
              // //注释("一小时之内");
              // var time = newData - diffTime;
              let dayNum = Math.floor(diffTime / (60 * 1000))
              return dayNum + '分钟前'
            }
          }
        }
      },
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
        height: 90%;
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
    .item{
        width: 850px;
        margin-top: 10px;
        background-color: #ffffff;
        padding: 20px 20px 20px 20px;
        box-shadow: 0px 1px 3px 0px;
        cursor: pointer;
    }
    .item_info{
        width: 796px;
        height: 100%;
        display: inline-block;
        padding-left: 10px;
    }
    .item_info_top{
        text-align: left;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
    }
    .item_info_user{
        text-align: left;
        width: 450px;
        display: inline-block;
    }
    .item_info_user_type{
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        color: #928082;
        margin-top: 5px;
    }
    .item_info_city{
        min-width: 150px;
        height: 50px;
        display: inline-block;
        float: right;
        text-align: right;
        padding-right: 18px;
    }
    .item_info_title{
        text-align: left;
        display: block;
        font-size: 14px;
        color: #928082;
        height: 50px;
        line-height: 25px;
        margin-top: 16px;
    }
    .item_info_title1{
        margin-top: 0px;
    }
    .item_info_content{
        text-align: left;
        font-size: 16px;
        line-height: 22px;
        color: #000000;
        margin-top: 6px;
        display: block;
    }
    .item_info_imgs{
        width: 746px;
        height: 154px;
        display: block;
        background-color: #ffffff;
        text-align: left;
    }
    item_info_img{
        width: 174px;
        height: 120px;
        background-color: #ffffff;
        display: inline-block;
        margin-top: 18px;
        margin-right: 12px;
        margin-bottom: 16px;
    }
    .item_info_bottom{
        text-align: left;
        height: 30px;
        line-height: 30px;
    }
    .item_info_time{
        text-align: left;
        display: inline-block;
        margin-right: 20px;
        font-size: 12px;
        color: #928082;
    }
</style>