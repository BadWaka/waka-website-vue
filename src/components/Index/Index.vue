<template>
  <div class="index">
    <!-- 头部 -->
    <m-header></m-header>
    <!-- 轮播图 -->
    <el-carousel class="carousel" type="card">
      <el-carousel-item v-for="(carousel,index) in carousels" :key="index">
        <div class="carouselItem" :style="{backgroundImage:'url('+carousel.imgUrl+')'}"></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 文章列表 -->
    <!-- <article-list></article-list> -->
  </div>
</template>

<script>
import MHeader from '../MHeader/MHeader';  // 头部
import {
  Carousel, // 轮播图
  CarouselItem
} from 'element-ui';
import ArticleList from '../ArticleList/ArticleList';  // 文章列表
export default {
  name: 'index',
  data() {
    return {
      title: '主页',
      carousels: [{
        imgUrl: 'http://img.hb.aicdn.com/a1027848e343fa6b9028d4f21d94ad104a3d31978c7cf-hEDM2n_fw658',
      }, {
        imgUrl: 'http://img.hb.aicdn.com/0807a0f7f9e654207dd5890c32cf45740b05462d16f5d-f64rIU_fw658',
      }, {
        imgUrl: 'http://img.hb.aicdn.com/3dfc9cbc0968537879ee32c5d1fcfaeae317301d19e9a-Y6HDN6_fw658',
      }],
    }
  },
  // 组件
  components: {
    MHeader,
    Carousel,
    CarouselItem,
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

  .carousel {
    margin-top: 20px;
    width: $containerWidth;

    .carouselItem {
      height: 300px;
      background: no-repeat center;
      background-size: cover;
    }
  }
}
</style>
