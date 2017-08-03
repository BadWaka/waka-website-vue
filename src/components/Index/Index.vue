<template>
  <div class="index">
    <!-- 文章列表 -->
    <article-list></article-list>
  </div>
</template>

<script>
import MHeader from '../MHeader/MHeader';  // 头部
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
    ArticleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.index {
  height: 100%;
}
</style>
