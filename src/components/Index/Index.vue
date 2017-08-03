<template>
  <div class="index">
    <!-- 头部 -->
    <m-header></m-header>
    <!-- 轮播图 -->
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(carousel,index) in carousels" :key="index" class="swiperItem" :style="{backgroundImage:'url('+carousel.imgUrl+')'}"></swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 控制按钮 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- 下方 -->
    <section class="bottom">
      <!-- 文章列表 -->
      <article-list></article-list>
      <section class="right">
  
      </section>
    </section>
  </div>
</template>

<script>
import MHeader from '../MHeader/MHeader';  // 头部
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'  // 轮播图
import ArticleList from '../ArticleList/ArticleList';  // 文章列表
export default {
  name: 'index',
  data() {
    return {
      title: '主页',
      // 轮播图配置
      swiperOption: {
        pagination: '.swiper-pagination', // 分页器
        paginationClickable: true,  // 分页器点击
        loop: true, // 无限循环
        effect: 'fade', // 渐变
        autoplay: 2500, // 自动播放
        autoplayDisableOnInteraction: false,  // 用户操作之后不会停止 autoPlay
        nextButton: '.swiper-button-next',  // 下一个按钮
        prevButton: '.swiper-button-prev',  // 上一个按钮
      },
      carousels: [{
        imgUrl: 'http://img.hb.aicdn.com/b895d7c0a875555aa5ee717982eb3b4ef3e358c83ce3a-DbZSpf_fw658',
      }, {
        imgUrl: 'http://img.hb.aicdn.com/d65a58ef3c783940bbf74049c985527142323f0d2c12e-Gk6mMA_fw658',
      }, {
        imgUrl: 'http://img.hb.aicdn.com/3be040f4bcc088e6ca90de1c02fa3a86f4bc00ad812f8-5gVpRb_fw658',
      }],
    }
  },
  // 组件
  components: {
    MHeader,
    swiper,
    swiperSlide,
    ArticleList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../common/base.scss';
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: $headerHeight;
  box-sizing: border-box;

  .swiper {
    margin-top: 20px;
    width: $containerWidth;
    height: 300px;
    background: yellow;

    .swiperItem {
      width: 100%;
      height: 600px;
      background: no-repeat center;
      background-size: cover;
    }
  }

  .bottom {
    display: flex;

    .right {
      margin: 20px 0 0 20px;
      width: 300px;
      height: 400px;
      background: red;
      background: #fff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
      border-radius: 2px;
    }
  }
}
</style>
