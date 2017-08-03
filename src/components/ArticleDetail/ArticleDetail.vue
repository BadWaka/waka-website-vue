<template>
    <!-- 文章详情 -->
    <section class="articleDetail">
    </section>
</template>

<script>
export default {
    name: 'articleDetail',
    data() {
        return {
            title: '文章详情'
        }
    },
    // 组件
    components: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../common/base.scss';
.articleDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
</style>
