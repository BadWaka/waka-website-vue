<template>
    <section class="articleList">
        <!-- 文章项 -->
        <article-item v-for="item in 4" :key="item"></article-item>
        <section class="loadmore">加载更多</section>
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
@import '../../common/base.scss';
.articleList {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .loadmore {
        transition: 0.3s;
        margin-top: 20px;
        padding: 15px;
        text-align: center;
        font-size: 16px;
        width: $articleItemWidth/3*2;
        background: $color3;
        color: #fff;
        border-radius: 100px;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;

        &:hover {
            background: $color2;
        }
    }
}
</style>
