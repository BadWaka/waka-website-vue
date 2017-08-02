<template>
    <section class="articleItem">
        <h2 class="title">标题</h2>
        <p class="desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        <div class="imgWrapper" style="background-image:url(http://img.hb.aicdn.com/f3bbb6785e0c2b4d14a7d8c9b78be705cc3e1e6419aad-b48HEq_fw658)"></div>
    </section>
</template>

<script>
export default {
    name: 'articleItem',
    data() {
        return {
            title: '文章项'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.articleItem {
    position: relative;
    margin-top: 20px;
    width: 800px;
    background: #fff;

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .desc {
        margin-top: 10px;
        font-size: 14px;
        line-height: 20px;
    }

    .imgWrapper {
        width: 125px;
        height: 100px;
        background: no-repeat center;
        background-size: cover;
    }
}
</style>
