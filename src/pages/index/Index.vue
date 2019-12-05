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
        <el-low>
          <el-col :span="3">
            <pre> </pre>
          </el-col>
          <el-col :span="35">
            <el-tabs stretch="true" v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="熊猫约拍" name="first" >
                <div>
                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 2">
                      <el-card :body-style="{ padding: '0px' }">
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633122639,797398275&fm=26&gp=0.jpg">
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>

              <el-tab-pane label="约拍作品" name="second">
              <div class="demo-image__lazy">
                <table border="0">
                  <tr>
                    <td>
                      <el-image
                              v-for="url in article_image"
                              :key="url"
                              :src="url"
                              :preview-src-list="article_image"
                              lazy>
                      </el-image>
                    </td>
                  </tr>
                </table>
              </div>
            </el-tab-pane>

              <el-tab-pane label="约拍景点" name="third">
                <div class="demo-image__placeholder">
                  <div class="block">
                    <el-image
                            v-for="item in scenic_image"
                            :key="item"
                            :src="item" ></el-image>
                  </div>
                </div>
              </el-tab-pane>

              <el-tab-pane label="摄影文章" name="fourth">
                <div>
                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 2">
                      <el-card :body-style="{ padding: '0px' }">
                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3591964128,3111085818&fm=26&gp=0.jpg">
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>


              <el-tab-pane label="熊猫商城" name="fifth">
                <div>
                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 2">
                      <el-card :body-style="{ padding: '0px' }">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3732978684,4182633409&fm=26&gp=0.jpg">
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>

              <el-tab-pane label="熊猫客服" name="sixth">
                <div>
                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 2">
                      <el-card :body-style="{ padding: '0px' }">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1635589346,1937641&fm=26&gp=0.jpg" class="article-image">
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>

              <el-tab-pane label="关于我们" name="seventh">
                <div>
                  <el-row>
                    <el-col :span="8" v-for="(o, index) in 20" :key="o" :offset="index > 0 ? 2 : 2">
                      <el-card>
                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1952912020,3409873688&fm=26&gp=0.jpg">
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>

            </el-tabs>
          </el-col>
          <el-col :span="3">
            <pre> </pre>
          </el-col>
        </el-low>


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