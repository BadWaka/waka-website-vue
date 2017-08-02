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
.header {
    display: flex;
    align-items: center;
    height: 56px;
    color: #fff;
    background: #000;

    .title {
        margin-left: 24px;
        font-size: 24px;
    }
}
</style>
