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
@import '../../common/color.scss';
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    height: $headerHeight;
    color: $color1;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);

    .title {
        margin-left: 24px;
        font-size: 24px;
    }
}
</style>
