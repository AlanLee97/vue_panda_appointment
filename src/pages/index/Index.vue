<template>
    <div>
        <!------------------ 顶部轮播图 开始------------------>
        <el-carousel :interval="4000" type="card" height="25%px">
            <el-carousel-item v-for="item in carousel_image" :key="item">
                <h3 class="medium">
                    <el-image :fit="fit" :src="item">

                    </el-image>
                </h3>
            </el-carousel-item>
        </el-carousel>
        <!--================ 顶部轮播图 结束==================-->

        <!--================ 网页基本布局 开始 ==================-->
        <el-row>
          <el-col :span="2"><pre> </pre></el-col>
          <el-col :span="20">
            <el-row>
              <el-col :span="10"><pre> </pre></el-col>
              <el-col :span="4">
                <div>标题1</div>
              </el-col>
              <el-col :span="10"><pre> </pre></el-col>
            </el-row>

            <el-row>
              <el-col :span="4"><pre> </pre></el-col>
              <el-col :span="16">
                <div>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</div>
              </el-col>
              <el-col :span="4"><pre> </pre></el-col>
            </el-row>


            <el-row>
              <el-col :span="4"><pre> </pre></el-col>
              <el-col :span="16">
                <div>

                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 4 : 0">
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
              </el-col>
              <el-col :span="4"><pre> </pre></el-col>
            </el-row>


          </el-col>
          <el-col :span="2"><pre> </pre></el-col>
        </el-row>

        <!--================ 网页基本布局 结束 ==================-->

    </div>

</template>

<script>
    export default {
        data() {
            return {
                carousel_image:[
                    'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/UlS5cEY2AksTMvw9EWUDEx5p6yqFrhnj6oYrkpBcglk.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/2LtQ2KZEDOUFAcWfLEzL49EKXsDPVjeOv2NtsWFLbZP.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/DTb3l563tdj4oLwmdj6soz0oUN0WiIi6HTayN4oa8B3.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/IJMyc5AM3BV3KopTfIHaHF6nG56XGMJpcoZD9M5p2Gv.jpg',
                    'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/pDjZbClLEijaJBOw4VOrLajhjHGsXjq5QRKoOfe2ALA.jpg'
                ],
                activeIndex: '1',
                activeIndex2: '1',
                fit:'cover',
                activeName: 'first',
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1209504925,1392159426&fm=26&gp=0.jpg',
                article_image:[
                  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1952912020,3409873688&fm=26&gp=0.jpg',
                  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=136618023,3186690137&fm=26&gp=0.jpg',
                  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633122639,797398275&fm=26&gp=0.jpg',
                  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3591964128,3111085818&fm=26&gp=0.jpg',
                  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3732978684,4182633409&fm=26&gp=0.jpg',
                  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1635589346,1937641&fm=26&gp=0.jpg'
                ],
                scenic_image:[
                  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1209504925,1392159426&fm=26&gp=0.jpg',
                  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3371554214,462390943&fm=15&gp=0.jpg',
                  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3565992163,971880450&fm=26&gp=0.jpg',
                  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2214442674,1717631284&fm=26&gp=0.jpg',
                  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2194186604,3624876159&fm=26&gp=0.jpg',
                  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2419702756,1281354443&fm=26&gp=0.jpg',
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClick(tab, event) {
            console.log(tab, event);
            },
            goPage:function (path) {
                this.gotoPage(path);
            }
        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .carousel-image{
        height: 300px;

    }

</style>
