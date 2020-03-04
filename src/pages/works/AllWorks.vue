<template>
    <div>
        <HeaderTop :enable-shadow="true"/>
        <el-row class="top">
            <el-col :span="3"><pre> </pre></el-col>
            <el-col :span="14">
                <div class="lists">
                    <div class="item al-box-shadow-radius" v-for="item in allWorks" >
                        <AvatarNickname
                                :avatar="item.tuser.headPortraitImg"
                                :nickname="item.tuser.nickname"
                                :desc="item.datetime"
                        />
                        <div class="item_info">
                            <div>
                                {{item.introduction}}
                            </div>

                            <div class="al-p-20px al-m-20px al-width-50">
                                <el-image v-for="(img, index_img) in item.images" :src="img" :key="index_img" />
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
  import HeaderTop from "@/components/public/HeaderTop";
  import AvatarNickname from "@/components/public/AvatarNickname";

  export default {
    data() {
      return{
        photograph1: 'http://img.mdyuepai.com/luvAHANfDkbHF1JWkMt3FHbUOj9h-psmallimg',
        photograph2: 'http://img.mdyuepai.com/lq7DhsGgbQQxG3aj_pUrzBuivg_g-psmallimg',
        photograph3: 'http://img.mdyuepai.com/lhNa9ceiUR78oBC9q4oCGjj1dxyE-psmallimg',
        photograph4: 'http://img.mdyuepai.com/liMENRwp6u_dUvArS1vJaFI5VFMx-psmallimg',
        user_face:'https://hbimg.huabanimg.com/666a1a1f72c5eae973ca0f0977adca58b89a119f236a1-3vh1WC_fw658',
        cityLogin: 'https://www.mdyuepai.com/public/static/index/img/common/city.png',
        allWorks: null,
        currentDate: new Date(),
      }
    },
    mounted:function() {

    },
    created() {
        this.getAllWorks();
    },
      components:{
          AvatarNickname,
        HeaderTop
      },
    methods:{
      //获取所有用户动态
      getAllWorks() {
        request({
          method: 'get',
          url: '/works/get/all-user',
        }).then(res => {
          this.allWorks = res.data.data;
          console.log(this.allWorks)
        }).catch(err => {
          console.log(err);
        })
      },

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
