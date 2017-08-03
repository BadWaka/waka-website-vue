<template>
    <header class="header">
        <span class="title">{{title}}</span>
    </header>
</template>

<script>
export default {
    name: 'mheader',
    data() {
        return {
            title: 'waka'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../common/base.scss';
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    height: $headerHeight;
    color: #fff;
    background: #000;

    .title {
        margin-left: 24px;
        font-size: 24px;
    }
}
</style>
