<template>
    <div>
        <el-row class="top">
            <el-col :span="3"><pre> </pre></el-col>
            <el-col :span="14">
                <div class="lists">
                    <div class="item al-box-shadow-radius" v-for="item in result" >
                        <div class="item_avatar">
                            <a class="item_info_user_name" target="_blank" href="#">
                                <img width="40" height="40" :src="item.tuser.headPortraitImg">
                            </a>
                        </div>
                        <div class="item_info">
                            <div class="item_info_top">
                                <div class="item_info_user">
                                        {{item.tuser.nickname}}
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
            </el-col>
            <el-col :span="7"><pre> </pre></el-col>
        </el-row>
    </div>
</template>

<script>
  import {request} from "../../util/network/request";

  export default {
    data() {
      return{
        photograph1: 'http://img.mdyuepai.com/luvAHANfDkbHF1JWkMt3FHbUOj9h-psmallimg',
        photograph2: 'http://img.mdyuepai.com/lq7DhsGgbQQxG3aj_pUrzBuivg_g-psmallimg',
        photograph3: 'http://img.mdyuepai.com/lhNa9ceiUR78oBC9q4oCGjj1dxyE-psmallimg',
        photograph4: 'http://img.mdyuepai.com/liMENRwp6u_dUvArS1vJaFI5VFMx-psmallimg',
        user_face:'https://hbimg.huabanimg.com/666a1a1f72c5eae973ca0f0977adca58b89a119f236a1-3vh1WC_fw658',
        cityLogin: 'https://www.mdyuepai.com/public/static/index/img/common/city.png',
        result: [],
        currentDate: new Date(),
      }
    },
    mounted:function() {
        this.getData()
    },
    created() {
      this.getData()
      this.getType()
    },
    methods:{
      //获取所有用户动态
      getData() {
        request({
          method: 'get',
          url: '/appointment/get/apt-user',
        }).then(res => {
          this.result = res;
          console.log(res);
          this.result = res.data.data;
          console.log(this.result)
        }).catch(err => {
          console.log(err);
        })
      },
      //获取约拍类型
      getType(){
        request({
          method: 'get',
          url: '/apt-type/get-one?id=' + this.result.aptTypeId,
        }).then(res => {
          this.aptType = res;
          console.log(res);
          this.aptType = res.data.data;
          console.log(this.aptType)
        }).catch(err => {
          console.log(err);
        })
      },
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
    .img{
        width: 174px;
        height: 120px;
        background-color: #ffffff;
        display: inline-block;
        margin-top: 18px;
        margin-right: 12px;
        margin-bottom: 16px;
    }
.top{
    padding-top: 20px;
    background-color: #fcfcfc;
    color: black;
}
    .lists{

    }
    .item{
        width: 850px;
        margin-top: 10px;
        background-color: #ffffff;
        padding: 20px 20px 20px 20px;
        box-shadow: 0px 1px 3px 0px;
        cursor: pointer;
    }
    .item_avatar{
        width: 40px;
        height: 100%;
        display: inline-block;
        float: left;
    }
    .item_info_user_name{
        padding-right: 10px;
        font-size: 16px;
        color: black;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        border-radius: 50px;
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
    .item_info_user_name{
        font-size: 16px;
        color: black;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        margin-left: 10px;
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
    .item_view_count{
        display: inline-block;
        margin-right: 20px;
        font-size: 12px;
        color: #928082;
    }
    .item_yuepa_count{
        display: inline-block;
        margin-right: 20px;
        font-size: 12px;
        color: #928082;
    }
</style>
