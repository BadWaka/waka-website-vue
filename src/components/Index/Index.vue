<template>
  <div class="index">
    <!-- 轮播图 -->
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="carouselItem">{{item}}</div>
      </el-carousel-item>
    </el-carousel>
    <!-- 文章列表 -->
    <article-list></article-list>
  </div>
</template>

<script>
import MHeader from '../MHeader/MHeader';  // 头部
import {
  Carousel, // 轮播图
} from 'element-ui';
import ArticleList from '../ArticleList/ArticleList';  // 文章列表
export default {
  name: 'index',
  data() {
    return {
      title: '主页'
    }
  },
  // 组件
  components: {
    MHeader,
    Carousel,
    ArticleList,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.index {
  height: 100%;

  .carouselItem {
    background: red;
  }
}
</style>
