<template>
  <div id="home">
    <!-- 轮播图部分 -->
    <mt-swipe class="slideshow" :auto="4000">
      <mt-swipe-item v-for="item in slideshows" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- <span>随便的内容</span> -->

    <!-- 九宫格内容 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 ninegezi">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
  </ul>



  </div>
</template>
<script>
// 导入mint-ui中的Toast
import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      slideshows:[]
    }
  },
  created(){
    this.getslideshow();
  },
  methods:{
    getslideshow(){
      this.$http.get('api/getlunbo').then(res=>{
        // console.log(res.body);
        if(res.body.status == 0){
          // 成功
          this.slideshows = res.body.message;
          // Toast("请求轮播图图片成功！");
        }else{
          // 失败
          Toast("请求轮播图图片失败！");
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#home{
  .slideshow{
    height: 30vh;
    img{
      width: 100%;
      height: 30vh;
    }
  }
  .ninegezi{
    background-color: #fff;
    li{
      width: 33.33333%;
      img{
        width: 50%;
      }
    }
  }
}
</style>

