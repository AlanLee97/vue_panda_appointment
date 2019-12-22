<template>
  <div>
    <!--顶部 Header 开始-->
    <!--<el-row class="header">
      &lt;!&ndash; 顶部_左边留空&ndash;&gt;
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
      &lt;!&ndash; 顶部内容_左=&ndash;&gt;
      <el-col :span="4">
        <div class="grid-contentv">
          <h3>熊猫约拍</h3>
        </div>
      </el-col>
      &lt;!&ndash; 顶部内容_中&ndash;&gt;
      <el-col :span="10">
        <div class="grid-content">
          <a href="">  主页  </a>
          <a href="">  关于我  </a>
          <a href="">  互联网  </a>
          <a href="">  生活娱乐  </a>
          <a href="">  联系我们  </a>
        </div>
      </el-col>
      &lt;!&ndash; 顶部内容_右&ndash;&gt;
      <el-col :span="4">
        <div class="grid-content">
          <input type="text"/><button>提交</button>
        </div>
      </el-col>
      &lt;!&ndash; 顶部_右边留空&ndash;&gt;
      <el-col :span="3">
        <div class="grid-content"></div>
      </el-col>
    </el-row>-->
    <!--顶部 Header 结束-->

    <!--内容（上） content_top 开始-->
    <el-row class="content_top" >
      <el-col :span="24">
        <div class="grid-content">
          <!------------------ 顶部轮播图 开始------------------>
          <el-carousel :interval="4000" height="400px">
            <el-carousel-item v-for="item in carousel_image" :key="item">
              <h3 class="medium">
                <el-image :fit="fit" :src="item">

                </el-image>
              </h3>
            </el-carousel-item>
          </el-carousel>
          <!--================ 顶部轮播图 结束==================-->
        </div>
      </el-col>
    </el-row>
    <!--内容（上） content_top 结束-->

    <!--内容（上） content_top1 开始-->
    <el-row class="content_top1" >
      <el-col :span="24">
        <div class="grid-content">
          <h2 align="center">推荐文章</h2>
        </div>
        <div class="grid-content">
          <p style="color: #999999">熊猫约拍，用艺术记录生活的点点滴滴 ！</p>
        </div>
      </el-col>
    </el-row>
    <!--内容（上） content_top1 结束-->

    <!--内容（中上） content_center_top 开始-->
    <el-row class="content_center_top">
      <el-col :span="2" class=""><div class="grid-content"></div></el-col>
      <el-col :span="20" class="content_center_top1">
          <el-row>
            <el-col :span="6" class="">
              <div class="grid-content" style="padding-right: 10px">
                <table>
                  <tr>
                    <td>
                      <img class="img1" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1952912020,3409873688&fm=26&gp=0.jpg">
                    </td>
                  </tr>
                  <tr>
                    <td><font color="black">@欧阳娜娜</font> </td>
                  </tr>
                  <tr>
                    <td><font size="1px" color="#a9a9a9">{{currentDate}}</font></td>
                  </tr>
                  <tr>
                    <td>
                      <font size="2px">
                        给自己的一份特殊的成人礼,是一本勇气与野心之书.每个人在生活的每一个阶段都要做出各种各样的选择,哪个选择是对的,什么决定又是错的,当下都无从判断 ！
                      </font>
                    </td>
                  </tr>
                </table>
              </div>
            </el-col>
            <el-col :span="6" class="">
              <div class="grid-content" style="padding-right: 10px">
                <table>
                  <tr>
                    <td>
                      <img class="img1" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=136618023,3186690137&fm=26&gp=0.jpg">
                    </td>
                  </tr>
                  <tr>
                    <td><font color="black">@欧阳娜娜</font> </td>
                  </tr>
                  <tr>
                    <td><font size="1px" color="#a9a9a9">{{currentDate}}</font></td>
                  </tr>
                  <tr>
                    <td>
                      <font size="2px">
                        给自己的一份特殊的成人礼,是一本勇气与野心之书.每个人在生活的每一个阶段都要做出各种各样的选择,哪个选择是对的,什么决定又是错的,当下都无从判断 ！
                      </font>
                    </td>
                  </tr>
                </table>
              </div>
            </el-col>
            <el-col :span="6" class="">
              <div class="grid-content" style="padding-right: 10px">
                <table>
                  <tr>
                    <td>
                      <img class="img1" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3633122639,797398275&fm=26&gp=0.jpg">
                    </td>
                  </tr>
                  <tr>
                    <td><font color="black">@欧阳娜娜</font> </td>
                  </tr>
                  <tr>
                    <td><font size="1px" color="#a9a9a9">{{currentDate}}</font></td>
                  </tr>
                  <tr>
                    <td>
                      <font size="2px">
                        给自己的一份特殊的成人礼,是一本勇气与野心之书.每个人在生活的每一个阶段都要做出各种各样的选择,哪个选择是对的,什么决定又是错的,当下都无从判断 ！
                      </font>
                    </td>
                  </tr>
                </table>
              </div>
            </el-col>
            <el-col :span="6" class="">
              <div class="grid-content" style="padding-right: 10px">
                <table>
                  <tr>
                    <td>
                      <img class="img1" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3732978684,4182633409&fm=26&gp=0.jpg">
                    </td>
                  </tr>
                  <tr>
                    <td><font color="black">@欧阳娜娜</font> </td>
                  </tr>
                  <tr>
                    <td><font size="1px" color="#a9a9a9">{{currentDate}}</font></td>
                  </tr>
                  <tr>
                    <td>
                      <font size="2px">
                        给自己的一份特殊的成人礼,是一本勇气与野心之书.每个人在生活的每一个阶段都要做出各种各样的选择,哪个选择是对的,什么决定又是错的,当下都无从判断 ！
                      </font>
                    </td>
                  </tr>
                </table>
              </div>
            </el-col>
          </el-row>
      </el-col>
      <el-col :span="2" class=""><div class="grid-content"></div></el-col>
    </el-row>
    <!--内容（中上） content_center_top 结束-->

    <!--内容（中间） content_center_center 开始-->
    <el-row class="content_center_center">
      <!-- 留白 -->
      <el-col :span="2"><div class="grid-content"></div></el-col>
      <!-- 内容1 -->
      <el-col :span="15" class="content_center_center1" style="padding-right: 20px">
        <div class="grid-content div_auto">
          <el-row>
            <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 1">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1552461314,2954021860&fm=26&gp=0.jpg" class="image" >
                <div style="padding: 0px;">
                  <span>陈冠希</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="grid-content div_auto">
          <el-row>
            <el-col :span="11" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 1 : 1">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3127480362,694358568&fm=26&gp=0.jpg" class="image">
                <div style="padding: 0px;">
                  <span>林允儿</span>
                  <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- 内容2 -->
      <el-col :span="5" class="content_center_center2">
        <div class="grid-content content_center_center23">
          <table cellspacing="10px">
            <th>
              <center><font size="4px" color="black">最新精品</font></center>
            </th>
            <tr>
            <table cellspacing="10px">
              <tr>
                <td rowspan="2">
                  <img class="img2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3565992163,971880450&fm=26&gp=0.jpg">
                </td>
                <td><strong>寻找广州拍摄旅游景点</strong></td>
              </tr>
              <tr>
                <td>
                  <font>发布日期:</font> <br>
                  <font size="1px">{{currentDate}}</font>
                </td>
              </tr>
            </table>
            </tr>
            <tr>
              <table cellspacing="10px">
                <tr>
                  <td rowspan="2">
                    <img class="img2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3565992163,971880450&fm=26&gp=0.jpg">
                  </td>
                  <td><strong>寻找广州拍摄旅游景点</strong></td>
                </tr>
                <tr>
                  <td>
                    <font>发布日期:</font> <br>
                    <font size="1px">{{currentDate}}</font>
                  </td>
                </tr>
              </table>
            </tr>
            <tr>
              <table cellspacing="10px">
                <tr>
                  <td rowspan="2">
                    <img class="img2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3565992163,971880450&fm=26&gp=0.jpg">
                  </td>
                  <td><strong>寻找广州拍摄旅游景点</strong></td>
                </tr>
                <tr>
                  <td>
                    <font>发布日期:</font> <br>
                    <font size="1px">{{currentDate}}</font>
                  </td>
                </tr>
              </table>
            </tr>
            <tr>
              <table cellspacing="10px">
                <tr>
                  <td rowspan="2">
                    <img class="img2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3565992163,971880450&fm=26&gp=0.jpg">
                  </td>
                  <td><strong>寻找广州拍摄旅游景点</strong></td>
                </tr>
                <tr>
                  <td>
                    <font>发布日期:</font> <br>
                    <font size="1px">{{currentDate}}</font>
                  </td>
                </tr>
              </table>
            </tr>
          </table>
        </div>
      </el-col>
      <!-- 留白 -->
      <el-col :span="2"><div class="grid-content"></div></el-col>
    </el-row>
    <!--内容（中间） content_center_center 结束-->

    <!--内容（下） content_bottom 开始-->
    <el-row class="content_bottom">
      <el-col :span="24">
        <div class="grid-content" align="center">
          <table cellspacing="10px">
            <th colspan="4"><font size="+2px"><strong>好物推荐</strong></font></th>
            <tr>
              <td colspan="4">
                <center>
                  <font>北京，大家最熟悉的城市，但在北京有一个地方或许你没有去过，在夏天炎热的市区</font>
                </center>
              </td>
            </tr>
            <tr>
              <td><img class="img3" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1155193433,3049855369&fm=26&gp=0.jpg"></td>
              <td><img class="img3" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=451533810,3958822344&fm=26&gp=0.jpg"></td>
              <td><img class="img3" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3779108703,1419278741&fm=26&gp=0.jpg"></td>
              <td><img class="img3" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3735372639,1097676816&fm=26&gp=0.jpg"></td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
    <!--内容（下） content_bottom 结束-->

    <!-- foot 开始-->
    <el-row class="foot">
      <el-col :span="24">
        <div class="grid-content" align="center">
          <hr>
          <table cellspacing="20px">
            <th><font color="black">@版权所有 盗版必究 ! </font></th>
          </table>
        </div>
      </el-col>
    </el-row>
    <!--foot 结束-->
  </div>
</template>

<script>
  export default {
    data(){
      return {
        carousel_image:[
          'https://cdn-isux.qq.com/upload/detail/f57Y2wEryDwjWmTr2BypYaCA6CgSKjknAJtGRIR4FcR.jpeg',
          'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/UlS5cEY2AksTMvw9EWUDEx5p6yqFrhnj6oYrkpBcglk.jpg',
          'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/2LtQ2KZEDOUFAcWfLEzL49EKXsDPVjeOv2NtsWFLbZP.jpg',
          'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/DTb3l563tdj4oLwmdj6soz0oUN0WiIi6HTayN4oa8B3.jpg',
          'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/IJMyc5AM3BV3KopTfIHaHF6nG56XGMJpcoZD9M5p2Gv.jpg',
          'https://isuxdesign-1251263993.file.myqcloud.com/upload/detail/pDjZbClLEijaJBOw4VOrLajhjHGsXjq5QRKoOfe2ALA.jpg'
        ],
        fit:'cover',
        currentDate: new Date(),
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .header {
    height: 80px;
    background-color: #e4e4e4;
  }
  .content_top{
    height: 420px;
    background-color: #fcfcfc;
  }
  .content_top1{
    height: 50px;
  }
  .content_center_top{
    height: 300px;
  }
  .content_center_top1{
    height: 300px;
    background-color: #f9fafc;
  }
  .content_center_top11{
    height: 200px;
    background-color: #99a9bf;
  }
  .content_center_top12{
    height: 200px;
    background-color: #8c939d;
  }

  .content_center_center{
    height: 600px;
    background-color: #fcfcfc;
  }
  .content_center_center1{

    height: 600px;
  }
  .content_center_center2{
    height: 600px;
  }
  .content_center_center23{
    height: 400px;
  }
  .content_bottom{
    height: 300px;
  }
  .foot{
    height: 100px;
  }
  .img1{
    width: 100%;
    height:150px;
  }
  .img2{
    width: 100px;
    height: 100px;
  }
  .img3{
    width: 300px;
    height: 250px;
  }
  .image {
    width: 100%;
    height: 220px;
    display: block;
  }
  .div_auto{
    min-height:250px;
    overflow-y:auto;
    max-height:600px;
  }





</style>
