<template>
    <section class="articleList">
        <article-item></article-item>
        <article-item></article-item>
    </section>
</template>

<script>
import ArticleItem from './ArticleItem/ArticleItem';
export default {
    name: 'articleList',
    data() {
        return {
            title: '文章列表'
        }
    },
    // 组件
    components: {
        ArticleItem
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.articleList {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
</style>
