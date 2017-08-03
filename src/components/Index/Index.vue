<template>
  <div class="index">
    <!-- 头部 -->
    <m-header></m-header>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <!-- 轮播图 -->
      <swiper-slide v-for="(carousel,index) in carousels" :key="index" class="swiperItem" :style="{backgroundImage:'url('+carousel.imgUrl+')'}"></swiper-slide>
    </swiper>
    <!-- 文章列表 -->
    <article-list></article-list>
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
      swiperOption: {
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
  box-sizing: border-box;
  padding-top: $headerHeight;

  .swiper {
    margin-top: 20px;
    width: $containerWidth;
    background: yellow;

    .swiperItem {
      width: 100%;
      height: 300px;
      background: no-repeat center;
      background-size: cover;
    }
  }
}
</style>
